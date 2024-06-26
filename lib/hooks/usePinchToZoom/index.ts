import { useCallback, useRef } from 'react';
import {
  ContainerProps,
  ContainerStyle,
  ContentProps,
  ContentStyle,
  Options,
  Transform,
} from './types';
import { distance, getTouchesCoordinate, newOriginPoint, offset, sum, transformDOMRect } from './point';
// import * as Point from './Point';

enum GUESTURE_TYPE {
  UNSET,
  PAN,
  PINCH,
}

function usePinchToZoom<
  Container extends HTMLElement,
  Content extends HTMLElement,
>({
  minZoomScale = 1.0,
  maxZoomScale = 4.0,
  onTransform,
}: Partial<Options> = {}): [ContainerProps<Container>, ContentProps<Content>] {
  const containerRef = useRef<Container>(null);
  const contentRef = useRef<Content>(null);
  const valuesRef = useRef({
    originContentRect: null as DOMRect | null,
    transform: {
      zoomFactor: 1.0,
      translate: newOriginPoint(),
    },

    currentGesture: GUESTURE_TYPE.UNSET,

    pinchStartZoomFactor: 1.0,
    pinchStartTouchPointDist: 0,

    panStartPoint: newOriginPoint(),
    panStartTranslate: newOriginPoint(),
  });

  const setTransform = useCallback(
    ({
      zoomFactor = valuesRef.current.transform.zoomFactor,
      translate = {
        x: valuesRef.current.transform.translate.x,
        y: valuesRef.current.transform.translate.y,
      },
    }: Partial<Transform> = {}) => {
      const container = containerRef.current;
      const content = contentRef.current;
      const values = valuesRef.current;
      if (!container || !content) {
        return;
      }
      const roundTransalteX = Math.round(translate.x * 10) / 10;
      const roundTransalteY = Math.round(translate.y * 10) / 10;

      if (zoomFactor < minZoomScale * 0.8 || zoomFactor > maxZoomScale * 1.5) {
        return;
      }

      values.transform.zoomFactor = zoomFactor;
      values.transform.translate.x = roundTransalteX;
      values.transform.translate.y = roundTransalteY;

      if (onTransform) {
        onTransform({
          zoomFactor: values.transform.zoomFactor,
          translate: {
            x: values.transform.translate.x,
            y: values.transform.translate.y,
          },
        });
      }

      const styleString = `
        translate(${roundTransalteX}px, ${roundTransalteY}px)
        scale(${zoomFactor})
      `;

      content.style.transform = styleString;
      content.style.webkitTransform = styleString;
    },
    [onTransform, minZoomScale, maxZoomScale],
  );

  const guardZoomAreaScale = useCallback(() => {
    const { zoomFactor } = valuesRef.current.transform;
    if (zoomFactor > maxZoomScale) {
      setTransform({ zoomFactor: maxZoomScale });
    } else if (zoomFactor < minZoomScale) {
      setTransform({ zoomFactor: minZoomScale });
    }
  }, [setTransform, minZoomScale, maxZoomScale]);

  const guardZoomAreaTranslate = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const values = valuesRef.current;
    if (!container || !content || !values.originContentRect) {
      return;
    }
    const { zoomFactor, translate } = values.transform;
    if (zoomFactor < minZoomScale || zoomFactor > maxZoomScale) {
      return;
    }

    const newTranslate = { ...translate };

    const containerRect = container.getBoundingClientRect();
    const contentRect = transformDOMRect(
      values.originContentRect,
      values.transform,
    );

    if (contentRect.height > containerRect.height) {
      if (contentRect.top > containerRect.top) {
        newTranslate.y -= contentRect.top - containerRect.top;
      }
      if (contentRect.bottom < containerRect.bottom) {
        newTranslate.y += containerRect.bottom - contentRect.bottom;
      }
    } else {
      newTranslate.y = 0;
    }

    if (contentRect.width > containerRect.width) {
      if (contentRect.left > containerRect.left) {
        newTranslate.x -= contentRect.left - containerRect.left;
      }
      if (contentRect.right < containerRect.right) {
        newTranslate.x += containerRect.right - contentRect.right;
      }
    } else {
      newTranslate.x = 0;
    }

    if (newTranslate.x !== translate.x || newTranslate.y !== translate.y) {
      setTransform({ translate: newTranslate });
    }
  }, [setTransform, minZoomScale, maxZoomScale]);

  const onPinchStart = useCallback((syntheticEvent: React.SyntheticEvent) => {
    const values = valuesRef.current;
    const [p1, p2] = getTouchesCoordinate(syntheticEvent);

    values.pinchStartTouchPointDist = distance(p1, p2);
    values.pinchStartZoomFactor = values.transform.zoomFactor;
  }, []);

  const onPinchMove = useCallback(
    (syntheticEvent: React.SyntheticEvent) => {
      const values = valuesRef.current;
      const [p1, p2] = getTouchesCoordinate(syntheticEvent);

      const pinchCurrentTouchPointDist = distance(p1, p2);
      const ratioTouchPointDist =
        pinchCurrentTouchPointDist / values.pinchStartTouchPointDist;
      const newZoomFactor = values.pinchStartZoomFactor * ratioTouchPointDist;
      const newTranslate = {
        x:
          (values.transform.translate.x / values.transform.zoomFactor) *
          newZoomFactor,
        y:
          (values.transform.translate.y / values.transform.zoomFactor) *
          newZoomFactor,
      };

      setTransform({ zoomFactor: newZoomFactor, translate: newTranslate });
    },
    [setTransform],
  );

  const onPinchEnd = useCallback(() => {
    guardZoomAreaScale();
    guardZoomAreaTranslate();
  }, [guardZoomAreaScale, guardZoomAreaTranslate]);

  const onPanStart = useCallback((syntheticEvent: React.SyntheticEvent) => {
    const values = valuesRef.current;
    const [p1] = getTouchesCoordinate(syntheticEvent);
    const currentTranslate = { ...values.transform.translate };

    values.panStartPoint = p1;
    values.panStartTranslate = currentTranslate;
  }, []);

  const onPanMove = useCallback(
    (syntheticEvent: React.SyntheticEvent) => {
      const values = valuesRef.current;
      const [dragPoint] = getTouchesCoordinate(syntheticEvent);
      const origin = values.panStartPoint;
      const prevTranslate = values.panStartTranslate;

      const dragOffset = offset(dragPoint, origin);
      const nextTranslate = sum(dragOffset, prevTranslate);
      setTransform({ translate: nextTranslate });
    },
    [setTransform],
  );

  const onPanEnd = useCallback(() => {
    guardZoomAreaTranslate();
  }, [guardZoomAreaTranslate]);

  const onTouchStart = useCallback(
    (syntheticEvent: React.SyntheticEvent) => {
      const container = containerRef.current;
      const content = contentRef.current;
      const values = valuesRef.current;
      if (!container || !content) {
        return;
      }
      if (!values.originContentRect) {
        values.originContentRect = content.getBoundingClientRect();
      }
      const { nativeEvent } = syntheticEvent;
      if (!(nativeEvent instanceof TouchEvent)) {
        return;
      }
      content.style.transitionDuration = '0.0s';
      switch (nativeEvent.touches.length) {
        case 2:
          values.currentGesture = GUESTURE_TYPE.PINCH;
          onPinchStart(syntheticEvent);
          break;
        default: {
          values.currentGesture = GUESTURE_TYPE.PAN;
          onPanStart(syntheticEvent);
        }
      }
    },
    [onPinchStart, onPanStart],
  );

  const onTouchMove = useCallback(
    (syntheticEvent: React.SyntheticEvent) => {
      const values = valuesRef.current;
      const { nativeEvent } = syntheticEvent;
      if (!(nativeEvent instanceof TouchEvent)) {
        return;
      }
      switch (nativeEvent.touches.length) {
        case 2:
          if (values.currentGesture === GUESTURE_TYPE.PINCH) {
            onPinchMove(syntheticEvent);
          }
          break;
        default:
          if (values.currentGesture === GUESTURE_TYPE.PAN) {
            onPanMove(syntheticEvent);
          }
      }
    },
    [onPinchMove, onPanMove],
  );

  const onTouchEnd = useCallback(
    (syntheticEvent: React.SyntheticEvent) => {
      const container = containerRef.current;
      const content = contentRef.current;
      const values = valuesRef.current;
      if (!container || !content) {
        return;
      }
      content.style.transitionDuration = '0.3s';
      if (values.currentGesture === GUESTURE_TYPE.PINCH) {
        onPinchEnd();
      }
      if (values.currentGesture === GUESTURE_TYPE.PAN) {
        onPanEnd();
      }
      values.currentGesture = GUESTURE_TYPE.UNSET;
    },
    [onPinchEnd, onPanEnd],
  );

  const containerStyle: ContainerStyle = {
    overflow: 'hidden',
    touchAction: 'none',
  };

  const contentStyle: ContentStyle = {
    willChange: 'transform',
    transition: 'transform',
    transitionTimingFunction: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
    transitionDuration: '0.0s',
  };

  const containerProps = {
    style: containerStyle,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    ref: containerRef,
  };

  const contentProps = {
    style: contentStyle,
    ref: contentRef,
  };

  return [containerProps, contentProps];
}

export default usePinchToZoom;

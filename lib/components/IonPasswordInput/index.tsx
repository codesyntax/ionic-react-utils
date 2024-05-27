import { IonButton, IonIcon, IonInput } from '@ionic/react';
import { eyeOffOutline, eyeOutline, lockClosedOutline } from 'ionicons/icons';
import { useState } from 'react';

interface IonPasswordInputProps {
  showLock?: boolean;
  eyeColor?: string;
  eyeAriaLabel?: string;
  [x: string]: any;
}
const IonPasswordInput: React.FC<IonPasswordInputProps> = ({
  showLock = true,
  eyeAriaLabel = 'Show/hide',
  eyeColor,
  ...props
}) => {
  const [hide, setHide] = useState<boolean>(true);

  const toggleHide = (ev: any) => {
    ev.stopPropagation();
    setHide((prev) => !prev);
  };
  return (
    <IonInput type={hide ? 'password' : 'text'} {...props}>
      {showLock && (
        <IonIcon
          slot="start"
          icon={lockClosedOutline}
          aria-hidden="true"
        ></IonIcon>
      )}
      <IonButton
        fill="clear"
        slot="end"
        aria-label={eyeAriaLabel}
        onClick={toggleHide}
        {...(eyeColor && { color: eyeColor })}
        style={{ zIndex: 9999 }}
        className="passwordIcon"
      >
        <IonIcon
          slot="icon-only"
          icon={hide ? eyeOffOutline : eyeOutline}
          aria-hidden="true"
        ></IonIcon>
      </IonButton>
    </IonInput>
  );
};

export { IonPasswordInput };

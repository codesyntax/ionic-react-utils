import React from 'react';
import './CodeCopyBtn.css';
import { IonButton, IonIcon, useIonToast } from '@ionic/react';
import { copyOutline } from 'ionicons/icons';
// import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
// import { Tooltip } from '@mui/material';

const CodeCopyBtn = ({ children }: any) => {
  //   const [copyOk, setCopyOk] = React.useState(false);

  //   const iconColor = copyOk ? '#4caf50' : '#1B2430';
  const [presetToast] = useIonToast();
  const handleClick = () => {
    navigator.clipboard.writeText(children.props.children);
    presetToast({
      message: 'Copied!',
      duration: 3000,
    });
    // setCopyOk(true);
    // setTimeout(() => {
    //   setCopyOk(false);
    // }, 500);
  };

  return (
    <div className="code-copy-btn">
      <IonButton onClick={handleClick} size='small'>
        <IonIcon icon={copyOutline}></IonIcon>
      </IonButton>
      {/* <Tooltip title={copyOk ? 'Copied!' : 'Copy to clipboard'}>
        <ContentCopyOutlinedIcon
          onClick={handleClick}
          style={{ color: iconColor }}
        />
      </Tooltip> */}
    </div>
  );
};

export default CodeCopyBtn;

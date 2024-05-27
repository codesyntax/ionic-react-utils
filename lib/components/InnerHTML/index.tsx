import { useEffect, useState } from 'react';
import './test.css';

export interface InnerHTMLProps {
  children?: string;
  url?: string;
}

const InnerHTML: React.FC<InnerHTMLProps> = ({ children = '', url }) => {
  const [html, setHtml] = useState(children);

  useEffect(() => {
    setHtml(children);
  }, [children]);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then((response) => response.text())
        .then((text) => setHtml(text))
        // eslint-disable-next-line no-console
        .catch((error) => console.error(error));
    }
  }, [url]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export {InnerHTML};

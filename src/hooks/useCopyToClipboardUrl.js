import { useEffect, useState } from 'react';

const useCopyToClipboardUrl = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const getter = () => url;
  const setter = () => navigator.clipboard.writeText(url);

  return { getter, setter };
};

export default useCopyToClipboardUrl;

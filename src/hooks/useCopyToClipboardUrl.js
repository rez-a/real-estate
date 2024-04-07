const useCopyToClipboardUrl = () => {
  const url = window.location.href;

  const getter = () => url;
  const setter = () => navigator.clipboard.writeText(url);

  return { getter, setter };
};

export default useCopyToClipboardUrl;

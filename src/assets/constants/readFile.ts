export const readFile = (
  refObj: React.MutableRefObject<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<string | ArrayBuffer>>
) => {
  const fReader = new FileReader();
  if (refObj.current && refObj.current.files)
    try {
      fReader.readAsDataURL(refObj.current.files[0]);
    } catch {
      return;
    }
  fReader.onloadend = (event: ProgressEvent<FileReader>) => {
    if (event && event.target && event.target.result)
      setState(event.target.result);
  };
};

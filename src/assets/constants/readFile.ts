import { SetterOrUpdater } from "recoil";
import { patchMyPage } from "../../apis/patchMyPage";
import { UserType } from "../types/userType";

export const readFile = (
  refObj: React.MutableRefObject<HTMLInputElement>,
  userState: UserType,
  setState: SetterOrUpdater<UserType>
) => {
  const fReader = new FileReader();
  if (refObj.current && refObj.current.files)
    try {
      fReader.readAsDataURL(refObj.current.files[0]);
    } catch {
      return;
    }
  fReader.onloadend = (event: ProgressEvent<FileReader>) => {
    if (event && event.target && event.target.result) {
      let temp: UserType = Object.assign({}, userState);
      temp.imageUrl = event.target.result;
      setState(temp);
      patchMyPage({ imageUrl: event.target.result, name: userState.name });
    }
  };
};

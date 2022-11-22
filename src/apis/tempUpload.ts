import { instance } from "../utils/instance";

export const TempUpload = (
  categoryName: string,
  design: string,
  title: string,
  preview: string
) => {
  console.log(1111123123)
  instance
    .post("/template", {
      categoryName,
      design,
      title,
      preview,
    })
    .then(function () {
      alert("성공");
    })
    .catch(function (error) {
      console.log(error);
      alert("오류");
    });
};

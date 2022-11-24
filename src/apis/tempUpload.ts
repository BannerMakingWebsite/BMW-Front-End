import { instance } from "../utils/instance";

export const TempUpload = (
  categoryName: string,
  design: string,
  preview: string,
  title: string
) => {
  instance
    .post("/template", {
      categoryName,
      design,
      preview,
      title,
    })
    .then(function () {
      alert("성공");
    })
    .catch(function (error) {
      alert("오류");
    });
};

import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { ModalIcons } from "../../../assets/images";
import { CaptureRefState } from "../../../atoms/elementState";
import { modalStateAtom } from "../../../atoms/modalState";
import Button from "../button";
import { jsPDF } from "jspdf";

function ModalContentsTemplateExportMethod() {
  const [, setModalState] = useRecoilState(modalStateAtom);
  const [ref] = useRecoilState(CaptureRefState);
  const [preview, setPerview] = useState<string>("");
  useEffect(() => {
    html2canvas(ref.current).then((canvas) => {
      const imgData: any = canvas.toDataURL("image/png");
      setPerview(imgData);
    });
  }, []);

  const handleDownloadImage = async (
    printRef: React.MutableRefObject<any>,
    fileType: string
  ) => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL(`image/${fileType}`);
    console.log(data);
    const link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = data;
      link.download = `image.${fileType}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const handleCopy = () => {
    html2canvas(ref.current).then((canvas) =>
      canvas.toBlob((blob) => {
        navigator.clipboard.write([
          new ClipboardItem({
            "image/png": blob,
          }),
        ]);
      })
    );
    alert("복사되었습니다.");
  };

  const handleDownloadPdf = async () => {
    const element = ref.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  return (
    <Background>
      <BannerImage alt="banner-image" src={preview} />
      <div>
        <Wrapper>
          <Card onClick={() => handleDownloadImage(ref, "jpg")}>
            <img alt="JPG-method" src={ModalIcons.JPG} />
            <h1>.jpg 형식</h1>
          </Card>
          <Card onClick={() => handleDownloadImage(ref, "png")}>
            <img alt="PNG-method" src={ModalIcons.PNG} />
            <h1>.png 형식</h1>
          </Card>
          <Card onClick={() => handleDownloadPdf()}>
            <img alt="PDF-method" src={ModalIcons.PDF} />
            <h1>.pdf 형식</h1>
          </Card>
          <Card onClick={() => handleCopy()}>
            <img alt="Clipboard-method" src={ModalIcons.Clipboard} />
            <h1>클립보드 복사</h1>
          </Card>
        </Wrapper>
        <div>
          <Button
            type="small"
            label="취소"
            onClick={() =>
              setModalState({
                title: "",
                modalContents: null,
              })
            }
          />
          <Button type="small" label="저장" buttonColor="white" />
        </div>
      </div>
    </Background>
  );
}

export default ModalContentsTemplateExportMethod;

const Background = styled.div`
  display: flex;

  > div {
    margin-left: ${pxToRem(25)}rem;

    width: ${pxToRem(424)}rem;

    > div:last-of-type {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const BannerImage = styled.img`
  width: ${pxToRem(640)}rem;
  height: ${pxToRem(640)}rem;

  border-radius: 1.5rem;
  object-fit: cover;
`;

const Wrapper = styled.div`
  height: ${pxToRem(560)}rem;

  display: inline-flex;
  flex-flow: column wrap;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.bg3f};

  :nth-of-type(2n - 1) {
    margin-right: ${pxToRem(25)}rem;
  }
  margin-bottom: ${pxToRem(25)}rem;

  width: ${pxToRem(200)}rem;
  height: ${pxToRem(200)}rem;

  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 1.5rem;

  transition: filter 0.25s ease;

  ${({ theme }) => theme.common.hoverEffect}

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  }
`;

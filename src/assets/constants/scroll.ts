export const scrollNext = (refObj: React.MutableRefObject<HTMLDivElement>) => {
  const sum: number =
    refObj.current.scrollLeft -
    (refObj.current.scrollWidth - refObj.current.clientWidth);
  if (sum < 5 && sum > -5)
    refObj.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  else if (
    refObj.current.scrollLeft +
      (refObj.current.scrollWidth - refObj.current.clientWidth) / 4 >
    refObj.current.scrollWidth - refObj.current.clientWidth
  )
    refObj.current.scrollTo({
      top: 0,
      left: refObj.current.scrollWidth - refObj.current.clientWidth,
      behavior: "smooth",
    });
  else
    refObj.current.scrollTo({
      top: 0,
      left:
        refObj.current.scrollLeft +
        (refObj.current.scrollWidth - refObj.current.clientWidth) / 4,
      behavior: "smooth",
    });
};

export const scrollPrev = (refObj: React.MutableRefObject<HTMLDivElement>) => {
  if (refObj.current.scrollLeft === 0)
    refObj.current.scrollTo({
      top: 0,
      left: refObj.current.scrollWidth - refObj.current.clientWidth,
      behavior: "smooth",
    });
  else if (
    refObj.current.scrollLeft +
      (refObj.current.scrollWidth - refObj.current.clientWidth) / 4 <
    0
  )
    refObj.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  else
    refObj.current.scrollTo({
      top: 0,
      left:
        refObj.current.scrollLeft -
        (refObj.current.scrollWidth - refObj.current.clientWidth) / 4,
      behavior: "smooth",
    });
};

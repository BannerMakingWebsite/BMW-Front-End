const fontSizes = {
  title: "2rem",
  subTitle: "1.5rem",
  text: "1.25rem",
  subText: "1rem",
  description: "0.8rem",
};

const colors = {
  bg1f: "#333",
  bg2f: "#444",
  bg3f: "#555",
  bg4f: "#666",
  bg5f: "#777",
  black: "#000",
  white: "#fefefe",
  grey: "#aaa",
  error: "#ff0000",
};

const common = {
  ellipsis: "text-overflow: ellipsis; white-space: nowrap; overflow: hidden;",
  hoverEffect:
    "cursor: pointer; :hover { filter: brightness(125%) drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.5)); }",
};

const theme = {
  fontSizes,
  colors,
  common,
};

export default theme;

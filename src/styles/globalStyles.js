import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--bg);
  color: var(--textNormal);
  &.dark {
    --bg: #131217;
    --textNormal: #fff;
    --textInverse: #000;
    --textTitle: #dbdbdc;
    --textTitleInverse: #000;
    --link: #542c85;
  }
  &.light {
    --bg: #fff;
    --textNormal: rgba(0, 0, 0, 0.7);
    --textInverse: #fff;
    --textTitle: #303030;
    --textTitleInverse: #dbdbdc;
    --link: #542c85;
  }
  h1,
  h2,
  h3,
  h4 {
    color: var(--textTitle);
  }
  input,
  textarea,
  button,
  select,
  a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  a {
  color: var(--link);

  }
  img {
    padding: 0;
    margin: 0;
    user-select: none;
  }
}`

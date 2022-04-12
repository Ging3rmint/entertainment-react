import * as React from "react";
import * as ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./constants/styles";

import App from "./App";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root") as HTMLElement
);

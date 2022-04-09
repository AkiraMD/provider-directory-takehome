import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const colors = {
  primary: {
    600: "#371E47",
    500: "#4B286D",
    400: "#C9BFD3",
    300: "#DBD4E2",
    200: "#EDEAF0",
    100: "#F6F4F7",
  },
  secondary: {
    500: "#6277F0",
    400: "#D0D6FB",
    300: "#E0E4FC",
    200: "#EFF1FE",
    100: "#F7F8FE",
  },
  neutral: {
    900: "#1C1E24",
    800: "#3F4145",
    700: "#6E7178",
    600: "#A9AEB7",
    500: "#C6C9CF",
    400: "#DFE1E6",
    300: "#EEEEEE",
    200: "#F6F7F7",
    100: "#FAFAFA",
    0: "#FFFFFF",
  },
  state: {
    blue: "#1970E6",
    red: "#D83E31",
    yellow: "#F7AE3B",
    green: "#28B058",
  },
};

export const theme = extendTheme({ colors });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

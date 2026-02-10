import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import store from "./config/store";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./config/theme";
import { selectThemeMode } from "./features/themeSlice";
import { GlobalStyle } from "./core/GlobalStyle";
import App from "./core/App";
import reportWebVitals from "./reportWebVitals";

const ThemeWrapper = ({ children }) => {
  const mode = useSelector(selectThemeMode);
  const activeTheme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

import ReactDOM from "react-dom/client";
import "./css/global.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
);

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CounterProvider from "./Context/counterContext.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CounterProvider>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppContext from "./components/AppContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContext />
  </StrictMode>
);

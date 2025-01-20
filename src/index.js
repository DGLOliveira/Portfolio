import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import ContextProvider from "./Context/Context.js";
import App from "./App.js";
import Background from "./Background/Background.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ContextProvider>
    <Suspense fallback={null}>
      <Background />
    </Suspense>
    <App />
  </ContextProvider>
);

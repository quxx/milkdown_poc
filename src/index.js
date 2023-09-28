import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { register } from "@public-ui/core";
import { defineCustomElements } from "@public-ui/components/dist/loader";
import { DEFAULT } from "@public-ui/themes";

import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

register(DEFAULT, defineCustomElements)
  .then(() => {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  })
  .catch(console.warn);

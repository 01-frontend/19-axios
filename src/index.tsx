import React from "react";

import * as ReactDOMClient from "react-dom/client";

import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOMClient.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export type AppDispatch = typeof store.dispatch;

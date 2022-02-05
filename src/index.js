import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

import { VisionUIControllerProvider } from "context";
import { Web3Provider } from "providers";

ReactDOM.render(
  <Web3Provider>
    <BrowserRouter>
      <VisionUIControllerProvider>
        <App />
      </VisionUIControllerProvider>
    </BrowserRouter>
  </Web3Provider>,
  document.getElementById("root")
);

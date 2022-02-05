import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Client } from "@heroiclabs/nakama-js";

var useSSL = false; // Enable if server is run with an SSL certificate.
var client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);

async function test(params) {
  var email = "super@heroes.com";
  var password = "batsignal";
  const session = await client.authenticateEmail(email, password);
  console.info(session);
}

test();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

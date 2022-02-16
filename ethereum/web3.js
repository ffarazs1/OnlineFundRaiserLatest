import Web3 from "web3";

let web3;

// first one is for next as next runs in server and cant find window
// second is for browser and metamask
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/e86e98a8613749838a1cc160ec5cbb72"
  );
  web3 = new Web3(provider);
}

export default web3;

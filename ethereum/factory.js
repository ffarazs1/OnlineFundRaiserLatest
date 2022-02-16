import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//ABI and address of deployed contract
//factory is added just to directly use deployed contracts check page 14  of docs
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x8A498AE8A70EB4206d4cce38EF2ccA9324290ca7"
);

export default instance;

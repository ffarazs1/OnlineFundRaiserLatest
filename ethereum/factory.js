import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//ABI and address of deployed contract
//factory is added just to directly use deployed contracts check page 14  of docs
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  process.env.ADDRESS
);

export default instance;

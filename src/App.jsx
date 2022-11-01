import { useAddress, useMetamask } from "@thirdweb-dev/react";

const App = () => {

  const address = useAddress();
  console.log("👋 Address:", address);
  const connectWithMetamask = useMetamask();

   // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if(!address) {
  return (
    <div className="landing">
      <h1>Welcome to AtherDAO</h1>
      <button onClick={connectWithMetamask} className="btn-hero">Connect Wallet</button>
    </div>
  );
} 
return (
  <div className="landing">
    <h1>Wallet connected</h1>
    </div>
);
}
export default App;


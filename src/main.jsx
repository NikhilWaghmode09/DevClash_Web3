import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
const wallets = [new PetraWallet()];
root.render(
  <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
  <App />
  </AptosWalletAdapterProvider>
);
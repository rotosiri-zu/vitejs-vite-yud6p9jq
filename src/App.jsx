import { useState } from 'react';
import './App.css';
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";
import {  RecoilRoot  } from "recoil";

function App() {
  const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
export default App;

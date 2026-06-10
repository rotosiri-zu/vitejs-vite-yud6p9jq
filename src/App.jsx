import { useState } from 'react';
import './App.css';
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
export default App;

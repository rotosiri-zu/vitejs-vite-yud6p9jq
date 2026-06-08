import { useState } from 'react';
import './App.css';
import { PrimaryButton } from './components/button/PrimaryButton';
import { SecondaryButton } from './components/button/SecondaryButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}
export default App;

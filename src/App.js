import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';

function App()
{
  const [mode, setMode] = useState(
    {
      color: 'black',
      backgroundColor: 'white',
      text: 'light',
    });

  const [modebuttonText, setModebuttonText] = useState('Toggle Dark Mode');

  const toggleMode = () =>
  {
    if (mode.text === 'light')
    {
      setMode({
        color: 'white',
        backgroundColor: 'black',
        text: 'dark',
      });
      setModebuttonText('Toggle Light Mode');
    }
    else
    {
      setMode({
        color: 'black',
        backgroundColor: 'white',
        text: 'light',
      });
      setModebuttonText('Toggle Dark Mode');
    }
  }

  return (
    <div style={mode}>
      <Navbar title="TextUtils" aboutText="About" mode={mode} modebuttonText={modebuttonText} toggleMode={toggleMode} />
      <TestForm heading="Enter Text to Analyze" upperCase="Upper Case" lowerCase="Lower Case" titleCase="Title Case" clear="Clear Text" details="All Details" copy="copy" removeBlank="Remove Blank Spaces" mode={mode}/>
      <About mode={mode}/>
    </div>
  );
}

export default App;

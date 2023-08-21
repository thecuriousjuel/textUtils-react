import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import Alert from './components/Alert';
import
{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App()
{
  const [mode, setMode] = useState(
    {
      color: 'black',
      backgroundColor: 'white',
      text: 'light',
      buttonColor: 'dark'
    });

  const [modebuttonText, setModebuttonText] = useState('Toggle Dark Mode');
  const [alert, setAlert] = useState(null);

  const setAlertFunction = (message, type) =>
  {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() =>
    {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>
  {
    if (mode.text === 'light')
    {
      setMode({
        color: 'white',
        backgroundColor: 'black',
        text: 'dark',
        buttonColor: 'light'
      });
      setModebuttonText('Toggle Light Mode');
      setAlertFunction('Dark mode enabled', 'success');

      // setInterval(() => {
      //   document.title = 'TextUtils is here!'
      // }, 5000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils now!'
      // }, 2500);
    }
    else
    {
      setMode({
        color: 'black',
        backgroundColor: 'white',
        text: 'light',
        buttonColor: 'dark'
      });
      setModebuttonText('Toggle Dark Mode');
      setAlertFunction('Light mode enabled', 'success');
    }
  }

  return (
    <Router>
      <div style={mode}>

        <Navbar title="TextUtils" aboutText="About" mode={mode} modebuttonText={modebuttonText} toggleMode={toggleMode} />

        <Alert alertMessage={alert} />

        <Routes>
          <Route exact path="/" element={
            <TestForm heading="Enter Text to Analyze" upperCase="Upper Case" lowerCase="Lower Case" titleCase="Title Case" clear="Clear Text" details="All Details" copy="copy" removeBlank="Remove Blank Spaces" mode={mode} setAlertFunction={setAlertFunction} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;

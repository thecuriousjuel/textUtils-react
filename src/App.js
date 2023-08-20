import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';

function App()
{
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About" />
      <TestForm heading="Enter Text to Analyze" upperCase="Upper Case" lowerCase="Lower Case" titleCase = "Title Case" clear="Clear Text" details="All Details" copy="copy" removeBlank="Remove Blank Spaces"/>
    <About/>
    </div>
  );
}

export default App;

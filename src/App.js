//import logo from './logo.svg';
//import './App.css';

// import Basic from './components/BasicFormik';
import MyNewForm from './components/formikTutorial/MyNewForm';
import HookForm01 from './components/hookForms/HookForm01';
// import StyledComponent from './components/StyledComponents';
// import SignupForm from './components/formikTutorial/TutorialForm';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Basic/> */}
      {/* <StyledComponent/> */}
      {/* <SignupForm/> */}
      {/* <MyNewForm/> */}
      <HookForm01/>
    </div>
  );
}

export default App;

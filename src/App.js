import logo from './logo.svg';
import './App.css';
import UserGithub from './profile.js'
import SignInSide from './sign_in.js'
function App() {
  return (
    <div className="App">
      <div>
        {SignInSide()}
      </div>
    </div>
    // <div className="App">
    //   <div>
    //     {<UserGithub/>}
    //   </div>
    // </div>

  );
}
export default App;

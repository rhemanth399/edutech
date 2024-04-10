import logo from './logo.svg';
import './App.css';
import SignInForm from './pages/SigInForm';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path='/create-account' element={<CreateAccount/>}/>
      <Route path='/login' element={<SignInForm/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

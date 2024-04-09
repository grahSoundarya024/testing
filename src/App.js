// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import SignIn from './components/SignIn.js';
// import SignUp from './components/SignUp.js';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from './components/ProductList.js';


function App() {
  return <>
  {
  <ProductList/>
  /* <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='signup' element={<SignUp/>}/>
    
  </Routes> */}
  </>
}

export default App;



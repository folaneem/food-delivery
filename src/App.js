import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Cart from '../src/components/Cart/Cart'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright/Copyright";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import {
    LANDING_PAGE_PATH,
    ABOUT_PATH,
    SIGN_IN_PATH,
    SIGN_UP_PATH,
    CONTACT_PATH,
    CART_PATH,
    ADDRESS_PATH,
    MENU_PATH
} from "./constants/UrlPaths";
import Address from "./components/Address/Address";
import Menu from "./components/Menu/Menu";

function App() {
    const userCart=JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empt


  return (
   <Router>
       <NavBar />
     <Routes>
       <Route exact path={LANDING_PAGE_PATH} element={<LandingPage />}/>
         <Route path={CART_PATH} element={<Cart /> }/>
         <Route exact path={ABOUT_PATH} element={<About/>}/>
         <Route exact path={CONTACT_PATH} element={<Contact/>}/>
         <Route exact path={SIGN_IN_PATH} element={<SignIn/>}/>
         <Route exact path={SIGN_UP_PATH} element={<SignUp/>}/>
         <Route exact path={ADDRESS_PATH} element={<Address/>}/>
         <Route exact path={MENU_PATH} element={<Menu/>}/>


     </Routes>
       <Copyright/>
   </Router>
  );
}


export default App;

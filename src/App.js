import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Orders from "./Orders";
import Login from './Login';
import { auth } from "./Firebase";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Payment from './Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51OPks5GzYP0AMLZhwNlEnF76jyPybyASdjOGDeCF6j7TmWEgnEqjtKI4pNtEAZ8LdYhZCT9hvJq7lJVtsk3ahPYK00F4UeHgiZ')
 
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    auth.onAuthStateChanged((authUser) => {

      if(authUser){
        //the user just logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
        
      } else{
        //the user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    })
  },[])
  return (
    <Router>
      <div className='App'>

        <Routes>

        <Route path="/login" element={<><Login/></>}/>
        <Route path="/" element={<><Header/><Home/></>}/>
        <Route path="/Checkout" element={<><Header/><Checkout/></>}/>
        <Route path="/orders" element={<><Header/><Orders/></>}/>

        <Route path="/payment" element={
        <>
        <Header/>
        <Elements stripe={promise}><Payment/></Elements>
        </>
        }
        />
        </Routes>
      </div>
    </Router>
  );
} 

export default App;

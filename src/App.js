import React,{ useState } from 'react';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AllProducts from './pages/AllProducts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import AddProduct from './pages/AddProduct';
import ManageAllUsers from './pages/ManageAllUsers';
import ManageAllOrders from './pages/ManageAllOrders';


function App() {
  let storageData = null;
  if(localStorage.length !== 0){
      const startTime = localStorage.getItem('CreateTime');
      const startTimeMS = parseInt(startTime);
      const dateNow = Date.now();
      const result = (dateNow - startTimeMS) / 60000
      if(result <= 180.0 ){
        const temp = localStorage.getItem('Data');
        const data = JSON.parse(temp)
        storageData = data;
      }
      else localStorage.clear();
  }

  const [user,setUser] = useState(storageData);

  return (
    <BrowserRouter>
    <Navbar user={user} setUser={setUser}/>
    <Routes>
      {user && user.isAdmin===true?<>
        <Route exact path="/" element={<Home />}/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/addproduct" element={<AddProduct user={user}/>}/>
        <Route path="/allusers" element={<ManageAllUsers user={user}/>}/>
        <Route path="/allorders" element={<ManageAllOrders user={user}/>}/>
        <Route path="/signin" element={ user ? <Navigate replace to = "/"/> : <Login user={user} setUser={setUser} />}/>
        <Route path="/register" element={ user ? <Navigate replace to = "/"/> : <Register user={user} setUser={setUser}/>}/>
        <Route path="*" element={<NotFound/>}/>
        {/* <Route path="/products/:title" element={<ProductDetails user={user}/>}/> */}
        </>
        :
        <>
        <Route exact path="/" element={<Home />}/>
        <Route path="/allproducts" element={<AllProducts/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products/:title" element={<ProductDetails user={user}/>}/>
        <Route path="/cart" element={ user? <Cart user={user}/> : <Navigate replace to = "/signin"/>}/>
        <Route path="/orders" element={ user? <Orders user={user}/> : <Navigate replace to = "/signin"/>}/>
        <Route path="/signin" element={ user ? <Navigate replace to = "/"/> : <Login user={user} setUser={setUser} />}/>
        <Route path="/register" element={ user ? <Navigate replace to = "/"/> : <Register user={user} setUser={setUser}/>}/>
        <Route path="*" element={<NotFound/>}/>
        </>
      }
      
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;

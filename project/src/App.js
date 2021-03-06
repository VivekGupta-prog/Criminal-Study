import React from 'react';
import './App.css';
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import NewEntry from "./Components/NewEntry";
import AdminNav from "./Components/AdminNav";
import OpeningPage from "./Components/OpeningPage";
import About from "./Components/About";
import Predict from "./Components/Predict";
import Search from "./Components/Search";
import Locality from "./Components/Locality";
import PublicNav from "./Components/PublicNav";
import SecondNav from "./Components/SecondNav";
import LocalityResult from "./Components/LocalityResult";
import PredictResult from "./Components/PredictResult";

import { Route, Switch } from "react-router-dom";
import {useHistory} from "react-router-dom";

function App(props) {
  const history = useHistory();
  return (
    <div className="App">
    <Switch>
    <Route exact path="/">
      <OpeningPage history = {history}/>
    </Route>
    <Route path="/login">
      <Login history = {history}/>
    </Route>
    <Route path="/registration">
      <RegistrationForm history = {history}/>
    </Route>
    <Route path="/about">
      <Navbar history = {history}/>
      <About />
    </Route>
    <Route exact path="/public">
      <Navbar history = {history}/>
      <SecondNav />
    </Route>
    <Route path="/public/search">
      <Navbar history = {history}/>
      <SecondNav />
      <Search history = {history}/>
    </Route>
    <Route path="/public/locality">
      <Navbar history = {history}/>
      <SecondNav />
      <Locality history = {history}/>
    </Route>
    <Route path="/public/result">
      <Navbar history = {history}/>
      <SecondNav />
      <LocalityResult />
    </Route>
    <Route exact path="/admin">
      <Navbar history = {history}/>
      <SecondNav />
    </Route>
    <Route path="/admin/search">
      <Navbar history = {history}/>
      <SecondNav />
      <Search history = {history}/>
    </Route>
    <Route path="/admin/predict">
      <Navbar history = {history}/>
      <SecondNav />
      <Predict history = {history}/>
    </Route>
    <Route path="/admin/predictresult">
      <Navbar history = {history}/>
      <SecondNav />
      <PredictResult/>
    </Route>
    <Route path="/admin/newentry">
      <Navbar history = {history}/>
      <SecondNav />
      <NewEntry history = {history}/>
    </Route>
    {/* <Route path="/admin/result">
      <Navbar history = {history}/>
      <SecondNav />
      <NewEntryResult/>
    </Route> */}
    </Switch>
    </div>
  );
}

export default App;

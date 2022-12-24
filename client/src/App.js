/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import CardEvents from "./pages/CardEvents";
import EndPage from "./pages/EndPage";
// import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { setEventData } from "./feature/events.slice";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { UserContext } from "./context/UserContext";
function App() {

  const [value, setValue] = useState("hello BRAND")
  const dispatch = useDispatch();
  const fectEvent = () => {
    axios
      .get("http://127.0.0.1:5000/api/event/")
      .then((res) => {
        if (res.data != null) {
          dispatch(setEventData(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fectEvent();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{value, setValue}}>
      <Router>
          <Routes>
            <Route path="/*" element={<Home />}/>
            <Route path="/payEvent" exact element={<Pay />} />
            <Route path="/endPage" exact element={<EndPage />} />
            <Route path="/cart" exact element={<CardEvents />} />
            <Route path="/signIn" exact element={<SignIn />} />
            <Route path="/signUp" exact element={<SignUp />} />
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
    
  );
}

export default App;

import React, {Component} from "react";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Hero from "../components/Hero";
import SignUp from "../components/Sign_up";
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import AjouterLieu from "../components/AjouterLieu";
import AdminHome from "../components/AdminHome";
import Description from "../components/Description";
import AdminLieux from "../components/AdminLieux";
class HeroPage extends Component 
{
    state={}
    render(){
        return (
            <div>
                
                <Routes>
                    <Route
                        path="/"
                        element = {
                            <div>
                                <Hero></Hero>
                            </div>
                        }
                    ></Route>
                    <Route
                        path="/SignUp"
                        element = {
                            <div>
                                <SignUp></SignUp>
                            </div>
                        }
                    ></Route>
                    <Route
                        path="/LogIn"
                        element = {
                            <div>
                                <Login></Login>
                            </div>
                        }
                    ></Route>
                    <Route
                        path="/AjoutLieu"
                        element = {
                            <div>
                                <AjouterLieu></AjouterLieu>
                            </div>
                        }
                    ></Route>
                    <Route
                        path="/Description"
                        element = {
                            <div>
                                <Description></Description>
                            </div>
                        }
                    ></Route>
                     <Route
                        path="/AdminLieux"
                        element = {
                            <div>
                                <AdminLieux></AdminLieux>
                            </div>
                        }
                    ></Route>
                </Routes>
            </div>
        )
    }
}
export default HeroPage
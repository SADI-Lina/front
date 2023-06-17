import React, {Component} from "react";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
import AdminHome from "../components/AdminHome";
import AjouterLieu from "../components/AjouterLieu";
import NavBar from "../components/NavBar";
import AdminLieux from "../components/AdminLieux";
class AdminPage extends Component 
{
    state={}
    render(){
        return (
            <div>
                <NavBar></NavBar>                
                <Routes>
                    <Route
                        path="/"
                        element = {
                            <div>
                                <AdminHome></AdminHome>
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
export default AdminPage
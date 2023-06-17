import React, {Component} from "react";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
import UserHomePage from "../components/UserHomePage";
import NavBar from "../components/NavBar";
import Description from "../components/Description";
class UserPage extends Component 
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
                                <UserHomePage></UserHomePage>
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
                </Routes>
            </div>
        )
    }
}
export default UserPage
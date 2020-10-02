import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import Header from "./Header";
import Body from "./body";

class App extends Component{
    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <Header />
                    <Route exact path='/' component={Body}/>
                </BrowserRouter>

            </div>
        );
    }
}
export default App;
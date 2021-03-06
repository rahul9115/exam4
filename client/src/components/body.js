import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import css from "./css/body.css"
import {connect} from "react-redux";
import image from "./images/log.png";
import * as actions from "../actions";
import axios from "axios";
class Body extends Component{
    
    constructor(props){
        super(props);
    this.state={profile:"student",
            element:<a href="/auth/google"  style={{textDecoration:"none",color:"white"}} className="tech"><i class="fa fa-google" aria-hidden="true"></i> Sign in with Google</a>,
            style:{backgroundColor:"white",color:"black"},
            style1:{backgroundColor:"navy",color:"white"},
          
        }
    }
    
    updateStudent=()=>{
        console.log("in student");
        this.setState({profile:"teacher",element:<a href="/auth/google"  className="teah"><i class="fa fa-google" aria-hidden="true"></i> Sign in with Google</a>,
        style:{backgroundColor:"white",color:"black"},
        style1:{backgroundColor:"navy",color:"white"},
        profile:"student"});
    }
    updateTeacher=()=>{
        console.log("in teacher");
        console.log("in student");
        this.setState({profile:"teacher",element:<a href="/auth/google"  className="teah"><i class="fa fa-google" aria-hidden="true"></i> Sign in with Google</a>,
        style:{backgroundColor:"navy",color:"white"},
        style1:{backgroundColor:"white",color:"black"}
        });
    }
    call(){
        axios({url:"/api/state",method:"POST",data:this.state})
    }
    render(){
        console.log(this.props)
        return(
            
            <div className="container" id="con" >
                <nav class="navig">
                <ul>
                    <li><a href="http://localhost:3000"><img src={image}></img></a></li>
                   
                </ul>
                </nav>
              <div className="choice">
                  <a href="#" class="student" onClick={this.updateStudent} style={this.state.style}>Student</a>
                  <a href="#" class="teacher" onClick={this.updateTeacher} style={this.state.style1}>Teacher</a>
                  <a href="#" onClick={this.call()} className="login">{this.state.element}</a>
                  
                  </div> 
           
            </div>
            
            
        )
    }
}


export default connect(null,actions)(Body);
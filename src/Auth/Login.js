import { useState } from "react";

function Login() {
    var [email, setemail] = useState("xyz@gmail.com")                           // var email = "Xyz@gmail.com"
    var [pword, setpword] = useState("abcdxyz")                                // var password = "xyz"                                                                        // function changeemail(event) {
    function changeemail(event) {                                              // console.log(event.target.value) 
        setemail(event.target.value);                                           // email = event.target.value;
    }                                                                           // }           
    function changepword(event) {
        setpword(event.target.value);                                          // function changepass(event) {
    }
    function btnclick() {
        console.log(email, pword)
    }                                                                         // console.log(event.target.value)                             
    return (                                                                    // password = event.target.value;  }
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Login</h1>
                    
                        <div className="mb-3">
                            <label className="lh-sm" >Email</label>
                            <input type="text" onChange={event => changeemail(event)} className="form-control" placeholder="Email"></input>
                        </div>
                        <div className="mb-3">
                            <label className="lh-sm" >Password</label>
                            <input type="password" onChange={event => changepword(event)} className="form-control" placeholder="Password"></input>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={event => btnclick()}>Login</button>
                        </div>
                        <div className="mt-3">
                            <a href="ForgotPassword">ForgotPassword ?</a>
                        </div>
                        {
                            email
                        }
                        <br></br>
                        {
                            pword
                        }
                </div>
            </div>
        </div>
    );



}
export default Login;
import React from "react";

function Login() {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1 mt-3">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">register</button>
        </div>
    )
}

export default Login;
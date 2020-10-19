import React from "react"
import "./BackendLogin.css"

function login() {
    var username = document.querySelector("#usernameField")
    var password = document.querySelector("#passwordField")

    fetch("http://localhost:3001/login?user=" + username.value + "&pass=" + password.value).then(response => response.json()).then(res => {
        if(res.length === 0) {
            console.log("nothing")
        }
        else {
            document.querySelector(".backend-login-backing").style.display = "none"
            sessionStorage.setItem("User", res["Username"])
        }
    })
}

const BackendLogin = () => {
    return (
        <div className="backend-login-backing">
            <div className="backend-login-modal">
                <div className="modal-title-area">
                    <div className="modal-title-text">
                        Backend Login
                    </div>
                    <div className="modal-close-area">
                        X
                    </div>
                </div>
                <div className="main-area">
                    <input id="usernameField" type="text" placeholder="Username" /><br />
                    <input id="passwordField" type="password" placeholder="Password" />
                    <br />
                    <br />
                    <button onClick={() => login()}>Login</button>
                </div>
            </div>
        </div>
    )
}


export default BackendLogin
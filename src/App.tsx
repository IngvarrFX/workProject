import React, {useEffect} from "react";
import "./App.css";
import {useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {useNavigate} from "react-router-dom";
import {Login} from "./components/login/Login";
import {Main} from "./components/main/Main";


function App() {

    const isAuth = useSelector<AppStateType, boolean>(state => state.app.isAuth)
    const navigate = useNavigate()


    useEffect(() => {
        if (!isAuth) {
            navigate("/login")
        } else {
            navigate("/main")
        }
    }, [])

    return (
        <div className={"App"}>
            {!isAuth
                ?
                <Login/>
                :
                <Main/>
            }
        </div>
    );
}

export default App;

import React, {useEffect} from "react";
import "./App.css";
import {useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {privateRoutes, publicRoutes} from "./components/routes/routes";
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";
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
                /*<Routes>
                    <Route path={"/login"} element={<Login/>}/>
                </Routes>*/
                <Login/>
                :
               /* <Routes>
                    <Route path={"/main"} element={<Main/>}/>
                </Routes>*/
                <Main/>
            }
        </div>
    );
}

export default App;

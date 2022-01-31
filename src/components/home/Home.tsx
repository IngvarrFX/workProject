import React from "react";
import {useDispatch} from "react-redux";

export const Home = () => {

    const dispatch = useDispatch()

    const clickHandle = () => {
        dispatch({type: "CLICK"})
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={clickHandle}>Click for call saga</button>
        </div>
    );
};

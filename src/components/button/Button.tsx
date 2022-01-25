import React from "react";


type ButtonType = {
    title: string
    onClick: ()=> void
}

export const Button: React.FC<ButtonType> = ({title,onClick}) => {
    return (
        <div>
            <button onClick={onClick}>{title}</button>
        </div>
    );
};


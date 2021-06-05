import React from 'react';

function Button(props){
    return(
        <button className={"bitcoinBtn"}>{props.btnText}</button>
    );
}

export default Button;
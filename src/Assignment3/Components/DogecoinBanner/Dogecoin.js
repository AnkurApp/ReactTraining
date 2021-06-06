import React from 'react';


function Dogecoin(props){
    return(
        <div className={"coinBanner"}>
            <h1>{props.heading}</h1>
            <p>{props.para}</p>

        </div>
    );
}

export default Dogecoin;
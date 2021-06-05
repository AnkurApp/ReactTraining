import React from 'react';


function Dogecoin(props){
    return(
        <div className={"coinBanner"}>
            <h1>{props.heading}</h1>
            <p>{"Only 3 Simple steps"}</p>

        </div>
    );
}

export default Dogecoin;
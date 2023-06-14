import React from "react";
const Youtube = (props) => {
        
const {dataurl} = props ;

    return(
        <div>
        <iframe width="100%" height="500px" src={dataurl} title="Youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Youtube;
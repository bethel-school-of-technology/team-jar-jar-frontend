import React from "react";

const features = () => {
    return (
        <div className="App">
<video autoPlay loop
style={{
    position:"absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1"
}}
>
    <source src={Obiwan} type="video.mp4"/>
</video>

        </div>
    )
}

export default features;
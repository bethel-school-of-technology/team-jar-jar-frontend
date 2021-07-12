import React from 'react';
import './Saber.css';
import html2canvas from 'html2canvas';


function Saber() {

   const takeShot = () => { 

       html2canvas(document.querySelectorAll(".capture")).then(canvas => {
        document.querySelectorAll(".output").appendChild(canvas)


    });
}
   
    return(
<div className="capture">
    <h4>
        <label for="green">Green</label>
            <input type="radio" id="green" name="color" checked />
            <label for="blue">Blue</label>
            <input type="radio" id="blue" name="color" />
            <label for="yellow">Yellow</label>
            <input type="radio" id="yellow" name="color" />
            <label for="purple">Purple</label>
            <input type="radio" id="purple" name="color" />
            <label for="red">Red</label>
            <input type="radio" id="red" name="color" />
            <label for="darksaber">Darksaber</label>
            <input type="radio" id="darksaber" name="color" />
        
            <div class="lightsaber" id="lightSaber">
                <input type="checkbox" id="on-off" />
                <div class="blade"></div>
                <label class="hilt" for="on-off"> </label>
            </div>

    </h4>
</div>,
    <button onClick={takeShot()}>Save Saber</button>,
    <div className="output">Screenshot:</div>


    );

}


export default Saber;












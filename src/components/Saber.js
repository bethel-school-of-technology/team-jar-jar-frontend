import React from 'react';
import './Saber.css';
import html2canvas from 'html2canvas';


function Saber() {

    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
    });
   
    return(
<div id="capture">
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
</div>

    );

}


export default Saber;












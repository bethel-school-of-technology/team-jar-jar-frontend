// import React from 'react';
// import { ScreenCapture } from 'react-screen-capture';
// import './ScreenCapture.css';



// seans



// class ScreenCaptureComponent extends React.Component {
//     state = {
//         screenCapture: '',
//     };




//     handleScreenCapture = screenCapture => {
//         this.setState({ screenCapture });
//     };

//     handleSave = () => {
//         const screenCaptureSource = this.state.screenCapture;
//         const downloadLink = document.createElement('a');
//         const fileName = 'Your Lightsaber.png';

//         downloadLink.href = screenCaptureSource;
//         downloadLink.download = fileName;
//         downloadLink.click();
//     };

//     render() {
//         const { screenCapture } = this.state;
        
//         console.log("As a Jedi you will be faced with a great many of challenges. Some include intense lightsaber battles such as this one.")




//         return (


            
            
//             <ScreenCapture onEndCapture={this.handleScreenCapture} className="test">
//                 {({ onStartCapture }) => (
//                     <div>
                        
//                         <button onClick={onStartCapture} class='App'>Capture</button>
//                         <center>
//                             <img src={this.state.screenCapture} />
//                             <p>
//                                 {this.state.screenCapture && <button onClick={this.handleSave}>Download</button>}
//                             </p>
//                         </center>
//                     </div>
//                 )}
//             </ScreenCapture>
            
//         );
//     }
// };

// export default ScreenCaptureComponent;

import React from 'react';
import { ScreenCapture } from 'react-screen-capture';
import '../components/ScreenCapture.css';

class screenCapture extends React.Component {
    state = {
        screenCapture: '',
    };

    handleScreenCapture = screenCapture => {
        this.setState({ screenCapture });
    };

    handleSave = () => {
        const screenCaptureSource = this.state.screenCapture;
        const downloadLink = document.createElement('a');
        const fileName = 'react-screen-capture.png';

        downloadLink.href = screenCaptureSource;
        downloadLink.download = fileName;
        downloadLink.click();
    };

    render() {
        const { screenCapture } = this.state;
        console.log(screenCapture);
        return (
            <ScreenCapture onEndCapture={this.handleScreenCapture}>
                {({ onStartCapture }) => (
                    <div>
                        <button onClick={onStartCapture} class='App'>Capture</button>
                        <center>
                            <img src={this.state.screenCapture} alt='react-screen-capture' />
                            <p>
                                {this.state.screenCapture && <button onClick={this.handleSave}>Download</button>}
                            </p>
                        </center>
                    </div>
                )}
            </ScreenCapture>
        );
    }
};

export default screenCapture;

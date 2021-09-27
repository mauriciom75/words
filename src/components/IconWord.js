import React from 'react';
import '../index.css';


class IconWord extends React.Component {

    constructor(props) {
        super(props);
        
            
        this.state = {
            audio : new Audio("/groups/" + this.props.topic + "/" + this.props.word + ".mp3"),
            urlImage : "/groups/" + this.props.topic + "/" + this.props.word + ".png"
          };
    }
    playSound = audioFile => {
        audioFile.play();
    }

    render() {
  
      return (
        <div>
            <div onClick={() => this.playSound(this.state.audio) }>
                <img src={this.state.urlImage} alt="display foto" />
            </div>
            <div>
                {this.props.word}
            </div>
        </div>
      );
    }
  }

  export default IconWord;

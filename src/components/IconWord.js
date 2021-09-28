import React from 'react';
import '../index.css';


class IconWord extends React.Component {

    constructor(props) {
        super(props);
        
        if (this.props.topic === "topic")
          this.state = {
            audio : null,
            urlImage : "/groups/" + this.props.word + ".png",
            size: "30"
          };
        else
          this.state = {
              audio : new Audio("/groups/" + this.props.topic + "/" + this.props.word + ".mp3") || null,
              urlImage : "/groups/" + this.props.topic + "/" + this.props.word + ".png",
              size: "100"
            };
    }
    playSound = audioFile => {
        if ( audioFile )
          audioFile.play();
    }

    
    divStyle = {
      fontFamily: "Lucida Console",
      fontSize: "30px",
      textTransform: "uppercase"
    };



    render() {
  
      return (
        <div>
            <div onClick={() => this.playSound(this.state.audio) } >
                <img src={this.state.urlImage} alt="display foto" width={this.state.size} height={this.state.size}/>
            </div>
            <div style={this.divStyle}>
                {this.props.word}
            </div>
        </div>
      );
    }
  }

  export default IconWord;

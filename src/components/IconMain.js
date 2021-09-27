import React from 'react';
import '../index.css';

import IconPanel from './IconPanel';
import IconNav from './IconNav';

import { withRouter } from "react-router";


class IconMain extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {

            loading : true,
          };
    }

    render() {
  

        let topic="";
        if (this.props.match && this.props.match.params && this.props.match.params.topic)
          topic = this.props.match.params.topic;
        else
          topic = "tema1";

        return (
        <div>
            <IconNav />
            <div>topic: {topic}</div>
            <IconPanel topic={topic} />

          </div>
        );
    }
    
  }

  export default withRouter( IconMain );
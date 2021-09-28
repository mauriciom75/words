import React from 'react';
import '../index.css';

import IconPanel from './IconPanel';
import IconNav from './IconNav';

import { withRouter } from "react-router";

import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars,FaTimes } from 'react-icons/fa';



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
          topic = "comida";

        return (
        <div>

            <ResponsiveMenu
              menuOpenButton={<FaBars/>}
              menuCloseButton={<FaTimes/>}
              changeMenuOn="1000px"
              largeMenuClassName="large-menu-classname"
              smallMenuClassName="small-menu-classname"
              menu={
                <IconNav />
              }              
            />
            <IconPanel topic={topic} />
        </div>

        );
    }
    
  }

  export default withRouter( IconMain );
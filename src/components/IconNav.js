import React from 'react';
import '../index.css';

import {
  Link
} from "react-router-dom";

class IconNav extends React.Component {

    constructor(props) {
        super(props);
        
        this.getData();

        this.state = {

            loading : true,
          };
    }

    getData=()=>{
      const self = this;
      fetch("/groups/topics.json"
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          //console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          console.log(myJson[0].topic);
          self.setState({topics: myJson ,loading: false });
          
          //return myJson;
        });
    }

    navegate = () =>{
      //console.log("navegate");
      //this.props.navigation.navigate('/', { topic: 'tema1' })
    }

    render() {
  
      if (this.state.loading) {
        return <div>Loading :D...</div>
      }
      else {
        var rows = [];
        for (var i = 0; i < this.state.topics.length; i++) {
          // note: we are adding a key prop here to allow react to uniquely identify each
          // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
          //rows.push(<div key={i}>{this.state.words[i].word}</div>);
          rows.push(<div key={i}><Link to={"/icon/"+this.state.topics[i].topic}>{this.state.topics[i].topic}</Link></div> );
        }

        return (
          <div>
            <div>
              temas
            </div>
            <div>
              {rows}
            </div>

          </div>
        );
      }
    }
  }

  export default IconNav;

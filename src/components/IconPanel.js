import React from 'react';
import '../index.css';
import IconWord from '../components/IconWord';

class IconPanel extends React.Component {

    constructor(props) {
        super(props);
        

        this.state = {

            loading : true,
            topic : ""
          };

        this.getData();

    }


    componentDidUpdate(prevProps) {
      // Uso tipico (no olvides de comparar las props):
      if (this.props.topic !== prevProps.topic) {
        this.getData();
      }
    }
    
    getData=()=>{
      const self = this;
      //self.setState({loading: true });

      fetch("/groups/" + this.props.topic + "/words.json"
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
          console.log(myJson[0].word);
          self.setState({words: myJson ,loading: false });
          
          //return myJson;
        });
    }


    render() {
  

  
      if (this.state.loading) {
        return <div>Loading :D...</div>
      }
      else {
        var rows = [];
        for (var i = 0; i < this.state.words.length; i++) {
          // note: we are adding a key prop here to allow react to uniquely identify each
          // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
          //rows.push(<div key={i}>{this.state.words[i].word}</div>);
          rows.push(<IconWord key={i} topic={this.props.topic} word={this.state.words[i].word}/>);
        }

        return (
          <div>
            <div>
              {this.props.topic}
            </div>
            <div>
              rows
              {rows}
            </div>

          </div>
        );
      }
    }
  }

  export default IconPanel;

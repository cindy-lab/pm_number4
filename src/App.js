
import React, { Component } from 'react';
import BusinessCard from './BusinessCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FName : '', 
      LName : '', 
      Address: '', 
      Email : '', 
      PhoneNumber: '',
      register : false

    };
  }

  inputHandler = (event) => {
    const { FName, LName, Address, Email, PhoneNumber} = this.state;
    if(FName!=="" && LName!=="" && Address!== "" && Email!=="" && PhoneNumber!==""){
      this.setState({register: true})
    }
    else{
      this.setState({register: false})
      alert("The input fields must not be empty");
      
    }
    
  }

  render() {
    const { FName, LName, Address, Email, PhoneNumber, register } = this.state;
    if(!register){
      return (
        <div class="center">
        <br/><br/>
        <h1>Registration Form</h1>
        <hr/>
        <br/>
        <input type="text" placeholder="Firstname" onChange={event => this.setState({ FName: event.target.value })}></input>
        <br/><br/>
        <input type="text" placeholder="Lastname" onChange={event => this.setState({ LName: event.target.value })}></input>
        <br/><br/>
        <input type="text" placeholder="Address" onChange={event => this.setState({ Address: event.target.value })}></input>
        <br/><br/>
        <input type="email" placeholder="Email" onChange={event => this.setState({Email: event.target.value })}></input>
        <br/><br/>
        <input type="number" placeholder="PhoneNumber" onChange={event => this.setState({ PhoneNumber: event.target.value })}></input>
        <br/><br/>
        <div>
          <button onClick={event => this.inputHandler(event)}>Submit</button>
        </div>
        </div>
          
        );    
      }
      else {
        return(
          <div>
            <BusinessCard firstname={FName}/>
            <BusinessCard lastname={LName}/>
            <BusinessCard address={Address}/>
            <BusinessCard email={Email}/>
            <BusinessCard phonenumber={PhoneNumber}/>
            
        </div>
        ); 
    }
  }
}    
export default App;


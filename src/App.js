//import logo from './logo.svg';
//import './App.css';
import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {Num1 : '', Num2 : '', Result : ''};
  }

  Add = () => {
    var n1 = parseInt(this.state.Num1);
    var n2 = parseInt(this.state.Num2);
    var sum = n1 + n2;
    this.setState( {Result : sum} );
  }


  render() {
  return (
    <div>
      <h1 data-testid="Heading"> Addition of Two Numbers </h1>
      <br/>
      <label data-testid="Label1"> Enter Number 1 : </label> <input data-testid="TextBox1" type="number" value={this.state.Num1} onChange={ (e) => {this.setState({Num1 : e.target.value});}}/>
      <br/>
      <label data-testid="Label2"> Enter Number 2 : </label> <input data-testid="TextBox2" type="number" value={this.state.Num2} onChange={ (e) => {this.setState({Num2 : e.target.value});}} />
      <br/>
      <input data-testid="AdditionButton" type="submit" value="Addition" onClick={this.Add}/>
      <br/>
      <b data-testid="Result">Sum : {this.state.Result} </b>
    </div>
  );
  }
}

export default App;







// function App() {
//   return (
//     <div>
//       <h1 data-testid="MyHeading">Welcome to JEST Demo with React</h1>
//       <br/>
//       <b data-testid="MyContent">Hello..This is Nithu !</b>
//     </div>
//   );
// }
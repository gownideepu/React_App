import React ,{Component} from "react";
import logo from './logo.svg'
class App extends Component{
  constructor(){
    super();
    this.state={
      name:"Hello from Bridgelabz"
    }
  }
  onClickEvent(){
    window.open("https://www.bridgelabz.com",'_blank')
  }
  render(){
    console.log("Render Method")
    return (<div>
              <h1>{this.state.name}</h1>
              <input type="text"/>
              <img src={logo} alt=""onClick={this.onClickEvent}/>

    </div>)
  };

}
export default App;

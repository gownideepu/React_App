import React ,{Component} from "react";
import logo from './logo.svg'
class App extends Component{
  constructor(){
    super();
    this.state={
      userName:" "
    }
  }
  onClickEvent(){
    window.open("https://www.bridgelabz.com",'_blank')
  }
  onInputChange=(event)=>{
    this.setState({userName:event.target.value});
  }
  render(){
    console.log("Render Method");
    return (<div>
              <h1>Hello from bridgelabz {this.state.userName}</h1>
              <input type="text" onChange={this.onInputChange}/>
              <img src={logo} alt=""onClick={this.onClickEvent}/>
    </div>)
  };

}
export default App;

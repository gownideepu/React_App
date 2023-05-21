import React ,{Component} from "react";
import logo from './logo.svg'
class App extends Component{
  constructor(){
    super();
    this.state={
      name:" "
    }
  }
  onClickEvent(){
    window.open("https://www.bridgelabz.com",'_blank')
  }
  onInputChange=(event)=>{
    this.setState({name:event.target.value});
  }
  render(){
    console.log("Render Method");
    return (<div>
              <h1>Hello World {this.state.name}</h1>
              <input type="text" onChange={this.onInputChange}/>
              <img src={logo} alt=""onClick={this.onClickEvent}/>

    </div>)
  };

}
export default App;

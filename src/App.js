import React ,{Component} from "react";
import logo from './logo.svg'
import './App.css';
class App extends Component{
  url='https://www.bridgelabz.com';
  constructor(){
    
    super();
    this.state={
      userName:'',
      nameError:''
    }
  }
  onClick=($event)=>{
    window.open(this.url,"blank");
  }
  
  onInputChange=(event)=>{
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    this.setState({userName:event.target.value})
    if (nameRegex.test(event.target.value)){
      this.setState({nameError:''})
    }else{
      this.setState({nameError:"userName is incorrect"})
    }
  }
  render(){
    console.log("Render Method");
    return (<div>
      <div>
              <h1>Hello from bridgelabz {this.state.userName}</h1>
              <input type="text" onChange={this.onInputChange}/>
              <span className="error-output">{this.state.nameError}</span>
              <img src={logo} alt=" " onClick={this.onClick}/>

        </div>
    </div>
    )
    
  }
}
export default App;

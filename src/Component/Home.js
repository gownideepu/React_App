import React ,{Component} from "react";
import logo from '../styles/bridgelabzlogo.png'
import '../App.js'
import "../App.css"
class Home extends Component{
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
    return (
      <div class="outerpage">
    <div class="form">
          <div>
              <h1 id="h1">Hello  {this.state.userName} from bridgelabz</h1>
              <img src={logo} alt=" " onClick={this.onClick}/>
              
              <input id="input" type="text" onChange={this.onInputChange}/>
              <span className="error-output">{this.state.nameError}</span>
              <body>
                <p1>
                At Bridgelabz,we're a community of </p1>
                <ul>
                      <li>technologies</li>
                      <li>thinkers</li>
                      <li>builders</li>
                </ul>
                       
                <p>Working together to keep thr Tech Employability of Engineers alive and </p>
                <p>accessible,so Tech Companies worldwide can get contributors and</p>
                <p>creators for Technology Solutions.We believe this act of human</p>
                <p>collaboration across an employability platform is essential to individual</p>
                <p> growth and our collection future.</p>
                  
                 <p>To Know abput us,visit <a href="https://www.bridgelabz.com/"> bridgeLab</a> to learn even more about our mission</p>
                  <p><b>i.e. Employability to all.</b>
                </p>
              </body>
        </div>
    </div>
    </div>
    )
    
  }
}
export default Home;


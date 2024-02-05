import { PureComponent } from "react"
class Purecomponent extends PureComponent {
   constructor(){
    super()
    this.state={
        count:0,
        Toggle:true
    }
   }
    render(){
      console.log("This is Pure Component")
      return(
        <>
        <h1>Pure Component counter</h1>
        <h1>counter {this.state.count}</h1>
        <button onClick={()=>{this.setState({Toggle:!this.state.Toggle,count:this.state.count})}}>Toggle</button>
        <button onClick={()=>{this.state.Toggle ? this.setState({count:this.state.count+1,Toggle:this.state.Toggle}):this.state.count}}>ADD</button>
        </>
   
      )
    }
   }
export default Purecomponent
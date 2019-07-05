import React,{Component} from 'react';

import ReceiveProperties from './receiveproperties'

class LifeCycle extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:'Life Cycle Page',
            body:'some dummy text'
        }
    }
    componentWillMount(){
        console.log("it's called before render ")
        
    }
    render(){
        console.log("data rendered ")
        return(
            <div id="test"> LifeCycle test 
                <ReceiveProperties data="checkreceiveprops"  />
            </div>
        )
    }
    componentDidMount(){
        console.log("it's called after render called")
        document.getElementById("test").style.color="green"
        this.setState({
            title:'updated State'
        })
    }
    componentWillUpdate(){
        console.log("before state updated")
    }
    componentDidUpdate(){
        console.log("After state updated")
    }

    shouldComponentUpdate(nextProps, nextState){
        // return false;   
        console.log(nextProps)
        console.log(nextState) 
        // by condition  you can decide you have to update state or not
        if(nextState.title=="updated State"){
            return false
        }
        return true;
    }

    componentWillUnmount(){
        console.log("un mounted")
    }

    componentWillReceivePorps(){
        console.log("gets trigger component gets new props ")
    }
    
}
export default LifeCycle;
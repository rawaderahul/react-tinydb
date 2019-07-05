import React,{Component} from 'react';

class ReceiveProperties extends Component{

    componentWillReceiveProps(){
        console.log("received props ")
    }

    render(){
        return(
            <div> it's an receive props </div>
        )
    }
}
export default ReceiveProperties
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'


// components 
import Homepage from './components/home'
import Artist from './components/artist'
import LifeCycle from './components/lifecycle'


class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Homepage} ></Route>
                    <Route exact path="/artist/:artistid" component={Artist}  ></Route>
                    <Route exact path="/lifecycle" component={LifeCycle}  ></Route>
                    
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


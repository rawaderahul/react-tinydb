import React,{Component} from 'react';

// component 
import Banner from './banner'
import ArtistList from './artistlist';


const URL_ARTIST = 'http://localhost:3004/artists';

class HomePage extends Component{
    constructor(props){
        super(props)
        this.state={
            artist:[]
        }
    }
    componentDidMount(){
         fetch(URL_ARTIST,{
             method:'GET'
         })
         .then(response => response.json())
         .then(json =>{
             
             this.setState({
                 artist:json
             })
         })
    }

    componentWillReceiveProps(){
        console.log("Before Props")
    }

    componentWillUnmount(){
        console.log("un mounted")
    }

    render(){
        
        return(
            <div>
                <Banner />
                <ArtistList allArtists={ this.state.artist } />
            </div>
        )
    }
}
export default HomePage;

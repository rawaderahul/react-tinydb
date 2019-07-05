import React,{Component} from 'react';
import Banner from './banner';
import ArtistList from './artistlist';
import Search from './search';

const artistData = "http://localhost:3004/artists";

class Home extends Component{
    
    constructor(props){
        super(props)
        this.state={
            allartistList:[],
            filteredArtist:[]
        }
    }

    searchArtist(keywords){
        
        const filteredArtistData= this.state.allartistList.filter((item)=>{
            return item.name.toUpperCase().includes(keywords) || item.name.toLowerCase().includes(keywords)
        })  
        this.setState({
            filteredArtist:filteredArtistData
        })
    }

    componentDidMount() {
        fetch(artistData).then(response => response.json())
        .then(json =>{
            this.setState({
                allartistList:json,
                filteredArtist:json,
                
            })
         })
    }

    render(){
        
        return(
            <div>
                
                <Banner />
                <Search search={(keywords)=>{ this.searchArtist(keywords) }} />
                <ArtistList list={ this.state.filteredArtist }  />
            </div>
        )
    }
}
export default Home;
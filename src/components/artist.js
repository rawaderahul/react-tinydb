import React,{Component} from 'react';
import Header from './header';
import AlbumList from './album_list'


const REQ_URL='http://localhost:3004/artists'

class Artist extends Component{
    constructor(props){
        super(props)
        this.state={
            artist:[]
        }
        
    }

    componentDidMount(props){
        fetch(`${REQ_URL}/${this.props.match.params.artistid}`,{
            method:'GET'
        }).then(response => response.json())
        .then(json =>{
            this.setState({
                artist:json
            })
        })
    }

    render(){
        console.log(this.state.artist)
        return(
            <div> 
                <Header />
                <div className="artist_bio">
                    <div className="avatar"> 
                    <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}} ></span>
                    </div>
                    <div>
                        <h3> {this.state.artist.name} </h3>
                        <p className="bio_text"> {this.state.artist.bio} </p>
                        <AlbumList gallery={ this.state.artist.albums } ></AlbumList>
                    </div>
                </div>  
            </div>
        )
    }
}
export default Artist;
import React from 'react';


const Search = (props) =>{

    const searchVal=(event)=>{
        props.search(event.target.value);
    }

    return(
        <div className='search'>
            
            <input placeholder="Search" onChange={ searchVal.bind(this) } />
        </div>
    )

}

/*
class Search extends Component{
    constructor(props){
        super(props)
        
    }

    searchVal(event){
        this.props.search(event.target.value);
    }

    render(){
        return(
            <div className='search'>
                
                <input placeholder="Search" onChange={ this.searchVal.bind(this) } />
            </div>
        )
    }
} */
export default Search;
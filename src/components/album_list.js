import React from 'react';

const AlbumList =(props)=>{
   
    const dispgallery= ({gallery}) =>{
        if(gallery)
        {
          return gallery.map((item)=>{
              
                return(
                    <span key={item.id}> 
                        <img  style={{width:'45%'}} src={`/images/albums/${item.cover}.jpg`} />
                    </span>
                )
              
            })
        }
       
    }
    return(
        <div > 
            
            {
                dispgallery(props)
            }
        </div>
    )
}
export default AlbumList;

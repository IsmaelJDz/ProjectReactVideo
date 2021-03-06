import React from 'react';
import Media from './media';
import './playlist.css';

function Playlist (props) {
    //const playlist = props.data.categories[0].playlist
    //console.log(this.props.data);
    return (
      <div className="Playlist">
        {
          props.playlist.map((item) => {
            //return <Media title={item.title} key={item.id}/>
            //el ... se llama spriteoperator y se usa con ECMA6
            return <Media handleClick={props.handleOpenModal} {...item} key={item.id}/>
          })
        }
      </div>
    )
}

export default Playlist; 
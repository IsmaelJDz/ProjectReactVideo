import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {

  //Forma ECMA7
  state = {
    author: this.props.author
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  //   //this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick = (e) => {
  //   //console.log(this.props.title)
  //   this.setState({
  //     author: 'IsmaelMx'
  //   })
  // }
  render() {

    let { title, author, image } = this.props;
    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img 
            src={this.props.cover}
            alt=""
            width={240}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
}
export default Media;
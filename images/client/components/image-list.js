import React, { Component } from 'react';
import ImageListDetail from './image-list-item';

class ImageList extends Component {

  renderListItem () {
    const validImages = this.props.images.filter(image => !image.is_album);
    return validImages.map((image) => <ImageListDetail image={image} key={image.id} />);
  }

  render(){
    return (
      <ul className="media-list list-group">
        {this.renderListItem()}
      </ul>
    );
  }
};

export default ImageList

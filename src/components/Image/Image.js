import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const Image = ({ image, onClick }) =>
  (
    <div className="image">
      <img
        className="image__item"
        src={image.thumbnailUrl}
        alt={image.name}
        onClick={() => onClick(image.imageId)}
        role="presentation"
      />
    </div>
  );

Image.propTypes = {
  image: PropTypes.shape({
    name: PropTypes.string,
    imageId: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Image;

import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const Image = ({ image, onClick }) =>
  (
    <div className="image">
      <img
        src={image.thumbnailUrl}
        alt={image.name}
        onClick={() => onClick(image.imageId)}
        role="presentation"
      />
    </div>
  );

Image.propTypes = {
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Image;

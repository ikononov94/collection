import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const Image = ({ image, onClick }) =>
    <div
        className="image"
        onClick={() => onClick(image.imageId)}
    >
        <img
            src={image.thumbnailUrl}
            alt={image.name}
        />
    </div>;

Image.propTypes = {
    image: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Image;

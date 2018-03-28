import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import './Images.css';

const Images = ({ images, onClick }) =>
            <div className="images">
                { images.map(image =>
                    <Image
                        image={image}
                        key={image.imageId}
                        onClick={onClick} /> )
                }
            </div>;

Images.propTypes = {
    images: PropTypes.array,
    onClick: PropTypes.func.isRequired
};

Images.defaultProps = {
    images: []
};

export default Images;

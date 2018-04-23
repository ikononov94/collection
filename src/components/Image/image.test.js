import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Image from './Image';

const image = {
  name: 'image1Name',
  imageId: 'image1Id',
  thumbnailUrl: 'image1Url',
};

const onImageClick = sinon.spy();
const wrapper = shallow(<Image image={image} onClick={onImageClick} />);

describe('<Image />', () => {
  it('render component', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should render an `.image`', () => {
    expect(wrapper.find('.image')).to.have.length(1);
  });

  it('should render an `.image__item`', () => {
    expect(wrapper.find('.image__item')).to.have.length(1);
  });

  it('simulates click events', () => {
    wrapper.find('.image__item').simulate('click');
    expect(onImageClick.calledWithExactly('image1Id')).to.equal(true);
  });
});

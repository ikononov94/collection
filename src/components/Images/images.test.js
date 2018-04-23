import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon'

import Images from './Images';

const images = [
  {
    name: 'image1Name',
    imageId: 'image1Id',
    thumbnailUrl: 'image1Url',
  },
  {
    name: 'image1Name',
    imageId: 'image1Id',
    thumbnailUrl: 'image1Url',
  },
];

const wrapper = shallow(<Images images={images} onClick={sinon.spy()} />);

describe('<Images />', () => {
  it('component Images', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should render an `.images`', () => {
    expect(wrapper.find('.images')).to.have.length(1);
  });
});

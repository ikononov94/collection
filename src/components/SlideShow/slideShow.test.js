import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { SlideShow } from './SlideShow';

function setup() {
  const props = {
    images: [],
    index: null,
    loadingImage: false,
    onCloseImage: sinon.spy(),
    nextImage: sinon.spy(),
    prevImage: sinon.spy(),
    loadedImage: sinon.spy(),
    errorLoadedImage: sinon.spy(),
  };

  const wrapper = shallow(<SlideShow {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('Component SlideShow', () => {
  it('render component', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.show-image')).to.have.length(0);
    wrapper.setProps({
      index: 0,
      images: [{ currentUrl: 'imageurl' }],
    });
    expect(wrapper.find('.show-image')).to.have.length(1);
  });

  it('loadingImage: true', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.loader')).to.have.length(0);
    wrapper.setProps({
      index: 0,
      images: [{ currentUrl: 'imageurl' }],
      loadingImage: true,
    });
    expect(wrapper.find('.loader')).to.have.length(1);
  });

  it('simulates click', () => {
    const { wrapper, props } = setup();
    wrapper.setProps({
      index: 0,
      images: [{ currentUrl: 'imageurl' }],
    });
    wrapper.find('.show-image__prev').simulate('click');
    expect(props.prevImage.calledOnce).to.equal(true);

    wrapper.find('.show-image__image').simulate('click');
    expect(props.nextImage.calledOnce).to.equal(true);

    wrapper.find('.show-image__next').simulate('click');
    expect(props.nextImage.calledTwice).to.equal(true);

    wrapper.find('.show-image__close').simulate('click');
    expect(props.onCloseImage.calledOnce).to.equal(true);
  });
});

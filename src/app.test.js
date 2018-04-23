import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { App } from './App';

function setup() {
  const props = {
    isFetchingImages: false,
    errorMessage: '',
    images: [],
    fetchNextImages: sinon.spy(),
    fetchImages: sinon.stub(),
    onClickImage: sinon.stub(),
  };

  const wrapper = shallow(<App {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('component App', () => {
  it('render component', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.collection')).to.have.length(1);
    expect(wrapper.find('.loader')).to.have.length(0);
    expect(wrapper.find('.error-empty')).to.have.length(0);
  });

  it('should render error message', () => {
    const { wrapper } = setup();
    wrapper.setProps({ errorMessage: 'error message' });
    expect(wrapper.find('.error-empty')).to.have.length(1);
    expect(wrapper.find('.error-empty').text()).to.equal('error message');
  });

  it('should render loader-fullscreen', () => {
    const { wrapper } = setup();
    wrapper.setProps({ isFetchingImages: true });
    expect(wrapper.find('.loader-fullscreen')).to.have.length(1);
  });
});

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Infinite from './Infinite';
import Images from '../Images/Images';

function setup() {
  const props = {
    nextImages: sinon.spy(),
  };

  const wrapper = mount((
    <Infinite {...props}>
      <Images images={[]} onClick={sinon.spy()} />
    </Infinite>
  ));

  return {
    props,
    wrapper,
  };
}

describe('Component Infinite', () => {
  it('should render self and subcomponents', () => {
    sinon.spy(Infinite.prototype, 'componentDidMount');
    const { wrapper } = setup();

    expect(wrapper.find('.infinite')).to.have.length(1);
    expect(wrapper.find('.images')).to.have.length(1);
  });
  it('allows use to set props', () => {
    const { wrapper } = setup();

    wrapper.setProps({ isFetching: true });
    expect(wrapper.find('.loader')).to.have.length(1);
  });
});

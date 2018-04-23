import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SearchForm from './SearchForm';

function setup() {
  const props = {
    fetchImages: sinon.spy(),
  };

  const wrapper = shallow(<SearchForm {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('Component SearchForm', () => {
  it('render component', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.search-form')).to.have.length(1);
  });

  it('component state', () => {
    const { wrapper } = setup();
    expect(wrapper.state().searchValue).to.equal('');
  });

  it('simulates click', () => {
    const onSubmit = sinon.stub(SearchForm.prototype, 'onSubmit');
    const { wrapper } = setup();
    wrapper.find('.search-form').simulate('submit');
    expect(onSubmit.calledOnce).to.equal(true);
    wrapper.find('.search-form__button').simulate('click');
    expect(onSubmit.calledOnce).to.equal(true);
  });

  it('respondse to searchValue change', () => {
    const handleChange = sinon.stub(SearchForm.prototype, 'handleChange');
    const { wrapper } = setup();
    wrapper.find('.search-form__input').simulate('change');
    expect(handleChange.calledOnce).to.equal(true);
  });
});

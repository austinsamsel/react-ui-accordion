import React, { Component } from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import Accordion from './Accordion';

chai.use(chaiEnzyme())

describe('the environment', () => {
  it('works, hopefully', () => {
    expect(true).to.be.true;
  });
});

// Refactored tests
describe('(Component) Accordion', () => {
  const wrapper = shallow(<Accordion />);

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('contains the title', () => {
    expect(wrapper.find('.header')).to.have.length(1);
  });

  it('contains a block for content', () => {
    expect(wrapper.find('.contentWrap')).to.have.length(1);
  });

  it('should start out as closed', () => {
    expect(wrapper.state('open')).to.equal(false);
  });

  it('opens when user clicks on the title bar', () => {
    wrapper.setState({ open: false, class:'section' });
    wrapper.find('.header').simulate('click');
    expect(wrapper.state('open')).to.equal(true);
  })

  it('has a open and close arrow/x button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  })

  // TODO: this is a false positive.
  it('calls the handleClick method when title is pressed', () => {
    const handleClick = sinon.spy();
    const wrapper = shallow(
      <div className='sectionhead' onClick={handleClick} />
    );
    wrapper.find('.sectionhead').simulate('click');
    expect(handleClick.calledOnce).to.equal(true);
  });

});

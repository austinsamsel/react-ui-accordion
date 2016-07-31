import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import ArrowIcon from './ArrowIcon';

chai.use(chaiEnzyme());

// Refactored tests
describe('(Component) Arrow Icon', () => {
  const wrapper = shallow(<ArrowIcon />); 
  const wrapperM = mount(<ArrowIcon />);

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  // it('opens when user clicks on the button', () => {
  //   wrapperM.setState({ open: false });
  //   wrapperM.find('.button').simulate('click');
  //   expect(wrapperM.state('open')).to.equal(true);
  // })

  it('has a open and close arrow/x button', () => {
    expect(wrapper.find('.button')).to.have.length(1);
  })

  it('should have a button start as an arrow', () => {
    wrapperM.setState({'open': false});
    const bl1 = wrapperM.find('.bl1');
    const bl2 = wrapperM.find('.bl2');
    expect(bl1).to.have.style('transform', 'translate(75%, -50%) rotate(45deg)');
    expect(bl1).to.have.style('height', '9px');
    expect(bl2).to.have.style('transform', 'translate(-75%, -50%) rotate(-45deg)');
  });

  it('should form an X when content is expanded', () => { 
    wrapperM.setState({'open': true});
    const bl1 = wrapperM.find('.bl1');
    const bl2 = wrapperM.find('.bl2');
    expect(bl1).to.have.style('transform', 'translate(0%, -50%) rotate(-45deg)');
    expect(bl1).to.have.style('height', '14px');
    expect(bl2).to.have.style('transform', 'translate(0%, -50%) rotate(45deg)');
  });

  // it('calls the handleClick method when title is pressed', () => {
  //   const toggle = sinon.spy(ArrowIcon.prototype, 'handleClick')
  //   const wrapper = mount(<ArrowIcon />)
  //   wrapper.find('.button').simulate('click');
  //   expect(ArrowIcon.prototype.handleClick.calledOnce).to.equal(true);
  //   toggle.restore();
  // });

});

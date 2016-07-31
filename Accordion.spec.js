import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
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
  const wrapperM = mount(<Accordion />);

  it('calls componentDidMount() to get height of content', () => {
    const method = sinon.spy(Accordion.prototype, 'componentDidMount');
    const wrapper = mount(<Accordion />);
    expect(Accordion.prototype.componentDidMount.calledOnce).to.equal(true);
    method.restore();
  });

  it('calls componentDidUpdate() to readjust for dynamic content', () => {
    const method = sinon.spy(Accordion.prototype, 'componentDidUpdate');
    const wrapper = mount(<Accordion />);
    expect(Accordion.prototype.componentDidUpdate.calledOnce).to.equal(true);
    method.restore();
  });

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('contains the title', () => {
    expect(wrapper.find('.header')).to.have.length(1);
  });

  it('opens when user clicks on the title bar', () => {
    wrapperM.setState({ open: false });
    wrapperM.find('.header').simulate('click');
    expect(wrapperM.state('open')).to.equal(true);
  })

  it('has a open and close arrow/x button', () => {
    expect(wrapper.find('button')).to.have.length(1);
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

  it('calls the handleClick method when title is pressed', () => {
    const toggle = sinon.spy(Accordion.prototype, 'handleClick')
    const wrapper = mount(<Accordion />)
    wrapper.find('.header').simulate('click');
    expect(Accordion.prototype.handleClick.calledOnce).to.equal(true);
    toggle.restore();
  });

  it('contains a block for content', () => {
    expect(wrapper.find('.contentWrap')).to.have.length(1);
  });

  it('should start out as closed', () => {
    expect(wrapper.state('open')).to.equal(false);
  });

  it('should expand in height when opened', () => {
    wrapperM.setState({'open': false});
    const content = wrapperM.find('.contentWrap');
    expect(content).to.have.style('maxHeight','0px');
    wrapperM.setState({'open': true});
    expect(content).to.not.have.style('maxHeight','0px');
  });

});

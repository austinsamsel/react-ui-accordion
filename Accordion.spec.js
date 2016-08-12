import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import Accordion from './Accordion';

chai.use(chaiEnzyme());

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
    const wrapper = mount(<Accordion />);
    wrapper.setState({ open: false });
    wrapper.find('.header').simulate('click');
    expect(wrapper.state('open')).to.equal(true);
  })

  it('has a open and close arrow/x button', () => {
    expect(wrapper.find('ArrowIcon')).to.have.length(1);
  })

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
    const wrapper = mount(<Accordion />);
    wrapper.setState({'open': false});
    const content = wrapper.find('.contentWrap');
    expect(content).to.have.style('maxHeight','0px');
    wrapper.setState({'open': true});
    expect(content).to.not.have.style('maxHeight','0px');
  });

});

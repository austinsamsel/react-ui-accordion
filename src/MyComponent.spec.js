import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import MyComponent from './MyComponent';

chai.use(chaiEnzyme())

describe('(Component) MyComponent', () => {
  const wrapper = shallow(<MyComponent />); 

  it('calls componentDidMount()', () => {
    const method = sinon.spy(MyComponent.prototype, 'componentDidMount');
    const wrapper = mount(<MyComponent />);
    expect(MyComponent.prototype.componentDidMount.calledOnce).to.equal(true);
    method.restore();
  });

  it('calls giphy apis: trending gifs', () => {
    const method = sinon.spy(MyComponent.prototype, 'loadTrending');
    const wrapper = mount(<MyComponent />);
    expect(MyComponent.prototype.loadTrending.calledOnce).to.equal(true);
    method.restore();
  });

  it('calls giphy apis: random gifs', () => {
    const method = sinon.spy(MyComponent.prototype, 'loadRandom');
    const wrapper = mount(<MyComponent />);
    expect(MyComponent.prototype.loadRandom.calledOnce).to.equal(true);
    method.restore();
  });

  it('calls giphy apis: query gifs', () => {
    const method = sinon.spy(MyComponent.prototype, 'loadQuery');
    const wrapper = mount(<MyComponent />);
    expect(MyComponent.prototype.loadQuery.calledOnce).to.equal(true);
    method.restore();
  });

  it('calls giphy apis: translated gifs', () => {
    const method = sinon.spy(MyComponent.prototype, 'loadTranslate');
    const wrapper = mount(<MyComponent />);
    expect(MyComponent.prototype.loadTranslate.calledOnce).to.equal(true);
    method.restore();
  });

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('contains the title', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('contains the explanation', () => {
    expect(wrapper.find('.about')).to.have.length(1);
  });

  it('has four accordion panes', () => {
    expect(wrapper.find('Accordion')).to.have.length(4);
  });

});

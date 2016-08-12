import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import GifItem from './GifItem';

chai.use(chaiEnzyme())

describe('(Component) GifItem', () => {

  const wrapper = shallow(<GifItem />);

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('renders children when passed in', () => {
    expect(wrapper.find('img')).to.have.length(1);
  });

});

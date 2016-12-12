import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import GifList from './GifList';
import GifItem from './GifItem';

chai.use(chaiEnzyme())

describe('(Component) GifList', () => {

  const img = [
	{
	  images:
	  {
		original: [Object],
	  }
	},
	{
	  images:
	  {
		original: [Object],
	  }
	},
	{
	  images:
	  {
		original: [Object],
	  }
	}
  ]
  const wrapper = shallow(<GifList data={[]} />);

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should render zero images', () => {
    expect(wrapper.find('GifItem')).to.have.length(0);
  });

  it('should render some images', () => {
    const wrapper = shallow(<GifList data={img} />);
    expect(wrapper.find('GifItem')).to.have.length(3);
  });

});

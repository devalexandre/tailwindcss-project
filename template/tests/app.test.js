import { h } from 'preact';
import App from '../../src/index';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test ', () => {

	test('Header renders ', () => {
		const context = shallow(<App />);
		expect(context.find('h1').text()).toBe('Template Tailwind for Preact');
		expect(context.find('header').length).toBe(1);
	});

	test('Main renders ', () => {
		const context = shallow(<App />);
		expect(context.find('section').length).toBe(1);
	});

	test('Footer renders ', () => {
		const context = shallow(<App />);
		expect(context.find('footer').length).toBe(1);
	});
});

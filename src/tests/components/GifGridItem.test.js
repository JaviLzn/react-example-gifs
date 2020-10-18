import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener la imagen a la url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props() );
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener la clase animate__fadeIn en el div', () => {
        const div = wrapper.find('div');
        const clases = div.prop('className');
        expect(clases.includes('animate__fadeIn')).toBe(true);
    });
    

});

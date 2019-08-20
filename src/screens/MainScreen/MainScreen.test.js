import React from 'react';
import MainScreen from './MainScreen';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

test('MainScreen should match snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <MainScreen/>
    </MemoryRouter>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

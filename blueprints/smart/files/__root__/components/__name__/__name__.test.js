import React from 'react';
import <%= pascalEntityName %> from './<%= pascalEntityName %>';
import commonTestWrapper from 'src/utils/commonTestWrapper';

test('<%= pascalEntityName %> should match snapshot', () => {
  const component = commonTestWrapper(
    <<%= pascalEntityName %>/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

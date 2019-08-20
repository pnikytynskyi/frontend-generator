import { mapDispatchToProps, mapStateToProps } from './<%= pascalEntityName %>Container';

describe('<%= pascalEntityName %>Container', () => {

  it('should derive props from Redux state', () => {
    const state = {};
    const props = mapStateToProps(state);

    expect(props).toMatchObject({
      // exampleProp: expectedValue
    });
  });

  it('should dispatch Redux action from handler props', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);

    expect(props).toMatchObject({
      // onExampleAction: expect.any(Function)
    });

    // props.onExampleAction(arg);
    // expect(dispatch).toHaveBeenLastCalledWith(
    //  { type: EXAMPLE_ACTION_TYPE }
    // )
  });
});

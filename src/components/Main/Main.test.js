import { initializeTimes } from './Main';

describe('initializeTimes function', () => {
  it('should return a non-empty object', () => {
    // Call the function
    const initialState = initializeTimes();

    // Check if the returned value is an object
    expect(typeof initialState).toBe('object');

    // Check if the object has keys
    expect(Object.keys(initialState).length).toBeGreaterThan(0);
  });
});

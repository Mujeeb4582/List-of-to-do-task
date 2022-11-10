import LocalStorage from './mocks/localStorage.js';

describe('localStorage', () => {
  it('Adds an item to the mock localStorage', () => {
    const localStorage = new LocalStorage();
    const key = 'storeKey';
    const value = 'storeValue';

    localStorage.setItem(key, value);

    expect(
      Object.keys(localStorage.storage).length,
    ).toEqual(1);
  });

  it('gets the items from the mock localStorage', () => {
    const localStorage = new LocalStorage();
    const key = 'storeKey';
    const value = 'storeValue';
    localStorage.setItem(key, value);

    const receivedValue = localStorage.getItem(key);

    expect(receivedValue).toEqual(value);
  });
});

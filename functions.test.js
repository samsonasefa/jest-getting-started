const functions = require('./functions');

// Numbering
// on numbers toBe and toEqual
test('Adds 2 + 2 to equal to 4', () => {
  expect(functions.add(2, 2)).toBe(4);
  expect(functions.add(2, 2)).toEqual(4);
});

// toBeCloseTo
test('float sum', () => {
  const values = 0.1 + 0.2;
  expect(values).toBeCloseTo(0.3);
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('Adds 2 + 2 to not equal to 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('X Should not be defined', () => {
  const x = undefined;
  expect(x).toBeUndefined();
});

test('check a null to be 0', () => {
  expect(functions.checkValue(0)).not.toBeTruthy();
});

// NULLABLE
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// CHECKING TRUTHY AND FALSY
test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// Objects
// toEqual
test('User should be Sam Ase object ', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Sam', lastName: 'Ase' });
});

//Regex
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// Array
test('Milk should be in the shopping list', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

  expect(shoppingList).toContain('milk');
});

// Exceptions
test('compiling android goes as expected', () => {
  expect(() => functions.compileAndroidCode()).toThrow();
  expect(() => functions.compileAndroidCode()).toThrow(Error);

  //   You can also use a string that must be contained in the error message or a regexp
  expect(() => functions.compileAndroidCode()).toThrow(
    'you are using the wrong JDK!'
  );
  expect(() => functions.compileAndroidCode()).toThrow(/JDK/);

  //   Or you can match an exact error message using a regexp like below
  //   expect(() => functions.compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => functions.compileAndroidCode()).toThrow(
    /^you are using the wrong JDK!$/
  ); // Test pass
});

// Promise unit test
test('User fetched name should be Leanne Graham', () => {
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// Async await

test('User fetched name should be Leanne Graham as async/await', async () => {
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

// resolves and rejects
test('fetchData with sucess param should resolve', async () => {
  await expect(functions.fetchData('sucess')).resolves?.toEqual(
    'promise resolved'
  );
});

test('the fetch fails with an error', async () => {
  await expect(functions.fetchData('data')).rejects.toMatch('error');
});

test('the fetchData fails with an error', async () => {
  expect.assertions(1);
  try {
    await functions.fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

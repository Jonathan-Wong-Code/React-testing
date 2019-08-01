const a = 3;
const b = "new string";
const c = "new string";

const newObject = {
  name: "Jon",
  age: "34"
};

const numArray = [1, 2, 3, 4, 5];
const numArray2 = [1, 2, 3, 4, 5];

// 2 arguments. 1st argument is the description, second is a call back.

test("a should equal 3", () => {
  expect(a).toBe(3);
});

test(`b should be 'new string`, () => {
  expect(b).toBe(c);
});

test("should have an object with Jon", () => {
  expect(newObject).toEqual({
    name: "Jon",
    age: "34"
  });
});

test("should have an array with numbers from 1-5", () => {
  expect(numArray).toEqual(numArray2);
});

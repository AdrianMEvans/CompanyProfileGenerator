const Manager = require("../libraries/Manager");

test("Can set office number via constructor argument", () => {
  const value = 100;
  const manager = new Manager("Foo", 1, "test1@test.com", value);
  expect(manager.officeNumber).toBe(value);
});

test("getRole() should return \"Manager\"", () => {
  const value = "Manager";
  const manager = new Manager("Foo", 2, "test2@test.com", 200);
  expect(manager.getRole()).toBe(value);
});

test("Can get office number via getOffice()", () => {
  const value = 100;
  const manager = new Manager("Foo", 1, "test@test.com", value);
  expect(manager.getOfficeNumber()).toBe(value);
});
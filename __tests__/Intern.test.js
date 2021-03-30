const Intern = require("../libraries/Intern");

test("Can set school via constructor", () => {
  const value = "UWA";
  const intern = new Intern("Foo", 1, "test1@test.com", value);
  expect(intern.school).toBe(value);
});

test("getRole() should return \"Intern\"", () => {
  const value = "Intern";
  const intern = new Intern("Foo", 2, "test2@test.com", "UWA");
  expect(intern.getRole()).toBe(value);
});

test("Can get school via getSchool()", () => {
  const value = "UWA";
  const intern = new Intern("Foo", 1, "test@test.com", value);
  expect(intern.getSchool()).toBe(value);
});
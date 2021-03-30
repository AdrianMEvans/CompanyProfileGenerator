const Engineer = require("../libraries/Engineer");

test("Can set GitHUb account via constructor", () => {
  const value = "GitHubAddress";
  const engineer = new Engineer("Foo", 1, "test1@test.com", value);
  expect(engineer.github).toBe(value);
});

test("getRole() should return \"Engineer\"", () => {
  const value = "Engineer";
  const engineer = new Engineer("Foo", 2, "test2@test.com", "GitHubAddress");
  expect(engineer.getRole()).toBe(value);
});

test("Can get GitHub username via getGithub()", () => {
  const value = "GitHubUser";
  const engineer = new Engineer("Foo", 3, "test3@test.com", value);
  expect(engineer.getGithub()).toBe(value);
});
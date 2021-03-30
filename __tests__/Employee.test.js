const Employee = require('../libraries/Employee');

test('Can instantiate Employee instance', () => {
	const employee = new Employee();
	expect(typeof employee).toBe('object');
});

test('Can set employee name via constructor arguments', () => {
	const name = 'Rick';
	const employee = new Employee(name);
	expect(employee.name).toBe(name);
});

test('Can set employee id via constructor argument', () => {
	const value = 300;
	const employee = new Employee('Leandri', value);
	expect(employee.id).toBe(value);
});

test('Can set employee email via constructor argument', () => {
	const value = 'test4@test.com';
	const employee = new Employee('Chev', 1, value);
	expect(employee.email).toBe(value);
});

test('Can get employee name via getName()', () => {
	const value = 'Mary';
	const employee = new Employee(value);
	expect(employee.getName()).toBe(value);
});

test('Can get employee id via getId()', () => {
	const value = 600;
	const employee = new Employee('Sipho', value);
	expect(employee.getId()).toBe(value);
});

test('Can get employee email via getEmail()', () => {
	const value = 'test7@test.com';
	const employee = new Employee('Richard', 1, value);
	expect(employee.getEmail()).toBe(value);
});

test('getRole() should return "Employee"', () => {
	const value = 'Employee';
	const employee = new Employee('John', 1, 'test8@test.com');
	expect(employee.getRole()).toBe(value);
});
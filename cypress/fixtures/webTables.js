import faker from 'faker-br';

export default {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  age: "34",
  salary: "7000",
  department: "TI"
};
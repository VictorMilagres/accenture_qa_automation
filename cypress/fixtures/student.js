import faker from 'faker-br';

const birthdate = faker.date.between('1990-01-01', '2005-12-31');

export default {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber('##9########'),
  birthdate: birthdate.toLocaleDateString('pt-BR'),
  subjecs: "Maths",
  address: faker.address.streetAddress()
};
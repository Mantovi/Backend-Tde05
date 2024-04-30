const { faker } = require('@faker-js/faker');

function createRandomUser(){
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    birthdate: faker.date.past(),
  };
}

console.log(createRandomUser());
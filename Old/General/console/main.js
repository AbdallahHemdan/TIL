function getUserList() {
  return [
    {
      name: 'Abdallah',
      age: 22,
    },
    {
      name: 'Ahmed',
      age: 48,
    },
    {
      name: 'Omar',
      age: 11,
    },
    {
      name: 'Mohamed',
      age: 8,
    },
    {
      name: 'Rokia',
      age: 4,
    },
  ];
}

const usersList = getUserList();

//? (1)
// * Log users list array
// console.log(usersList);

//? (2)
// * Log each user of users list in a new line
// usersList.forEach(user => {
//   console.log(user);
// });

//? (3)
// * Log all users younger than 40 and log a ((warning)) if there is a user older than 40
// ! Log all users younger than 40 and log a ((error)) if there is a user younger than 5 years
usersList.forEach(user => {
  if (user.age < 5) {
    console.error(user);
  } else if (user.age >= 40) {
    console.warn(user);
  } else {
    console.log(user);

    // ? note: log has alias (same functionality) - info  | debug(not standard -- not found in chrome)
    // console.info(user);
    // console.debug(user);
  }
});

// ? (4)
// * Log user list (any key value data) in table form 🎉🎊
console.table(usersList);

// ? (5)
// * Log list of logs as group
console.group('User List Logs');
usersList.forEach((user, index) => {
  console.group(`User (${index})`); // ! logs group label
  console.log(`name: ${user.name}`);
  console.log(`age: ${user.age}`);
  console.groupEnd(); // ! end of logs group
});
console.groupEnd();

// ? (6)
// * Log list of logs as group -- Collapsed
console.groupCollapsed('User List Logs');
usersList.forEach((user, index) => {
  console.groupCollapsed(`User (${index})`); // ! logs group label
  console.log(`name: ${user.name}`);
  console.log(`age: ${user.age}`);
  console.groupEnd(); // ! end of logs group
});
console.groupEnd();

// ? (7)
// * Log time passed from console.time() and console.timeEnd()
// ! User of calculate the time certain function of ser of operations take

console.time();
let j = 0;
for (let i = 0; i < 1e6; i++) {
  j++;
}
console.timeEnd();

// ? (8)
// * Log tracing steps that a function take until end (list of function call happened)
function firstToCall() {
  secondToCall();
}

function secondToCall() {
  thirdToCall();
}

function thirdToCall() {
  console.trace();
  console.log('I am third');
}

firstToCall();
// console.trace                                                  main.js:103
// thirdToCall	                                                  @	main.js:103
// secondToCall	                                                  @	main.js:99
// firstToCall	                                                  @	main.js:95
// (anonymous)	                                                  @	main.js:107

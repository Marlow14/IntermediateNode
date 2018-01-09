const printInfo = require('./printHobbies');

const hobbies = [
    { name: 'volleyball', duration: 20 },
    { name: 'cooking', duration: 5},
    { name: 'swimming', duration: 11}
];

for (const hobby of hobbies) {
    printInfo(hobby);
}


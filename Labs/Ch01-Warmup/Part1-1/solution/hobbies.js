const hobbies = [
    { name: 'volleyball', duration: 20 },
    { name: 'cooking', duration: 5},
    { name: 'swimming', duration: 11}
];


function printHobbyInfo(hobby) {
console.log(` ${hobby.name} has been an interest for ${hobby.duration} years`)
}

for (const hobby of hobbies) {
    printHobbyInfo(hobby);
}

const myHobbies = [
    { name: 'cooking', duration: 15 },
    { name: 'essential oils', duration: 6 },
    { name: 'volleyball', duration: 20 },
    { name: 'swimming', duration: 11 }
];


function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} has been an interest for ${hobby.duration} years`)
}

for (const hobby of myHobbies) {
    printHobbyInfo(hobby);
}

myHobbies.sort((a, b) => {
    if (a.name < b.name) { return -1; }
    else if (a.name > b.name) { return 1; }
    else { return 0; }
})

console.log('alpha sort')

for (const hobby of myHobbies) {
    printHobbyInfo(hobby);
}

console.log('years')

myHobbies.sort((a, b) => {
    return a.duration - b.duration;
})


for (const hobby of myHobbies) {
    printHobbyInfo(hobby);
}

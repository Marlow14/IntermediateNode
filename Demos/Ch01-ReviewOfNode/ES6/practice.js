const hobbies = [
                    { name: 'volleyball', duration: 20 },
                    { name: 'cooking', duration: 5},
                    { name: 'swimming', duration: 11}
                ];


        function printSportInfo(sport) {
            console.log(` ${sport.name} is played in ${sport.duration} 
                         `)
        }

        printSportInfo(sportsArray[0]);
        printSportInfo(sportsArray[1]);
        printSportInfo(sportsArray[2]);
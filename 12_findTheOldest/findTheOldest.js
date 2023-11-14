const findTheOldest = function(people) {
    let oldest = people[0];

    people.forEach(person => {
        let currentYear = new Date().getFullYear();
        console.log("Current Year: " + currentYear);

        let age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        console.log("Age: " + age);

        if (age > (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth) {
            oldest = person;
        }

    })
    console.log("Oldest: " + oldest.name);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

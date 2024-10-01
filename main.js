const userData = {
    userName: "Kyrylo",
    userAge: 21,
    userLocation: "Odessa",
    userHobbies: [
        "Fishing",
        "Cars",
        "Dota"
    ],
    displayInfo() {
        console.log(`Name: ${this.userName}`);
        console.log(`Age: ${this.userAge}`);
        console.log(`Location: ${this.userLocation}`);
        console.log(`Hobbies: ${this.userHobbies.join(", ")}`);
    }
};

userData.displayInfo();
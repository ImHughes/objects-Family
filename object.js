console.log("Hello world");

const cupcake = {
    color: ["pink", "white", "brown"],
    flavor: "chocolate",
    size: "mini",
    calories: 0,
    icing: true,
    eatCupcake: () => {
        console.log("yum");
    }
}

console.log("cupcake", cupcake);

console.log("what color do we have", cupcake.color);

for (let i = 0; i < cupcake.color.length; i++) {
    console.log("cupcake colors", cupcake.color[i]);
}

cupcake.color.forEach(color => {
    console.log("What is color", color);
    console.log(`the color again is ${color}`);
    console.log(`the color again is ${color} and that is a beautiful color`);
})

//mustange
const cars = {
    color: "red",   
    year: "2015",
    make: "ford",
    model: "mustang"
}
 console.log("car", cars);

 //zoo

 const animals = {
   name = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]
 }
 console.log ("zooAnimals" , animals);

//family lighting                   
 const familyMembers = [

     member1 = {
     name: "hughes",
     age: 37,
     sex: "male"
 }, 

 member2 = {
    name: "john",
    age: 39,
    sex: "male"
},

member3 = {
    name: "rachel",
    age: 33,
    sex: "female"
}]
console.log ("family" , familyMembers);





const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
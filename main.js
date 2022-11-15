//Ternary operator
// const value = 5;
// const result = value < 5 ? 'Число меньше 5' : 'Число больше или равно 5';
// console.log(result);

// const num = 18;
// const res =  num > 10 ? 'Число больше 10' :
//     num === 10 ? 'Число равно 10' : 'Число меньше 10';
// console.log(res);

//array methods
let theMonths = [
    {
        month: "February",
        numberOfDay: 28,
        season: "winter",
        monthNumber: 2,
    },
    {
        month: "March",
        numberOfDay: 31,
        season: "spring",
        monthNumber: 3,
    },
    {
        month: "April",
        numberOfDay: 30,
        season: "spring",
        monthNumber: 4,
    },
    {
        month: "May",
        numberOfDay: 30,
        season: "spring",
        monthNumber: 5,
    },
    {
        month: "June",
        numberOfDay: 30,
        season: "summer",
        monthNumber: 6,
    },
    {
        month: "August",
        numberOfDay: 31,
        season: "summer",
        monthNumber: 8,
    },
    {
        month: "September",
        numberOfDay: 30,
        season: "autumn",
        monthNumber: 9,
    },
    {
        month: "October",
        numberOfDay: 31,
        season: "autumn",
        monthNumber: 10,
    },
    {
        month: "November",
        numberOfDay: 30,
        season: "autumn",
        monthNumber: 11,
    },
];
theMonths.unshift(
    {
        month: "January",
        numberOfDay: 31,
        season: "winter",
        monthNumber: 1,
    }
);
theMonths.push(
    {
        month: "December",
        numberOfDay: 31,
        season: "winter",
        monthNumber: 12,
    }
);
theMonths.splice(6, 0, {
        month: "July",
        numberOfDay: 31,
        season: "summer",
        monthNumber: 7,
    }
);
// console.log(theMonths.find(item => item.month === "May"));
// theMonths = theMonths.filter(item => item.month.length % 2 === 0);
// console.log(theMonths);
// theMonths = theMonths.filter(item => item.month.length !== 4);
// console.log(theMonths);
//
// let sort = theMonths.sort((a, b) =>
//     {
//     if (a.month < b.month) return -1;
//     if (a.month < b.month) return 1;
// }
// );
// // let sort = theMonths.sort(function (a,b)
// // {
// //     if (a.month < b.month) return -1;
// // });
// console.log(sort);

//object methods
const person = {
    firstName: "Arseniy",
    lastName: "Surkov",
    age: 21,
    dateOfBirth: "08.02.2001",
    gadgets: ["Realme 6 PRO", "Acer Nitro 5", "Realme Buds 2", "Canyon Gaming"],
    gadgets2: [
        {
            name: "Phone",
            mark: "realme",
            model: "6 pro"
        }, {
            name: "laptop",
            mark: "acer",
            model: "5 nitro",
        }
    ]
};
// console.log(Object.values(person));

// let newObj = {person};
// console.log(newObj);

// function copy(person) { // проходимся циклом по оригинальному объекту и копируем каждое свойство по очереди
//     let objCopy = {}; // objCopy будет хранить копию person
//     let key;
//
//     for (key in person) {
//         objCopy[key] = person[key]; // копирует каждое свойство objCopy
//     }
//     return objCopy;
// }
// console.log(copy(person));

// let newObj1 = Object.assign({}, person);
// person.age = 24;
// console.log(newObj1);

// let newObj2 = JSON.parse(JSON.stringify(person));
// newObj2.age = 14;
// console.log(newObj2);
// console.log(person);

// if(person.age) {
//     console.log("поле 'age' присутствует в объекте person, его значение " + person.age);
// } else{
//     console.log("нет поля 'age' ");
// }
//
// if(typeof person.gender !== 'undefined') {
//     console.log("поле 'gender' присутствует в объекте person, его значение " + person.gender);
// }
// else{
//     console.log("нет поля 'gender' ");
// }

//request promis with a return to the console.
fetch('https://imdb-api.com/en/API/Top250Movies/k_q0cb7kv2')
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));






//imports
const {greetReader} = require('./index')


//dataset
const userData = [
    { id: 1, name: 'Hans', age: 20 },
    { id: 2, name: 'Barbara', age: 25 },
    { id: 3, name: 'Kevin', age: 30 },
    { id: 4, name: 'Laura', age: 35 },
    { id: 5, name: 'Bob', age: 68 },
    { id: 6, name: 'Anne', age: 21 },
    { id: 7, name: 'Steve', age: 32 },
    { id: 8, name: 'Lee', age: 34 },
    { id: 9, name: 'Teun', age: 24 },
    { id: 10, name: 'Michelle', age: 27 },   
]

//testlist
const list = [1,2,3,5,8]


//tests
test('Test if greeting works', () =>{
    const greet = greetReader()
    expect(greet).toBe('Hi! This works!')
})

// test('')


// test('')


// test('')
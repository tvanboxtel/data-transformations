//imports
const { 
    greetReader,
    getUserNamesByIds,
    getExperiencedUserNamesByIds
} = require('./index')


//dataset
const userData = [
    { id: 1, name: 'Hans', age: 20 },
    { id: 2, name: 'Barbara', age: 25 },
    { id: 3, name: 'Kevin', age: 30 },
    { id: 6, name: 'Laura', age: 35 },
    { id: 7, name: 'Bob', age: 68 },
    { id: 8, name: 'Anne', age: 21 },
    { id: 13, name: 'Steve', age: 32 },
    { id: 18, name: 'Lee', age: 34 },
    { id: 23, name: 'Teun', age: 24 },
    { id: 27, name: 'Michelle', age: 27 },
]

//tests
test('Test if greeting works', () => {
    const greet = greetReader()
    expect(greet).toBe('Hi! This works!')
})

test('Get usernames by ids', () => {
    const ids = [1, 2, 7, 18, 23]
    const names = getUserNamesByIds(ids, users)
    expect(names).toEqual(['Hans', 'Barbara', 'Bob', 'Lee', 'Teun'])
})


test('Get experienced usernames by ids', () => {
    const ids = [1, 2, 7, 18, 23]
    const names = getExperiencedUserNamesByIds(ids, users, 30)
    expect(names).toEqual(['Hans', 'Barbara', 'Bob', 'Lee', 'Teun'])
})


// test('')
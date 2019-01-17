//imports
const { 
    greetReader,
    getUserNamesByIds,
    getExperiencedUserNamesByIds,
    oldestSoFar
} = require('./index')


//dataset
const users = [
    { id: 1, name: 'Semih', age: 20 },
    { id: 2, name: 'Laitin', age: 28 },
    { id: 3, name: 'Rogier', age: 35 },
    { id: 4, name: 'Rein', age: 31 },
    { id: 99, name: 'Mimi', age: 23 },
    { id: 38, name: 'Arien', age: 36 },
]

const people = [
    {name: 'Don', age: 23},
    {name: 'Adam', age: 33},
    {name: 'Steve', age: 14},
    {name: 'Rachel', age: 56},
    {name: 'Maud', age: 46},
    {name: 'Hermien', age: 28}
]


//tests
test('Test if greeting works', () => {
    const greet = greetReader()
    expect(greet).toBe('Hi! This works!')
})

test('Get usernames by ids', () => {
    const ids = [1, 2, 7, 38, 42]
    const names = getUserNamesByIds(ids, users)
    expect(names).toEqual(['Semih', 'Laitin', 'Arien'])
})

test('Get experienced usernames by ids', () => {
    const ids = [1, 2, 7, 38, 42]
    const names = getExperiencedUserNamesByIds(ids, users, 21)
    expect(names).toEqual(['Laitin', 'Arien'])
})


test.only('Oldest person of people', () => {
    const oldPerson = oldestSoFar(people)
    expect(oldPerson).toEqual({name: 'Rachel', age: 56})
})
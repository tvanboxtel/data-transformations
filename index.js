function greetReader(){
    return 'Hi! This works!'
}


function getUserNamesByIds(ids, users){

    // return userPresentInArray = ids.filter(id => {
    //    return users.find(user => user.id === id) !== undefined
    // }).map(id => {
    //    return users.find(user => user.id === id).name
    // })

    return users.filter(user => {
        return ids.includes(user.id) 
    }).map(user => user.name)
}

function getExperiencedUserNamesByIds(ids, users, olderThanAge){
    return users.filter(user => {
        return ids.includes(user.id) && user.age > olderThanAge
    }).map(user => user.name)
}

function oldestSoFar(people) {

    return people.reduce((acc, cur) => {
        if (acc.age > cur.age){
            return acc
        } return cur
    })
    
    // return people.reduce((acc, cur) => 
    // (acc.age > cur.age) ? acc : cur)
      
}
module.exports.greetReader = greetReader
module.exports.getUserNamesByIds = getUserNamesByIds
module.exports.getExperiencedUserNamesByIds = getExperiencedUserNamesByIds
module.exports.oldestSoFar = oldestSoFar


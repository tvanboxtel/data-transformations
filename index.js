function greetReader(){
    return 'Hi! This works!'
}


function getUserNamesByIds(ids, users){

    const userPresentInArray = ids.filter(id => {
       return users.find(user => user.id === id) !== undefined
    }).map(id => {
       return users.find(user => user.id === id).name
    })


    return userPresentInArray

}

function getExperiencedUserNamesByIds(ids, users, olderThanAge){
    // your code here
    return []
}

module.exports.greetReader = greetReader
module.exports.getUserNamesByIds = getUserNamesByIds
module.exports.getExperiencedUserNamesByIds = getExperiencedUserNamesByIds
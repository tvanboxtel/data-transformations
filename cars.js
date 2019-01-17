function slowSearch(brand) {
    return cars.find(car => car.brand === brand)
}

function fastSearch(brand, cars) {
    
    const carsByBrand = cars.reduce((carIndex, car) => {
        carIndex[car.brand] = car
        return carIndex
    }, {})
    return carsByBrand["Mercedes"]   
  }


module.exports.slowSearch = slowSearch 
module.exports.fastSearch = fastSearch

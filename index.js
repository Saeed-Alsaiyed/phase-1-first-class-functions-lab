// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const  returnFirstTwoDrivers = (drivers) => {
    let arr1 = [...drivers];
    return arr1.slice(0,2);
}
const returnLastTwoDrivers =(drivers) =>{
    let arr2 = [...drivers];
    return arr2.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier =(num) =>{
    return function (fare){
        return fare * num;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);




const selectDifferentDrivers =(drivers,oneOfArray ) =>{
    return oneOfArray(drivers);
}

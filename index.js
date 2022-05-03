// Code your solution in this file!




const driver = [`Antonia`, `Nuru`, `Amari`, `Mo`]

function returnFirstTwoDrivers (){
    return [`Antonia`, 'Nuru']

} 

function returnLastTwoDrivers (){
    return [`Amari`, `Mo`]


}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(n){
    return function() {
        return n * 5
    }
}

function fareDoubler(createFareMultiplier){
   return createFareMultiplier * 2


}


function fareTripler(createFareMultiplier){

   return createFareMultiplier * 3


}



function selectDifferentDrivers(driver, returnFirstTwoDrivers){
    return selectDifferentDrivers
}

   
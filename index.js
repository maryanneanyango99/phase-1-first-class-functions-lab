// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


// createFareMultiplier()
// 1) returns a function
// 2) should multiply a given value using the created multiplier

function createFareMultiplier(fr){
    // const unnamed = function(quad){
    //     return(fr*quad)
    // }
    // return unnamed
    function unnamed (quad){
        let quadroupled = fr * quad;
        return(quadroupled)
    }
    return unnamed
}


// fareDoubler()
// 3) is a function
// 4) doubles fares

function fareDoubler(fare){
    return fare*2
}

// fareTripler()
// 5) is a function
// 6) triples fares

function fareTripler(fare){
    return fare*3
}

//     selectDifferentDrivers(arrayOfDrivers, function)
// 3) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// 4) returns the last two drivers when passed returnLastTwoDrivers() as the second argument

function selectDifferentDrivers(arrayOfDrivers, returnDrivers){   
    let selectingDrivers = returnDrivers(arrayOfDrivers);
    return selectingDrivers;
}
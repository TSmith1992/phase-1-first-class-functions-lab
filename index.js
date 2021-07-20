const returnFirstTwoDrivers = function(newArray){
    return newArray.slice(0,2);
}

const returnLastTwoDrivers = function(anotherArray){
    return anotherArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier =item=>function(){
	return item*item
}

const fareDoubler=function foo(createFareMultiplier){
	return createFareMultiplier*2
}

const fareTripler=function foo(createFareMultiplier){
	return createFareMultiplier*3
}

function selectDifferentDrivers(arrayOfDrivers,foo) {
	return foo(arrayOfDrivers);

	

	//let array=returnFirstTwoDrivers(arrayOfDrivers) || returnLastTwoDrivers(arrayOfDrivers);

	//return array
} 

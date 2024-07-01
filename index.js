// Assuming returnFirstTwoDrivers and returnLastTwoDrivers are defined as:
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // fareDoubler
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers
  function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
  }
  

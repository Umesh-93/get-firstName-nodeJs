const getPersonDetail = require("../country/state/city/index");
const getPersonNameList = require("../utilities/utils/index");

const getPeopleInCity = (getPersonDetail) => {
  return getPersonNameList(getPersonDetail);
};

module.exports = getPeopleInCity;

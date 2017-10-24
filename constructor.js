'use strict';
//Constructors! Think of it as a specialized machine in a factory that creates new objects
//Prototypes are the functionality that the machine adds to the objects
//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//we need to creat a place for our list of all locations to be placed when we create them
var allLocations = [];
//we need to define a variable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;
var totalTotal = 0;
//constructor functions usually begin with an Uppercase letter
// create MakeLocation object contructor function
function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
//a function called MakeLocation will be a template for creating new objects that represent other locations
//the statements in this function add properties and or methods to the object
//the this keyword is used instead of the object name to indicate that the property or method belongs to the object that this function creates
//the function has four parameters and each one sets the value of a property in the object ex: maxCustPerHour
//notice how each statement in the Constructor ends in a semicolon not a comma
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
//why is this in an array?
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  allLocations.push(this);
  //using the this keyword in front of the method to show that the method belongs to the object that this function creates
  this.calcRandCustByHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  };
  this.calcCookiesSoldByHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[i]));
      console.log(this.cookiesSoldByHour[i]);
      this.totalCookies += this.cookiesSoldByHour[i];
    }
  };
//call the methods in the constructor that are now prototypes available to the new objects the constructor will make
  this.calcRandCustByHour();
  this.calcCookiesSoldByHour();
}

// call function in a function
//our constructor function just created five new objects with their own unique values used in properties of this object (name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour)
function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki Beach', 2, 16, 4.6);
};
makeStands();

//time to create the table in javascript
// make header row
//table needs an id in html
//look up table element html in mdn and explain how they will need to create elements and append like they had before
function makeHeaderRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  cookiestands.appendChild(trEl);
};
makeHeaderRow();

// make data rows
for (var j = 0; j < allLocations.length; j++) {
  function makeOneDataRow() {
    var cookiestands = document.getElementById('cookiestands');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allLocations[j].name;
    trEl.appendChild(tdEl);
    //
    for (var i = 0; i < hours.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = allLocations[j].cookiesSoldByHour[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = allLocations[j].totalCookies;
    trEl.appendChild(tdEl);
    cookiestands.appendChild(trEl);
  };
  makeOneDataRow();
};

// make totals row
function makeTotalsRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    totalCookiesByHour = 0;
    for (j = 0; j < allLocations.length; j++) {
      totalCookiesByHour += allLocations[j].cookiesSoldByHour[i];

    }
    tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesByHour;
    trEl.appendChild(tdEl);
    totalTotal += totalCookiesByHour;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalTotal;
  trEl.appendChild(tdEl);

  cookiestands.appendChild(trEl);
};
makeTotalsRow();

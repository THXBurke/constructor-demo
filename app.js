'use strict';
//object literal
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// First and Pike Location
var firstAndPike = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  // methods

  // method for random  customers by hour
  calcRandCustByHour: function() {
//what is happening here? Why hours.length?
    for (var i = 0; i < hours.length; i++) {
      //what is happening with this method? Math.floor() rounds number down to nearest integer
      //Math.random() generates a random number between 0 (inclusive) and 1 (not inclusive) pg 135 of your books
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  // method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
      this.totalCookies += this.cookiesSoldByHour[j];
    }
  },
//showing in the browser by DOM manipulation
  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');

//calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

//DOM manipulation irl!!!
//create a variable to be able to append an item to our list.
//create a new h3 element
    var h3El = document.createElement('h3');
//give text to the new h3 element we've appended to our list
    h3El.textContent = this.name;
//appends to the
    fandp.appendChild(h3El);
//what is this for loop doing?
    for (var k = 0; k < hours.length; k++) {
//stepping through the hours array and
      var liEl = document.createElement('li');
//creating li elements with text of the hours + cookiesSoldByHour + the text cookies
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
//appending the elements to the browser of the just looped list
      firstandpike.appendChild(liEl);
    } //SAVE THIS FOR THEM TO FIGURE OUT BUT GIVE CLUES
    var liToEl = document.createElement('li');
    console.log(this.totalCookies);
    liToEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    firstandpike.appendChild(liToEl);
  }
};
firstAndPike.render();

//sometimes you will want several objects to represent similar things.
//object Constructors can use a function as a template for creating objects.
//First, create the template with the object's properties and methods.

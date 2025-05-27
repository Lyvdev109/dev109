//Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

//Create two hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

//Update the HTML for the page
var detail1 = quayHotel.name + 'rooms: ';
  details1 += quayHotel.checkAvailability();
var elHotel2 = documant.getElementById('hotel2');
elHotel2.textContent = details2;


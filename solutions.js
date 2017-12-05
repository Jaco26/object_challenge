var locations = []; // this array will hold your objects

// write object constructor function
function Location(state, revenue, locations) {
    this.state = state;
    this.revenue = revenue;
    this.locations = locations;
    this.averageRevenue = function () {
        return Math.round(this.revenue / this.locations);
    }
}

// create object instances
var illinois = new Location('IL', 7000000, 12);
var minnesota = new Location('MN', 2500000, 3);

// add object instances to locations array
locations.push(illinois);
locations.push(minnesota);

console.log(locations);

// DOM is ready, have at it!
$(document).ready(start);

function start() {
    console.log('DOM is ready.');
    // append locations to the DOM as a list  
    for (var i = 0; i < locations.length; i++) {
        $loc = $('<li>');
        $loc.text(locations[i].state + ': annual revenue: $' + locations[i].revenue + ' locations: ' + locations[i].locations);
        $loc.append('<p>Avg revenue per location: $' + locations[i].averageRevenue() + '</p>');

        $('#locations').append($loc);
    }

}
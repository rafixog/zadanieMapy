var markers = [];
var curLocation = [10, 10];

var position;

var map = L.map('mapid').setView(curLocation, 10);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.attributionControl.setPrefix(false);
function addMarker(e) {
    var newMarker = new L.marker(e.latlng, { draggable: 'true' });
    newMarker.addTo(map);
    position = newMarker.getLatLng();
    markers.push(newMarker);
}
map.on('click', addMarker);

function handleTable(e) {
    var tableBody = document.getElementById('tableBody');
    var tableRowNum = `<tr><th scope="row">${markers.length}</th><td>${position.lat}</td><td>${position.lng}</td></tr>`;
    tableBody.innerHTML += tableRowNum;
}
map.on('click', handleTable);
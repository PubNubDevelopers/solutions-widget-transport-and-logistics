var activeVehicles = 0;
var userLocation = {
  lat: PUBNUB_LAT,
  lng: PUBNUB_LNG,
};

function dispatchVehicle_click() {
  document.getElementById("developer-note").style.display = "none";
  //  Rate limit the speed that vehicles can be summoned (directions api is rate limited)
  document.getElementById("btnDispatchVehicle").disabled = true;
  activeVehicles++;
  if (activeVehicles < MAX_ACTIVE_VEHICLES) {
    setTimeout(
      "document.getElementById('btnDispatchVehicle').disabled = false;",
      2000
    );   
  }

  zoomOnPosition(userLocation);
  server_dispatchVehicle(userLocation);

  // Close sidebar after dispatching vehicle
  var sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('open')) {
    toggleSidebar();
  }
}
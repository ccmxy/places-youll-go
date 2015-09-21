$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });//end of $("#add-address").click(function()
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedSpot = $("input#new-spot").val();
    var newContact = { location: inputtedLocation, spot: inputtedSpot, addresses: [] };
    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
      newContact.addresses.push(newAddress);
    }); //end of $("form#new-place").submit(function(event)
    $("ul#places").append("<li><span class='place'>" + newContact.spot + "</span></li>");
    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newContact.spot);
      $(".location").text(newContact.location);
      $(".spot").text(newContact.spot);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      });//end of newContact.addresses.forEach(function(address)
    }); //end of $(".place").last().click(function()
    $("input#new-location").val("");
    $("input#new-spot").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
  }); //end of $("form#new-place").submit(function(event)
}); //end of $(document).ready(function()

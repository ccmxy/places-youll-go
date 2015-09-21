$(document).ready(function() {
  $("#add-landmark").click(function() {
    $("#new-landmark").append('<div class="new-landmark">' +
                                 '<div class="form-group">' +
                                   '<label for="new-landmark-thingy">Landmark</label>' +
                                   '<input type="text" class="form-control new-landmark-thingy">' +
                                 '</div>'
                                 );
  });//end of $("#add-landmark").click(function()

  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedSpot = $("input#new-spot").val();
    var newContact = { location: inputtedLocation, spot: inputtedSpot, /*addresses: [],*/ landmarks: [] };

    //for each
    $(".new-landmark").each(function() {
        var inputtedLandmark = $(this).find("input.new-landmark-thingy").val();
        //Note: The variable landmarkName cannot have dashes in it.
        var newLand = { landmarkName: inputtedLandmark };
        newContact.landmarks.push(newLand);
    });

    $("ul#places").append("<li><span class='place'>" + newContact.spot + "</span></li>");
    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newContact.spot);
      $(".location").text(newContact.location);
      $(".spot").text(newContact.spot);

      $("ul#landmarks").text("");
      newContact.landmarks.forEach(function(landmark) {
        $("ul#landmarks").append("<li>" + landmark.landmarkName + "</li>");
      });



    }); //end of $(".place").last().click(function()
    //Empty out the boxes for new input:
    $("input#new-location").val("");
    $("input#new-spot").val("");
    $("input.new-landmark-thingy").val("");
  }); //end of $("form#new-place").submit(function(event)
}); //end of $(document).ready(function()

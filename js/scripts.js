$(document).ready(function() {
  $("#add-landmark").click(function() {
    $("#new-landmark").append('<div class="new-landmark">' +
                                 '<div class="form-group">' +
                                   '<label for="new-landmark-thingy">Landmark</label>' +
                                   '<input type="text" class="form-control new-landmark-thingy">' +
                                 '</div>'
                                 );
  });//end of $("#add-landmark").click(function()

  $("#add-time").click(function() {
    $("#new-time").append('<div class="new-time">' +
                                 '<div class="form-group">' +
                                   '<label for="new-time-thingy">Time</label>' +
                                   '<input type="text" class="form-control new-time-thingy">' +
                                 '</div>'
                                 );
  });//end of $("#add-landmark").click(function()


  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedSpot = $("input#new-spot").val();
    var newPlace = { location: inputtedLocation, spot: inputtedSpot, landmarks: [], times: [] };

    //for each
    $(".new-landmark").each(function() {
        var inputtedLandmark = $(this).find("input.new-landmark-thingy").val();
        //Note: The variable landmarkName cannot have dashes in it.
        var newLand = { landmarkName: inputtedLandmark };
        newPlace.landmarks.push(newLand);
    });

    $(".new-time").each(function() {
        var inputtedTime = $(this).find("input.new-time-thingy").val();
        //Note: The variable landmarkName cannot have dashes in it.
        var newLand2 = { timeName: inputtedTime };
        newPlace.times.push(newLand2);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.spot + "</span></li>");
    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.spot);
      $(".location").text(newPlace.location);
      $(".spot").text(newPlace.spot);

      $("ul#landmarks").text("");
      newPlace.landmarks.forEach(function(landmark) {
        $("ul#landmarks").append("<li>" + landmark.landmarkName + "</li>");
      });

      $("ul#times").text("");
      newPlace.times.forEach(function(time) {
        $("ul#times").append("<li>" + time.timeName + "</li>");
      });


    }); //end of $(".place").last().click(function()
    //Empty out the boxes for new input:
    $("input#new-location").val("");
    $("input#new-spot").val("");
    $("input.new-landmark-thingy").val("");
    $("input.new-time-thingy").val("");

  }); //end of $("form#new-place").submit(function(event)
}); //end of $(document).ready(function()

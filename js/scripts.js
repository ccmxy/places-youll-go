$(document).ready(function() {
  $("#add-landmark").click(function() {
    $("#new-landmark").append('<div class="new-landmark">' +
                                 '<div class="form-group">' +
                                   '<label for="new-landmark-thingy">Landmark</label>' +
                                   '<input type="text" class="form-control new-landmark-thingy">' +
                                 '</div>'
                                 );
  });//end of $("#add-landmark").click(function()
/*
  $("#add-time-visited").click(function() {
    $("#new-time-visited").append('<div class="new-time-visited">' +
                               '<div class="form-group">' +
                                 '<label for="when-visited">When you visited this spot</label>' +
                                 '<input type="text" class="form-control when-visited">' +
                               '</div>'
                               );
});//end of $("#add-time-visited").click(function() */


  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedSpot = $("input#new-spot").val();
    var newPlace = { location: inputtedLocation, spot: inputtedSpot, landmarks: [] };

    //for each
    $(".new-landmark").each(function() {
        var inputtedLandmark = $(this).find("input.new-landmark-thingy").val();
        //Note: The variable landmarkName cannot have dashes in it.
        var newLand = { landmarkName: inputtedLandmark };
        newPlace.landmarks.push(newLand);
    });
/*
    $(".new-time-visited").each(function() {
        var inputtedTime = $(this).find("input.when-visited").val();
        var newTime = { seasonVisited: inputtedTime };
        newPlace.timesVisited.push(newTime);
    });
*/
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
/*
      $("ul#when").text("");
      newPlace.timesVisited.forEach(function(huh) {
        $("ul#timesVisited").append("<li>" + timesVisited.seasonVisited + "</li>");
      });
*/
    }); //end of $(".place").last().click(function()
    //Empty out the boxes for new input:
    $("input#new-location").val("");
    $("input#new-spot").val("");
    $("input.new-landmark-thingy").val("");
//    $("input.when-visited").val("");

  }); //end of $("form#new-place").submit(function(event)
}); //end of $(document).ready(function()

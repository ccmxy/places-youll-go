$(document).ready(function() {
  $("#add-landmark").click(function() {
    $("#new-landmark").append('<div class="new-landmark">' +
                                 '<div class="form-group">' +
                                   '<label for="new-landmark-thingy">Landmark</label>' +
                                   '<input type="text" class="form-control new-landmark-thingy">' +
                                 '</div>'
                                 );
  });//end of $("#add-landmark").click(function()

  $("#add-landmark2").click(function() {
    $("#new-landmark2").append('<div class="new-landmark2">' +
                                 '<div class="form-group">' +
                                   '<label for="new-landmark2-thingy">Landmark2</label>' +
                                   '<input type="text" class="form-control new-landmark2-thingy">' +
                                 '</div>'
                                 );
  });//end of $("#add-landmark").click(function()


  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedSpot = $("input#new-spot").val();
    var newPlace = { location: inputtedLocation, spot: inputtedSpot, landmarks: [], landmark2s: [] };

    //for each
    $(".new-landmark").each(function() {
        var inputtedLandmark = $(this).find("input.new-landmark-thingy").val();
        //Note: The variable landmarkName cannot have dashes in it.
        var newLand = { landmarkName: inputtedLandmark };
        newPlace.landmarks.push(newLand);
    });

    $(".new-landmark2").each(function() {
        var inputtedLandmark2 = $(this).find("input.new-landmark2-thingy").val();
        //Note: The variable landmarkName cannot have dashes in it.
        var newLand2 = { landmark2Name: inputtedLandmark2 };
        newPlace.landmark2s.push(newLand2);
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

      $("ul#landmark2s").text("");
      newPlace.landmark2s.forEach(function(landmark2) {
        $("ul#landmark2s").append("<li>" + landmark2.landmark2Name + "</li>");
      });


    }); //end of $(".place").last().click(function()
    //Empty out the boxes for new input:
    $("input#new-location").val("");
    $("input#new-spot").val("");
    $("input.new-landmark-thingy").val("");
    $("input.new-landmark2-thingy").val("");

  }); //end of $("form#new-place").submit(function(event)
}); //end of $(document).ready(function()


$(document).ready(function() {
    $.ajax({
        url: queryURL,
        method: "GET"
      })

      
    
        .then(function (response) {
        
          var results = response.data;

         
          for (var i = 0; i < results.length; i++) {

            
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              
              var gifDiv = $("<div>");

             
              var rating = results[i].rating;

              
              var p = $("<p>").text("Rating: " + rating);


              var personImage = $("<img>");

              
              personImage.attr("src", results[i].images.fixed_height.url);
            
              gifDiv.append(p);
              gifDiv.append(personImage);

              
              $("#gifs-appear-here").prepend(gifDiv);
            }
          }

          $(document).ready(function() {
            var icon = $('.random dancing');
            icon.click(function() {
               icon.toggleClass('active');
               return false;
            });
          });

    var renderButtons = function() {
        for (i = 0; i < topics.length; i++) {
            $("#buttonville").append(`<button class="btn btn-sm btn-dark giphy-button" data-subject="${topics[i]}">${topics[i]}</button>`)
        }
    }
  // had trouble playing and pausing gifs
  // had trouble with the search column and getting it to turn into a button 
  // :,[ 

        });
    });
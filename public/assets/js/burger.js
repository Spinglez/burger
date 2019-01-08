$(function() {
  $(".is-devoured").on("click", function(event) {
    let id = $(this).data("id");
    let isDevoured = $(this).data("devoured");

    let isDevouredTrue = {
      devoured: isDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isDevouredTrue
    }).then(
      function() {
        console.log("chaning state of devoured", isDevouredTrue);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let burger = {
      name: $("#burgers_name").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: burger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

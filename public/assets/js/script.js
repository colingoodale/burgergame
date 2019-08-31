$(document).ready(function () {
  $("#devour-form .devour").on("click", function (event) {
    console.log("Clicked");
    event.preventDefault();
    var burgerInfo = {
      burger_id: $(this).val()
    };
    console.log(burgerInfo);
    $.ajax({
      method: "PUT",
      url: "/burgers/update/" + burgerInfo.burger_id,
      data: burgerInfo
    }).then(function (data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});

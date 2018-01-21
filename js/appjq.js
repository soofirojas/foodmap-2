$(document).ready(loadApp);
//llamar la barra de búsqueda del HTML
var $searchRestaurant = $("#searcher");
//console.log($searchRestaurant);
//detonar el evento a search restaurant .keyup
function loadApp() {
  $("#searcher").keyup(filterRestaurants);
}

//Llamas en load page la de filter contacts
function filterRestaurants (){
  var searchRestaurant = $("#searcher").val().toLowerCase();
  //determina si el valor ingresado es mayor a 0 y sin espacios
    if($("#searcher").val().trim().length > 0) {
      //contacts es el array vacio y contact es el objeto armado de dos variables
        var filteredRestaurant = restaurants.filter(function(restaurants) {
          console.log(restaurants);
            return restaurants.name.toLowerCase().indexOf(searchRestaurant) >= 0;
        });
      $("#restaurant-card").empty();
      filteredRestaurants.forEach(function(restaurants){
        paintContactsInHtml(restaurants);
      });
    }
  }
    console.log(filterRestaurants);

    /*else {
      $("#restaurant-card").empty();
      restaurants.forEach(function(object){
        paintContactsInHtml(object);
      });      
    }


    function paintContactsInHtml (object) {
      // crear elementos con DOM
      var $newContact = $("<article />", {
        "class": "card-panel hoverable"
      });
      var $containerContactName = $("<h4 />");
      var $deleteContactButton = $("<button type='button' />");
      var  $removeIcono = $("<i  />", { 
        "class": "material-icons"
      });

//$(document).ready(loadPage);

//Traer elementos del html al app
 

//var $nameInput = $("#name-input");

//función para cargar las demás funciones
//function loadPage() {
/*  $(".modal").modal();
  $("#form").submit(addContact);
  $nameInput.keyup(validateContact);
  $phoneInput.keyup(validateContact);
  $("#searcher").keyup(filterContacts);
}*/







//console.log(restaurants[0].rating);


//$document.ready(function(e) {

//

//console.log(restaurants[0].name);*/
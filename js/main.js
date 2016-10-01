function add_option(selectId, value) {
  option = document.createElement("option")
  option.text = firstUpCase(value)
  option.value = value;
  animalSelect = document.getElementById(selectId)
  animalSelect.add(option);
}

/*
  cosas para mostrar mañana!!!
*/
document.getElementById("holi").innerHTML = "Hello JavaScript!";
//add_option("animal-select", "panther")

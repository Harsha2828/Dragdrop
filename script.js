function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggedItem = document.getElementById(data);
  var dropZone = event.target;
  dropZone.appendChild(draggedItem);
}
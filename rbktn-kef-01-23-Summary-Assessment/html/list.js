document.addEventListener("DOMContentLoaded", function (event) {
    console.log("this is why JavaScript is important :)");
    var list = document.body.getElementsByTagName("ul")[0];
    var input = document.body.getElementsByTagName("input")[0];
    input.onkeydown = function (event) {
      if (event.keyCode == 13) {
        var newListItem = document.createElement("LI");
        var textNode = document.createTextNode(this.value);
        newListItem.setAttribute("class", "listItem");
        newListItem.appendChild(textNode);
        list.appendChild(newListItem);
        input.value = "";
        return false;
      }
    };
});
function makeTable() {
  makeSudoku();
  var table = document.createElement("table");
  var tableBody = document.createElement("tbody");

  for(var i=0; i<3; i++) {
    var row = document.createElement("tr");
    for(var j=0; j<3; j++) {
      var cell = document.createElement("td");
      var nonant = document.createElement("table");
      var nonantBody = document.createElement("tbody");
      for(var k=0; k<3; k++) {
        var nonantRow = document.createElement("tr");
        for(var l=0; l<3; l++) {
          var nonantCell = document.createElement("td");
          var cellText = document.createTextNode(3*k + (l+1));
          nonantCell.appendChild(cellText);
          nonantRow.appendChild(nonantCell);
        }
        nonantBody.appendChild(nonantRow);
      }
      nonant.appendChild(nonantBody);
      nonant.setAttribute("border", "2");
      cell.appendChild(nonant);
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);
  document.getElementById("table").appendChild(table);
  table.setAttribute("border", "2");
}

function makeSudoku() {
  var table = [];
  for(var i=1; i<=9; i++) {
    table[i] = [];
  }

  console.log(table);
}

function checkRow() {

}
function checkColumn() {

}
function checkNonant() {

}

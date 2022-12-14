function showTable() {
    var table = document.getElementById("table0");
    var row = table.insertRow(-1);
    var cell;
    var text;
    for (var i = 0; i < 5; i++) {
        cell = row.insertCell(-1);
        text = "Test";
        //  text = "Row " + row.rowIndex + " Cell " + i;
        cell.appendChild(document.createTextNode(text));
    }
}

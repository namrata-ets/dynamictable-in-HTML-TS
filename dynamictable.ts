function showTable():void{
    var table = <HTMLTableElement>document.getElementById("table0");
    const row = table.insertRow(-1);
    var cell;
    var text;
  
    for (let i = 0; i < 5; i++) {
      cell = row.insertCell(-1);
      text="Test";
    //  text = "Row " + row.rowIndex + " Cell " + i;
      cell.appendChild(document.createTextNode(text));
    }
}
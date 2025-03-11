function insert_Row() {
    //Write your code here
  
    let table = document.getElementById("sampleTable"); // Get the table by ID
    let newRow = table.insertRow(0); // Insert a new row at the top (index 0)
    
    let cell1 = newRow.insertCell(0); // Insert first cell
    let cell2 = newRow.insertCell(1); // Insert second cell
    
    cell1.innerHTML = "New Cell1"; // Set text for first cell
    cell2.innerHTML = "New Cell2"; // Set text for second cell
}

  
}

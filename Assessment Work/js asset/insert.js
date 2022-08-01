
            var rIndex,
            table = document.getElementById("table");
        
        // check the empty input
        function checkEmptyInput()
        {
            var isEmpty = false,
                fname = document.getElementById("fname").value,
                lname = document.getElementById("lname").value,
                Contact = document.getElementById("Contact").value;   
                address = document.getElementById("address").value;
                imContact = document.getElementById("image_input").value;



        // alert popups
            if(fname === ""){
                alert("First Name Cannot Be Empty");
                isEmpty = true;
            }
            else if(lname === ""){
                alert("Last Name Cannot Be Empty");
                isEmpty = true;
            }
            else if(Contact === ""){
                alert("Contact Cannot Be Empty");
                isEmpty = true;
            }
            else if(address === ""){
                alert("address Cannot Be Empty");
                isEmpty = true;
            }
            else if(image_input === ""){
                alert("ImContact Cannot Be Empty");
                isEmpty = true;
            }
            return isEmpty;
             
        }
        
        // adding rows
        function addHtmlTableRow()
        {
            
            if(!checkEmptyInput()){
            var newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3),
                cell5 = newRow.insertCell(4),

                fname = document.getElementById("fname").value,
                lname = document.getElementById("lname").value,
                Contact = document.getElementById("Contact").value;
                address = document.getElementById("address").value;
                imContact = document.getElementById("image_input").value;

        
            cell1.innerHTML = fname;
            cell2.innerHTML = lname;
            cell3.innerHTML = Contact;
            cell4.innerHTML = address;
            cell5.innerHTML = image_input;

            selectedRowToInput();
        }
        }
        
        function selectedRowToInput()
        {
            
            for(var i = 0; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                  rIndex = this.rowIndex;
                  document.getElementById("fname").value = this.cells[0].innerHTML;
                  document.getElementById("lname").value = this.cells[1].innerHTML;
                  document.getElementById("Contact").value = this.cells[2].innerHTML;
                  document.getElementById("address").value = this.cells[3].innerHTML;
                  document.getElementById("image_input").value = this.cells[4].innerHTML;

                };
            }
        }
        selectedRowToInput();
        // Table input system
        function editHtmlTbleSelectedRow()
        {
            var fname = document.getElementById("fname").value,
                lname = document.getElementById("lname").value,
                Contact = document.getElementById("Contact").value;
                address = document.getElementById("address").value;
                imContact = document.getElementById("image_input").value;

           if(!checkEmptyInput()){
            table.rows[rIndex].cells[0].innerHTML = fname;
            
            table.rows[rIndex].cells[1].innerHTML = lname;
            table.rows[rIndex].cells[2].innerHTML = Contact;
            table.rows[rIndex].cells[3].innerHTML = address;
            table.rows[rIndex].cells[4].innerHTML = image_input;

          }
        }
        // for removing data
        function removeSelectedRow()
        {
            table.deleteRow(rIndex);
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("Contact").value = "";
            document.getElementById("address").value = "";
            document.getElementById("image_input").value = "";

        }
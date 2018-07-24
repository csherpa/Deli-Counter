

			var table = document.getElementById('myTable');
			var customers = [];
			
			function addCustomer(){

				if(!checkEmptyInput()){
				var customerOrder = {
					client: document.getElementById('CName').value,
					food: document.getElementById('COrder').value
				}
				customers.push(customerOrder.client);
				
				var row = table.insertRow();
				
				var positionCell = row.insertCell(0);
				var nameCell = row.insertCell(1);
				var orderCell = row.insertCell(2);

				var firstName = document.getElementById('CName').value;
				var orderName = document.getElementById('COrder').value;
				
				positionCell.innerHTML = customers.length;
				nameCell.innerHTML = firstName;
				orderCell.innerHTML = orderName;

				row.appendChild(positionCell);
				row.appendChild(nameCell);
				row.appendChild(orderCell);
				
				
				document.getElementById('CName').value = "";
				document.getElementById('COrder').value = "";
						
			}
			deleteTr();	
		}
			function checkEmptyInput(){

				var isEmpty = false;

					Name = document.getElementById('CName').value;
					Order = document.getElementById('COrder').value;

					if(Name === ""){
						alert('Submit Name');
						isEmpty = true;

					}else if(Order === ""){
						alert('Submit Order')
						isEmpty = true;
					}
					return isEmpty;
					
				}
				
			function serveCustomer(){
				var table = document.getElementById('myTable');
				table.deleteRow(2);
				document.getElementById('noOrder').innerHTML = customers.shift() + " was served. ";
				
			}
			function deleteTr(){
				var first = document.getElementById('myCell');
				while(first.hasChildNodes()){
					first.removeChild(first.firstChild);
				}
			}

			function reloadPage(){
				location.reload(true);
			}
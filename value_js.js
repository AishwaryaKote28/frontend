function myfunction(){
	var table=document.getElementById("table");
	table.rows[parseInt(document.getElementById("row").value)].cells[document.getElementById("coloumn").value].innerHTML=document.getElementById("result").value;
};
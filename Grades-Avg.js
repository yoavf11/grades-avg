function deleteRow(el) {  
  var tbl = el.parentNode.parentNode.parentNode;
  var row = el.parentNode.parentNode.rowIndex;
  tbl.deleteRow(row);
}

function addRow() {
  var d1 = document.getElementById("courseName").value;
  var d2 = parseInt(document.getElementById("nkz").value) || 0;
  var d3 = parseInt(document.getElementById("grade").value) || 0;

  if(d1 == "" || d2 <= 0 || d3 <= 0) {
    if (d1 == ""){
      document.getElementById("courseName").style.background="red";
    }
    else{
      document.getElementById("courseName").style.background="";
    }
    if (d2 <= 0){
      document.getElementById("nkz").style.background="red";
    }
    else{
      document.getElementById("nkz").style.background="";
    }
    if (d3 <= 0){
      document.getElementById("grade").style.background="red";
    }
    else {
      document.getElementById("grade").style.background="";
    }
  }

  else {
    document.getElementById("courseName").style.background="";
    document.getElementById("nkz").style.background="";
    document.getElementById("grade").style.background="";
    
      var table = document.getElementById("table");
      var row= document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");

      td1.innerHTML = document.getElementById("courseName").value;
      td2.innerHTML  = document.getElementById("nkz").value;
      td3.innerHTML  = document.getElementById("grade").value;
      td4.innerHTML = '<input type="button" value="מחק שורה" onClick="deleteRow(this)" id="del"></input>'

      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      
      table.children[0].appendChild(row);

    document.getElementById("courseName").value="";
    document.getElementById("nkz").value="";
    document.getElementById("grade").value="";
    }
}

function calcAvg() {
  var table = document.getElementById("table");
  var nkz = 0, grnkz = 0;
            
  for(var i = 2; i < table.rows.length; i++)
  {
      nkz = nkz + parseInt(table.rows[i].cells[1].innerHTML);
      grnkz = grnkz + parseInt(table.rows[i].cells[1].innerHTML * table.rows[i].cells[2].innerHTML);
  }

  console.log(nkz, grnkz);

  var res = grnkz/nkz || 0;

  if(res==0){
      document.getElementById("res").innerHTML = "יש להזין לפחות קורס אחד";
  }
  else{
    document.getElementById("res").innerHTML = "הממוצע שלך הוא " + res;
  }
}

function predictAvg() {

}
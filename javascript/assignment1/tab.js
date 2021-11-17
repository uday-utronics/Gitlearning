function createTable()
{
    row = window.prompt("input no. of rows",1);
    col = window.prompt("input no. of columns",1);

    for(var r=0;r<parseInt(row,10);r++ ){
        var x = document.getElementById('mytable').insertRow(r);
        //document.write(r);
        for(var c=0;c<parseInt(col,10);c++){
            var y =x.insertCell(c);
            y.innerHTML = "Row-"+r+" column-"+c;
           // document.write(c);
        }
    }
}
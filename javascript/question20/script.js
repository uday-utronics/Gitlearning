var submit = document.getElementById("submit");
var reset = document.getElementById("reset");
var summary = document.getElementById("summary");
var myform = document.getElementsByName('myform')

submit.onclick= function(){
    var empty = true;
$('input[type="text"]').each(function() {
   if ($(this).val() != "") {
      empty = false;
      return false;
   }
});
if(empty){
    alert("order placed");
}
    
}
reset.onclick = function(){
    document.getElementById('myform').reset();
}
summary.onclick= function(){

    var x = document.getElementById('mytable').insertRow(myform.name.value);

}

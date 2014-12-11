$(function() {
//Calc Object with display, clear, and doCal methods
var Calc = {
	display:function(v) {
		$("#display").val(v);
	},
	clear:function() {
		$("#display").val(" ");
	},
	doCal:function(val) {
		var result="";
		var dtemp=$("#display").val();
		if(dtemp=="0") {
			this.clear();
			result=val;
		}else if(val=="c") {
			this.clear();
		}else if(val=="=") {
			result=eval(dtemp);
		}else{
			result=dtemp+val;
		}
		this.display(result);
	}
}
//Keyboard key press event.
$("body").keypress(function(e) {
	Calc.doCal(String.fromCharCode(e.which));
});
//calc UI click events
$('.calc button').click(function(e) {
	e.preventDefault();
	Calc.doCal(this.value);
});
});
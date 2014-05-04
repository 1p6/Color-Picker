$(function(){
	$("#rslider, #gslider, #bslider").slider({
		max: 255,
		value: 255,
		range: "min",
		slide: slide,
		change: slide
	});
	$("#rslider").slider("value", 0);
});
function slide()
{
	red=$("#rslider").slider("value");
	green=$("#gslider").slider("value");
	blue=$("#bslider").slider("value");
	$("#r").innerHTML=red;
	$("#g").innerHTML=green;
	$("#b").innerHTML=blue;
	$("#output").css("background-color", "rgb("+red+","+green+","+blue+")");
}

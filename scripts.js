function drawTree(ilosc) {
  var i = 0;
  var j = 0;
	for (i = 0; i < ilosc; i++) {
		var star = "";
		for (j = 0; j <= i; j++) {
			var star = star += "*";
		}
	console.log(star);
	}
}

drawTree(10);
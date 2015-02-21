var collabo = {};

collabo.friends = [
	"allison",
	"andrea",
	"anna",
	"hannah",
	"heather",
	"ian",
	"jenny",
	"jeremy",
	"jordan",
	"jordyn",
	"karley",
	"kevin",
	"laura",
	"lisa",
	"lucas",
	"nate",
	"omar",
	"ross",
	"sarahh",
	"sarahl",
	"steph",
	"tammy",
	"trudy",
	"vivien",
	"winston"
	];

collabo.init = function() {
	collabo.build(collabo.friends);
};

collabo.build = function(students) {
	collabo.friends.sort(function() {
		return 0.5 - Math.random();
	});
	$.each(students, function(i){
		var name = students[i];
		var image = "<img src=\'images/" + name + ".jpg'>";
		var link = "<a href='students/" + name + ".html'>";
		var title = "<h2>" + name + "</h2>";
		var container = "<li>" + link + title + image + "</a></li>";
		$('ul.friend').append(container);
	});
};

$(function() {
	collabo.init();
});


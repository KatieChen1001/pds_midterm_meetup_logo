var frontPoly, backPoly, bg;

var myColors = [];

var columns = 12;
var smallTriWidth = 30; //isometric triangle width

var colorsObjectArrayOut, colorsObjectArrayIn;



function setup() {
	createCanvas(800, 800);
	backPoly = new polygon(columns,smallTriWidth);
	frontPoly = new FrontPolygon(columns, smallTriWidth);
	myColors[0] = color(251, 236,190);
	myColors[1] = color(240,200,140);
	myColors[2] = color(193,144,94);



		// triangles pointing out 
		colorsObjectArrayOut = [
		{ indexNum: 0, coloring: myColors[0]},
		{ indexNum: 1, coloring: myColors[0]},
		{ indexNum: 12, coloring: myColors[0] },
		{ indexNum: 13, coloring: myColors[0] },
		{ indexNum: 23, coloring: myColors[0] },
		{ indexNum: 24, coloring: myColors[0] },
		{ indexNum: 33, coloring: myColors[0] },
		{ indexNum: 34, coloring: myColors[0] },
		{ indexNum: 42, coloring: myColors[0] },
		{ indexNum: 43, coloring: myColors[0] },
		{ indexNum: 50, coloring: myColors[0] },

		{ indexNum: 6, coloring: myColors[1] },
		{ indexNum: 7, coloring: myColors[1] },
		{ indexNum: 17, coloring: myColors[1] },
		{ indexNum: 18, coloring: myColors[1] },
		{ indexNum: 27, coloring: myColors[1] },
		{ indexNum: 28, coloring: myColors[1] },
		{ indexNum: 36, coloring: myColors[1] },
		{ indexNum: 37, coloring: myColors[1] },
		{ indexNum: 44, coloring: myColors[1] },
		{ indexNum: 45, coloring: myColors[1] },
		{ indexNum: 46, coloring: myColors[1] },
		{ indexNum: 47, coloring: myColors[1] },
		{ indexNum: 51, coloring: myColors[1] },
		{ indexNum: 52, coloring: myColors[1] },
		{ indexNum: 53, coloring: myColors[1] },
		{ indexNum: 54, coloring: myColors[1] },
		{ indexNum: 55, coloring: myColors[1] },

		{ indexNum: 10, coloring: myColors[2] },
		{ indexNum: 11, coloring: myColors[2] },
		{ indexNum: 21, coloring: myColors[2] },
		{ indexNum: 22, coloring: myColors[2] },
		{ indexNum: 31, coloring: myColors[2] },
		{ indexNum: 32, coloring: myColors[2] },
		{ indexNum: 40, coloring: myColors[2] },
		{ indexNum: 41, coloring: myColors[2] },
		{ indexNum: 48, coloring: myColors[2] },
		{ indexNum: 49, coloring: myColors[2] },
		{ indexNum: 56, coloring: myColors[2] },





		]

	// triangles pointing inside
	colorsObjectArrayIn = [
	{ indexNum: 0, coloring: myColors[0] },
	{ indexNum: 1, coloring: myColors[0] },
	{ indexNum: 11, coloring: myColors[0] },
	{ indexNum: 12, coloring: myColors[0] },
	{ indexNum: 13, coloring: myColors[0] },
	{ indexNum: 23, coloring: myColors[0] },
	{ indexNum: 24, coloring: myColors[0] },
	{ indexNum: 32, coloring: myColors[0] },
	{ indexNum: 33, coloring: myColors[0] },
	{ indexNum: 34, coloring: myColors[0] },
	{ indexNum: 42, coloring: myColors[0] },

	{ indexNum: 5, coloring: myColors[1] },
	{ indexNum: 6, coloring: myColors[1] },
	{ indexNum: 16, coloring: myColors[1] },
	{ indexNum: 17, coloring: myColors[1] },
	{ indexNum: 26, coloring: myColors[1] },
	{ indexNum: 27, coloring: myColors[1] },
	{ indexNum: 35, coloring: myColors[1] },
	{ indexNum: 36, coloring: myColors[1] },
	{ indexNum: 43, coloring: myColors[1] },
	{ indexNum: 44, coloring: myColors[1] },
	{ indexNum: 45, coloring: myColors[1] },
	{ indexNum: 46, coloring: myColors[1] },
	{ indexNum: 47, coloring: myColors[1] },
	{ indexNum: 50, coloring: myColors[1] },
	{ indexNum: 51, coloring: myColors[1] },
	{ indexNum: 52, coloring: myColors[1] },
	{ indexNum: 53, coloring: myColors[1] },
	{ indexNum: 54, coloring: myColors[1] },
	{ indexNum: 55, coloring: myColors[1] },

	{ indexNum: 9, coloring: myColors[2] },
	{ indexNum: 10, coloring: myColors[2] },
	{ indexNum: 20, coloring: myColors[2] },
	{ indexNum: 21, coloring: myColors[2] },
	{ indexNum: 30, coloring: myColors[2] },
	{ indexNum: 31, coloring: myColors[2] },
	{ indexNum: 39, coloring: myColors[2] },
	{ indexNum: 40, coloring: myColors[2] },
	{ indexNum: 48, coloring: myColors[2] },
	{ indexNum: 49, coloring: myColors[2] },
	{ indexNum: 56, coloring: myColors[2] },
	



	]

}

function draw() {
	background(255);
	noStroke();

		// ====== draw polygon in the back ======= //
		push();
		backPoly.position(300,100,90);
		console.log(colorsObjectArrayOut.length);
		console.log(colorsObjectArrayIn.length);
		// ======= first fill bg color ===== //
		// bg.myLerpedBg(colorA,colorB);
		// ======= then get into each individual triangle 
		// ======= to create typography/pattern ====== //
		backPoly.drawIsometric(colorsObjectArrayOut,colorsObjectArrayIn);
		pop();

		// ====== draw polygon in the front ===== //
		push();
		frontPoly.restoreCoord(150);
		frontPoly.offsetFrontPolygon(25,-smallTriWidth*cos(radians(30))*2+10);
		frontPoly.drawFrontPoly();
		pop();
		
		noLoop();


	}
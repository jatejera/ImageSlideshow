// For use with Slideshow Vanilla JS 1

var app = document.getElementById("app");
app.style.cssText = "background-color: #555; width: 95%; min-height: 100%; padding: 10px; margin: 10px auto;"


var bigPicDiv = document.createElement('div');
bigPicDiv.id = 'bigPicDiv';
bigPicDiv.style.cssText = " width: 80%;  float:left;    background-color: #888;    height: 86vh;    margin-bottom: 15px;    overflow-y: scroll;"
app.appendChild(bigPicDiv);


var thumbsDiv = document.createElement('div');
thumbsDiv.id = "thumbsDiv";
thumbsDiv.style.cssText = "width: 19%;    float:right;    background-color: #AAA;    height: 86vh;    margin-bottom: 15px;    overflow-y: scroll;"
app.appendChild(thumbsDiv);


var footer = document.createElement('footer');
footer.style.cssText = "clear:both; width: 100%; background-color: #CCC; min-height: 100px;";
app.appendChild(footer);


var footerTxt = document.createElement('h3');
footerTxt.innerHTML = "pollo";
footerTxt.style.cssText = "float:left; width:60%;"
footer.appendChild(footerTxt);

var autoPlayBtn = document.createElement('button');
autoPlayBtn.innerHTML = "AUTOPLAY";
autoPlayBtn.style.cssText = "float: Right;margin: 10px;font-size: 1.5rem;";
autoPlayBtn.addEventListener("click", initAutoPlay);
footer.appendChild(autoPlayBtn);

var stopPlayBtn = document.createElement('button');
stopPlayBtn.style.cssText = " float: Right; margin: 10px; font-size:1.5rem;";
stopPlayBtn.innerHTML = "STOP";
stopPlayBtn.addEventListener("click", stopAutoPlay);
footer.appendChild(stopPlayBtn);

var slideDuration = document.createElement('input');
slideDuration.innerHTML = "Slide Speed:";
slideDuration.type = "number";
slideDuration.value = 1;
slideDuration.min = 1;
slideDuration.max = 10;
slideDuration.style.cssText = "float: right; margin: 10px; font-size: 1.5rem;";

footer.appendChild(slideDuration);

var autoPlayCounter = 0;
var myinterval;
var slideSpeed = slideDuration;

function initAutoPlay() {

	stopAutoPlay();

	var speedChecker = slideSpeed.value;

	if (speedChecker <= 0 || speedChecker == "") {
		speedChecker = 1;
		slideDuration.value = 1;
	}


	myinterval = setInterval(swapPic, (speedChecker * 1000));
}

function stopAutoPlay() {
	clearInterval(myinterval);
}

// the image data: folder and file names
var folder = "chinese-porcelain";

var slideArr = [
	
	{pic: "00-A-Cheat-Sheet-Han.jpg", 
	 cap: "Lead green vessel with faux ring handles held by a diamond-shaped taotie; good, bright glaze and nicely detailed applied designs to shoulder"}, 
	
	{pic: "00-han-green-vase.jpg",
	cap: "The popularity of architectural models during the Han gives us great insight into the daily life of the people. Here, a man ascends a staircase-like ladder to reach the second floor of a dwelling--up above the dust and damp of street level"}, 
	
	{pic: "00-han-green-house.jpg",
	cap: "A magnificent tower with padoda roofs and balconies soaring several stories--an ancient skyscraper! The popularity of architectural models during the Han gives us great insight into the daily life of the people."}, 
	
	{pic: "00-han-green-tower.jpg",
	cap: "This graceful musician in flowing robes has been intent upon her zither for the past 2000 years. Tombs were furnished with models of homes, household effects, animals, servants and entertainers to furnish an important personage with everything they would require in the afterlife"} 	
];

// instantiating an image object for bigPic
var bigPic = new Image();
bigPic.style.width = "100%";
bigPic.style.height = "auto";
bigPic.style.marginBottom = "10px";
bigPic.src = `images-slideshow/${folder}/${slideArr[0].pic}`;
footerTxt.innerHTML = slideArr[0].cap;
// put the bigPic image into the bigPicDiv
bigPicDiv.appendChild(bigPic);

// a for loop to output the thumbs
for (var i = 0; i < slideArr.length; i++) {
	// instantiating an image object for thumbPic
	var thumbPic = new Image();
	thumbPic.style.cssText= "width: 100%; height: auto; margin-bottom: 10px;";
	thumbPic.id = i;
	thumbPic.src = `images-slideshow/${folder}/${slideArr[i].pic}`;
	thumbPic.addEventListener("click", swapPic);
	thumbsDiv.appendChild(thumbPic);
} // end for loop

function swapPic() {
	if (event) {

		footerTxt.innerHTML = slideArr[event.target.id].cap;
		bigPic.src = event.target.src; // event.target.src; // change img src
		autoPlayCounter = event.target.id;

	} else {
		if (autoPlayCounter >= slideArr.length) {
			autoPlayCounter = 0;
		}
		
		bigPic.src = `images-slideshow/${folder}/${slideArr[autoPlayCounter].pic}`;
		footerTxt.innerHTML = slideArr[autoPlayCounter].cap;
		autoPlayCounter++;
	}



}
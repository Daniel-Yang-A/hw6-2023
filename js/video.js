var video;
var initial = true;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	document.querySelector("#volume").innerHTML = "100%";
	console.log("auto play is set to: " + video.autoplay);
	console.log("auto loop is set to: " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.playbackRate = 1;
	video.muted = false;
	if (initial) {
		initial = false;
		let volume = video.volume;
		volume = volume * 100;
		document.querySelector("#volume").innerHTML = volume + "%";
	}
	// let volume = video.volume;
	// volume = volume * 100;
	// document.querySelector("#volume").innerHTML = volume + "%";
	video.play();
	console.log("Video starts playing");
});

document.querySelector("#pause").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.pause();
	console.log("Video pauses playing");
});

document.querySelector("#slower").addEventListener("click", function() {
	video = document.querySelector("#player1");
	let cur_speed = video.playbackRate;
	cur_speed = cur_speed * 0.9
	video.playbackRate = cur_speed;
	console.log("Current speed: " + cur_speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	video = document.querySelector("#player1");
	let cur_speed = video.playbackRate;
	cur_speed = cur_speed * 10 / 9;
	video.playbackRate = cur_speed;
	console.log("Current speed: " + cur_speed);
});

document.querySelector("#skip").addEventListener("click", function() {
	video = document.querySelector("#player1");
	let cur_time = video.currentTime;
	let duration = video.duration;
	cur_time += 10;
	if (cur_time >= duration) {
		cur_time = 0;
	}
	video.currentTime = cur_time;
	console.log("Current time: " + cur_time);
});

document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.muted = !video.muted;
	let is_mute = video.muted;
	if (is_mute) {
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video is muted");
	} else {
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video is unmuted");
	}
});

document.querySelector("#slider").addEventListener("input", function(event) {
	video = document.querySelector("#player1");
	let cur_volume = event.target.value;
	document.querySelector("#volume").innerHTML = cur_volume.toString() + "%";
	console.log("Current volume: " + cur_volume + "%");
	cur_volume = cur_volume / 100;
	console.log("Current value: " + cur_volume);
	video.volume = cur_volume;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	video = document.querySelector("#player1");
	video.className = "video";
});
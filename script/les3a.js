// Wait for device to be ready loading everything
function loadScript() {
//	Activate only one of the next two lines, depending on what device to test on:
//	document.addEventListener('deviceready', onDeviceReady, false);
	onDeviceReady();
}

// When device is ready
function onDeviceReady() {
//	For touch devices:
	document.getElementById('menu').addEventListener('touchstart', menuDown,  false);
	document.getElementById('menu').addEventListener('touchend',   menuUp, false);
//	For mouse devices:
	document.getElementById('menu').addEventListener('mousedown', menuDown,  false);
	document.getElementById('menu').addEventListener('mouseup',   menuUp, false);
}

// Pressing the buttons only changes the visual apearence
function menuDown() {
	document.getElementById('menu').className='down';
}

// This function is for button 1
function menuUp() {
    // Reset the visual apearence to idle state
	document.getElementById('menu').className='up';
    // Then do what button must do
	document.getElementById('page1').className='showPage';
	document.getElementById('page2').className='hidePage';
}

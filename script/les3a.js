// Wait for device to be ready loading everything
function loadScript() {
//	Activate only one of the next two lines, depending on what device to test on:
//	document.addEventListener('deviceready', onDeviceReady, false);
	onDeviceReady();
}

// When device is ready
function onDeviceReady() {
//	For touch devices:
	document.getElementById('btn1').addEventListener('touchstart', btn1Down,  false);
	document.getElementById('btn1').addEventListener('touchend',   btn1Up, false);
	document.getElementById('btn2').addEventListener('touchstart', btn2Down,  false);
	document.getElementById('btn2').addEventListener('touchend',   btn2Up, false);
//	For mouse devices:
	document.getElementById('btn1').addEventListener('mousedown', btn1Down,  false);
	document.getElementById('btn1').addEventListener('mouseup',   btn1Up, false);
	document.getElementById('btn2').addEventListener('mousedown', btn2Down,  false);
	document.getElementById('btn2').addEventListener('mouseup',   btn2Up, false);
}

// Pressing the buttons only changes the visual apearence
function btn1Down() {
	document.getElementById('btn1').className='down';
}
function btn2Down() {
	document.getElementById('btn2').className='down';
}
// This function is for button 1
function btn1Up() {
    // Reset the visual apearence to idle state
	document.getElementById('btn1').className='up';
    // Then do what button must do
	document.getElementById('page1').className='showPage';
	document.getElementById('page2').className='hidePage';
}
// This function is for button 2
function btn2Up() {
    // Reset the visual apearence to idle state
	document.getElementById('btn2').className='up';
    // Then do what button must do
	document.getElementById('page1').className='hidePage';
	document.getElementById('page2').className='showPage';
}

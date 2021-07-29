var device;
var count;

async function connect() {

    // Prompt user to select an Apple Keyboard Backlight device.
	[device] = await navigator.hid.requestDevice({
    	filters: [{ vendorId: 0x04d8, usage: 0x01, usagePage: 65280 }]
	});

    var msg = ""
	// Wait for the HID connection to open.
	await device.open();

    msg =　device.productName + "に接続しました。";
    document.getElementById ("res").innerHTML = msg;
    count = 0;


    
    
}

async function remoteForward() {
    if(!device) return;
	
	const reportId = 0x00;
    const data = Uint8Array.from([  2,   2,   0, 222, 119,  74,  10, 226, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0]);
    
    await device.sendReport(reportId, new Uint8Array(data));
    // console.log(data);
}

async function remoteBackward() {
    if(!device) return;
	
	const reportId = 0x00;
    const data = Uint8Array.from([  2,   8,   0, 222, 119,  74,  10, 226, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0]);
    
    await device.sendReport(reportId, new Uint8Array(data));
    // console.log(data);
}

async function remoteTurnLeft() {
    if(!device) return;
	
	const reportId = 0x00;
    const data = Uint8Array.from([  2,  11,   0, 222, 119,  74,  10, 226, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0]);
    
    await device.sendReport(reportId, new Uint8Array(data));
    // console.log(data);
}

async function remoteTurnRight() {
    if(!device) return;
	
	const reportId = 0x00;
    const data = Uint8Array.from([  2,  10,   0, 222, 119,  74,  10, 226, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0]);
    
    await device.sendReport(reportId, new Uint8Array(data));
    // console.log(data);
}

async function remoteMouseup() {
    if(!device) return;

	const reportId = 0x00;
    const data = Uint8Array.from([  2,   0,   0, 222, 119,  74,  10, 226, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0]);
    
    await device.sendReport(reportId, new Uint8Array(data));
    // console.log(data);
}

function startup() {
    const btnForward = document.getElementById('btnForward');
    const btnBackward = document.getElementById('btnBackward');
    const btnTurnLeft = document.getElementById('btnTurnLeft');
    const btnTurnRight = document.getElementById('btnTurnRight');
    
    btnForward.addEventListener('mousedown', remoteForward, false);
    btnForward.addEventListener('touchstart', remoteForward, false);
    btnForward.addEventListener('mouseup', remoteMouseup, false);
    btnForward.addEventListener('touchend', remoteMouseup, false);

    btnBackward.addEventListener('mousedown', remoteBackward, false);
    btnBackward.addEventListener('touchstart', remoteBackward, false);
    btnBackward.addEventListener('mouseup', remoteMouseup, false);
    btnBackward.addEventListener('touchend', remoteMouseup, false);

    btnTurnLeft.addEventListener('mousedown', remoteTurnLeft, false);
    btnTurnLeft.addEventListener('touchstart', remoteTurnLeft, false);
    btnTurnLeft.addEventListener('mouseup', remoteMouseup, false);
    btnTurnLeft.addEventListener('touchend', remoteMouseup, false);
    
    btnTurnRight.addEventListener('mousedown', remoteTurnRight, false);
    btnTurnRight.addEventListener('touchstart', remoteTurnRight, false);
    btnTurnRight.addEventListener('mouseup', remoteMouseup, false);
    btnTurnRight.addEventListener('touchend', remoteMouseup, false);
}

document.addEventListener("DOMContentLoaded", startup);

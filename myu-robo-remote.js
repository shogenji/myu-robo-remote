let device;
let flag_control = false;
  
async function connect() {
    console.log(event.type);

    if (device) {
        return;
    }

    // Filter on devices with the MYU robo.
    const filters = [
        {
            vendorId: 0x04d8, // Microchip Technology Inc.
            productId: 0xfa8b, // MYUUSB
            // usage: 0x01,
            // usagePage: 65280,
        },
      ];
    // Prompt user to select a MYU robo device.
    try {
        [device] = await navigator.hid.requestDevice({ filters });
        if (!device) {
          return;
        }
        // Wait for the HID connection to open.
	    await device.open();
        document.getElementById("deviceStatus").innerText = device.productName + "に接続しました。";
    } catch (error) {
        console.error(error.name, error.message);
    }
  }

async function remoteForward() {
    if (!device) return;

    if (flag_control) {
        return;
    } else {
        console.log(event.type);
    
        flag_control = true;
        const reportId = 0x00;
        const data = Uint8Array.from([  2,   2,   0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0]);
    
        await device.sendReport(reportId, new Uint8Array(data));
        // console.log(data);
    }
}

async function remoteBackward() {
    if (!device) return;

    if (flag_control) {
        return;
    } else {
        console.log(event.type);

        flag_control = true;
        const reportId = 0x00;
        const data = Uint8Array.from([  2,   8,   0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0]);

        await device.sendReport(reportId, new Uint8Array(data));
        // console.log(data);
    }
}

async function remoteTurnLeft() {
    if (!device) return;

    if (flag_control) {
        return;
    } else {
        console.log(event.type);

        flag_control = true;
        const reportId = 0x00;
        const data = Uint8Array.from([  2,   11,   0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0]);

        await device.sendReport(reportId, new Uint8Array(data));
        // console.log(data);
    }
}

async function remoteTurnRight() {
    console.log(event.type);

    if (!device) return;

    const reportId = 0x00;
    const data = Uint8Array.from([  2,  10,   0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0]);
    
    await device.sendReport(reportId, new Uint8Array(data));
    // console.log(data);
}
// async function remoteTurnRight() {
//     if (!device) return;

//     if (flag_control) {
//         return;
//     } else {
//         console.log(event.type);

//         flag_control = true;
//         const reportId = 0x00;
//         const data = Uint8Array.from([  2,  10,   0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0]);
        
//         await device.sendReport(reportId, new Uint8Array(data));
//         // console.log(data);
//     }
// }

async function remoteMouseup() {
    console.log(event.type);

    if (!device) return;

    flag_control = false;

    const reportId = 0x00;
    const data = Uint8Array.from([  2,   0,   0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0]);
    
    await device.sendReport(reportId, new Uint8Array(data));
    // console.log(data);
}

function startup() {
    if (!("hid" in navigator)) {
        document.getElementById("deviceStatus").innerText = "WebHIDに未対応です。";
    }

    const btnConnect = document.getElementById('btnConnect');
    btnConnect.addEventListener('mouseup', connect, false);
    btnConnect.addEventListener('touchend', connect, false);

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

    btnTurnLeft.addEventListener('touchstart', remoteTurnLeft, false);
    btnTurnLeft.addEventListener('touchend', remoteMouseup, false);
    btnTurnLeft.addEventListener('mousedown', remoteTurnLeft, false);
    btnTurnLeft.addEventListener('mouseup', remoteMouseup, false);
    
    btnTurnRight.addEventListener('mousedown', remoteTurnRight, false);
    btnTurnRight.addEventListener('touchstart', remoteTurnRight, false);
    btnTurnRight.addEventListener('mouseup', remoteMouseup, false);
    btnTurnRight.addEventListener('touchend', remoteMouseup, false);
}

document.addEventListener("DOMContentLoaded", startup);

function handleConnectedDevice(e) {
    console.log("Device connected: " + e.device.productName);
}

function handleDisconnectedDevice(e) {
    console.log("Device disconnected: " + e.device.productName);

    device = undefined;
    document.getElementById("deviceStatus").innerText = "接続されていません。";
}

function handleInputReport(e) {
    console.log(e.device.productName + ": got input report " + e.reportId);
    console.log(new Uint8Array(e.data.buffer));
}
  
navigator.hid.addEventListener("connect", handleConnectedDevice);
navigator.hid.addEventListener("disconnect", handleDisconnectedDevice);
navigator.hid.addEventListener("inputreport", handleInputReport);
    

window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

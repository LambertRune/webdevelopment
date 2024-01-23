// Replace these placeholders with your actual values
const clientId = "fvk4vs49yd3hc4ytfd4r";
const accessToken = "<YOUR_ACCESS_TOKEN>";
const deviceId = "bf262fc25133c4680enpby";

// Function to make API requests
async function makeRequest(method, endpoint, body = null) {
    const url = `https://openapi.tuyaeu.com/v1.0/iot-03/devices/${deviceId}/${endpoint}`;

    const headers = {
        "sign_method": "HMAC-SHA256",
        "client_id": clientId,
        "t": Date.now(),
        "mode": "cors",
        "Content-Type": "application/json",
        "access_token": accessToken,
    };

    const options = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
}

// Function to turn the lamp on
async function turnOnLamp() {
    const result = await makeRequest("POST", "commands", {
        commands: [{
            code: "switch_led",
            value: true,
        }],
    });

    console.log(result);
}

// Function to turn the lamp off
async function turnOffLamp() {
    const result = await makeRequest("POST", "commands", {
        commands: [{
            code: "switch_led",
            value: false,
        }],
    });

    console.log(result);
}

// Function to set the lamp color to green
async function setGreenColor() {
    const result = await makeRequest("POST", "commands", {
        commands: [{
            code: "colour_data",
            value: {
                h: 120, // Green color
                s: 1000,
                v: 1000,
            },
        }],
    });

    console.log(result);
}

// Example usage
// Uncomment and run the desired function
// turnOnLamp();
// turnOffLamp();
// setGreenColor();

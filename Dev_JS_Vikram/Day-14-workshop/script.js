function trafficLightSimulator() {
    function greenLight() {
        console.clear()
        console.log("Green Light Is On (5 Sec)");
        setTimeout(yellowLight, 5000)
    }


    function yellowLight() {
        console.clear()
        console.log("Yellow Light Is On (2 Sec)");
        setTimeout(redLight, 2000)
    }

    function redLight() {
        console.clear()
        console.log("red Light Is On (4 Sec)");
        setTimeout(greenLight, 4000)
    }
    greenLight()
}

trafficLightSimulator();
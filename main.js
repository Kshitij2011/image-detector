Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90,

    constraint:{
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");

Webcam.attach('camera');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJto1ARgs8vQTmnU0llFsRhUxrE7Qo7ls",
    authDomain: "collagedropout-54b21.firebaseapp.com",
    projectId: "collagedropout-54b21",
    storageBucket: "collagedropout-54b21.appspot.com",
    messagingSenderId: "752515041425",
    appId: "1:752515041425:web:480f2c55b18cc421a99730"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//create database reference
const dbRef = firebase.database().ref();

//USER CAN UPLOAD TO FIREBASE
const uploadButton = document.getElementById('upload')

uploadButton.addEventListener('click', function () {
    const screenGrab = collage.toDataURL('image/jpeg');

    dbRef.push({
        url: screenGrab
    })

});






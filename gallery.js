const collageDropout = {};

collageDropout.firebaseInit = () => {
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

    //return from Firebase

    const dbRef = firebase.database().ref();

    dbRef.on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            const data = childSnapshot.val();

            const gallery = document.getElementById('galleryList');

            const listItem = document.createElement('li');

            const collage = gallery.appendChild(listItem);

            const collageImage = document.createElement('img');

            collageImage.classList.add('collagePic');

            collageImage.src = data.url;

            // const button = document.createElement('button');

            // button.setAttribute('id', 'deleteButton');

            // button.innerHTML = 'Delete';

            // listItem.appendChild(button);

            collage.appendChild(collageImage);

        })
    });
};

    

collageDropout.init = () => {
    collageDropout.firebaseInit();
}


collageDropout.init();










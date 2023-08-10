//BLOG CONTENT PAGE//
const firebaseConfig = {
    apiKey: "AIzaSyCiE6tdff741dTQ3Gq9t5MfRCe-4bfnUGk",
    authDomain: "blogging-website-da53f.firebaseapp.com",
    projectId: "blogging-website-da53f",
    storageBucket: "blogging-website-da53f.appspot.com",
    messagingSenderId: "775321807873",
    appId: "1:775321807873:web:9d5c529edcef927f89e400",
    measurementId: "G-8FG3H6SFVV"
  };

  // initialize the firebase app with this built-in function
firebase.initializeApp(firebaseConfig);

//Reference to Firebase

const database = firebase.database().ref();

//Variables
const blog_container = document.getElementById("blog_container");


//Retrieving data from firebase


database.on("child_added", addBlogToPage);

function addBlogToPage (rowData) {
    console.log(rowData.val());
    row = rowData.val();
    const nameValue = row.NAME;
    const titleValue = row.TITLE;
    const contentValue = row.CONTENT;
    
    const divDisplay = document.createElement("div");
    const nameDisplay = document.createElement("p");
    const titleDisplay = document.createElement("p");
    const contentDisplay = document.createElement("p");

    nameDisplay.innerHTML = "By: " + nameValue;
    titleDisplay.innerHTML = titleValue;
    contentDisplay.innerHTML = contentValue;

    divDisplay.className = "message-box";
    titleDisplay.className = "title-message";
    nameDisplay.className = "name-message";
    contentDisplay.className = "content-message";

    divDisplay.appendChild(titleDisplay);
    divDisplay.appendChild(nameDisplay);
    divDisplay.appendChild(contentDisplay);
    
    blog_container.appendChild(divDisplay);

    console.log("divDisplay:", divDisplay);

}


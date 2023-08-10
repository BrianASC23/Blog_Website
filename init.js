//SUBMIT PAGE//

const firebaseConfig = {
    apiKey: "AIzaSyCiE6tdff741dTQ3Gq9t5MfRCe-4bfnUGk",
    authDomain: "blogging-website-da53f.firebaseapp.com",
    projectId: "blogging-website-da53f",
    storageBucket: "blogging-website-da53f.appspot.com",
    messagingSenderId: "775321807873",
    appId: "1:775321807873:web:9d5c529edcef927f89e400",
    measurementId: "G-8FG3H6SFVV"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database().ref();

//Variables
const title_input = document.getElementById("title_input");
const name_input = document.getElementById("username_input");
const content_input = document.getElementById("content_input");
let submit = document.getElementById("submit_btn");




//Submits input to firebase
submit.onclick = updateBlog;

function updateBlog(){
     //Assign var to the input value

    const title = title_input.value;
    const name = name_input.value;
    const content = content_input.value;

    //Clears the input
    title_input.value = "";
    name_input.value = "";
    content_input.value = "";

    //Push the value into the firebase
    const data = {
        TITLE: title,
        NAME: name,
        CONTENT: content
    }

    database.push(data);
  
}

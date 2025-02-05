//import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGd4K2286xbglVImIzH6hmcxleHtJOGWw",
    authDomain: "contentsurvey-1eccd.firebaseapp.com",
    databaseURL: "https://contentsurvey-1eccd-default-rtdb.firebaseio.com",
    projectId: "contentsurvey-1eccd",
    storageBucket: "contentsurvey-1eccd.firebasestorage.app",
    messagingSenderId: "967222576133",
    appId: "1:967222576133:web:f665377cffe3b6572cc86c",
    measurementId: "G-KG0QWQG777"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//reference to db
const db = firebase.database().ref('contentSurvey')

const surveyForm = document.getElementById("survey-form");
const pageOneBtn = document.getElementById("pgOne");

//Retrieve data or start with empty array
let emotionVals = JSON.parse(localStorage.getItem("emotionVals")) || [];  


pageOneBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent page refresh

    // Gather form data
    //const aiExperience = document.getElementById("ai-experience").value;
    const happinessBefore = parseInt(document.querySelector('input[name="happiness_before"]:checked')?.value ?? 0);
    const sadnessBefore = parseInt(document.querySelector('input[name="sadness_before"]:checked')?.value ?? 0);
    const angerBefore = parseInt(document.querySelector('input[name="anger_before"]:checked')?.value ?? 0);
    const fearBefore = parseInt(document.querySelector('input[name="fear_before"]:checked')?.value ?? 0);
    const surpriseBefore = parseInt(document.querySelector('input[name="surprise_before"]:checked')?.value ?? 0);
    const disgustBefore = parseInt(document.querySelector('input[name="disgust_before"]:checked')?.value ?? 0);

    //emotionVals.push(aiExperience);
    emotionVals.push(happinessBefore);
    emotionVals.push(sadnessBefore);
    emotionVals.push(angerBefore);
    emotionVals.push(fearBefore);
    emotionVals.push(surpriseBefore);
    emotionVals.push(disgustBefore);

    // Save the updated emotionVals to localStorage
    localStorage.setItem("emotionVals", JSON.stringify(emotionVals));

    window.location.href = "image1.html";
});

function pageThree() {
    //preventDefault();
    var emotionVals = JSON.parse(localStorage.getItem("emotionVals")) || [];

    const happinessAfter1 = parseInt(document.querySelector('input[name="happiness_after"]:checked')?.value ?? 0);
    const sadnessAfter1 = parseInt(document.querySelector('input[name="sadness_after"]:checked')?.value ?? 0);
    const angerAfter1 = parseInt(document.querySelector('input[name="anger_after"]:checked')?.value ?? 0);
    const fearAfter1 = parseInt(document.querySelector('input[name="fear_after"]:checked')?.value ?? 0);
    const surpriseAfter1 = parseInt(document.querySelector('input[name="surprise_after"]:checked')?.value ?? 0);
    const disgustAfter1 = parseInt(document.querySelector('input[name="disgust_after"]:checked')?.value ?? 0);

    emotionVals.push(happinessAfter1);
    emotionVals.push(sadnessAfter1);
    emotionVals.push(angerAfter1);
    emotionVals.push(fearAfter1);
    emotionVals.push(surpriseAfter1);
    emotionVals.push(disgustAfter1);

    // Save the updated emotionVals to localStorage
    localStorage.setItem("emotionVals", JSON.stringify(emotionVals));

    window.location.href = "image2.html";
    //return false;
}

function pageFour() {
    var emotionVals = JSON.parse(localStorage.getItem("emotionVals")) || [];

    const happinessAfter2 = parseInt(document.querySelector('input[name="happiness_after"]:checked')?.value ?? 0);
    const sadnessAfter2 = parseInt(document.querySelector('input[name="sadness_after"]:checked')?.value ?? 0);
    const angerAfter2 = parseInt(document.querySelector('input[name="anger_after"]:checked')?.value ?? 0);
    const fearAfter2 = parseInt(document.querySelector('input[name="fear_after"]:checked')?.value ?? 0);
    const surpriseAfter2 = parseInt(document.querySelector('input[name="surprise_after"]:checked')?.value ?? 0);
    const disgustAfter2 = parseInt(document.querySelector('input[name="disgust_after"]:checked')?.value ?? 0);

    emotionVals.push(happinessAfter2);
    emotionVals.push(sadnessAfter2);
    emotionVals.push(angerAfter2);
    emotionVals.push(fearAfter2);
    emotionVals.push(surpriseAfter2);
    emotionVals.push(disgustAfter2);

    // Save the updated emotionVals to localStorage
    localStorage.setItem("emotionVals", JSON.stringify(emotionVals));

    window.location.href = "image3.html";
}

function pageFive(){
    var emotionVals = JSON.parse(localStorage.getItem("emotionVals")) || [];

    const happinessAfter3 = parseInt(document.querySelector('input[name="happiness_after"]:checked')?.value ?? 0);
    const sadnessAfter3 = parseInt(document.querySelector('input[name="sadness_after"]:checked')?.value ?? 0);
    const angerAfter3 = parseInt(document.querySelector('input[name="anger_after"]:checked')?.value ?? 0);
    const fearAfter3 = parseInt(document.querySelector('input[name="fear_after"]:checked')?.value ?? 0);
    const surpriseAfter3 = parseInt(document.querySelector('input[name="surprise_after"]:checked')?.value ?? 0);
    const disgustAfter3 = parseInt(document.querySelector('input[name="disgust_after"]:checked')?.value ?? 0);

    emotionVals.push(happinessAfter3);
    emotionVals.push(sadnessAfter3);
    emotionVals.push(angerAfter3);
    emotionVals.push(fearAfter3);
    emotionVals.push(surpriseAfter3);
    emotionVals.push(disgustAfter3);

    // Save the updated emotionVals to localStorage
    localStorage.setItem("emotionVals", JSON.stringify(emotionVals));

    window.location.href = "image4.html";
}

function pageSix(){
    var emotionVals = JSON.parse(localStorage.getItem("emotionVals")) || [];

    const happinessAfter4 = parseInt(document.querySelector('input[name="happiness_after"]:checked')?.value ?? 0);
    const sadnessAfter4 = parseInt(document.querySelector('input[name="sadness_after"]:checked')?.value ?? 0);
    const angerAfter4 = parseInt(document.querySelector('input[name="anger_after"]:checked')?.value ?? 0);
    const fearAfter4 = parseInt(document.querySelector('input[name="fear_after"]:checked')?.value ?? 0);
    const surpriseAfter4 = parseInt(document.querySelector('input[name="surprise_after"]:checked')?.value ?? 0);
    const disgustAfter4 = parseInt(document.querySelector('input[name="disgust_after"]:checked')?.value ?? 0);

    emotionVals.push(happinessAfter4);
    emotionVals.push(sadnessAfter4);
    emotionVals.push(angerAfter4);
    emotionVals.push(fearAfter4);
    emotionVals.push(surpriseAfter4);
    emotionVals.push(disgustAfter4);

    // Save the updated emotionVals to localStorage
    localStorage.setItem("emotionVals", JSON.stringify(emotionVals));

    window.location.href = "image5.html";
}

function pageSeven(){
    var emotionVals = JSON.parse(localStorage.getItem("emotionVals")) || [];

    const happinessAfter5 = parseInt(document.querySelector('input[name="happiness_after"]:checked')?.value ?? 0);
    const sadnessAfter5 = parseInt(document.querySelector('input[name="sadness_after"]:checked')?.value ?? 0);
    const angerAfter5 = parseInt(document.querySelector('input[name="anger_after"]:checked')?.value ?? 0);
    const fearAfter5 = parseInt(document.querySelector('input[name="fear_after"]:checked')?.value ?? 0);
    const surpriseAfter5 = parseInt(document.querySelector('input[name="surprise_after"]:checked')?.value ?? 0);
    const disgustAfter5 = parseInt(document.querySelector('input[name="disgust_after"]:checked')?.value ?? 0);

    emotionVals.push(happinessAfter5);
    emotionVals.push(sadnessAfter5);
    emotionVals.push(angerAfter5);
    emotionVals.push(fearAfter5);
    emotionVals.push(surpriseAfter5);
    emotionVals.push(disgustAfter5);

    // Save the updated emotionVals to localStorage
    localStorage.setItem("emotionVals", JSON.stringify(emotionVals));

    window.location.href = "demographics.html"
}

function pageEight(){
    var emotionVals = JSON.parse(localStorage.getItem("emotionVals")) || [];

    const experience = parseInt(document.querySelector('input[name="ai_experience"]:checked')?.value ?? 0);
    const smediause = document.querySelector("input[name='social_media']:checked")?.value || "0";
    const smediahours = document.querySelector("select[name='hours_per_day']").value || "";
    const age = document.querySelector("select[name='age']").value || "";
    const gender = document.querySelector('input[name="gender"]:checked')?.value ?? 0;
    const profession = document.getElementById("profession").value;
    const major = document.getElementById("major").value;
    const place = document.querySelector("select[name='study_source']").value || "";

    emotionVals.push(experience);
    emotionVals.push(smediause);
    emotionVals.push(smediahours);
    emotionVals.push(age);
    emotionVals.push(gender);
    emotionVals.push(profession);
    emotionVals.push(major);
    emotionVals.push(place);

    // Save the updated emotionVals to localStorage
    localStorage.setItem("emotionVals", JSON.stringify(emotionVals));

    window.location.href = "demographics.html"

    pushDB();
    window.location.href = "thankyou.html"
}

function pushDB(){
    var emotionVals = JSON.parse(localStorage.getItem("emotionVals")) || [];
    console.log(emotionVals);
    //push it all
    var newSurvey = db.push()
    newSurvey.set({
        //ai_experience: emotionVals[0],
        happiness0: parseInt(emotionVals[0]),
        sadness0: parseInt(emotionVals[1]),
        anger0: parseInt(emotionVals[2]),
        fear0: parseInt(emotionVals[3]),
        surprise0: parseInt(emotionVals[4]),
        disgust0: parseInt(emotionVals[5]),

        happiness1: parseInt(emotionVals[6]),
        sadness1: parseInt(emotionVals[7]),
        anger1: parseInt(emotionVals[8]),
        fear1: parseInt(emotionVals[9]),
        surprise1: parseInt(emotionVals[10]),
        disgust1: parseInt(emotionVals[11]),

        happiness2: parseInt(emotionVals[12]),
        sadness2: parseInt(emotionVals[13]),
        anger2: parseInt(emotionVals[14]),
        fear2: parseInt(emotionVals[15]),
        surprise2: parseInt(emotionVals[16]),
        disgust2: parseInt(emotionVals[17]),

        happiness3: parseInt(emotionVals[18]),
        sadness3: parseInt(emotionVals[19]),
        anger3: parseInt(emotionVals[20]),
        fear3: parseInt(emotionVals[21]),
        surprise3: parseInt(emotionVals[22]),
        disgust3: parseInt(emotionVals[23]),

        happiness4: parseInt(emotionVals[24]),
        sadness4: parseInt(emotionVals[25]),
        anger4: parseInt(emotionVals[26]),
        fear4: parseInt(emotionVals[27]),
        surprise4: parseInt(emotionVals[28]),
        disgust4: parseInt(emotionVals[29]),

        happiness5: parseInt(emotionVals[30]),
        sadness5: parseInt(emotionVals[31]),
        anger5: parseInt(emotionVals[32]),
        fear5: parseInt(emotionVals[33]),
        surprise5: parseInt(emotionVals[34]),
        disgust5: parseInt(emotionVals[35]),

        ai_experience: parseInt(emotionVals[36]),
        use: emotionVals[37],
        hours: emotionVals[38],
        age: emotionVals[39],
        gender: emotionVals[40],
        profession: emotionVals[41],
        major: emotionVals[42],
        place: emotionVals[43]
    })
}
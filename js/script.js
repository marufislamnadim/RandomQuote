/******************************************
project 1 - Random Quote Generator
******************************************/


/*************************
 * `quotes` array
 ************************/
const quotes = [{qid : 1, qTag:"Life", detail: "The greatest glory in living lies not in never falling, but in rising every time we fall.", authName:"Mother Teresa", citation:"Book of humanity"}, 
{qid : 2, qTag:"Life", detail: "The greatest glory in living lies not in never falling, but in rising every time we fall.", authName:"Mother Teresa", citation:"Book of humanity"}, 
{qid : 3, qTag:"Science", detail: "When you reach the end of your rope, tie a knot in it and hang on. ", authName:"Franklin D. Roosevelt", citation:"House of Cards"}, 
{qid : 4, qTag:"Sports", detail: "Always remember that you are absolutely unique. Just like everyone else.", authName:"Margaret Mead", citation:"Lord of the rings"}, 
{qid : 5, qTag:"Sports", detail: "Don't judge each day by the harvest you reap but by the seeds that you plant.", authName:"Eleanor Roosevelt", citation:"The Last Days"}, 
{qid : 6, qTag:"Science", detail: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", authName:"Benjamin Franklin", citation:"Google"}, 
{qid : 7, qTag:"Life", detail: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", authName:"Helen Keller", citation:"YouTube"}, 
{qid : 8, qTag:"Science", detail: "Whoever is happy will make others happy too.", authName:" Anna Frank", citation:"Diary of Anna"}, 
{qid : 9, qTag:"Life", detail: "Do not go where the path may lead, go instead where there is no path and leave a trail.", authName:"Ralph Waldo Emerson", citation:"LinkedIn"}, 
{qid : 10, qTag:"Sports", detail: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", authName:"Mother Teresa", citation:"Book of Life"}, 
{qid : 11, qTag:"Science", detail: "It is during our darkest moments that we must focus to see the light.", authName:"Aristotle", citation:"Philosohical Aspects"}, 
{qid : 12, qTag:"Life", detail: "When you reach the end of your rope, tie a knot in it and hang on", authName:"Franklin ", citation:"New Horizon"}, 
{qid : 13, qTag:"Sports", detail: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", authName:"Benjamin", citation:"The NY Times"},
{qid : 14, qTag:"Science", detail: "It is during our darkest moments that we must focus to see the light.", authName:"Aristotole", citation:"Life in Dream"},
{qid : 15, qTag:"Science", detail: "Do not go where the path may lead, go instead where there is no path and leave a trail.", authName:"Ralph Waldo Emerson", citation:"Washington Post"} ];

/**********************************
***   creating arrays by tag
**********************************/

const scienceTag = [];
const tagName1 = "Science";
    for(let i=0;i<quotes.length;i++){
        if(tagName1 == quotes[i].qTag){
            scienceTag.push(quotes[i]);
        }
    }

const sportsTag = [];
const tagName2 = "Sports";
    for(let j=0; j<quotes.length; j++){
        if(tagName2 == quotes[j].qTag){
            sportsTag.push(quotes[j]);
        }
    }

const lifeTag = [];
const tagName3 = "Life";
    for(let k=0; k<quotes.length; k++){
        if(tagName3 == quotes[k].qTag){
            sportsTag.push(quotes[k]);
        }
    }

/********************************
 * `getRandomQuote` function
 ********************************/

// random number generator 
function randNum(max){
    let num = Math.floor((Math.random() * max) + 1);
    return num;
};

// delay function
function timeDelay(){
    setTimeout(()=>{
        let d = 0;
    }, 4000);
}

// Random Quote generator
// let length1 =0;
// let index = 0;
const loadQuote = document.querySelector("#load-quote");
function getRandomQuote(){
           
        loadQuote.addEventListener("click", ()=>{
            let length1 = quotes.length;
            let index = randNum(length1);
            printQuote(index);
            console.log("Number of objetcs in Array", length1);
            console.log("Iteration Number", loop);
            console.log("random number is", index);
        })
        let length = quotes.length;
        let index = randNum(length);
        printQuote(index);
        // // timeDelay(4000);
        // // console.log("Index Number", index);
};
let count = 0;
let interval = setInterval(()=>{
    count += 1
    if(count === 50){
        clearInterval(interval);
    }
    getRandomQuote();
    console.log("Counter Number", count);
}, 4000);
// getRandomQuote();

/******************************
 * `printQuote` function
 *****************************/
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const citations = document.querySelector(".citation");
const year = document.querySelector(".year");

function printQuote(index){
    quote.textContent = quotes[index].detail;
    author.textContent = quotes[index].authName;
    citations.textContent = quotes[index].citation;
    const y = new Date();
    year.textContent = y.toUTCString();
}

/***
 * click event listener for the print quote button
 ***/

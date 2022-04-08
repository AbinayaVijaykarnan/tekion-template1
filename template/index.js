
document.querySelector(".form").style.display = "none";
//document.querySelector("#show").style.display = "none";

var dashboardContainer = document.querySelector(".dashboard-container");

/*Showing and Hiding the card-content when clicking on plus-icon */

const plusIcon = document.querySelector("#plus-icon");
const card = document.querySelector("#card-content");

plusIcon.addEventListener('click', () => {
    if (card.style.display === 'none') { // when plus icon is clicked, this block gets executed
        card.style.display = 'block';
        document.querySelector(".form").style.display = "block";
        // document.querySelector("#show").style.display = "block";

        const nodeList = document.querySelectorAll(".dashboard-section");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.opacity = "0.2";
        };
        document.querySelector(".tcc-section").style.opacity = "0.2";
        document.querySelector(".learnmore-section").style.opacity = "0.2";
    } else { // when plus icon is not clicked, this block gets executed
        card.style.display = 'none';
        document.querySelector(".form").style.display = "none";
        // document.querySelector("#show").style.display = "none";

        const nodeList = document.querySelectorAll(".dashboard-section");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.opacity = "100%";
        };
        document.querySelector(".tcc-section").style.opacity = "100%";
        document.querySelector(".learnmore-section").style.opacity = "100%";
    }
});


/*Hiding the card-content when cancel button is clicked */

function cancel() {
    document.querySelector(".form").style.display = "none";
    // document.querySelector("#show").style.display = "none";

    const nodeList = document.querySelectorAll(".dashboard-section");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.opacity = "100%";
    };
    document.querySelector(".tcc-section").style.opacity = "100%";
    document.querySelector(".learnmore-section").style.opacity = "100%";
};

/*Reseting the form*/
function reset() {
    document.querySelector(".form").reset();
    // document.querySelector("#show").style.display = "none";

};

/* Restricting Alphabets & allows only numbers  */

function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57) || (x == 46) || (x == 37))
        return true;
    else {
        alert('Please enter Number characters only');
        return false;
    }
};

/* Restricting Numbers & allows only alphabets */

function restrictNumbers(e) {
    var x = e.which || e.keycode;
    if ((x > 64 &&
            x < 91) || (x > 96 && x < 123) || (x == 32))
        return true;
    else {
        alert('Please enter Alphabet characters only');
        return false;
    }
};


/* Appending dots */
const greendot = '<div class="green-dot">' +
    '</div>';
const skybluedot = '<div class="skyblue-dot">' +
    '</div>';
const darkbluedot = '<div class="darkblue-dot">' +
    '</div>';

//function add() {
//  createCard();
//var showCard = createCard();
//var newdiv = document.createElement("div");
// newdiv.innerHTML = "welcome I have a square, in which there is a picture and text. What i need to do is, when the box is hovered, the text, which is hidden, should appear from bottom and push the image up";
// newdiv.innerHTML = showCard.innerHTML;
// dashboardContainer.appendChild(newdiv);
//newdiv.style.backgroundColor = "blue";
// console.log("newdiv:", newdiv);
//};


/*Getting input from user and adding/showing it on table2*/

function createCard(event) {
    event.preventDefault();
    document.querySelector(".form").style.display = "none";

    const nodeList = document.querySelectorAll(".dashboard-section");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.opacity = "100%";
    };

    document.querySelector(".tcc-section").style.opacity = "100%";
    document.querySelector(".learnmore-section").style.opacity = "100%";

    const title = document.card.title.value; //retrieving data from table1 into table2 using name attribute
    const subtitle = document.card.subtitle.value;
    // const image = document.card.importimage.value;
    const description1 = document.card.description1.value;
    const percentage1 = document.card.percentage1.value;
    const description2 = document.card.description2.value;
    const percentage2 = document.card.percentage2.value;
    const description3 = document.card.description3.value;
    const percentage3 = document.card.percentage3.value;

    const valueA = document.card.valueA.value;
    const valueB = document.card.valueB.value;
    const valueC = document.card.valueC.value;

    /* creating table2 rows dynamically - creating new cards*/
    const subtitleContent = document.createElement("h5");
    const titleContent = document.createElement("h4");

    //Display chart:
    function createChart(valueA, valueB, valueC) {
        //chart create
        let newdiv = document.createElement("div");
        newdiv.classList.add("newdiv");
        let canva = document.createElement("canvas");
        canva.classList.add("canvass");
        let piechartCanvasid = new Date().getTime().toString(); //creates different id
        canva.id = piechartCanvasid;
        newdiv.appendChild(canva);
        const data = {
            datasets: [{
                label: 'My First dataset',
                backgroundColor: ['#21ded1', '#4BB5B0 ', '#1a8deb'],
                borderColor: 'transparent',
                data: [valueA, valueB, valueC], //split percent values
                hoverOffset: 4
            }]
        };
        const config = { type: "pie", data: data }
        setTimeout(() => {
            const ctx = document.getElementById(piechartCanvasid)
            const myChart = new Chart(ctx, config);
        }, 100)
        return newdiv;
    }
    let createChartOutput = createChart(valueA, valueB, valueC);
    // const imgContent = document.createElement("tr");
    // const imageContent = imgContent.appendChild(document.createElement("td"));
    // const userimage = document.createElement("div");
    // userimage.appendChild(createChart(10, 12, 14));

    // userimage.src = "images/piechart2.jpeg";
    // userimage.alt = "userimage";

    const content1 = document.createElement("tr");
    const greendotContent = content1.appendChild(document.createElement("td"));
    const data1 = content1.appendChild(document.createElement("td"));
    const data2 = content1.appendChild(document.createElement("td"));

    const content2 = document.createElement("tr");
    const skybluedotContent = content2.appendChild(document.createElement("td"));
    const data3 = content2.appendChild(document.createElement("td"));
    const data4 = content2.appendChild(document.createElement("td"));

    const content3 = document.createElement("tr");
    const darkbluedotContent = content3.appendChild(document.createElement("td"));
    const data5 = content3.appendChild(document.createElement("td"));
    const data6 = content3.appendChild(document.createElement("td"));


    /*  pushing content from table1 to table2 */
    titleContent.innerHTML = title;
    subtitleContent.innerHTML = subtitle;

    //imageContent.innerHTML = userimage;

    greendotContent.innerHTML = greendot;
    data1.innerHTML = description1;
    data2.innerHTML = percentage1;

    skybluedotContent.innerHTML = skybluedot;
    data3.innerHTML = description2;
    data4.innerHTML = percentage2;

    darkbluedotContent.innerHTML = darkbluedot;
    data5.innerHTML = description3;
    data6.innerHTML = percentage3;


    /*Styling #show contents */
    titleContent.style.textTransform = "uppercase";
    titleContent.style.padding = "10px";
    subtitleContent.style.textTransform = "capitalize";
    subtitleContent.style.padding = "0px 10px 10px 10px";
    // userimage.style.width = "10%";
    //userimage.style.margin = "0 20%";

    /* styling table2  */
    //const style = document.createElement('style');
    //style.innerHTML = `
    //   #show{
    //   background-color: rgba(87, 85, 85, 0.274);
    //  position: sticky;
    //   top: 83px;
    //   }
    // `;

    //document.head.appendChild(style); //appending styled part in template

    var dashboardContainer = document.querySelector(".dashboard-container");
    let show = document.createElement("div");
    show.classList.add("dashboard-section", "newclass");
    show.append(titleContent, subtitleContent, createChartOutput, content1, content2, content3); //appending each row into table2
    dashboardContainer.appendChild(show);
    console.log("show", show);
    return show;

    // document.getElementById("show").appendChild(subtitleContent);

    /*document.getElementById("show").appendChild(imgContent);*/
    // document.getElementById("show").appendChild(userimage);

    // document.getElementById("show").appendChild(content1);
    // document.getElementById("show").appendChild(content2);
    // document.getElementById("show").appendChild(content3);

    // return document.getElementById("show");
}

function marvelviewmore() {
    let marvelviewmore = document.querySelector(".marvel-viewmore-para");
    viewmore(marvelviewmore);
}

function studioviewmore() {
    let studioviewmore = document.querySelector(".studio-viewmore-para");
    viewmore(studioviewmore);
}

function motionviewmore() {
    let motionviewmore = document.querySelector(".motion-viewmore-para");
    viewmore(motionviewmore);
}

function searchviewmore() {
    let searchviewmore = document.querySelector(".search-viewmore-para");
    viewmore(searchviewmore);
}

function viewmore(x) {
    if (x.style.display === 'none') { // when plus icon is clicked, this block gets executed
        x.style.display = "block";

        let nodeList = document.querySelectorAll(".viewmore");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.border = "none";
        };
        document.querySelector(".studio-viewmore").style.border = "none";
    } else { // when plus icon is not clicked, this block gets executed
        x.style.display = 'none';

        let nodeList = document.querySelectorAll(".viewmore");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.border = "block";
        };
        document.querySelector(".studio-viewmore").style.border = "block";
    }
};







/*         ***********************************       */
/*  Appending data using insertrow() and incertcell() default function:

const list1=[];
const list2=[];
const list3=[];
const list4=[];

const n=1;  // row
const x=0; // each element in row

function show(){
   const AddContent= document.getElementById("show");
   const NewContent = AddContent.insertRow(n);

   list1[x] = document.getElementById("title").value;
   list2[x] = document.getElementById("subtitle").value;
 
   const cel1=NewContent.insertCell(0);
   const cel2=NewContent.insertCell(1);

   cel1.innerHTML=list1[x];
   cel2.innerHTML=list2[x];
   
   cel2.style.backgroundColor="red";
   n++;
   x++;
} */

/*Restricting alphabets - form validation:

function allLetter(inputtxt)
{ 
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
   {
     alert('valid input');
     return true;
   }
   else
   {
   alert('Please enter alphabet characters only');
   return false;
   }
};

 */

/* Appending image in card:

  const codeBlock = '<div class="content">' +
  '<img src="images/piechart2-modified.png" alt="btnimage"> ' +
 '</div>';

 */
/*appending image
var userimage=imageContent.appendChild(document.createElement("img"));
userimage.id="im" ;
var im= document.getElementById("im");
im.src=image;  */

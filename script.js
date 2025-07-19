//first we take the event and button
let userInput = document.getElementById('date');
let button = document.querySelector('button')
let result = document.getElementById('result')

button.onclick = calculateAge;
//and here we create a method for we choose the only previous and today date  
userInput.max = new Date().toISOString().split("T")[0];

//after that we will create a function for calculate the age
function calculateAge() {
    let birthDate = new Date(userInput.value); //take the input value
    //after that we will create three variable like date, month, year
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() +1 ; //because month starts will be zero
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1 ;
    let y2 = today.getFullYear();

    //create three others variable for show the difference
    let d3,m3,y3;

    y3 = y2 - y1;
    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1; 
    }

    if( d2 >= d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0 ){
        m3 = 11;
        y3--;  
    }
    result.innerHTML = `✅ You are <span>${y3}</span> years, <span>${m3}</span> Months, <span>${d3}</span> Days Old!!`
    }


    //one more function 
    function getDaysInMonth(year, month){
        return new Date(year, month, 0).getDate()
    }
let userInput = document.getElementById("date");
// The Below function use to not show the future date.
userInput.max = new Date().toISOString().split("T")[0];

let result= document.getElementById("result");

// Function to calculate the age 
function calculateAge(){
  let birthDate= new Date(userInput.value);
   
  // d1,m1,y1 = date of birth
  let d1= birthDate.getDate();
  //  in month we add +1 because in month it will start with 0. Eg: January month is 1 so 0+1 = 1;
  let m1= birthDate.getMonth() + 1;
  let y1= birthDate.getFullYear();

  let today= new Date();
 
  // To get current date,month,year
  let d2= today.getDate();
  let m2= today.getMonth() + 1;
  let y2= today.getFullYear();

  // Storing diffrence in date,month and year
  let d3,m3,y3;
  y3= y2 - y1; // Current year - date of birth 

  // Here We are calculating Month difference
  if(m2 >= m1){
    // If current month is greater or equal to birth month 
    // storing month= current month - birth month
    m3= m2-m1;
  } else{
    // storing year --
    y3--;
    // storing month = 12 + current month - birth month
    m3 = 12+ m2 - m1;
  }

  // Here We are calculating Day difference
  if(d2 >= d1){
    // current date is greater or equal to date birth
    // storing difference= current date - birth date
    d3 = d2 - d1;
  } else{
     m3--;
     d3= getDaysInMonth(y1,m1) + d2 - d1;
  }
  if(m3 < 0){
    m3= 11;
    y3--;
  }
  result.innerHTML= `You are <span>${y3}</span> years, <span>${m3}</span> month and <span>${d3}</span> days old`;
}

// it will return last day of that month
function getDaysInMonth(year, month){
  return new Date(year,month,0).getDate()
}




/* // For those like me who did not understand the JS code of line 22: 
// Here's a step-by-step breakdown: 
// 1. new Date().toISOString(): new Date() creates a new JavaScript Date object representing the current date and time. 
// .toISOString() converts the Date object to a string in ISO format, which looks like this: "YYYY-MM-DDTHH:mm:ss.sssZ". This format includes the date, time, and timezone information.

// 2. .split("T"): .split("T") is a method that splits the string into an array of substrings using the "T" character as the separator. After the split, you get an array with two elements: the date part before "T" and the time part after "T".


// 3. [0]: [0] retrieves the first element of the array, which is the date part.

// 4. "userInput.max = ...": userInput refers to an HTML input element, likely of type "date". 
// The .max attribute sets the maximum allowed value for the date input.

// Putting it all together, the line of code sets the maximum date for the input element to the current date. It extracts the date part from the ISO string format and assigns it to the max attribute. This ensures that users cannot select a date beyond the current date when using the input field. (thanks to chatGPT for the explanation)  */
 
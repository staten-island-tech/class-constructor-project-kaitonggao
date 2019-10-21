//abstraction when computer does work. like colors Hexdecimal
// method is a function inside a function
// objects enclose functions class is an object

class College{
    constructor(name, location, tuition, room, etc, url){ //constructor(userSpecies); 
        this.name = name; // this.species = userSpecies;
        this.location = location;
        this.tuition = tuition;
        this.room = room;
        this.etc = etc;
        this.url = url;

    
        // assigning a variable to method values - base code from avengers website , melkadze showed how to call it below
        this.totalcost = function( tuition, room,  etc){

            //below code is what you need to get total costs.

            var tuition = document.getElementById("tuition").value;
            var room = document.getElementById("room").value;
            var etc = document.getElementById("etc").value;

             // Remember HW 1 w/ numbers?
            // TO ADD NUMBERS YOU MUST CHANGE THEM INTO INTEGERS or else they will act as a string or letters
             

            if (isNaN(tuition) || isNaN(room) || isNaN(etc)) {     // isNaN() = is not a number. Checking if values are alphabet or not.
                alert("Please input a number for tuition, room and etc");
              } else {
                tuition = parseInt(tuition); 
                room = parseInt(room);
                etc = parseInt(etc);
              }

            return tuition + room + etc; // addition
        }
    }
   
}



//Instead of a function you use class 

/* function Avenger(alias, identity, powers, firstAppearance){
    this.alias = alias;
    this.identity = identity;
    this.powers = powers;
    this.firstAppearance = firstAppearance;
    this.yearsActive = function(){
        return new Date().getUTCFullYear() - this.firstAppearance;
    }
} */


class UI {

  //push - avenger website

    displayCollege(college) {
      if(college.name === ''  || college.location === '' || college.tuition === '' || college.room === '' || college.etc === '' || college.url === '' ) { 
          alert("Please fill in all fields");
      } 
      
      else {
      let html = '<div class="display-college"><div class="display-name">%name%</div><div class="display-location">%location%</div><div class="display-tuition">%tuition%</div><div class="display-room">%room%</div><div class="display-etc">%etc%</div><div class="display-total-costs">%totalcost%</div><div class="display-image"><img src="%url%" alt=""></div><div class="remove-button"><p class="remove-button" > Remove College &times;  </p></div></div> ';
      let newHtml = html.replace('%name%', college.name);
      newHtml = newHtml.replace('%location%',  college.location);
      newHtml = newHtml.replace('%tuition%',  college.tuition);
      newHtml = newHtml.replace('%room%', college.room);
      newHtml = newHtml.replace('%etc%', college.etc);
      newHtml = newHtml.replace('%url%', college.url);
      newHtml = newHtml.replace('%totalcost%', college.totalcost(college.tuition, college.room, college.etc)); //melkadze
      document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);
      }
    }

  //clear - Melkadze

   clearValues() {
        document.getElementById("college-form").reset();
    }

  //remove - avenger website

  removeCollege(e) {
    if(e.parentElement.classList.contains('remove-button')){
        e.parentElement.parentElement.remove();
    }
}

}



//EVENT LISTENER -> takes your form values and defines it as variables you will call in class UI


// from avenger website -> takes cats-form and adds the event listener of "submit" onto the form. Whenever something is submitted, this function is run: 

document.getElementById("college-form").addEventListener("submit",function(e){

    //GET CONST  - avenger website
     const name = document.querySelector('#name'); //gets info from the section which is labeled id="species" . This info is now called userinputSpecies
     const location= document.querySelector('#location');
     const tuition = document.querySelector('#tuition');
     const room = document.querySelector('#room');
     const etc = document.querySelector('#etc');
     const url = document.querySelector('#image');
     const totalcost = this.tuition + this.room + this.etc;

     //if something is grey that means that it hasn't been called in your section yet.

     //get const and make a new object category from it. 
 

     //makes new copies of your code.
     const college = new College(name.value, location.value, tuition.value, room.value, etc.value, url.value);     //put .value to get actual values
     const runUI= new UI();  

     runUI.displayCollege(college); // runs the UI class function "displayCats" for the user inputs - "cats"
    
     //runUI.clearValues(); I actually found this clear fields to not be useful
     
     e.preventDefault(); //necessary

 
 })
 
 //removing results - avenger website


 document.querySelector(".display").addEventListener("click", function(e){
    const runUI = new UI();

    var result = confirm("Do you want to delete college?");
    if (result) {
        runUI.removeCollege(e.target); 
    }
  


    runUI.clearFields();
    eI.preventDefault();

});
 

 



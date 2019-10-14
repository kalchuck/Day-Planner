// // thanks diveintohtml5.info
// var notepad = document.getElementById("notepad");
// var schedule = document.getElementById("schedule");
// console.log(schedule.innerHTML);
// var note;
// window.onkeyup = save;

// function supportsLocalStorage() {
//     return ('localStorage' in window) && window['localStorage'] !== null;
// }

// function save() {
//     if (!supportsLocalStorage()) { return false; }
// 		note = notepad.value;
// 		console.log(note);
// 		localStorage["stored.note"] =  note;
//     return true;
// }

// function resume() {
//     if (!supportsLocalStorage()) { return false; }
// 		note = localStorage["stored.note"];
// 		if (!note) { return false; }
// 		notepad.value = note;
// 		return true;
// }

// function displayTimeList() {
// 	var times ='';
// 	for (i = 7; i<=9;i++){
// 		times += '<li>0'+parseInt(i)+':00</li>';
// 		times += '<li>0'+parseInt(i)+':30</li>';
		
// 	}
// 	for (i = 10; i<=24;i++){
// 		times += '<li>'+parseInt(i)+':00</li>';
// 		times += '<li>'+parseInt(i)+':30</li>';
		
// 	}
// 	var timeTable = '<ul>'+times+'</ul';
// 	return timeTable
	
// }
// function init(){
	
// 	schedule.innerHTML = displayTimeList();

//     if (!resume()) {
//     }
// }

// init();


// establish variables for the time blocks in the Day Planner

$(document).ready(function() {
    console.log( "ready!" )
    
    var time = moment().format("dddd, MMMM Do YYYY");

    var appointments = ["9am", "10am", "11am", "12pm", "1pm", "2pm","3pm","4pm","5pm"];

    var textBlockEl = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var calender = $("<div>");
    $("#planner").append(calender);

    
    

    function getTime(){
        console.log(time);

        var date=$("<div>");
        date.append("#currentDay");
        $("#currentDay").text(time);
    }

    function timeBlocks(){
        for (var i = 0; i < appointments.length; i++) {
         
            var timeBlock = $("<div>");         
            
            timeBlock.addClass("row hour");

            timeBlock.attr("data-hour", appointments[i]);
            
            
            timeBlock.text(appointments[i]);

            
            $("#hr").append(timeBlock);
            
        }
    }
    function textBlocks(){
        for (var i = 0; i < textBlockEl.length; i++) {
         
            var textBlock = $("<textarea>");   
            
            textBlock.addClass("row description");

            textBlock.attr("data-text", textBlockEl[i]);          
                        
            $("#text").append(textBlock);
        }
    }
    function buttonBlocks(){
        for (var i = 0; i < textBlockEl.length; i++) {
         
            var button = $("<button>");

            button.addClass("row saveBtn");

            button.attr("data-save", textBlockEl[i]);   
            
            button.text("Save");
                        
            $("#saveButton").append(button);
        }
    }
   
    
    console.log(appointments);
    timeBlocks();
    textBlocks();
    buttonBlocks();
    getTime();
});
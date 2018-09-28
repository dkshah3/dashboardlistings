
(function ($) {
    "use strict";

        
        // Get a reference to the database service
var database = firebase.database();

  // console.log('kobe');

firebase.database().ref('xwhX9E9okbM4oVYuu7GWJT2kXe83').child("discounts_active").on('value', function(snapshot) {


if(snapshot.exists()){
	var discounts_active = snapshot.val();
	
if(discounts_active == true){
 firebase.database().ref('xwhX9E9okbM4oVYuu7GWJT2kXe83').child("menu").on('value', function(snapshot) {
 
 if(snapshot.exists()){
//table.clear();
 var content = '';
 var odd = 1;

            snapshot.forEach(function(data){

 var val = data.val();
 console.log(val.time_up);


 if(val.time_up != true){
if(!document.getElementById(val.name)){



 var div = document.createElement("div");
 div.id = val.name
 div.setAttribute('class', 'row');

 document.getElementById("table").appendChild(div);
 var div2 = document.createElement("div");
	div2.setAttribute('class', 'cell');
	div2.setAttribute('data-title', 'Food Name');
	div2.innerHTML = val.name;
	foodNamesAndTimes.push(val.name);
 document.getElementById(val.name).appendChild(div2);

 var div4 = document.createElement("div");
	div4.setAttribute('class', 'cell');
	div4.setAttribute('data-title', 'Description');
	div4.innerHTML = val.desc;
 document.getElementById(val.name).appendChild(div4);

  var div5 = document.createElement("div");
	div5.setAttribute('class', 'cell');
	div5.setAttribute('data-title', 'Price');
	div5.innerHTML = "$" + val.discounted_price;
 document.getElementById(val.name).appendChild(div5);

   var div6 = document.createElement("div");
	div6.setAttribute('class', 'cell');
	div6.setAttribute('data-title', '% Discount');
	div6.innerHTML = val.percent_discount + "%";
 document.getElementById(val.name).appendChild(div6);


   var div7 = document.createElement("div");
	div7.setAttribute('class', 'cell');
	div7.id = val.name + '_time';
	div7.setAttribute('data-title', 'Time Left');
	div7.innerHTML = val.time + ' hours';

	foodNamesAndTimes.push(val.time);
 document.getElementById(val.name).appendChild(div7);


firebase.database().ref('xwhX9E9okbM4oVYuu7GWJT2kXe83').on('value', function(snapshot) {
 //console.log("hi");
 if(snapshot.exists()){
//table.clear();
 var content = '';
 var odd = 1;
 //console.log(snapshot.val().menu);
          
var div8 = document.createElement("div");
	div8.setAttribute('class', 'cell');
	div8.setAttribute('data-title', 'Location');
	div8.innerHTML = snapshot.val().address;
 document.getElementById(val.name).appendChild(div8);


   var div9 = document.createElement("div");
	div9.setAttribute('class', 'cell');
	div9.setAttribute('data-title', 'Restaurant Name');
	div9.innerHTML = snapshot.val().restaurant_name;
	//document.getElementById(val.name).appendChild(div9);
 document.getElementById(val.name).insertBefore(div9, document.getElementById(val.name).children[1]);
}
});


if(isMobile() == true){
	console.log("here");
  var spacer = document.createElement("div");
	spacer.setAttribute('class', 'spacer');
	document.getElementById('table').append(spacer);
}


}

else{
	location.reload();

}
}
//console.log(val);

    });

updateClock();

}


});

}

else{

	

 if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else{
      localStorage.removeItem('firstLoad');
    }
  }

	console.log("DONT SHOW");
}

}
});



})(jQuery);

var foodNamesAndTimes = ['Test'];

function updateClock() {
    var now = new Date(); // current date


    
     time = now.getHours() + ':' + now.getMinutes(); 
     // again, you get the idea
   // console.log(foodNamesAndTimes);
    // timeLeft = timeUntil - now.getHours()


for (i = 1; i < foodNamesAndTimes.length; i = i+2) { 

	timeData = foodNamesAndTimes[i+1];
	var dataDate = moment(timeData, "YYYY-MM-DD HH:mm")
	var currentDate = moment(now.getFullYear().toString() + '-' + (now.getMonth()+1).toString() + '-' + now.getDate().toString() + ' ' + now.getHours().toString() + ':' + now.getMinutes().toString(),  "YYYY-MM-DD HH:mm");
	//console.log(dataDate);
	//console.log(currentDate);

	var diff = dataDate.diff(currentDate, "miliseconds");
	if(diff > 0){
		var c = convertMS(diff);
	document.getElementById(foodNamesAndTimes[i] + '_time').innerHTML = + c.d + " days " + c.h + " hours " + "<br\>" +  c.m + " minutes";
	}
	else{
		var c = convertMS(diff);
		// if(document.getElementById())
	document.getElementById(foodNamesAndTimes[i] + '_time').innerHTML = "TIMES UP";
	 var updates = {};
  	updates['/xwhX9E9okbM4oVYuu7GWJT2kXe83' + '/menu/' + foodNamesAndTimes[i] +  '/time_up'] = true;
	firebase.database().ref().update(updates);


	}
	

/*
	timeYear = timeData.substring(0, 4);
	timeMonth = timeData.substring(5, 7);
	timeDate = timeData.substring(8, 10);
	timeHour = timeData.substring(11, 13);
	timeMinute = timeData.substring(14, 16);
	*/

	/*
	console.log('--');
	console.log(timeYear);
	console.log(timeMonth);
	console.log(timeDate);
	console.log(timeHour);
	console.log(timeMinute);
	console.log('--');
	*/ 


	// console.log(now.getDate());

	/*
	timeLeftYears =  parseInt(timeYear) - now.getFullYear();
	
	timeLeftMonths =  parseInt(timeMonth) - (now.getMonth() + 1);
	 timeLeftDays =  parseInt(timeDate) - now.getDate();
	timeLeftHours =  parseInt(timeHour) - now.getHours();
	timeLeftMinutes =  parseInt(timeMinute) - now.getMinutes();


	if(timeLeftYears > 0){

		document.getElementById(foodNamesAndTimes[i] + '_time').innerHTML = timeLeftYears + " years " +  timeLeftMonths + " months " + timeLeftDays + " days " + timeLeftHours + " hours " + "<br\>" +  timeLeftMinutes + " minutes";


	}
	else{

		if(timeLeftYears == 0){



		if(timeLeftMonths > 0){


document.getElementById(foodNamesAndTimes[i] + '_time').innerHTML = timeLeftMonths + " months " + timeLeftDays + " days " + timeLeftHours + " hours " + "<br\>" +  timeLeftMinutes + " minutes";



		}
		else{


			if(timeLeftMonths == 0){



			if(timeLeftDays > 0){


document.getElementById(foodNamesAndTimes[i] + '_time').innerHTML = timeLeftDays + " days " + timeLeftHours + " hours " + "<br\>" +  timeLeftMinutes + " minutes";

			}
			else{


				if(timeLeftDays == 0){



				if(timeLeftHours > 0){


					document.getElementById(foodNamesAndTimes[i] + '_time').innerHTML = timeLeftHours + " hours " + "<br\>" +  timeLeftMinutes + " minutes";


				}
				else{




					if(timeLeftHours == 0){

						if(timeLeftMinutes > 0){

						document.getElementById(foodNamesAndTimes[i] + '_time').innerHTML = timeLeftMinutes + " minutes";

					}
					else{
						document.getElementById(foodNamesAndTimes[i]).outerHTML = "";
					}

					}
					else{

						document.getElementById(foodNamesAndTimes[i]).outerHTML = "";
					}

				


				}
					}
					else{
							document.getElementById(foodNamesAndTimes[i]).outerHTML = "";
					}


			}

	}
	else{
		document.getElementById(foodNamesAndTimes[i]).outerHTML = "";
	}


		}
}
else{
	document.getElementById(foodNamesAndTimes[i]).outerHTML = "";

}


	}

	
	// document.getElementById(foodNamesAndTimes[i] + '_time').innerHTML = timeLeftHours + " hours" + "<br\>" +  timeLeftMinutes + " minutes";
    */
}

    // call this function again in 5000ms
    setTimeout(updateClock, 5000);
}

function isMobile(){
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return { d: d, h: h, m: m, s: s };
};



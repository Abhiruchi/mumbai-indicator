// variable which will hold the database connection
var db;

function initializeDB() {
	if (window.indexedDB) {
	  console.log("IndexedDB support is there");
	}
	else {
	   alert("Indexed DB is not supported. Where are you trying to run this ? ");
	}
 
	// open the database
	// 1st parameter : Database name. We are using the name 'student'
	// 2nd parameter is the version of the database.
	var request = indexedDB.open('m_indicator', 1);
	
	request.onsuccess = function (e) {
	  // e.target.result has the connection to the database
	  db = e.target.result;
	  //Alternately, if you want - you can retrieve all the items
	}
	 
	request.onerror = function (e) {
	   console.log(e);
	};
	 
	// this will fire when the version of the database changes
	// We can only create Object stores in a versionchange transaction.
	request.onupgradeneeded = function (e) {
	   // e.target.result holds the connection to database
	   db = e.target.result;
	   
	   if (db.objectStoreNames.contains("train_details")) {
	     db.deleteObjectStore("train_details");
	   }
		
	    const customerData = [
		{ id: "00_01", name: "Karjat", flag: "1",time1: "4:00 AM",time2:"4:21 AM",time3:"4:50 PM",time4:"5:00 PM",time5:"5:20 PM"},
		{ id: "00_02", name: "Bhivpuri road", flag: "",time1:"4:44 AM",time2:"5:29 AM",time3:"6:20 PM",time4:"6:50 PM",time5:"7:20 PM"},
		{ id: "00_03", name: "Neral", flag: "" ,time1:"4:51AM",time2:"5:36 AM",time3:"6:40 PM",time4:"7:40 PM",time5:"8:40 PM"},
		{ id: "00_04", name: "Shelu", flag: "",time1:"4:55 AM",time2:"5:40 AM",time3:"3:45 PM",time4:"3:45 PM",time5:"3:45 PM"},
		{ id: "00_05", name: "Vangali", flag: "",time1:"4:59 AM",time2:"5:44 AM",time3:"6:55 PM",time4:"7:55 PM",time5:"8:55 PM"},
		{ id: "00_06", name: "Badlapur", flag: "1",time1:"5:08 AM",time2:"5:53 AM",time3:"6:00 PM",time4:"7:00 PM",time5:"8:00 PM"},
		{ id: "00_07", name: "Ambernath", flag: "1",time1:"5:16 AM",time2:"6:01 AM",time3:"7:05 PM",time4:"8:05 PM",time5:"9:05 PM"},
		{ id: "00_08", name: "Ulhas Nagar", flag: "",time1:"5:20 AM",time2:"6:05 AM",time3:"7:10 PM",time4:"8:10 PM",time5:"9:10 PM"},
		{ id: "00_09", name: "Vuthalwadi", flag: "",time1:"5:23 AM",time2:"6:08 AM",time3:"6:15 PM",time4:"7:15 PM",time5:"8:15 PM"},
		{ id: "00_10", name: "Kalyan", flag: "1",time1:"5:29 AM",time2:"6:14 AM",time3:"7:20 PM",time4:"8:20 PM",time5:"9:20 PM"},
		{ id: "00_11", name: "Thakurali", flag: "",time1:"5:35 AM",time2:"6:30 PM",time3:"7:30 PM",time4:"8:30 PM",time5:"9:30 PM"},
		{ id: "00_12", name: "Dombivili", flag: "1",time1:"5:38 AM",time2:"6:21 AM",time3:"7:40 PM",time4:"8:40 PM",time5:"9:40 PM"},
		{ id: "00_13", name: "kopar", flag: "",time1:"5:41 AM",time2:"6:30 PM",time3:"7:42 PM",time4:"8:42 PM",time5:"9:42 PM"},
		{ id: "00_14", name: "Diva JN", flag: "",time1:"5:46 AM",time2:"6:15 PM",time3:"7:43 PM",time4:"8:43 PM",time5:"9:43 PM"},
		{ id: "00_15", name: "Mumbra", flag: "",time1:"5:50 AM",time2:"6:30 PM",time3:"7:45 PM",time4:"8:45 PM",time5:"9:45 PM"},
		{ id: "00_16", name: "Kalva", flag: "",time1:"5:56 AM",time2:"",time3:"6:50 PM",time4:"8:50 PM",time5:"9:50 PM"},
		{ id: "00_17", name: "Thane", flag: "1",time1:"6:00 AM",time2:"6:34 AM",time3:"7:51 PM",time4:"8:51 PM",time5:"9:51 PM"},
		{ id: "00_18", name: "Mulund", flag: "",time1:"6:04 AM",time2:"",time3:"7:52 PM",time4:"8:52 PM",time5:"9:52 PM"},
		{ id: "00_19", name: "Nahur", flag: "",time1:"6:07 AM",time2:"",time3:"7:53 PM",time4:"8:53 PM",time5:"9:53 PM"},
		{ id: "00_20", name: "Bhandup", flag: "",time1:"6:10 AM",time2:"",time3:"8:58 PM",time4:"9:58 PM",time5:"10:58 PM"},
		{ id: "00_21", name: "Kanjur Marg", flag: "",time1:"6:13 AM",time2:"",time3:"5:00 PM",time4:"6:00 PM",time5:"7:00 PM"},
{ id: "00_22", name: "Vikhroli", flag: "",time1:"6:16 AM",time2:"",time3:"5:07 PM",time4:"6:07 PM",time5:"7:05 PM"},
{ id: "00_23", name: "Ghatkopar", flag: "1",time1:"6:21 AM",time2:"6:48 AM",time3:"5:13 PM",time4:"",time5:"7:07 PM"},
{ id: "00_24", name: "Vidyavihar", flag: "",time1:"6:24 AM",time2:"",time3:"5:15 PM",time4:"6:13 PM",time5:"7:12 PM"},
{ id: "00_25", name: "Kurla", flag: "1",time1:"6:27 AM",time2:"6:52 AM",time3:"5:17 PM",time4:"6:17 PM",time5:"7:15 PM"},
{ id: "00_26", name: "Sion", flag: "",time1:"6:31 AM",time2:"",time3:"5:21 PM",time4:"6:21 PM",time5:"7:20 PM"},
{ id: "00_27", name: "Matunga", flag: "",time1:"6:35 AM",time2:"",time3:"5:24 PM",time4:"6:24 PM",time5:"7:23 PM"},
{ id: "00_28", name: "Dadar", flag: "1",time1:"6:38 AM",time2:"7:00 AM",time3:"5:28 PM",time4:"6:28 PM",time5:"7:26 PM"},
{ id: "00_29", name: "Parel", flag: "",time1:"6:41 AM",time2:"",time3:"5:29 PM",time4:"6:29 PM",time5:"5:31 PM"},
{ id: "00_30", name: "Currey Road", flag: "",time1:"6:44 AM",time2:"",time3:"5:34 PM",time4:"6:34 PM",time5:"7:36 PM"},
{ id: "00_31", name: "Chinchpokli", flag: "",time1:"6:46 AM",time2:"",time3:"5:37 PM",time4:"6:37 PM",time5:"7:36 PM"},
{ id: "00_32", name: "Byculla", flag: "1",time1:"6:48 AM",time2:"7:06 AM",time3:"5:45 PM",time4:"6:45 PM",time5:"7:39 PM"},
{ id: "00_33", name: "Sandhurst Road", flag: "",time1:"6:51 AM",time2:"",time3:"5:49 PM",time4:"6:49 PM",time5:"7:41`PM"},
{ id: "00_34", name: "Masjid", flag: "",time1:"6:54 AM",time2:"",time3:"5:51 PM",time4:"6:51 PM",time5:"7:46 PM"},
{ id: "00_35", name: "CST", flag: "1",time1:"6:57",time2:"7:14 AM",time3:"5:56 PM",time4:"6:56 PM",time5:"7:49 PM"},
];
		
	   // create a store named 'notes'
	   // 1st parameter is the store name
	   // 2nd parameter is the key field that we can specify here. Here we have opted for autoIncrement but it could be your
	   // own provided value also.
	   var objectStore = db.createObjectStore('train_details', { keyPath: 'id'});
	   
	   for (var i in customerData) {
                objectStore.add(customerData[i]);      
       }
		
	   console.log("Object Store has been created");
	};
}


$(document).ready(function(){
 
initializeDB();

$("#btnViewStations_dec").click(function(){

$.mobile.changePage ($("#view_stations_dec"));

 var transaction = db.transaction(["train_details"]);
 
 var objectStore = transaction.objectStore("train_details");
 
var array = new Array();
var id=new Array();
var i = 0;
var flag= new Array();

objectStore.openCursor().onsuccess = function(event) {
var cursor = event.target.result;

if (cursor) {
	var value = cursor.value;
	var h3name = value.name;
	var idd=value.id;
	var flagg = value.flag;
	array.push(h3name);
	id.push(idd);
	flag.push(flagg);
	//alert(array[i]);
	i = i + 1;
	cursor.continue();
}


$('div[data-role=collapsible]').collapsible({refresh:true});

};

alert("Choose station");

for (j = 34; j >= 0; j--) {
	
	var noteElement = $("<div data-role='collapsible' data-theme='a' data-content-theme='a'>");
	var h3name = array[j];
	var temp=id[j];
	var a = document.createElement("a");
	a.innerHTML=array[j];
	a.id=temp;
	
	if(flag[j]==1)
	{
		a.innerHTML = "<span class='green'>" + array[j] + "</span>";
	}
	noteElement.append(a);
	$("#note-list").append(noteElement);
	
	a.addEventListener("click", function(e) {
		//$.mobile.changePage("list.html");
		var id = this.id;
		
		$.mobile.changePage('#newPageId1', { param1 : id });
  });
}       



});


$("#btnViewStations_inc").click(function(){

$.mobile.changePage ($("#view_stations_inc"));

 var transaction = db.transaction(["train_details"]);
 
 var objectStore = transaction.objectStore("train_details");
 
var array = new Array();
var id=new Array();
var i = 0;
var flag2=new Array();

objectStore.openCursor().onsuccess = function(event) {
var cursor = event.target.result;

if (cursor) {
	var value = cursor.value;
	var h3name = value.name;
	var idd=value.id;
	var flagg1 = value.flag;
	array.push(h3name);
	id.push(idd);
	
	flag2.push(flagg1);
	//alert(array[i]);
	i = i + 1;
	cursor.continue();
}


$('div[data-role=collapsible]').collapsible({refresh:true});

};

alert("Choose station");

for (j = 0; j <= 34; j++) {
	
	var noteElement = $("<div data-role='collapsible' data-theme='a' data-content-theme='a'>");
	var h3name = array[j];
	var temp=id[j];
	
	var a = document.createElement("a");
	a.innerHTML=array[j];
	a.id=temp;
	if(flag2[j]==1)
	{
		a.innerHTML = "<span class='green'>" + array[j] + "</span>";
	}
	noteElement.append(a);
$("#note").append(noteElement);
	a.addEventListener("click", function(e) {
		//$.mobile.changePage("list.html");
		var id = this.id;
		
		$.mobile.changePage('#newPageId1', { param1 : id });
  });
}       

});



$("#btnCentral").click(function(){
$.mobile.changePage ($("#select_station"));
});

});


$( document ).on( "pagebeforechange" , function ( event, data ) {
			if ( data.toPage[0].id == "newPageId1" ) {
				var stuff = data.options.param1;
				console.log(stuff);
				
			//	alert(stuff);
				
				var transaction = db.transaction(["train_details"]);
				var objectStore = transaction.objectStore("train_details");

			    var request = objectStore.get(stuff);
				
				alert("Watch Details");
				
				var name = request.result.name;
				var a  = request.result.time1;
				var b  = request.result.time2;
				var c  = request.result.time3;
				var d  = request.result.time4;
				var e  = request.result.time5;
				
			//	alert(stuff);
				
				//alert(a);
				//alert(b);
				
				document.getElementById("newPageId").innerHTML=name;
				
				document.getElementById("newPageId2").innerHTML=a;
				document.getElementById("newPageId3").innerHTML=b;
				document.getElementById("newPageId4").innerHTML=c;
				document.getElementById("newPageId5").innerHTML=d;
				document.getElementById("newPageId6").innerHTML=e;
				//alert(stuff);
			}
			
			$("#btnRailCodes").click(function(){
$.mobile.changePage ($("#rail_codes"));
});

$("#btnRailMap").click(function(){
$.mobile.changePage ($("#map_rail"));
});
});

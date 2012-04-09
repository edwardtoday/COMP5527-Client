/* create a local key/value store */
var localdata = Lawnchair({name:'localdata'},function(e){
  console.log('lawnchair storage open');
  });

/* there is some data to be saved */
var data = {beername:"Wet Hop",brewername:"Deschuttes",brewerlocation:"Bend, OR"
		,beerstyle:"IPA",quantity:1,purchasedate:"12/11/2011",price:"9.00"
		,cellardate:"9/11/2011",cellartemp:40,brewdate:"8/10/2011"};

/* save the data		 */
localdata.save({key:"_patientlist",value:data});

/* get the data later */
localdata.get("_patientlist",function(data){
  console.log(data);
  });

/* replace the data with new values */
localdata.get("_patientlist",function(olddata){
  console.log(olddata);
  var newdata = {};
  newdata = olddata.value;
  newdata.beername = "Not Wet Hop";
  localdata.save({key:olddata.key,value:newdata});
  });
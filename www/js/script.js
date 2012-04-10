$(document).ready(function(){
	
    	 $.tzPOST("getUserinfo",null,function(data){
    		    var r=eval( "(" + data + ")" );
    		    var arr=[];
    		    if(r.userinfo){
    		    	arr=['<ul id="patientlist_ul" class="plastic scroll">']; 
    		    	for(var i=0;i < r.userinfo.length;i++){
    		    		var info='<li class="arrow"><a href="#patientinfo" name="'+i+'">'+r.userinfo[i].fullName+'</a></li>';
    		    		arr.push(info);
    		    		}
    		    	arr.push('</ul>');
    		    }    		   				
    		    $("ul#patientlist_ul").replaceWith(arr.join(''));
    		   
    	 	
	});
    	 $("[href='#patientinfo']").live('click',function(){
    		 var num=$(this).attr("name");  		 
    		 $.tzPOST("getUserinfo",null,function(data){
    	     var r=eval( "(" + data + ")" );
    	     $("#patientinfo_title").replaceWith('<h1 id="patientinfo_title">'+r.userinfo[num].fullName+'</h1>');
    		 $("#basicinfo_email").replaceWith('<a id="basicinfo_email" href="#">'+r.userinfo[num].emailaddress+'<small>email</small></a>');
    		 $("#basicinfo_birthday").replaceWith('<a id="basicinfo_birthday" href="#">'+r.userinfo[num].birthDate+'<small>birthday</small></a>');
    		 $("#basicinfo_gender").replaceWith('<a id="basicinfo_gender" href="#">'+r.userinfo[num].gender+'<small>gender</small></a>');
    		 $("#basicinfo_marital").replaceWith('<a id="basicinfo_marital" href="#">'+r.userinfo[num].married+'<small>marital</small></a>');
    		 $("#allergies").val(r.userinfo[num].allergies);
    		 });
    		 $.tzPOST("getRecordinfo",null,function(data){
    			var r=eval( "(" + data + ")" );
     		    var arr=[];
     		   if(r.recordinfo){
   		    	arr=['<ul id="patientinfo_records_ul" class="plastic scroll">']; 
   		    	for(var i=0;i < r.recordinfo.length;i++){
   		    		var info='<li class="arrow"><a href="#record" name="'+i+'">'+r.recordinfo[i].date+'</a></li>';
   		    		arr.push(info);
   		    		}
   		    	arr.push('</ul>');
   		    }  		
   		    $("ul#patientinfo_records_ul").replaceWith(arr.join(''));
        		 });
    	 });
    	 
    	 $("[href='#record']").live('click',function(){
    		 var num=$(this).attr("name");  		 
    		 $.tzPOST("getRecordinfo",null,function(data){
    	     var r=eval( "(" + data + ")" );
    	     $("#record_doctor").replaceWith('<div id="record_doctor" class="content">'+r.recordinfo[num].doctor+'</div>');
    	     $("#record_symptom").replaceWith('<div id="record_symptom" class="content">'+r.recordinfo[num].symptom+'</div>');
    	     $("#record_diagnosis").replaceWith('<div id="record_diagnosis" class="content">'+r.recordinfo[num].diagnosis+'</div>');
    	     $("#record_treatment").replaceWith('<div id="record_treatment" class="content">'+r.recordinfo[num].treatment+'</div>');
    	    // $("#record_remark").replaceWith('<div id="record_remark" class="content">'+r.recordinfo[num].remark+'</div>');
    	     
    		
    		 });
    	 });
    	 
    	 $("[href='#appointments']").live('click',function(){	 
    		 $.tzPOST("getAppointmentinfo",null,function(data){
    	     var r=eval( "(" + data + ")" );
     		    var arr=[];
     		   if(r.appointmentinfo){
   		    	arr=['<ul id="appointments_ul" class="plastic scroll">']; 
   		    	for(var i=0;i < r.appointmentinfo.length;i++){
   		    		var info='<li class="arrow"><a href="#appointment" name="'+i+'">'+r.appointmentinfo[i].endtime+'</a></li>';
   		    		arr.push(info);
   		    		}
   		    	arr.push('</ul>');
   		    }  		
   		    $("ul#appointments_ul").replaceWith(arr.join(''));
        		 });
    	 });
    	 
    	 $("[href='#appointment']").live('click',function(){
    		 var num=$(this).attr("name");  		 
    		 $.tzPOST("getAppointmentinfo",null,function(data){
    	     var r=eval( "(" + data + ")" );
    	     $("#appointment_doctor_name").val(r.appointmentinfo[num].doctor);
    	     $("#appointment_start").val(r.appointmentinfo[num].begintime);
    	     $("#appointment_end").val(r.appointmentinfo[num].endtime);
    		 });
    	 });
    	 
    	 
    	 $("[href='#doaddappointment']").live('click',function(){	 
    		 $.tzPOST("addAppointmentinfo",$("#addappointmentinfo").serialize(),function(data){
    	     var r=eval( "(" + data + ")" );
    	    // $("#appointment_doctor_name").val(r.appointmentinfo[num].doctor);
    	    //  $("#appointment_start").val(r.appointmentinfo[num].begintime);
    	    // $("#appointment_end").val(r.appointmentinfo[num].endtime);
    	     //if(r.result)
    	    	 
    	     //else
    		 });
    	 });
    	 
    	 $("[href='#doupdateappointment']").live('click',function(){	 
    		 $.tzPOST("addAppointmentinfo",$("#addappointmentinfo").serialize(),function(data){
    	     var r=eval( "(" + data + ")" );
    	    // $("#appointment_doctor_name").val(r.appointmentinfo[num].doctor);
    	   //  $("#appointment_start").val(r.appointmentinfo[num].begintime);
    	    // $("#appointment_end").val(r.appointmentinfo[num].endtime);
    		 });
    	 });
    	 
    	 
});

$.tzPOST = function(action,data,callback){
	$.post('http://localhost:8080/Health_managment/Action?action='+action,data,callback,'text');
}

$.tzGET = function(action,data,callback){
	$.get('php/ajax.php?action='+action,data,callback,'text');
}

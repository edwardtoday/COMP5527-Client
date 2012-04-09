$(document).ready(function(){
	
    	 $.tzPOST("getUserinfo",null,function(data){
    		    var r=eval( "(" + data + ")" );
    		    var arr=[];
    		    if(r.userinfo){
    		    	arr=['<ul id="patientlist_ul" class="plastic scroll">']; 
    		    	for(var i=0;i < r.userinfo.length;i++){
    		    		var info='<li class="arrow"><a id="patientinfo1" href="#patientinfo" onclick=>'+r.userinfo[i].fullName+'</a></li>';
    		    		arr.push(info);
    		    		}
    		    	arr.push('');
    		    }
    		   
				
    		    $("ul#patientlist_ul").replaceWith(arr.join(''));
    		   
    	 	
	});
    	 $("#patientinfo1").live('click',function(){
    		 $("#basicinfo_email").replaceWith('');
    	 });
});

$.tzPOST = function(action,data,callback){
	$.post('http://localhost:8080/Health_managment/Action?action='+action,data,callback,'text');
}

$.tzGET = function(action,data,callback){
	$.get('php/ajax.php?action='+action,data,callback,'text');
}

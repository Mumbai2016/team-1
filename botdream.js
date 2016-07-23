/** This is a sample code for your bot**/
	    function MessageHandler(context, event) {
	        context.console.log("test")
	        var status = "demo";
	        var input;
	        var lastReceivedMsg = context.simpledb.roomleveldata.lastReceivedMsgReceived;
	        var lastSentMsg = context.simpledb.roomleveldata.lastSentMsg;
	        if(lastSentMsg == "Hello, I am the dream bot")
	        {	
	        	context.simplehttp.makeGet("ec2-54-179-162-31.ap-southeast-1.compute.amazonaws.com:1234/status/?student_id=1");
	        	return;
	        	
	        	
	        }
	        else if (lastSentMsg == "Enter yes or no") 
	        {
	        	if (event.message.toLowerCase() == "yes") 
	        	{
	        		context.sendResponse("Enter the option number for new status.\n 1.Secondary School\n 2.Senior Secondary School\n 3.Diploma\n 4.Graduation Degree\n 5.Employed\n 6.Vocational Training\n 7.Student and Employed\n 8.Dropout\n 9.Married");
	        		context.simpledb.roomleveldata.lastSentMsg = " 9.Married"; 
	        	}
	        	else if (event.message.toLowerCase() == "no") 
	        	{
	        		context.simplehttp.makeGet('ec2-54-179-162-31.ap-southeast-1.compute.amazonaws.com:1234/workshop/');
	        		var url = 'ec2-54-179-162-31.ap-southeast-1.compute.amazonaws.com:1234/workshop/';
			        var param = "";
			        var header = {"Content-Type": "application/x-www-form-urlencoded"};
         			context.simplehttp.makePost(url,param,header);
	        	}
	        }
	        else if (lastSentMsg == " 9.Married") 
	        {
	        	switch(event.message)
	        	{
	        		case '1':
	        		case '2':
	        		case '3':
	        		case '4':
	        		case '5':
	        		case '6':
	        		case '7':
	        		case '8':
	        		case '9':
	        			input = event.message;
	        			context.simplehttp.makeGet(ec2-54-179-162-31.ap-southeast-1.compute.amazonaws.com:1234/update_status/?id=input&student_id=1);
	        			return;
	        		default:
	        			context.sendResponse("Error input. Please enter the choice again");
	        			return;
	        	}
	        }
	        
	        else if(event.message.toLowerCase() == "hi") {
	            context.sendResponse("Hello, I am the dream bot");
	            context.simpledb.roomleveldata.lastSentMsg = "Hello, I am the dream bot"
	            context.simplehttp.makeGet("ec2-54-179-162-31.ap-southeast-1.compute.amazonaws.com:1234/getstatus/?student_id=1");
	        }
	        
	        else if(event.message.toLowerCase() == "httptest") {
	            context.simplehttp.makeGet("http://ip-api.com/json");
	        }
	        else if(event.message.toLowerCase() == "testdbget") {
	            context.simpledb.doGet("putby")
	        }
	        else if(event.message.toLowerCase() == "testdbput") {
	            context.simpledb.doPut("putby", event.sender);
	        }
	        else {
	            context.sendResponse('No keyword found : '+event.message); 
	        }
	        
	        context.simpledb.roomleveldata.lastReceivedMsgReceived = event.message;
	        
	    }


	     function HttpResponseHandler(context, event) {
           var JsonObj = JSON.parse(event.getresp);
           var id = JsonObj.id
           console.log("Here!")

           if (id == 1) 
           {
           		var status = JsonObj.status;
           		context.sendResponse("Your previous status is marked as " + status);
           		context.sendResponse("Are there any changes in the status?");
	        	context.sendResponse("Enter yes or no");
	        	context.simpledb.roomleveldata.lastSentMsg = "Enter yes or no";
           }
           else if (id == 2) 
           {
           		var 
           }
       }
	    /** Functions declared below are required **/
	    function EventHandler(context, event) {
	        if(! context.simpledb.botleveldata.numinstance)
	            context.simpledb.botleveldata.numinstance = 0;
	        numinstances = parseInt(context.simpledb.botleveldata.numinstance) + 1;
	        context.simpledb.botleveldata.numinstance = numinstances;
	        context.sendResponse("Thanks for adding me. You are:" + numinstances);
	    }
	
	
	    function DbGetHandler(context, event) {
	        context.sendResponse("testdbput keyword was last get by:" + event.dbval);
	    }
	
	    function DbPutHandler(context, event) {
	        context.sendResponse("testdbput keyword was last put by:" + event.dbval);
	    }
/** This is a sample code for your bot**/
	    function MessageHandler(context, event) {
	        context.console.log("test")
	        var status = "demo";
	        
	        var lastReceivedMsg = context.simpledb.roomleveldata.lastReceivedMsgReceived;
	        var lastSentMsg = context.simpledb.roomleveldata.lastSentMsg;
	        if(lastSentMsg == "Hello, I am the dream bot")
	        {
	        	context.sendResponse("Your previous status is marked as " + status);
	        	context.sendResponse("Are there any changes in the status?");
	        	context.sendResponse("Enter yes or no");
	        	context.simpledb.roomleveldata.lastSentMsg = "Enter yes or no";
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
	        		//getWorkshop code
	        	}
	        }
	        else if (lastSentMsg == " 9.Married") 
	        {
	        	switch(event.message)
	        	{
	        		case '1':

	        			break;
	        		case '2':
	        			break;
	        		case '3':
	        			break;
	        		case '4':
	        			break;
	        		case '5':
	        			break;
	        		case '6':
	        			break;
	        		case '7':
	        			break;
	        		case '8':
	        			break;
	        		case '9':
	        			break;
	        		default:
	        			context.sendResponse("Error input. Please enter the choice again");
	        			return;
	        	}
	        }
	        
	        else if(event.message.toLowerCase() == "hi") {
	            context.sendResponse("Hello, I am the dream bot");
	            context.simpledb.roomleveldata.lastSentMsg = "Hello, I am the dream bot"
	            context.sendResponse("Your previous status is marked as" + status);
	        	context.sendResponse("Are there any changes in the status?");
	        	context.sendResponse("Enter yes or no");
	        	context.simpledb.roomleveldata.lastSentMsg = "Enter yes or no";
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
	    /** Functions declared below are required **/
	    function EventHandler(context, event) {
	        if(! context.simpledb.botleveldata.numinstance)
	            context.simpledb.botleveldata.numinstance = 0;
	        numinstances = parseInt(context.simpledb.botleveldata.numinstance) + 1;
	        context.simpledb.botleveldata.numinstance = numinstances;
	        context.sendResponse("Thanks for adding me. You are:" + numinstances);
	    }
	
	    function HttpResponseHandler(context, event) {
	        // if(event.geturl === "http://ip-api.com/json")
	        context.sendResponse(event.getresp);
	    }
	
	    function DbGetHandler(context, event) {
	        context.sendResponse("testdbput keyword was last get by:" + event.dbval);
	    }
	
	    function DbPutHandler(context, event) {
	        context.sendResponse("testdbput keyword was last put by:" + event.dbval);
	    }
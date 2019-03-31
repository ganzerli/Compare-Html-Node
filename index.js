const express = require("express");
const bodyParser = require("body-parser");

const request = require('request');
const fs = require('fs');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/here",(req, res)=>{

	console.log("here");

});



app.listen("3000", ()=>console.log("crashed"));

// writefile.js

const megaWrite = (toWrite , filepatFromThisFolder) =>{

	let lyrics = 'But still I\'m having memories of high speeds when the cops crashed\n' +  
	             'As I laugh, pushin the gas while my Glocks blast\n' + 
	             'We was young and we was dumb but we had heart';
	// write to a new file named 
		fs.writeFile(filepatFromThisFolder, toWrite, (err) => {  
	    if (err) throw err;

	    // success case, the file was saved
	    console.log(' saved!  saved! saved! saved! saved! saved! saved!');
	});

}



 const path = "https://www.sex.com";

request.get(path, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var csv = body
       // console.log(body);        
        // Continue with your processing here , ticks , and deep pathology in the soul and brain.
        // but better save the body.. with a specific function
        // den du da fakka it!
		megaWrite(body, "superHtml.html");
    }else{
    	console.log(error);
    }
});

/////
	//TODO

	// a precise and full working searching engine that finds links and img to request per get and jeah;

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

const fillLinks = ( filepathFromHere, whichElement ) =>{

console.clear();

whichElement.split("").join()
whichElement.split("").join()
whichElement.split("").join()



	//								WHICHELEMENT *
	//WHICH ELEMENT MUST HAVE A FORMAT TO SET THE RIGHT NUMBER OF CHARS TO SELECT IT..
   					//#######################
					// FORMAT  "<something" #
					//#######################
   	
   	// pivuz
   	 const result = "";

   	// svegliati con l insonnia del complotto, e fai il proxy fino le 5
   	// poi metti le cuffiette e i tappezzi perche il male doveva solo arrivare..

   	// quando potevi a questo punto rotolarti felice nel fango..
   	// cosa che appena fa del caldo... . . is
/*
   		fs.readFile(filepathFromHere, "utf8", function(err, data) {
   			//console.log(data);

   			const res ="";
   			// making a string of.. chararray!!
   			const charArray = data.split("");
	

   			   	for(let i = 0 ; i < 3214 ; i++){
   			   		console.log(charArray[i]);
   				// // put all the chars in a string until is <l... "<"l"i"n"k"= '/"' 
   				// going throwght the file yeah.. . . .. ...  .. 
	   				if(charArray[i] === "<"){

	   					console.log(`#${charArray[i]}####${charArray[i+1]}####${charArray[i+2]}##${charArray[i+3]}##${charArray[i+4]}#####${charArray[i+5]}#####${i}###############${charArray.length}###########################`);
						console.log(charArray[i]);
	   					 
	   					// take the next numoOfChar from is
	   					const numbOfCh = whichElement.length;
	   					//#######################
						// FORMAT  "<something" #
						//#######################
						let tempStr = charArray[i];
	   					for (let j = i+1; j < i + numbOfCh; j++){
	   					//	console.log("###################################################");
		   						// put in a string 
		   						tempStr += charArray[j];
		   				}
	   						//console.log(`########${i}####  ${tempStr}`);
							tempStr ="";
		   					
		   					if(tempStr === whichElement){
		   							/// go to search the / and then will be tah fakka something

		   							// check.. if http stuff already there
		   							console.log(`########${i}####  ${tempStr}`);
		   							tempStr ="";

		   					}
		   			}else if(charArray === "a"){
		   				// NAMMERDA
   					// super dive in the file .. yeah..!
   					}
   				}//for loop
   			});
	*/
    	return result;
    	
   	}

	       	// create a proxy and sherme internet
	       	// erase
	       	// buy wine and gettafuckaaway from this shit
	       	// but fist write file..
	       	// or first dafackaiuwanna.. tanto sai il REST
      
    fillLinks("superHtml.html", "<link");

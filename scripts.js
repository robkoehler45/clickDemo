function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
 }

function showClickWrapper() {
  document.getElementById ("loginButton").style.display = "none";
  document.getElementById ("spinner").style.display = "block";
  var x = makeid(12) + '-' + document.getElementById ("email").value;
  document.getElementById ("userId").value = x;
  docuSignClick.Clickwrap.render({
      environment: 'https://www.docusign.net',
      accountId: 'c1eb43d4-c855-4038-8d2f-3060bc205916',
      clickwrapId: '1716157f-0efc-4bf3-9e5b-458bd2b923dd',
      clientUserId: x,
      format: 'modal',
      onAgreed: callbackFnAgreed,
			onMustAgree: callbackFnMustAgree,
			onError: callbackFnError
    }, '#ds-terms-of-service');
  }

function callbackFnAgreed(){
		console.log ("callbackFnAgreed");
		//Do something
		document.getElementById ('signUpForm').style.display = "none";
		document.getElementById ('ds-terms-of-service').style.display = "none";
		document.getElementById ('signUpFormAgreed').style.display = "block";
		document.getElementById ('cochref').href = "https://app.docusign.com/clickwrap/1716157f-0efc-4bf3-9e5b-458bd2b923dd/responses?search=" + document.getElementById ('userId').value;
	}

	function callbackFnMustAgree(e){
		console.log ("callbackFnMustAgree");
		document.getElementById ("spinner").style.display = "none";
		//Do something
	}

	function callbackFnError(e){
		console.log ("callbackFnError");
		//Do something

	}

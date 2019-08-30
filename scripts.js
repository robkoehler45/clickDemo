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
  document.getElementById ("spinner").style.display = "table";
  var x = makeid(12) + '-' + document.getElementById ("email").value;
  document.getElementById ("userId").value = x;
  docuSignClick.Clickwrap.render({
      environment: 'https://demo.docusign.net',
      accountId: '53e87a81-3ab4-43d4-9d29-b7861bfc1e1e',
      clickwrapId: '8d6ef161-0398-40d7-be90-03136af40036',
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
		document.getElementById ('cochref').href = "https://demo.docusign.net/clickapi/v1/accounts/53e87a81-3ab4-43d4-9d29-b7861bfc1e1e/clickwraps/8d6ef161-0398-40d7-be90-03136af40036/users/" + document.getElementById ('userId').value + "/documents/combined";
	}

	function callbackFnMustAgree(e){
		console.log ("callbackFnMustAgree");
		document.getElementById ("spin").style.display = "none";
		//Do something
	}

	function callbackFnError(e){
		console.log ("callbackFnError");
		//Do something
	}

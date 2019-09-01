var dsAccountId = '53e87a81-3ab4-43d4-9d29-b7861bfc1e1e';
var dsClickwrapId = '8d6ef161-0398-40d7-be90-03136af40036';
var logoUrl = 'https://www.innov8ive.app/LOGO.png';
var fontColor = '#3d00b2';
var buttonTextColor = '#ffffff';

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
 }

function loadImage() {
  document.getElementById ("customerLogo").src = logoUrl;
  document.getElementById ("jtHeader").color = fontColor;

}

function showClickWrapper() {
  document.getElementById ("loginButton").style.display = "none";
  document.getElementById ("spinner").style.display = "block";
  var x = makeid(12) + '-' + document.getElementById ("email").value;
  document.getElementById ("userId").value = x;
  docuSignClick.Clickwrap.render({
      environment: 'https://demo.docusign.net',
      accountId: dsAccountId,
      clickwrapId: dsClickwrapId,
      clientUserId: x,
      format: 'modal',
      onAgreed: callbackFnAgreed,
			onMustAgree: callbackFnMustAgree,
      onDeclined: callbackFnDeclined,
			onError: callbackFnError
    }, '#ds-terms-of-service');
  }

function callbackFnAgreed(){
		console.log ("callbackFnAgreed");
		document.getElementById ('signUpForm').style.display = "none";
		document.getElementById ('ds-terms-of-service').style.display = "none";
		document.getElementById ('signUpFormAgreed').style.display = "block";
		document.getElementById ('cochref').href = "https://appdemo.docusign.com/documents?view=active&type=clickwraps";
	}

	function callbackFnMustAgree(e){
		console.log ("callbackFnMustAgree");
		document.getElementById ("spinner").style.display = "none";
	}

	function callbackFnError(e){
		console.log ("callbackFnError");
	}

  function callbackFnDeclined(){
    console.log ("callbackFnDeclined");
    document.getElementById ('signUpForm').style.display = "none";
		document.getElementById ('ds-terms-of-service').style.display = "none";
		document.getElementById ('signUpDeclined').style.display = "block";
  }

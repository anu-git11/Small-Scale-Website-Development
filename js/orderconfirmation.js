if (document.readyState == 'loading') 
{
    document.addEventListener('DOMContentLoaded', ready)
} 
else 
{
    ready()
}

function ready() 
{
	var CustomerName = getParameterByName('your-name');
	
	/* Check to see if are here because of Online purchase or because of Contact US page */
	if (CustomerName)
	{
		var CustomerEmail = getParameterByName('your-email');
		var CustomerPhone = getParameterByName('your-phone');
		var CustCardnumber = getParameterByName('card-number');
		var CustTotalCost = getParameterByName('HiddenTCost');
		
		var CCLast4 = CustCardnumber.substring(CustCardnumber.length - 4, CustCardnumber.length);
		
		// Use of function Date.now() to generate Order ID that is unique enough
		var OrderID = Date.now();
		
	/* 	Dear customer,
		
		Your order# is being processed.
		
		Thank you for your payment of $ with credit card ending in ..... .
		You will receive a confirmation email at ......... 
		
		You will receive a text @: phone as soon as your order gets ready. 
		
		Thanks and Regards
		Team JavaHouse Washington DC
		*/
		var Line1 = "Dear " + CustomerName + "\n\n";
		var Line2 = "Your Order#: " + OrderID + " is being processed.\n\n"
		var Line3 = "Thank you for your payment of $" + CustTotalCost + " with credit card ending in: " + CCLast4 + ".\n";
		var Line4 = "Shortly, you will receive a confirmation email with detailed order at: " + CustomerEmail + "\n\n";
		var Line5 = "You will receive a text @: " + CustomerPhone + " as soon as your order gets ready.\n\n";
		var Line6 = "Thanks and Regards\n";
		var Line7 = "Team JavaHouse Washington DC"
		
		var CustMessage = Line1 + Line2 + Line3 + Line4 + Line5 + Line6 + Line7
			
		/* Set the customer message to be displayed on thank you web page */
		document.getElementById('confirmation').innerText = CustMessage;
	
	}
	else
	{
		var CustMessage = "Thank you for contacting. Your feedback is very important to us. We will be acting on it shortly, In the mean time, let us be friends @ https://www.facebook.com/javahouseDC";

		/* Set the customer message to be displayed on thank you web page */
		document.getElementById('confirmation').innerText = CustMessage;		
	}
}


function getParameterByName(name, url) 
{
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
		
    if (!results) return null;
    if (!results[2]) return '';
	
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


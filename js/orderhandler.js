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
	var StoreOpenTime = '08:00:00';
	var StoreCloseTime = '20:00:00';

	var currentDate = new Date()   

	var startDate = new Date(currentDate.getTime());
	startDate.setHours(StoreOpenTime.split(":")[0]);
	startDate.setMinutes(StoreOpenTime.split(":")[1]);
	startDate.setSeconds(StoreOpenTime.split(":")[2]);

	var endDate = new Date(currentDate.getTime());
	endDate.setHours(StoreCloseTime.split(":")[0]);
	endDate.setMinutes(StoreCloseTime.split(":")[1]);
	endDate.setSeconds(StoreCloseTime.split(":")[2]);


	var ValidTimeToOrder = startDate < currentDate && endDate > currentDate
	
	if (!ValidTimeToOrder)
	{
		/* store is closed, cannot take orders, let the customer know */
		document.getElementById('btnCheckout').style = "display:none";
		document.getElementById('CartCounter').style = "display:none";
		
		var h = document.createElement("h3");
		h.setAttribute("id", "StoreCloseH3");
		h.style.cssText = "color:white;";
		
		var t = document.createTextNode("Online ordering is from 8 AM to 8 PM EST");
		h.appendChild(t);
		
		document.getElementById('NavBarCenterText').appendChild(h);	
	}
	  
/* 	var item = document.getElementById("StoreCloseH3");
    item.parentNode.removeChild(item);
	
	document.getElementById('btnCheckout').style = "display:inline-block";
	document.getElementById('CartCounter').style = "display:inline-block"; */
	
	
}
/* validator  functions to ensure that user payment details all are good to go !*/
var CheckoutFormValidated = false;
var CartItemCount = 0;

$("#order-form").validate();

$(function () 
{
    $('#order-form').submit(function () 
	{
        if($(this).valid()) 
		{
            /* alert('the form is valid'); */
			CheckoutFormValidated = true;
        }
		else 
		{
			/* alert('Fix errors highlighted in red before submission'); */
			CheckoutFormValidated = false;
		}
    });
});

/* Shopping  functions for the CHECKOUT cart */
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
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) 
	{
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) 
	{
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) 
	{
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() 
{
	if (CheckoutFormValidated)
	{
		var cartItems = document.getElementsByClassName('cart-items')[0]
		while (cartItems.hasChildNodes()) 
		{
			cartItems.removeChild(cartItems.firstChild)
		}
		updateCartTotal()
	}
}

function removeCartItem(event) 
{
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
		
	/* looks like, customer is trying to reduce cart quantity, very SAD to know that */
	 if (CartItemCount)
	 {
		 CartItemCount = CartItemCount - 1;
	 }
	 
    updateCartTotal()
}

function quantityChanged(event) 
{
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) 
	{
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) 
{
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    addItemToCart(title, price)
		
	/* increment Cart Quantity */
	CartItemCount = CartItemCount + 1;
	
    updateCartTotal()
	
}

function addItemToCart(title, price) 
{
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) 
	{
        if (cartItemNames[i].innerText == title) 
		{
            alert('Item exists in the cart, proceed to checkout for quantity modification')
			
			/* looks like, customer is trying to reduce cart quantity, very SAD to know that */
			if (CartItemCount)
			{
				CartItemCount = CartItemCount - 1;
			}
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
	
	
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() 
{
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
	
	for (var i = 0; i < cartRows.length; i++) 
	{
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
		
        total = total + (price * quantity)
    }
	
	/* Rounding to get 2 decimal places */
    total = Math.round(total * 100) / 100
	total = total.toFixed(2);
	
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
	
	/* Let us set the value of Cart Counter for the WEB interface here */
	document.getElementById('CartCounter').innerText = CartItemCount;
	
	/* let us set the Hidden cost for transferring to the submit form string */
	document.getElementById('HiddenTCost').value = total;
}
# Website Development for a Coffee Shop

![IC](https://user-images.githubusercontent.com/63171468/86397778-74cb5e00-bc72-11ea-86d8-028b18a30bb8.JPG)

The image above shows the overall architecture of the website, with 5 pages in total, namely:
1. Home Page/Landing Page
2. Menu Page
3. About Page
4. Contact Page
5. Thank You Page

At high level, our software configuration consisted of the following:

	CSS Framework: Bootstrap v4.4.1
(https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css)

	JavaScript Libraries: jQuery v3.4.1
(https://code.jquery.com/jquery-3.4.1.slim.min.js)

	Popper.js v1.16.0
(https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js)

	Bootstrap.min.js v4.4.1
(https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js)

	jQuery form validation plugins
(https://cdn.jsdelivr.net/npm/jqueryvalidation@1.19.1/dist/jquery.validate. min.js)

	jQuery additional methods “credit card” plugins
(https://cdn.jsdelivr.net/npm/jquery-validation@1.19.1/dist/additional-methods.min.js)


For our styling, scaling and responsiveness needs, we used Bootstrap 4 throughout the website. Since Bootstrap 4 does not support Glyphicons, we used Font Awesome (https://use.fontawesome.com/releases/v5.8.1 /css/all.css) instead.

**Java Script Components:**

a)	Image Carousel on the Home Page

b)	Google Map API

c)	Creating and Managing the Shopping Cart

d)	Validation of Customer Details in Payment Information Modal Window

e)	Generating an e-Receipt after a successful purchase**

Header and footer Nav Bars are static on every web page and are designed to be the site’s Global Navigation Component using Bootstrap 4. It helps in connecting to the business’ social media links, out of which Java House has official pages at Facebook, Instagram, and Twitter (LinkedIn, Whatsapp and Snapchat are placeholders) and offer a shortcut for Online Purchase. 

**“Home” Page** includes a bootstrap image carousel that asynchronously cycles through images and offers an initial indication of the site’s aesthetics. It also includes an interactive map centered around a marker placed at the coffee shop location using Google Maps JavaScript API, additionally, clicking on map marker shows some description about Java House. 

 **“Menu” Page** uses Bootstrap 4 image thumbnails to organize the items and make them look aesthetically appealing. It also uses Bootstrap4’s Modal window to show shopping cart and the Checkout form for customer details and payment information. There is a validation check on user entries using jQuery Validation Plugins.
On a successful purchase, website navigates to the “Thank You” page, where there is an e-Receipt with details of the purchase order, which is built using JavaScript and HTML form GET/POST methods.

**“About” Page** contains multiple paragraphs giving information about the coffee shop based on Bootstrap 4 styling sheets. It also includes a photo gallery that utilizes CSS styling, including image transitions, image transformation (blow up) when the mouse hover event is triggered.

**“Contact” Page** contains a form for feedback/ customer interaction with the business, along with information about the location and contact details of the business. It utilizes form and card from Bootstrap 4 Framework.

**"Thank-You"** page gets data using Javascript, and gives an output with respect to the link page i.e. where it is coming from. 
For Example: If Thank-You page is generated from the online order, it generates an e-reciept and gives order and customer details. But if it is generated from the Contact Us page, it displays a generic message. 

Credit for inspiration goes to :https://github.com/bvasilop/Tangletown-Coffee-Website
Shopping Cart Inspiration: JavaScript Shopping Cart Tutorial for Beginners (https://www.youtube.com/watch?v=YeFzkC2awTM)

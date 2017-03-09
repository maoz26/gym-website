var menu = ' <ul id=menu1>'
 + '<li ><a href="index.html">דף הבית</a> '
  + ' <li><span id="prog">תוכניות אימונים</span>'
 + ' <ul class=submenu>'
 + ' <li><a href="beginer.html">מתאמן מתחיל</a></li>'
 + ' <li><a href="intermediate.html">מתאמן בינוני</a></li>'
 + ' <li><a href="advanced.html">מתאמן מתקדם</a></li>'
 + '</ul>'
 + ' <li><span id="prog">מבני הגוף השונים</span>'
 + ' <ul class=submenu>'
 + ' <li><a href="ectomorf.html">האקטומורפי</a> </li>'
 + ' <li><a href="endomorf.html">האנדומורפי</a> </li>'
 + ' <li><a href="mezomorf.html">המזומורפי</a></li>'
 + ' </ul>'
 + '<li ><a href="about.html">אודות</a> '
 + '<li ><a href="contact.html">צור קשר</a> '
 + '</ul>'

 function menu_bar() {
		page=window.location.href ;// page url
		var obj=document.getElementById("menu1") ;
		var elements = obj.getElementsByTagName("a");// Array of links  main & secodary
		for (i=elements.length-1;  i> 0 ; i--) {
			var temp=page.indexOf(elements[i].href) ;
			if (temp >= 0 ) break ; }  //
				elements[i].className = 'current';
			var objli=elements[i].parentNode.parentNode ;
			if  (objli.id=="menu1"){elements[i].parentNode.className='current';return }
				document.getElementById("side").innerHTML=objli.innerHTML ;
				objli.parentNode.className = 'current';
}

function message(){
 	alert("אם לא תאכל, לא תגדל");
}

$(document).ready(function(){
    // show popup when you click on the link
    $('.show-popup').click(function(event){
        event.preventDefault(); // disable normal link function so that it doesn't refresh the page
        var docHeight = $(document).height(); //grab the height of the page
        var scrollTop = $(window).scrollTop(); //grab the px value from the top of the page to where you're scrolling
        var selectedPopup = $(this).data('showpopup'); //get the corresponding popup to show
 
        $('.overlay-bg').show().css({'height' : docHeight}); //display your popup and set height to the page height
        $('.popup'+selectedPopup).show(); // show the appropriate popup
        $('.overlay-content').css({'top': scrollTop+200+'px'}); //set the content 20px from the window top
    });
  
    // hide popup when user clicks on close button
    $('.close-btn').click(function(){
        $('.overlay-bg, .overlay-content').hide(); // hide the overlay
    });
  
    // hides the popup if user clicks anywhere outside the container
    $('.overlay-bg').click(function(){
        $('.overlay-bg, .overlay-content').hide();
    })
    // prevents the overlay from closing if user clicks inside the popup overlay
    $('.overlay-content').click(function(){
        return false; // PLEASE NOTE: Adding this will prevent normal links to work inside the popup
    });
  
});
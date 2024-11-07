


//** fancy tricks


$('#lblShowAs').append(' / ' + $('#lblMealLocationValue').text());


// RS MT2 Apple Juice (L150)
// RS MT2 Orange Juice (L150)
// RS MT2 Water (L150)
// RS MT2 Diet Lemon Cordial (L150)
// RS MT2 Creamy Dairy (L150)
// RS MT2 Iced Coffee (L150)
// RS MT2 Black Coffee (L150)
// RS MT2 White Coffee (L150)
// RS MT2 White Tea (L150)


//

  var navUrl = chrome.runtime.getURL('nav.html');
  var styleUrl = chrome.runtime.getURL('style.css');



//Inject the script from 

var s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.onload = function() { this.remove(); };

(document.head || document.documentElement).appendChild(s);



  $.get(navUrl, function(data) {
    $(".Toolbar_Container").prepend(data);
  });

  $('head').append('<link rel="stylesheet" type="text/css" href="' + styleUrl + '">');






//if its not breakfast time, click mains

if ($("#lblMealTimeName:contains('Lunch')").length || $("#lblMealTimeName:contains('Dinner')").length) {
 
 $("#ComponentGroupButton_33").click();
}




//click on the notes link


$("#cellAssignments").click();



// ** copy notes


// create new box to put the notes in, and position it

let gNot = document.createElement('textarea');
gNot.setAttribute("id", "noteBox");
$("#pnlMenuOverview").prepend(gNot);
$("#noteBox").attr({maxlength:1000, rows:6})
$("#noteBox").css({
   'position' : 'absolute',
   'width' : '225px',
   'height' : '120px',
    'margin-left' : '200px',
	'margin-top' : '-140px',
});












//Menu Item descriptions


//Stir Fry
// var content = "Capsicum";
// $('#ComponentGroupItem_33_2338_2').addClass('tooltip').html(content);
 
 
 //Shepard Pie
// $("#ComponentGroupItem_33_963_2").hover(function() {
// $(this).css('cursor','pointer').attr('title', 'Onion\nCarrot\nCelery\nPeas\nTomato\nSauce Worcestershire\nLamb\nGarlic\nPotato\nSalt\nPepper');
 // });



//Beef Strog
$("#ComponentGroupItem_33_960_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Oil (Canolana), Onion (brown), Garlic (minced), Beef Strips (95% lean), Paprika (smoked, dried) - Krio Krush, Flour (Bakers) - Allied Mills, Beef Booster - Krio Krush, Mushrooms (fresh), Tomato (paste) - Heinz, Mustard (seeded) - Masterfoods, Sour Cream, Gherkins');
 });



//Green Curry
$("#ComponentGroupItem_33_2350_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Oil (Canolana) - Cookers, Ginger (crushed, 1kg) - Riviana, Potato (fresh, Royal Blue, peeled,10kg), Broccoli (florets), Zucchini, Coconut Milk - Caterers Choice, Cumin (ground) - Krio Krush, Turmeric (dried) - Krio Krush, Chilli (powder, hot) - Krio Krush, Spinach, Salt - Saxa, Pepper (ground, white) - Krio Krush');
 });

//Veg Chilli
$("#ComponentGroupItem_33_968_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Pumpkin (peeled), Capsicum (green, red, yellow), Carrot (peeled), Celery, Garlic (minced, 1kg) - Riviana, Oil (Canolana) - Cookers, Cumin ground - Culpeppers, Paprika (smoked, dried) - Krio Krush, Sugo (tomato pasta sauce) - Buitoni, Beans (red kidney, tinned) - Edgell, Salt - Saxa, Pepper (cracked, black) - Krio Krush, Chilli (red), Chilli (powder, mild) - Krio Krush, Coriander Ground, Coriander Sprigs');
 });


//Steam greens
$("#ComponentGroupItem_36_952_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Broccoli (florets), Beans, Sugar Snap Peas');
 });

//potato and leek
$("#ComponentGroupItem_48_1712_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Potato(Royal Blue), Onion(Brown), Leek, Celery, Veg Stock(Massel), Salt(Saxa), Pepper(White - Krio Krush), Cream(Whipping - Harvey Fresh');
 });


// Mixed Vegetable & Bean Hot Pot
$("#ComponentGroupItem_33_2322_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Onion (brown, peeled), Carrot (fresh, peeled), Celery (fresh), Capsicum tricolour, Mushrooms (fresh), Lentil Red - Caters Choice, Bean 5 Mix (tinned) - Riviana, Garlic (minced, 1kg) - Riviana, Basil Leaves Dried Sweet - Krio Krush, Oregano (dried) - Krio Krush, Salt - Lake Deborah, Pepper (ground, white) - Krio Krush 500g, Tomato (paste) - Heinz, Tomato (crushed) - SPC, Sweet Potato (fresh, peeled)');
 });


// Veg lasange
$("#ComponentGroupItem_33_2344_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Onion (brown, peeled), Garlic (minced, 1kg) - Riviana, Oil - Sunola, Capsicum tricolour, Eggplant (fresh), Zucchini (fresh), Tomato (crushed) - SPC, Chickpeas (tinned) - Riviana, Basil (fresh), Oregano (dried) - Krio Krush, Thyme (fresh), Parsley (fresh), Pepper (cracked, black) - Krio Krush, Salt (table, 500g) - Saxa, Sugo (tomato pasta sauce) - Buitoni, Base Sauce - Bechamel, Cheese (light, shredded) - Mainland, Cheese Parmesan Grated - Perfect Italiano, Oil (Rice Bran Spray) - Alfa One, Lasagna Sheet - I Pastai, Tomato (paste) - Heinz');
 });

//Thai pumpkin
$("#ComponentGroupItem_48_1641_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Pumpkin, Coriander Ground, Cumin(ground - Krio Krush), Cardom(ground - Krio Krush), Potato(Royal Blue), Salt(Saxa), Pepper(ground white krio krush), Coconut Milk(Caterers Choice), Ginger(fresh), Olive oil(Jingilli)');
 });

//Spicy lenti soup
$("#ComponentGroupItem_48_1142_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Lentil Red - Caters Choice, Onion (brown, peeled), Carrot (fresh, peeled), Parsnips, Sweet Potato (fresh, peeled), Oil (olive, extra virgin) - Balducci, Curry Powder - Baba, Cumin (ground) - Krio Krush, Chilli (powder, mild) - Krio Krush, Ginger fresh, Tumeric Powder, Vegetable Stock - Massel, Tomato (crushed) - SPC, Salt (table, 500g) - Saxa, Pepper (ground, white) - Krio Krush 500g');
 });

//Chicken soup
$("#ComponentGroupItem_48_1702_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'RS Chicken Stock, Chicken (breast, cooked, shredded, 2kg) - M&J, Onion (brown, peeled), Celery (fresh), Carrot (fresh, peeled), Potato (fresh, Royal Blue, peeled,10kg), Salt (table, 500g) - Saxa, Pepper (ground, white) - Krio Krush 500g');
 });


//Chicken and corn soup
$("#ComponentGroupItem_48_891_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'RS Chicken Stock, Creamed Corn (tinned) - Edgell 420g, Oil Sesame Pure - Yeos 2L, Soy Sauce GF - Shoda Shoyu 1L, Sugar (caster) - Bundaberg 15kg, Corn (kernels, frozen) - Edgell 2kg, Chicken (breast cooked shredded 2kg) - M&J, Eggs (50g, fresh) - Golden Egg Farms, Salt (table, 500g) - Saxa, Pepper (ground, white) - Krio Krush 500g , Arrowroot - Trumps 3kg');
 });

//Veg minestrone soup
$("#ComponentGroupItem_48_892_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Onion (brown, peeled), Carrot (fresh, peeled), Celery (fresh), Zucchini (fresh) , Leek (fresh), Potato (fresh, Royal Blue, peeled,10kg), Garlic (minced, 1kg) - Riviana, Oregano (dried) - Krio Krush, Thyme (dried) - Krio Krush, Tomato (crushed) - SPC, GF Pasta (spaghetti) - Buon Tempo, Beans (red kidney, tinned) - Edgell, Vegetable Stock - Massel, Tomato (paste) - Heinz, Oil (Canolana) - Cookers, Salt (table, 500g) - Saxa, Pepper (cracked, black) - Krio Krush, Bay Leaves (dried) - Krio Krush)');
});

//Beef broth
$("#ComponentGroupItem_48_1056_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'RS Beef Stock, Beef (minced, 95% lean) - Classic Meats, Onion (brown, peeled), Celery (fresh), Carrot (fresh, peeled), Salt (table, 500g) - Saxa, Bay Leaves (dried) - Krio Krush, Pepper (cracked, black) - Krio Krush');
 });

//Chicken broth
$("#ComponentGroupItem_48_1057_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'RS Chicken Stock, Chicken Mince -Yuans, Onion (brown, peeled), Carrot (fresh, peeled), Celery (fresh), Salt (table, 500g) - Saxa, Bay Leaves (dried) - Krio Krush, Pepper (cracked, black) - Krio Krush');
 });

//Veg broth
$("#ComponentGroupItem_48_986_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'RS Vegetable Paste Concentrate');
 });


//Fruit salad
$("#ComponentGroupItem_45_907_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Watermelon, Honeydew Melon, Pineapple, Orange, Strawberry, Kiwifruit');
 });

//Roast Veg
$("#ComponentGroupItem_36_1304_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Potato, Sweet Potato, Carrot, Pumpkin');
 });

//Mixed Veg
$("#ComponentGroupItem_36_951_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Carrot, Broccoli, Cauliflower, Beans');
 });

//Side Salad
$("#ComponentGroupItem_34_987_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Lettuce, Tomato, Carrot, Cucumber, Capiscum(red)');
 });

//Garden Salad
$("#ComponentGroupItem_34_990_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Lettuce(Mesclun), Tomato, Carrot, Cucumber, Capiscum(red)');
 });

//Caesar Salad
$("#ComponentGroupItem_34_993_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Coz Lettuce, Bacon, Parmesan Cheese, Boiled Egg, Wholemeal Croutons');
 });

//Kale Salad
$("#ComponentGroupItem_34_1080_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Kale, Red Cabbage, Sweet Potato, Beetroot, Brocoli(florets), Brown Rice, Quinoa, Cashews(Trumps), Coriander Springs');
 });

//Pumpkin and Quinoa
$("#ComponentGroupItem_34_1642_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Olive Oil(Balducci), Pumpkin, Thyme(Krio Krush), Mustard(Seeded, Masterfoods), Quinoa, Beans(green, Edgell), Spinach, Capsicum, Tomato, Salt(Saxa), Pepper(Krio Krush)');
 });

//Banana Smoothie
$("#ComponentGroupItem_47_1118_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Milk, Banana, Maple Syrup, Water');
 });

//Berry Smoothie
$("#ComponentGroupItem_47_1174_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Blackberries, Raspberries, Stawberries, Apple Juice');
 });


//Green Smoothie
$("#ComponentGroupItem_47_1117_2").hover(function() {
$(this).css('cursor','pointer').attr('title', 'Avocado, Broccoli, Spinach, Mango, Coconut, Apple Juice(Markwell foods, Avo Go Go)');
 });


// Add checkboxes to delivery times as a quick reminder for people that say the delivery time before the entire order

(function() {
    'use strict';

 $.each( $("div[id^='div_Delivery']"), function () {
  $(this).append("<input type='checkbox' class='checky'>");
});

$('.checky').css('position', 'absolute');
$('.checky').css('margin-left', '25px');

})();

//enumber ident

	 if ($('#lblCreatedBy').length) {

  let eNum = document.getElementById("lblCreatedBy").innerText;




switch (eNum) {
    //Chris Maley
	case "e156969":
		$("#lblCreatedBy").append( "<strong> (Chris.M)</strong>" );
        break;
	
	//Marie Eustasie	
    case "e185463":
        $("#lblCreatedBy").append( "<strong> (Maire.E)</strong>" );
        break;

    //Alex Rusbridge
	case "e402479":
        $("#lblCreatedBy").append( "<strong> (Alex.R)</strong>" );
        break;

    //Ana Caboz
	case "e189521":
        $("#lblCreatedBy").append( "<strong> (Ana.C)</strong>" );
        break;
		
	//Anne Welsh
	case "e155144":
        $("#lblCreatedBy").append( "<strong> (Anne.W)</strong>" );
        break;
		
	//Caleb Heywood
	case "e157296":
        $("#lblCreatedBy").append( "<strong> (Caleb.H)</strong>" );
        break;
		
	//Caroline Elliot
	case "e470117":
        $("#lblCreatedBy").append( "<strong> (Caroline.E)</strong>" );
        break;

	//Fiona Engi
	case "e400978":
        $("#lblCreatedBy").append( "<strong> (Fiona.E)</strong>" );
        break;
	
	//Hazel Hasen
	case "e155576":
        $("#lblCreatedBy").append( "<strong> (Hazel.H)</strong>" );
        break;

	//Jackie Phillips
	case "e156699":
        $("#lblCreatedBy").append( "<strong> (Jackie.P)</strong>" );
        break;

	//Jamie Dalton-Allen
	case "e156249":
        $("#lblCreatedBy").append( "<strong> (Jamie.D)</strong>" );
        break;				
	
	//Jimmy Vettiyllil
	case "e810957":
        $("#lblCreatedBy").append( "<strong> (Jimmy.V)</strong>" );
        break;

	//Kim Cargill
	case "e812102":
        $("#lblCreatedBy").append( "<strong> (Kim.C)</strong>" );
        break;						
	
	//Lauren Koeford
	case "e156639":
        $("#lblCreatedBy").append( "<strong> (Lauren.K)</strong>" );
        break;		
	
	//Lee Baker
	case "e155932":
        $("#lblCreatedBy").append( "<strong> (Lee.B)</strong>" );
        break;		

	//Lena Leaman
	case "e152095":
        $("#lblCreatedBy").append( "<strong> (Lena.L)</strong>" );
        break;

	//Linda Mignacca-Randazzo
	case "e150328":
        $("#lblCreatedBy").append( "<strong> (Linda.M)</strong>" );
        break;			
	
	//Lisa Bawden
	case "e450860":
        $("#lblCreatedBy").append( "<strong> (Lisa.B)</strong>" );
        break;	
		
	//Maddy Donelly
	case "e156965":
        $("#lblCreatedBy").append( "<strong> (Maddy.D)</strong>" );
        break;		
	
	//Marita Tilbury
	case "e400088":
        $("#lblCreatedBy").append( "<strong> (Marita.T)</strong>" );
        break;		

	//Marlene Roberts
	case "e402476":
        $("#lblCreatedBy").append( "<strong> (Marlene.R)</strong>" );
        break;

	//Mia Green
	case "e402195":
        $("#lblCreatedBy").append( "<strong> (Mia.Green)</strong>" );
        break;
	
	//Michelle Blood
	case "e150116":
        $("#lblCreatedBy").append( "<strong> (Michelle.B)</strong>" );
        break;

	//Nikki Giri
	case "e401280":
        $("#lblCreatedBy").append( "<strong> (Nikki.Giri)</strong>" );
        break;

	//Pamela Kerr-Bayley
	case "e402025":
        $("#lblCreatedBy").append( "<strong> (Pamela.K)</strong>" );
        break;

	//Robyn McGregor
	case "e402445":
        $("#lblCreatedBy").append( "<strong> (Robyn.M)</strong>" );
        break;

	//Sam Bailey
	case "e401984":
        $("#lblCreatedBy").append( "<strong> (Sam.B)</strong>" );
        break;

	//Sonja Seal
	case "e812104":
        $("#lblCreatedBy").append( "<strong> (Sonja.S)</strong>" );
        break;			
	
	//Tara Sanderson
	case "e155190":
        $("#lblCreatedBy").append( "<strong> (Tara.S)</strong>" );
        break;

	//Tash Kalstrom
	case "e402411":
        $("#lblCreatedBy").append( "<strong> (Tash.K)</strong>" );
        break;

	//Doreen May
	case "e811955":
        $("#lblCreatedBy").append( "<strong> (Doreen.M)</strong>" );
        break;

	//Mary-Jane Limvoonmiow
	case "e450619":
        $("#lblCreatedBy").append( "<strong> (Mary-Jane.L.M)</strong>" );
        break;		
		
	//Deanne Ashworth
	case "e185200":
        $("#lblCreatedBy").append( "<strong> (Deanne A.)</strong>" );
        break;		
		
	//Fabiana Araneda
	case "e156662":
        $("#lblCreatedBy").append( "<strong> (Fabiana A.)</strong>" );
        break;		
		
	//Siobhan Nairn
	case "e156959":
        $("#lblCreatedBy").append( "<strong> (Siobhan N.)</strong>" );
        break;		
	//Laura Rankine
	case "e156674":
        $("#lblCreatedBy").append( "<strong> (Laura R.)</strong>" );
        break;

	//Emma Tanner
	case "e157623":
        $("#lblCreatedBy").append( "<strong> (Emma Tanner)</strong>" );
        break;

	//Fran Lynton
	case "e184330":
        $("#lblCreatedBy").append( "<strong> (Fran Lynton)</strong>" );
        break;			

	//Jarrett Koh
	case "e157942":
        $("#lblCreatedBy").append( "<strong> (Jarrett Koh)</strong>" );
        break;

	//Moo Kongjak
	case "e470104":
        $("#lblCreatedBy").append( "<strong> (Moo Kongjak)</strong>" );
        break;

	//Kiran Kaur
	case "e471224":
        $("#lblCreatedBy").append( "<strong> (Kiran Kaur)</strong>" );
        break;

	//Kelly Patchett
	case "e812085":
        $("#lblCreatedBy").append( "<strong> (Kelly Patchett)</strong>" );
        break;	

	//Jose deFreitas	
	case "e156883":
        $("#lblCreatedBy").append( "<strong> (Jose deFreitas)</strong>" );
        break;

	//Marina Woodworth	
	case "e810955":
        $("#lblCreatedBy").append( "<strong> (Marina Woodworth)</strong>" );
        break;

	//Emily Pascua
	case "e231507":
        $("#lblCreatedBy").append( "<strong> (Marina Woodworth)</strong>" );
        break;			
		
	//Dave Berri	
	case "e811411":
        $("#lblCreatedBy").append( "<strong> (Dave Berri)</strong>" );
        break;		
	
	//Jelene Leong	
	case "e471411":
        $("#lblCreatedBy").append( "<strong> (Jelene Leong)</strong>" );
        break;	
	
	//Zoe Foster	
	case "e124014":
        $("#lblCreatedBy").append( "<strong> (Zoe Foster)</strong>" );
        break;	
	
	//Laura Blackmore	
	case "e232078":
        $("#lblCreatedBy").append( "<strong> (Laura Blackmore)</strong>" );
        break;	

	//Trina O'Brien	
	case "e156625":
        $("#lblCreatedBy").append( "<strong> (Trina O'Brien)</strong>" );
        break;
		
	//Leah Loubser
	case "e186836":
        $("#lblCreatedBy").append( "<strong> (Leah Loubser)</strong>" );
        break;

	//Jasvir Kaur
	case "e188635":
        $("#lblCreatedBy").append( "<strong> (Jasvir Kaur)</strong>" );
        break;

	//Yeeswari
	case "e812437":
        $("#lblCreatedBy").append( "<strong> (Yeeswari)</strong>" );
        break;

	//Tracey Atkins
	case "e230486":
        $("#lblCreatedBy").append( "<strong> (Tracey Atkins)</strong>" );
        break;

	//Duangta Phupuang
	case "e122173":
        $("#lblCreatedBy").append( "<strong> (Duangta Phupuang)</strong>" );
        break;		

	//Rowena Bolden
	case "e262498":
        $("#lblCreatedBy").append( "<strong> (Duangta Phupuang)</strong>" );
        break;			
		
	//Slavica Rizmanoska
	case "e183285":
        $("#lblCreatedBy").append( "<strong> (Slavica Rizmanoska)</strong>" );
        break;			

	//Hilda Thein
	case "e470606":
        $("#lblCreatedBy").append( "<strong> (Hilda Thein)</strong>" );
        break;			
	
	//Brenda Rice
	case "e230749":
        $("#lblCreatedBy").append( "<strong> (Brenda Rice)</strong>" );
        break;		
	
	//Amanda Collins
	case "e104130":
        $("#lblCreatedBy").append( "<strong> (Amanda Collins)</strong>" );
        break;

	//Tracey Keast
	case "e104226":
        $("#lblCreatedBy").append( "<strong> (Tracey Keast)</strong>" );
        break;		

	//Jacob Moon-Kealy
	case "e402330":
        $("#lblCreatedBy").append( "<strong> (Jacob Moon-Kealy)</strong>" );
        break;

	//Jacqui Curtis
	case "e811177":
        $("#lblCreatedBy").append( "<strong> (Jacqui Curtis)</strong>" );
        break;			





    default:
        $("#lblCreatedBy").append( "<strong> (Unknown)</strong>" );
        break;
}




}
	










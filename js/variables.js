/**
 * Javascript variables
 */
 
//RTL support
var rtl = false;                                //Set to true if your website is RTL. Otherwise, keep it false.

//ONE-PAGE NAVIGATION HIGHLIGHT
var onepage_nav = true;                         //If true, each menu item will highlight when scrolling to each respective section.

//MOBILE MENU TITLE
var mobile_menu_title = "Menu";                 //The title of the mobile menu.

//HERO FULLSCREEN VARIABLE
var hero_full_screen = true;                    //If true, the hero section will fit to screen size. If false, hero height will be the height of its content.

//HERO BACKGROUND SLIDESHOW IMAGES
var slidehow_images = [
    "images/mano.png",
    "images/juntos.png",
    "images/beso.png",    
];

//TIMELINE PARALLAX
var timeline_parallax = true;                   //If false, the timeline items will not move on mousemove.


//CONTACT FORM VARIABLES
var contact_form_success_msg = "Formulario exitosamente enviado! :)";
var contact_form_error_msg = "Error en el envío del mensaje :(";
var contact_form_recaptcha_error_msg = "Error de verificación del reCaptcha!";


//COUNTDOWN VARIABLES
var c_days = "DIAS";                            //Countdown "Days" label
var c_hours = "HORAS";                          //Countdown "Hours" label
var c_minutes = "MIN.";                         //Countdown "Minutes" label
var c_seconds = "SEG.";                         //Countdown "Seconds" label
var countdown_end_msg = "¡Salud!";       //Message to display when the countdown reaches the end


//GOOGLE MAP VARIABLES
var map_canvas_id = "map_canvas";               //The HTML "id" of the map canvas
var map_color = "#8eaeba";                      //Google map color
var map_initial_zoom = 13;                      //The initial zoom when Google map loads
var map_initial_latitude = 19.4106844;           //Google map initial Latitude. If "null", the latitude of the first marked will be used
var map_initial_longitude = -103.5517888;        //Google map initial Longitude. If "null", the longitude of the first marked will be used
var use_default_map_style = false;              //If true, default map style will be used

//List of map markers
var map_markers = [
    {
        "title": "Recepcion",
        "latitude": 19.427758,
        "longitude": -103.556559,
        "icon": "fas fa-glass-cheers", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Rancho el Campanario, Tonila, Jalisco."
    },
    {
        "title": "Hotel",
        "latitude": 19.392056, 
        "longitude": -103.527794,
        "icon": "fas fa-bed", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Hacienda la Esperanza, Tonila, Jalisco."
    },
    {
        "title": "Ceremonia",
        "latitude": 19.3876739,
        "longitude": -103.571636,
        "icon": "fas fa-bell", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Templo de Nuestra Señora de la Merced, Quesería, Cuauhtémoc, Col."
    }
];
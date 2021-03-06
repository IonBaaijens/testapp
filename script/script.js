// Variabelen die ik ik gebruikt heb voor de navigatie

var cur_page = "home_page";
var prev_page = "home_page";


// Functie om alles te laten laden

function loadScript() {
    onDeviceReady();
}

// Device ready / alles klaarmaken

function onDeviceReady() {
    
    //Event listeners voor muis
	document.getElementById('menu_button').addEventListener('mousedown', menu_down,  false);
	document.getElementById('menu_button').addEventListener('mouseup',   menu_up, false);
    document.getElementById('option_1').addEventListener('mousedown', option_1_down,  false);
	document.getElementById('option_1').addEventListener('mouseup',   option_1_up, false);
    document.getElementById('option_2').addEventListener('mousedown', option_2_down,  false);
	document.getElementById('option_2').addEventListener('mouseup',   option_2_up, false);
    document.getElementById('option_3').addEventListener('mousedown', option_3_down,  false);
	document.getElementById('option_3').addEventListener('mouseup',   option_3_up, false);
    document.getElementById('option_4').addEventListener('mousedown', option_4_down,  false);
	document.getElementById('option_4').addEventListener('mouseup',   option_4_up, false);
    
    document.getElementById('trillen').addEventListener('mousedown', trillen_down,  false);
	document.getElementById('trillen').addEventListener('mouseup',   trillen_up, false);
    document.getElementById('network').addEventListener('mousedown', network_down,  false);
	document.getElementById('network').addEventListener('mouseup',   network_up, false);
    document.getElementById('os').addEventListener('mousedown', os_down,  false);
	document.getElementById('os').addEventListener('mouseup',   os_up, false);
    
    
    //Event listeners voor touch
    document.getElementById('menu_button').addEventListener('touchstart', menu_down,  false);
	document.getElementById('menu_button').addEventListener('touchend',   menu_up, false);
    document.getElementById('option_1').addEventListener('touchstart', option_1_down,  false);
	document.getElementById('option_1').addEventListener('touchend',   option_1_up, false);
    document.getElementById('option_2').addEventListener('touchstart', option_2_down,  false);
	document.getElementById('option_2').addEventListener('touchend',   option_2_up, false);
    document.getElementById('option_3').addEventListener('touchstart', option_3_down,  false);
	document.getElementById('option_3').addEventListener('touchend',   option_3_up, false);
    document.getElementById('option_4').addEventListener('touchstart', option_4_down,  false);
	document.getElementById('option_4').addEventListener('touchend',   option_4_up, false);
    
    document.getElementById('trillen').addEventListener('touchstart', trillen_down,  false);
	document.getElementById('trillen').addEventListener('touchend',   trillen_up, false);
    document.getElementById('network').addEventListener('touchstart', network_down,  false);
	document.getElementById('network').addEventListener('touchend',   network_up, false);
    document.getElementById('os').addEventListener('touchstart', os_down,  false);
	document.getElementById('os').addEventListener('touchend',   os_up, false);
    
    //Andere dingen
    console.log(navigator.vibrate);
    console.log(navigator.compass);
    console.log(device.cordova);
}

// Knoppen voor de device features

function trillen_down() {
	document.getElementById('trillen').className='down';
    
    navigator.vibrate(1000);
}

function trillen_up() {
	document.getElementById('trillen').className='up';
    
}

function network_down() {
	document.getElementById('network').className='down';
    
}

function network_up() {
	document.getElementById('network').className='up';
    
    checkConnectie();
}

function os_down() {
	document.getElementById('os').className='down';
    
}

function os_up() {
	document.getElementById('os').className='up';

    checkOS();
}

// Knoppen voor de navigatie

function menu_down() {
	document.getElementById('menu_button').className='down';
}

function menu_up() {
	document.getElementById('menu_button').className='up';
    
    if(cur_page == "menu_page"){
        
        if (prev_page == "home_page"){
            document.getElementById("home_page").className="showPage";
            cur_page = "home_page";
        } else if (prev_page == "option_1_page_var"){
            document.getElementById("option_1_page").className="showPage";
            cur_page = "option_1_page_var";
        } else if (prev_page == "option_2_page_var"){
            document.getElementById("option_2_page").className="showPage";
            cur_page = "option_2_page_var";
        } else if (prev_page == "option_3_page_var"){
            document.getElementById("option_3_page").className="showPage";
            cur_page = "option_3_page_var";
        }
        
        document.getElementById("menu_page").className="hidePage";
        
    }  else {
        if (cur_page == "home_page"){
            document.getElementById("home_page").className="hidePage";
        } else if (cur_page == "option_1_page_var"){
            document.getElementById("option_1_page").className="hidePage";
        } else if (cur_page == "option_2_page_var"){
            document.getElementById("option_2_page").className="hidePage";
        } else if (cur_page == "option_3_page_var"){
            document.getElementById("option_3_page").className="hidePage";
        }
        
        document.getElementById("menu_page").className="showPage";
        
        prev_page = cur_page;
        
        cur_page = "menu_page";
    }
}

function option_1_down() {
	document.getElementById('option_1').className='down';
}

function option_1_up() {
	document.getElementById('option_1').className='up';
    
    document.getElementById("option_1_page").className="showPage";
    
    document.getElementById("option_2_page").className="hidePage";
    document.getElementById("option_3_page").className="hidePage";
    document.getElementById("home_page").className="hidePage";
    document.getElementById("menu_page").className="hidePage";
    
    cur_page = "option_1_page_var";
}

function option_2_down() {
	document.getElementById('option_2').className='down';
}

function option_2_up() {
	document.getElementById('option_2').className='up';
    
    document.getElementById("option_2_page").className="showPage";
    
    document.getElementById("option_1_page").className="hidePage";
    document.getElementById("option_3_page").className="hidePage";
    document.getElementById("home_page").className="hidePage";
    document.getElementById("menu_page").className="hidePage";
    
    cur_page = "option_2_page_var";
}

function option_3_down() {
	document.getElementById('option_3').className='down';
}

function option_3_up() {
	document.getElementById('option_3').className='up';
    
    document.getElementById("option_3_page").className="showPage";
    
    document.getElementById("option_1_page").className="hidePage";
    document.getElementById("option_2_page").className="hidePage";
    document.getElementById("home_page").className="hidePage";
    document.getElementById("menu_page").className="hidePage";
    
    cur_page = "option_3_page_var";
}

function option_4_down() {
	document.getElementById('option_4').className='down';
}

function option_4_up() {
	document.getElementById('option_4').className='up';
    
    document.getElementById("home_page").className="showPage";
    
    document.getElementById("option_1_page").className="hidePage";
    document.getElementById("option_2_page").className="hidePage";
    document.getElementById("option_3_page").className="hidePage";
    document.getElementById("menu_page").className="hidePage";
    
    cur_page = "home_page";
}

// Functies voor de device features

function checkOS(status) {

    document.getElementById("osText").innerHTML = device.platform;
    
}

function checkConnectie() {
    var networkState = navigator.connection.type;
 
    var states = {};
    states[Connection.UNKNOWN]  = 'Onbekende connectie';
    states[Connection.WIFI]     = 'WiFi connectie';
    states[Connection.CELL_2G]  = 'Cellular 2G connectie';
    states[Connection.CELL_3G]  = 'Cellular 3G connectie';
    states[Connection.CELL_4G]  = 'Cellular 4G connectie';
    states[Connection.CELL]     = 'Cellular connectie';
    states[Connection.NONE]     = 'Geen netwerk connectie';
    
    document.getElementById("networkStatusText").innerHTML = states[networkState];
}
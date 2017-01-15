var cur_page = "home_page";
var prev_page = "home_page";

function loadScript() {
    //document.addEventListener('deviceready', onDeviceReady, false);
    onDeviceReady();
}

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
    document.getElementById('battery').addEventListener('mousedown', battery_down,  false);
	document.getElementById('battery').addEventListener('mouseup',   battery_up, false);
    
    
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
    document.getElementById('battery').addEventListener('touchstart', battery_down,  false);
	document.getElementById('battery').addEventListener('touchend',   battery_up, false);
    
    //Andere dingen
    console.log(navigator.vibrate);
    console.log(navigator.compass);
    console.log(status.level);
}

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

function battery_down() {
	document.getElementById('battery').className='down';
    
}

function battery_up() {
	document.getElementById('battery').className='up';

    checkBatterij();
}

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

function checkBatterij() {
    document.getElementById("batteryStatusText").innerHTML = level;
}

function checkConnectie() {
    var networkState = navigator.connection.type;
 
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    
    document.getElementById("networkStatusText").innerHTML = states[networkState];
}
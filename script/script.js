var cur_page="home_page";
var prev_page="home_page";

function loadScript() {
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
    
    $(document).on('batterystatus', onBatteryStatus);
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

function onBatteryStatus(power) {
    document.getElementById('Progress').setAttribute("value", info.level);
    document.getElementById('Level').innerHTML = info.level;
}
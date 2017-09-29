//Config
const text = "here is your cookies text"; //Text what is display
const buttontext = "ok"; //Text in button
const expire = 30; //Expire in 30 days
const textcolor = "black"; //Text color
const color = "#999"; //Background color
const buttoncolor = "green"; //Button color
const buttontextcolor = "white"; //Text in button color

//Set/Get cookies part
//https://github.com/Lukas0025/easyJSCookies/blob/master/cookie.js
//BY Lukas Plevac
function setCookie(name, value, expire, path) {
    if (expire != null){
        var d = new Date();
        d.setTime(d.getTime() + (expire*24*60*60*1000));
        var expires = "; expires="+ d.toUTCString();
    }else{
        expires = "";
    }
    if (path != null){
        path = "; path=" + path;
    }else{
        path = "";
    }
    if (name == null || value == null){
        console.error("Name or value is not defined");
    }else{
        document.cookie = name + "=" + value + expires + path;
    }
}

function getCookie(name){
    if (name == null){
        console.error("Name is not defined");
    }else{
	name += '=';
        for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--){
            if (!ca[i].indexOf(name)){
                return ca[i].replace(name, '');
            }
        }
    }
}

//Cookies Law
//Code part
var code = "<div id='cookieslow' style='text-align: center;background-color: " + color + ";font-size: 15px;position: fixed;left: 0;right: 0; bottom: 0;color: " + textcolor + ";padding: 10px;line-height: 19px;'>\r\n"
		 + "  " + text + "\r\n"
		 + "  <button onclick='okclick()' style='color: " + buttontextcolor + ";background-color: " + buttoncolor + ";padding: 0 12px;line-height: 1;min-height: 20px;text-align: center;vertical-align: top;cursor: pointer;text-transform: uppercase;border-radius: 3px;border: none;outline: none;font-size: 10px;margin-left: 10px;'>" + buttontext + "</button>\r\n"
		 + "</div>\r\n";

if (getCookie("cookieslaw") != "true"){
	try {
    	document.getElementsByTagName('body')[0].innerHTML += code;
	} catch(err) {
    	document.writeln(code);
	}
}

function okclick(){
	setCookie("cookieslaw", "true", expire);
	document.getElementById("cookieslow").style.display = "none";
}

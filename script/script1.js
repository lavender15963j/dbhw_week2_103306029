var x = 60;
if(x = prompt("輸入數字(預設是60)\n點擊圖形中的數字可暫停或繼續倒數 :")){
  if(x < 10){
    document.getElementById("num").innerHTML = "0" + parseInt(x);
  }
  else if(x < 100 && x >= 10){
    document.getElementById("num").innerHTML = x;
  }
  else if(1000 > x && x >= 100){
    document.getElementById("num").innerHTML = x;
    document.getElementById("num").style.marginLeft = "-91px";
  }
  else if(10000 > x && x >= 1000){
    document.getElementById("num").innerHTML = x;
    document.getElementById("num").style.marginLeft = "-127px";
  }else{
    document.getElementById("num").innerHTML = "=..=|||";
    document.getElementById("num").style.marginLeft = "-103px";
    setTimeout(function() {
      alert("ㄜ..就別逼程式了啦 好嗎??");
    }, 10000);
  }
}else{
  x = 60;
}

var url;
if(url = prompt("輸入背景顏色(ex:#800080 = 紫色)或圖片網址\n都不輸入或尋找不到則為預設圖片:")){
  switch(url[0]){
    case "#" :{
      document.getElementById("div1").style.backgroundColor = url;
      break;
    }
    case "h" :{
      document.getElementById("div1").style.backgroundImage = "url(" + url + ")";
      break;
    }
    default : {
      document.getElementById("div1").style.backgroundImage = "url(image/fantasy.jpg)";
    }
  }
}else{
  document.getElementById("div1").style.backgroundImage = "url(image/fantasy.jpg)";
}

if(parseInt(x) < 10000){
  start_stop();
  start_stop();
}
//------------------------------------------------------------------
function minus() {
  if(document.getElementById("num").value == "start"){
    if (document.getElementById("num")) {
      var curr = parseInt(document.getElementById("num").innerHTML);
    }
    if (curr && curr <= x) {

      if (curr <= 10) {
       document.getElementById("num").innerHTML = "0" + (curr - 1);
      } else {
        if(curr == 100){
          document.getElementById("num").innerHTML = curr - 1;
          document.getElementById("num").style.marginLeft = "-60px";
        }
        else if(curr == 1000){
          document.getElementById("num").innerHTML = curr - 1;
          document.getElementById("num").style.marginLeft = "-91px";
        }else{
          document.getElementById("num").innerHTML = curr - 1;
        }
      }
    } else {
      if(x < 10){
        document.getElementById("num").innerHTML = "0" + x;
      }
      else if(x >= 100 && x < 1000){
        document.getElementById("num").innerHTML = x;
        document.getElementById("num").style.marginLeft = "-103px";
      }
      else if(10000 > x && x >= 1000){
        document.getElementById("num").innerHTML = x;
        document.getElementById("num").style.marginLeft = "-127px";
      }else{
        document.getElementById("num").innerHTML = x;
      }
    }
  
    setTimeout(function() {
      minus();
    }, 1000);
  }else{

  }
}

function start_stop(){
  if("=..=|||" == document.getElementById("num").innerHTML){
    alert("別欺負程式啦~~\n跑啥" + x + "秒...\n你看看程式被你弄哭了...");
    document.getElementById("num").innerHTML = "T_T";
  }
  else if("T_T" == document.getElementById("num").innerHTML){
    alert("就叫你別欺負程式啦!!");
  }else{
    if(document.getElementById("num").value == "stop"){
      document.getElementById("num").value = "start";
      minus();
    }else{
      document.getElementById("num").value = "stop";
    }
  }
}



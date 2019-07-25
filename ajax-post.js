function ajax(type,url,obj,success,error){
    var xml = new XMLHttpRequest();
      if(type === "GET"){
       xml.open("GET",url,ture)
       xml.send();
      }else{
        xml.open('POST',url,true); //post方法它是把数据放到请求头中
        xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xml.send();
      }
        xml.onreadystatechange = function(){
            if(xml.readyState === 4){
                if(xml.status >= 200 && xml.status < 300 || xml.status === 304){
                    success(xml)
                }else{
                    error(xml)
                }
            }
        }
}
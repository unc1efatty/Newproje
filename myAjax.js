function obj2str(obj){
    /*
    {
        "userName":"wy"
        "userPwd":"123456"
    }
     */ 
    var res = [];
    for(var key in obj){ //能够遍历到我对象的所有东西
        res.push(key+"="+obj[key]);
    }
    return res.join("&");
}



function ajax(url,obj,timeout,success,error){
    var str = obj2str(obj);
    var timer;
    var xml = new XMLHttpRequest();
        xml.open('GET',url,true);
        xml.send();
        xml.onreadystatechange = function(){
            if(xml.readyState === 4){
                if(xml.status >= 200 && xml.status < 300 || xml.status === 304){
                    success(xml)
                }else{
                    error(xml)
                }
            }
        }
    //判断外界是否传入了超时时间
    if(timeout){
        timer = setInterval(function(){ //开启了一个定时器
            console.log("中断请求");
            xml.abort();//这个方法就是中断请求
            clearInterval(timer);//中断请求了的话，那定时器也是不需要了所以就清空
        },timeout); //timeout就是外界设置的超时时间，如果到了这个超时时间，那就中断
    }
}
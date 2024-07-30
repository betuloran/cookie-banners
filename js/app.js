function setCookie(name,value,days){
    var date=new Date();
    date.setDate(date.getDate() + days);
    document.cookie=name+ '=' + escape(value) + '; expires=' + date.toUTCString(); 
    console.log('cookie' + name + 'created');

}

setCookie('prototurk',true,5);
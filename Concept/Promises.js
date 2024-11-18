

const promises = new Promise(function(resolve , reject))

{
    //do an asyn task 
    //DB calls , cryptography , network 

    setTimeout(function(){
        console.log('async taks is complete');
    },1000)

}

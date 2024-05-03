document.addEventListener('DOMContentLoaded',function(){
    //set footer currentyear
    document.getElementById('currentyear').textContent=new Date().getFullYear();
    
    //set footer last modified date
    document.getElementById("lastModified").textContent=document.lastModified;

    //add event listener to the menu button
    const hamBotton=document.getElementById('menu')//select the menu button
    const navigation=document.querySelector('.navigation');//select the navigation container
    hamBotton.addEventListener('click',function(){
        hamBotton.classList.toggle('open');
        navigation.classList.toggle('open');
    })
})



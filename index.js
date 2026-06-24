let imgarr=['images/house 1.jpeg','images/house 2.jpeg','images/house 3.webp','images/house 4.jpeg','images/house 5.jpg'];
let index=0;
function next(){
    if(index===imgarr.length-1)
    {
        index=0;
    }
    else{
        index++;
    }
 document.getElementById('image').src=imgarr[index];
}
function previous(){
if(index===0)
    {
        index=imgarr.length-1;
    }
    else{
        index--;
    }
 document.getElementById('image').src=imgarr[index];
}
function setImg(src){
    document.getElementById('image').src= src;
}
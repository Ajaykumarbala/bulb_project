function change()
{
    var img=document.getElementById("bulb");

    if(img.src.match("on"))
    {
        img.src="./assets/bulb off.jpeg";
    }
    else{
        img.src="./assets/bulb on.jpeg";
    }
}
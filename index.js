const a = document.getElementById("color1");
const b = document.getElementById("color2");
const c = document.getElementById("color3");
const d = document.getElementById("color4");
var img1 = document.getElementById("imgBox1");
var img2 = document.getElementById("imgBox2");
var img3 = document.getElementById("imgBox3");
var img4 = document.getElementById("imgBox4");
var colorBox = document.getElementById("sideColorBox");
var txtColor1 = document.getElementById("txt1");
var txtColor2 = document.getElementById("txt2");


a.addEventListener('click',function(){
    colorBox.style.background= "#ffd800";
    img1.style.display = "block";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
});
b.addEventListener('click',function(){
    colorBox.style.background= "#434fff";
    txtColor1.style.color = "#fff";
    img2.style.display = "flex";
    img1.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
});

c.addEventListener('click',function(){
    colorBox.style.background= "#bee7f9";
    img3.style.display = "flex";
    img1.style.display = "none";
    img2.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
});
d.addEventListener('click',function(){
    colorBox.style.background= "#fa5d63";
    txtColor2.style.color = "#fff";
    img4.style.display = "flex";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img5.style.display = "none";
});


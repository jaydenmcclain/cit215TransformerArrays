let chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck", color:"blue"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank", color:"green"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car", color:"gold"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane", color:"white"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck", color:"blue"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank", color:"green"},
];

const eleMaker =(itm)=>{
    let ele = document.createElement("div");
    let nameEle = document.createElement("h1");
    let classEle = document.createElement("h1");
    let vehicleEle = document.createElement("h1");
    let img = document.createElement("img");
    if(itm.afl === "decepticon"){
        ele.classList.add("decepticon");
        img.src =  "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    }else{
        ele.classList.add("autobot");
        img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png"
    }
    img.classList.add("img");
    ele.appendChild(img);
    nameEle.innerHTML="Name: "+ itm.name;
    classEle.innerHTML="Class: "+itm.class.toUpperCase();
    vehicleEle.innerHTML="Vehicle: "+itm.vehicle;
    nameEle.classList.add("character");
    classEle.classList.add("character");
    vehicleEle.classList.add("character");

    vehicleEle.style.color=itm.color;
    ele.appendChild(nameEle);
    ele.appendChild(classEle);
    ele.appendChild(vehicleEle);

    ele.classList.add("characterdiv")
    document.body.appendChild(ele);
}

for(let i=0; i<chrs.length; i++){
    eleMaker(chrs[i])
}
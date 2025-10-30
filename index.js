function roller(){
  const noofdice=document.getElementById("noofdice").value;
  const dicetext=document.getElementById("dicetext");
  const dicimages=document.getElementById("dicimages");

  let values=[];
  let images=[]

  for(let i=1;i<=noofdice;i++){
    let random=Math.floor(Math.random()*6)+1;
    values.push(random);
    images.push(`<img src="diceimages/${random}.png" alt=${random}>`);
  }
  dicetext.textContent=`dice: ${values.join(" , ")}`;
  dicimages.innerHTML=images.join(" ");
 
}
/*$(".btn_liketoggle").click(function() {
    $(this).find("i").btn_liketoggle("fas far");
    $(this).find("span").text(function(i, v) {
      return v === 'Like' ? 'Unlike' : 'Like'
    })
  });*/
  
  function accrement1(qte1,somme1,sommetotal){
    let inp=document.getElementById(qte1)
    let val=parseInt(inp.value);
    let pri=document.getElementById(somme1)
    let pric=parseInt(pri.value);
    val++
    inp.value=val;
    if (val>0){
    pric=70*val}
    pri.value=pric;
    st=st+pric;
    let tot=document.getElementById(sommetotal);
    console.log(tot)
    tot.value=st
  }
  function descrem1(qte1,somme1,sommetotal){
    let inp=document.getElementById(qte1)
    let val=parseInt(inp.value);
    let pri=document.getElementById(somme1)
    let pric=parseInt(pri.value);
    if (val>0){
    val--}
    else {
        val =0
    }
    inp.value=val;
    if (val>0){
      pric=70*val}
      else{
        pric=0;
      }
      pri.value=pric;
      st=st+pric;
      let tot=document.getElementById(sommetotal);
      console.log(tot)
      tot.value=st
  }


  function accrement2(qte2,somme2,sommetotal){
    let inp1=document.getElementById(qte2)
    let val1=parseInt(inp1.value);
    let pri1=document.getElementById(somme2)
    let pric1=parseInt(pri1.value);
    val1++
    inp1.value=val1;
    if (val1>0){
    pric1=40*val1}
    pri1.value=pric1;
    st=st+pric1;
    let tot=document.getElementById(sommetotal);
    console.log(tot)
    tot.value=st
  }
  function descrem2(qte2,somme2,sommetotal){
    let inp1=document.getElementById(qte2)
    let val1=parseInt(inp1.value);
    let pri1=document.getElementById(somme2)
    let pric1=parseInt(pri1.value);
    if (val1>0){
    val1--}
    else {
        val1 =0
    }
    inp1.value=val1;
    if (val1>0){
      pric1=40*val1}
      else{
        pric1=0;
      }
      pri1.value=pric1;
      st=st+pric1;
      let tot=document.getElementById(sommetotal);
      console.log(tot)
      tot.value=st
  }


  function accrement3(qte3,somme3,sommetotal){
    let inp2=document.getElementById(qte3)
    let val2=parseInt(inp2.value);
    let pri2=document.getElementById(somme3)
    let pric2=parseInt(pri2.value);
    val2++
    inp2.value=val2;
    if (val2>0){
    pric2=60*val2}
    pri2.value=pric2;
    st=st+pric2;
    let tot=document.getElementById(sommetotal);
    console.log(tot)
    tot.value=st
  }
  function descrem3(qte3,somme3,sommetotal){
    let inp2=document.getElementById(qte3)
    let val2=parseInt(inp2.value);
    let pri2=document.getElementById(somme3)
    let pric2=parseInt(pri2.value);
    if (val2>0){
    val2--}
    else {
        val2 =0
    }
    inp2.value=val2;
    if (val2>0){
      pric2=60*val2}
      else{
        pric2=0;
      }
      pri2.value=pric2;
      st=st+pric2;
      let tot=document.getElementById(sommetotal);
      console.log(tot)
      tot.value=st
  }
  st=0;
  function like1(pric,sommetotal){
    
  }
  function like2(pric1,sommetotal){
    
    let prix1=document.getElementById(pric1);
    let prixc1=Number(prix1.value);
    
    st=st+prixc1;
    let tot=document.getElementById(sommetotal);
    console.log(tot)
    tot.value=st
  }
  
  function changeColor(color) { 
    let x =document.getElementsByClassName(color) 
    console.log(x)
    x[2].setAttribute('class','red')
} 
function changeColor(color) { 
  let x =document.getElementsByClassName(color) 
  console.log(x)
  x[1].setAttribute('class','red')
} 
function changeColor(color) { 
  let x =document.getElementsByClassName(color) 
  console.log(x)
  x[0].setAttribute('class','red')
} 
/*function gfg_Run() { 
    changeColor('yellow'); 
    
} */




function supp(carte1){
  var parent=document.getElementById("section1").getElementsByTagName("section")[0];
  var child=parent.getElementsByTagName("div")[0];
  var remouve=parent.removeChild(child);
}
function supp(carte2){
  var parent1=document.getElementById("section2").getElementsByTagName("section")[0];
  var child1=parent1.getElementsByTagName("div")[0];
  var remouve1=parent1.removeChild(child1);
}
function supp(carte3){
  var parent2=document.getElementById("section3").getElementsByTagName("section")[0];
  var child2=parent2.getElementsByTagName("div")[0];
  var remouve2=parent2.removeChild(child2);
}
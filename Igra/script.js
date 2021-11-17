var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var output = document.getElementById('outputtext');
var broj = Math.floor(Math.random() * 101);
console.log(broj);
var pokusaji = 1;


btn.addEventListener (`click`, function pokusaj (){
      var input= document.getElementById("korisnik").value;
     
      
      if (input == broj){
            output.innerHTML = `Točan pogodak, traženi broj je ${input}. Pogodili ste iz ${pokusaji}. puta`;
            pokusaji ++;
      }
      else if (input > broj){
            output.innerHTML = `Netočno, traženi broj je veći od ${input}`;
            pokusaji ++;
      }
      else if (input < broj) {
            output.innerHTML = `Netočno, traženi broj je manji od ${input}`;
            pokusaji ++;
      }
     
    
      
});
btn2.addEventListener ('click',function(){location.reload()});
       
            

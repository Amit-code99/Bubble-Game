
 let timer=60;
 let scorecount=0;
 var hitrn=0;
let btn=document.querySelector('#playbtn');

function bubble(){
    let text="";
    let bubble=document.querySelector('#playground');
     for(let i=1;i<=168;i++){
        let rannum=Math.floor(Math.random()*20)
        text +=` <div class="bubule">${rannum}</div>`;
         }
     bubble.innerHTML=text;
}

  let timers=()=>{
    setTimeout(()=>{
        if(timer>0){
            timer--;
        }else{
            clearTimeout(timers)
            document.querySelector('#playground').innerHTML=" Game over "
            document.querySelector('.score1').innerHTML=" "; 
            document.querySelector('.hit1').innerHTML=" ";
            }
         },1000)
      document.querySelector('.timer1').innerHTML=timer;
    }


    function hit(){
        hitrn=Math.floor(Math.random()*20)
        document.querySelector('.hit1').textContent=hitrn
    }



    function score(){
       let scores=document.querySelector('.score1')
        scorecount +=10;
        scores.innerHTML=scorecount;
    }

    
    let hitplay=document.querySelector('#playground');
    hitplay.addEventListener('click',(dot)=>{
       let clickme= Number(dot.target.textContent)
       console.log(clickme)
       if(clickme==hitrn){
        bubble()
        score()
        hit()
       }
    })

    btn.addEventListener('click',()=>{
    bubble()
    hit()
    setInterval(() => {
       timers() 
      }, 1000);
   })


window.onload=function(){
    let keyscr=document.querySelector(".keyscr");
    let bgm=document.querySelector("#bgm");
    let bgmk=true;
    let kg=document.querySelector("#kg");
    let kgk=false;
    let screen=document.querySelector(".screen");
    let life=document.querySelector("#life");
    let df=document.querySelector("#df");
    let death=document.querySelector(".death");
    let enddf=document.querySelector(".enddf")
    let again=document.querySelector(".again")
    let audio=document.querySelector("#audio");
    
    //按键改变大小
    keyscr.ontouchstart=function(e){
        if(e.target.className=="btn"){
            e.target.style.transform="scale(0.8)";
            if(kgk==true){
                game.delkey(e.target.innerText)
            }
            
        }
    }
    keyscr.ontouchend=function(e){
        if(e.target.className=="btn"){
            e.target.style.transform="scale(1)";
        }
    }
    //音乐开关
    bgm.ontouchend=function(){
        if(bgmk==true){
            bgm.className="bgme"
            bgmk=false;
            // audio.play();
            audio.pause();
        }else{
            bgm.className="bgms"
            bgmk=true;
            audio.play();
            // audio.pause();
        }       
    }
    //游戏暂停
    kg.ontouchstart=function(){
        if(kgk==true){  
            game.pause(); 
            // game.run();        
            kg.className="play"
            kgk=false;            
        }else{
           game.run();
        //    game.pause(); 
            kg.className="end"
            kgk=true;           
        }       
    }
    //再来一次
    again.ontouchstart=function(){
        death.style.display="none";
        game.screen=screen; 
        game.creatletter(5);             
        game.run();
       
        
    }
    let game=new Game();
    // game.initial();
    game.life=life;
    game.death=death;
    game.enddf=enddf;
    game.again=again;
    game.df=df;
    game.kg=kg;
    game.bgm=bgm;
    // game.initial();
    game.screen=screen;
    game.creatletter(5);
    // game.run();
   
}
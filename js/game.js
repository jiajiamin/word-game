class Game{
    constructor(){//构造函数
        this.screen="";
        this.bgm="";
        this.kg="";
        this.life=""
        this.df="";
        this.arr=[];//name；letter;node；div,top;left;
        this.dfNum=0;
        this.lifeNum=10;
        this.sudu=0.01;
        this.death="";
        this.t="";
        this.enddf="";
        this.again="";
    }
    initial(){//初始化游戏
        this.screen="";
        this.df.innerText=0;
        this.life.innerText=10;
        this.bgm.className="bgme"
        this.kg.className="end" 
        this.dfNum=0;
        this.lifeNum=10;    
        this.sudu=0.01;
        this.arr=[];
    }
    creatletter(num=1){//生成字母      
        for(let i=0;i<num;i++){
            let asc={};
            let letter=""
            let left;
            do{//判断字母重复
                letter=String.fromCharCode(Math.floor(Math.random()*26+65)) ;
            }while(this.ifcf(letter));           
            let div=document.createElement("div");
            asc.node=div;
            div.className="letter";
            asc.name=letter;
            do{//判断字母重叠
                left=Math.random()*5.7+0.6;
            }while(this.ifcd(left));                      
            asc.left=left;
            asc.top=0.9;            
            div.style.left=left+"rem";
            this.screen.appendChild(div);
            div.style.backgroundImage=`url(img/A_Z/${letter}.png)`;
            this.arr.push(asc)
        }       
    }
    ifcf(letter){ //字母重复的判断
        for(let item of this.arr){
            if(letter==item.name){
                return true;
            }          
        }
        return false;
    }  
    ifcd(left){ //字母重叠的判断
        for(let item of this.arr){
            if(Math.abs(left-item.left)<0.5){
                return true;
            }          
        }
        return false;
    } 
    run(){//字母下落
        let that=this;
        this.t=setInterval(()=>{          
            this.arr.forEach(function(item,index){                
                item.top+=that.sudu;
                if(item.top>6.5){                                                      
                    that.screen.removeChild(item.node);
                    that.arr.splice(index,1);
                    that.creatletter();
                    that.addlife(); 
                }
                item.node.style.top=item.top+"rem";
            })
        },10)
    } 
    delkey(name){//字母消除       
        this.arr.forEach((item,index)=>{
            if(item.name==name){  
                this.dfNum++; 
                this.df.innerText=this.dfNum; 
                this.sudu=this.dfNum/5000+0.01;    
                this.screen.removeChild(item.node);
                this.arr.splice(index,1);
                this.creatletter();
                           }
        })
    }  
    addlife(){//最终生命与得分
        this.lifeNum--;
        this.life.innerText=this.lifeNum;
        if(this.lifeNum<=0){            
            this.death.style.display="block";             
            this.enddf.innerText=this.dfNum;            
            this.arr.forEach((item,index)=>{
                this.screen.removeChild(item.node)
                // this.arr.splice(index,1);
            })
            clearInterval(this.t); 
            this.initial(); 
           
        }
    } 
    pause(){//暂停
        clearInterval(this.t);
    }  
}
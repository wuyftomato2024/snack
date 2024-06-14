import Food from "./Food";
import Scorepanel from "./Scorepanel";
import Snake from "./Snake";


class GameControl{  
    snake:Snake;
    food:Food;
    scorepanel:Scorepanel;

    // 蛇の移動方向（ボタンの方向）を保存
    direction:string = '';

    // ゲームを続けるかどうかを判断
    isLive = true;

    constructor(){
        this.snake= new Snake();
        this.food= new Food();
        this.scorepanel= new Scorepanel(); 
        this.init();
       
    }
    
        // ゲーム初期化、bindは新しい変数を生成することです(this)はこのthisに指定されることです
    init(){
         document.addEventListener("keydown",this.keydownHandler.bind(this));
         this.run();
    }

    keydownHandler(event:KeyboardEvent){
       console.log(event.key)
        this.direction = event.key;
    }

    run(){
        // 方向による蛇の位置を移動する。
        // 上 top - ArrowUp
        // 下　top +  ArrowDown
        // 左　left-  ArrowLeft
        // 右　left+  ArrowRight

        let X = this.snake.X;
        let Y = this.snake.Y;


        switch(this.direction){
            case"ArrowUp":
            Y -= 10;
            break;
            case"ArrowDown":
            Y += 10;
            break;
            case"ArrowLeft":
            X -=10;
            break;
            case"ArrowRight":
            X +=10;
            break;
        }

        // もし蛇の座標と食べ物の座標とあったら、以下のを実行します
        if(this.checkEat(X,Y)){
            console.log("食べました")
            this.food.change();
            this.scorepanel.addScore();
            this.snake.addBody();
        }
        
        

        // try&catch、this.snake.ts中の壁をぶつけるのエラーメッセージを捕獲する
        try{
             // ここはXとYを修正
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e:any){
            alert(e.message);
            this.isLive=false;
            location.reload();
        }
       
        

        // 上のinit()とkeydownHandler中にrunを入ると、一回しか動く、数回ではない。故にsetTimeoutを使います、 runを実行すると、最後にsettimeoutにもう一度runを実行するになります、つまり無限ループです。       

        // 300-(this.scorepanel.level-1)*30は、最初からは300msのスピードを移動する、300マイナスscorepanel中のlevel数、例えばレベル１は1マイナス１、であれば、0になる、また0を30をかける、0になる、だからレベル１は300msです。

        this.isLive && setTimeout(this.run.bind(this),200-(this.scorepanel.level-1)*30);
    }


    // 蛇の頭（座標）とfoodとぶつけるを検索します,XとYは直接上の座標を取ります。
    checkEat(X:number,Y:number){
        return X === this.food.X && Y === this.food.Y || X === this.food.X2
         && Y === this.food.Y2 ;
        
    }

}

export default GameControl;
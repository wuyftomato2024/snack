class Scorepanel{

    // スコアとレベルを記載する
    score = 0;
    level = 1;

    // スコアとレベルのエレメントを、function中に初期化する
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    // maxLevelを設定する
    maxLevel:number;

    upScore:number;

    constructor(maxLevel:number=10,upScore:number=2){
        this.scoreEle=document.getElementById("score")!;
        this.levelEle=document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    
    addScore(){
        this.scoreEle.innerHTML = ++this.score + "";
        if(this.score %2 ===0 ){
            this.levelUp();
        }
    }

    // ++前に置いたら、先に値をプラスし、その後新しい値を出力します。
    // もしscore割り10、結果は0になったら、レベルアップ。

    levelUp(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML = ++this.level + "";}
        
    }

}

export default Scorepanel;
class Food{
    foodEle1:HTMLElement;
    
    
    // ＊二つ目のfoodを追加
    foodEle2:HTMLElement;

    constructor(){
        // htmlからfoodというエレメントをゲットし、エレメントに値を与えます
        this.foodEle1=document.getElementById("food")!;
        this.foodEle2=document.getElementById("food2")!;
    }

//    foodの座標をゲット  
    get X(){
        return this.foodEle1.offsetLeft;
    }

    get Y(){
        return this.foodEle1.offsetTop;
    }

    // ＊二つ目のfoodの座標を獲得
    get X2(){
        return this.foodEle2.offsetLeft;
    }
    get Y2(){
        return this.foodEle2.offsetTop;
    }

    change(){
        // Math.randomは0から１まで、ランダムで、０と1は含めない、だけらMath.roundが必要です。math.roundは四捨五入で値を取る、そうしたら0と２９も取れます。合計29個値を取れます。
        // ＊foodの座標をランダムも二つを用意しなければならない

      let top1=  Math.round(Math.random()*29)*10;
      let left1=  Math.round(Math.random()*29)*10;

      let top2=  Math.round(Math.random()*29)*10;
      let left2=  Math.round(Math.random()*29)*10;

    //   this.element.style.leftというのはfoodのstyle中のｘ座標を直接変えること、TOPは同様
      this.foodEle1.style.left = left1+"px";
      this.foodEle1.style.top = top1+"px";

      this.foodEle2.style.left = left2+"px";
      this.foodEle2.style.top = top2+"px";

    }
    
}



export default Food;
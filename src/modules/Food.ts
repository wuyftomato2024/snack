class Food{
    foodEle:HTMLElement;

    constructor(){
        // htmlからfoodというエレメントをゲットし、エレメントに値を与えます
        this.foodEle=document.getElementById("food")!;
    }

//    foodの座標をゲット  
    get X(){
        return this.foodEle.offsetLeft;
    }

    get Y(){
        return this.foodEle.offsetTop;
    }

    change(){
        // Math.randomは0から１まで、ランダムで、０と1は含めない、だけらMath.roundが必要です。math.roundは四捨五入で値を取る、そうしたら0と２９も取れます。合計29個値を取れます。
      let top=  Math.round(Math.random()*29)*10;
      let left=  Math.round(Math.random()*29)*10;

    //   this.element.style.leftというのはfoodのstyle中のｘ座標を直接変えること、TOPは同様
      this.foodEle.style.left = left+"px";
      this.foodEle.style.top = top+"px";

    }
    
}

export default Food;
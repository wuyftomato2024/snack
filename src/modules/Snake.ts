class Snake{
    // 蛇の頭
    head:HTMLElement;
    // 蛇の体,蛇の頭含め
    body:HTMLCollection;
    // 蛇の体だけ
    element:HTMLElement;


    constructor(){
        this.head=document.querySelector(`#snake > div`)!;
        this.element=document.getElementById("snake")!;
        this.body=this.element.getElementsByTagName(`div`);
    }

    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }


    // 蛇の頭を設定する、valueは蛇頭の現在位置です。
    set X(value:number){
        
        // 蛇の頭を壁にぶつけるかどうかを判断する
        if(this.X === value){
            return;
        }
        
        if(value < 0 || value>290 ){
           throw new Error("ぶつけちゃった！");
        }


         // this.body[1]&&this.body[1] as HTMLElement、this.body[1]はまず体が存在かどうかを判断する。(this.body[1] as HTMLElement).offsetLeftは体の座標

        // 左に移動するとき、valueは-です、this.Xはvalueより大きいはずです、例えばvalueは-20、this.Xは-10はずです、もしvalueはthis.Xより大きいなら、蛇は右に移動すると判断する


        if(this.body[1]&&(this.body[1] as HTMLElement).offsetLeft === value){
            if(value>this.X){
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }

       

        // 体を移動するため
        
        this.moveBody();

        this.head.style.left= value+"px";

        this.checkHeadBody();
        
    }

    set Y(value:number){
        
        // 蛇の頭を壁にぶつけるかどうかを判断する
        if(this.Y === value){
            return;
        }
        
        if(value < 0 || value>290 ){
           throw new Error("ぶつけちゃった！");
        }

        if(this.body[1]&&(this.body[1] as HTMLElement).offsetTop === value){
            if(value>this.Y){
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }

        // 体を移動するため
        this.moveBody();

        this.head.style.top= value+"px";

        this.checkHeadBody();

    }

    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>");
        // insertAdjacentHTMLは指定のとこに内容を挿入、innerHTMLは要素の全体を切り替え、ここはthis.elementの後ろに、<div></div>を追加します
    }

    moveBody(){
        //  最後の蛇の体は、前の体の座標を設置します。例えば、４の位置は３の位置、３の位置は２の位置

        // this.body.length-1は体の全体長さを-1、つまり３であれば-1、２になる、i--は後ろから前にループする。
        // (this.body[i-1] as HTMLElement)as HTMLElementは強制的にこのコードをエレメントにすること

        for(let i=this.body.length-1;i>0;i--){
            let X = (this.body[i-1] as HTMLElement).offsetLeft;
            let Y = (this.body[i-1] as HTMLElement).offsetTop;


            (this.body[i] as HTMLElement).style.left = X +"px" ;
            (this.body[i] as HTMLElement).style.top = Y +"px" ;

           
        }

    }


            
    checkHeadBody(){
        for(let i = 1;i<this.body.length;i++){
            const HB = this.body[i] as HTMLElement;
            if(this.X === HB.offsetLeft &&this.Y === HB.offsetTop){
                throw new Error("Game Over");
            }
        }
    }



}

export default Snake;
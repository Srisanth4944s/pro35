class Food{
     constructor(){
         this.foodstock = 0
         this.lastfed
         this.image = loadImage("images/Milk.png")
     }

     getFedTime(lastfed){
         this.lastfed = lastfed

     }
     updateFoodStock(foodstock){
         this.foodstock = foodstock
     }

     dedectfood(){
         if(this.foodstock>0){
             this.foodstock = this.foodstock-1
         }
     }

     getFoodStock(){
         return this.foodstock
     }

     display(){
         var x = 80
         var y = 100
         imageMode(CENTER)
         image(this.image,720,200,60,60)
         if (this.foodstock!=0){
             for(var i = 0;i<this.foodstock;i++){
                 if(i%10==0){
                     x=80
                     y=y+50
                 }
                 image(this.image,x,y,50,50)
                 x=x+30;
             }
         }
     }
     
}
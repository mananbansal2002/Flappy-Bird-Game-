function Bird() {
  this.x = 80;
  this.y = height / 2;
  this.gravity=0.5;
  this.velocity=0;
  this.push=5;
  this.show = function () {
    fill(255);
    ellipse(this.x, this.y, 30, 30);
  };
    this.update=function(){
    this.velocity+=this.gravity;
      if(this.velocity<-17)
      this.velocity+=5;
      if(this.velocity>10)
      this.velocity-=0.5;
    this.y+=this.velocity;
    if(this.y>height)
      this.y=height , this.velocity=0;
      if(this.y<0)
      this.y=0 , this.velocity=0;
    };
  this.pushUp=function(){
    
    this.velocity-=17;
    
  };
  
}


function Pipe()
{
  this.top=random(0,height/2);
  this.bottom=random(height/2,height);
  this.dist=random(70,height/2);
  this.x=width;
  this.speed=5;
  this.highlight=false;
  
  this.show=function(){
    fill(255);
    if(this.highlight)
      fill(255,0,0);
    rect(this.x,0,20,this.top)
    rect(this.x,this.top+this.dist,20,this.bottom+height-this.bottom)
  }
  
  this.update=function(){
    this.x-=this.speed;
  }
  
}
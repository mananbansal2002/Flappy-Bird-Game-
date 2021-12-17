var bird;
var pipes=[];
function setup() {
  createCanvas(innerWidth,innerHeight);
  bird=new Bird();
  pipes.push(new Pipe);
}

function draw() {
  background(0);
  bird.update();
  bird.show();
  if(frameCount%80==0)
    pipes.push(new Pipe);
  
  for(var i =0;i<pipes.length;i++){
  pipes[i].show();
  pipes[i].update();
   
      
        if(bird.y<=pipes[i].top || bird.y>=(pipes[i].top+pipes[i].dist))
      if(bird.x>pipes[i].x && bird.x<(pipes[i].x+20))
        pipes[i].highlight=true;
       if(pipes[i].x<-5)
      pipes.splice(i,1);
    
  
}
  
}

function keyPressed(){
  if(key==' ')
    bird.pushUp();
}




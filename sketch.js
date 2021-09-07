var player
var npc1, npc2, npc3
var platform, Platform2
var enemy1, Enemy2
var backg, ts, titleN
var gameState = "title"
var button
var PG, JG
var death = false
var jumpbox, jumpbox2, jumpboxM1
var moving1
var bouncebox, bouncebox2, bounceboxE1,bounceboxE2



function preload(){

    bgImg = loadImage("images/Bg.png")

    
    PlayerWR = loadAnimation("images/Walk1R.png", "images/Walk2R.png","images/Walk3R.png","images/Walk4R.png","images/Walk5R.png")
    PlayerWL = loadAnimation("images/Walk1L.png", "images/Walk2L.png","images/Walk3L.png","images/Walk4L.png","images/Walk5L.png")
    PlayerI = loadAnimation("images/Idle.png")
    PlayerJ = loadAnimation("images/JumpR.png")
    PlayerJL = loadAnimation("images/JumpL.png")
    PlayerOOF = loadAnimation("images/PlayerKO.png")

 
    Enemy1L = loadAnimation("images/Enemy1L.png")
    Enemy1R = loadAnimation("images/Enemy1R.png")


    NpcI1R = loadAnimation("images/Npc1.png")
    NpcI1L = loadAnimation("images/Npc1L.png")
    NpcI2 = loadImage("images/Npc2.png")
    NpcI3 = loadImage("images/Npc3.png")

    EnemyI1 = loadImage("images/Enemy1R.png")
    Enemy2W = loadAnimation("images/Enemy2W1L.png","images/Enemy2W2L.png","images/Enemy2W3L.png")
    Enemy2WR = loadAnimation("images/Enemy2W1R.png","images/Enemy2W2R.png","images/Enemy2W3R.png")
    Enemy2I = loadAnimation("images/Enemy2L.png")

    PlatformI1 = loadImage("images/Platform1.png")
    PlatformI2 = loadImage("images/Platform2.png")

    bgTitle = loadImage("images/Title.png")
    Ntitle1 = loadImage("images/Logo.png")
    Ntitle2 = loadImage("images/Logo(alt).png")

    ChainI = loadImage("images/Chain.png")

}

function setup(){
    createCanvas(windowWidth, windowHeight)
    
    PG = new Group()
    JG = new Group()

    //background
    backg = createSprite(windowWidth/2 , windowHeight/2)
    backg.addImage(bgImg)
    backg.scale = 2.5
    backg.visible = false

    //platform = createSprite(windowWidth/2,windowHeight-100, 500, 400)
    createPlatform(windowWidth/2,windowHeight-100, 0.5)

    createPlatform(windowWidth/2 + 400 ,windowHeight-100 ,0.5)

    createPlatform(windowWidth/2 + 800 ,windowHeight-100 ,0.5)

    createPlatform2(windowWidth/2 + 1150,windowHeight-180 , 0.2)

    createPlatform2(windowWidth/2 + 1500,windowHeight-180 , 0.2)

    createPlatform2(windowWidth/2 + 1880, windowHeight-160 , 0.2)

    moving1 = createSprite(windowWidth/2 + 2100, windowHeight-160)
    moving1.addImage(PlatformI1)
    moving1.scale = 0.2
    moving1.velocityX = 4

    jumpboxM1 = createSprite(windowWidth/2 + 2100, windowHeight-160)
    jumpboxM1.debug = true
    JG.setVisibleEach(false)
    jumpboxM1.setCollider("rectangle",0,0,150,80)
    JG.add(jumpboxM1)




    bouncebox = createSprite(windowWidth/2 + 1980, windowHeight-160,50,50,)
    bouncebox.visible = false
   // bouncebox.debug = true

    bouncebox2 = createSprite(windowWidth/2 + 2780, windowHeight-160 , 50,50)
    //bouncebox2.debug = true
    bouncebox2.visible = false

    createPlatform2(windowWidth/2 + 2880, windowHeight-160 , 0.2)

    createPlatform2(windowWidth/2 + 3250, windowHeight-265 , 0.2)

    createPlatform(windowWidth/2 + 3050, windowHeight-100 , 0.5)

    createPlatform(windowWidth/2 + 3450, windowHeight-100 , 0.5)

    bounceboxE1 = createSprite(windowWidth/2 + 2950, windowHeight/2+100,40,40)

    bounceboxE1.visible = false

    bounceboxE2 = createSprite(windowWidth/2 + 3550, windowHeight/2+100,40,40)

    bounceboxE2.visible = false



   

    
   
    PG.setVisibleEach(false)

//=======================================================NPC====================================================================
    npc1 = createSprite(windowWidth/2+450 , windowHeight/2+100)
    npc1.addAnimation("Npc1L",NpcI1L)
    npc1.addAnimation("Npc1R",NpcI1R)
    npc1.scale = 0.20
    //npc1.debug = true
    npc1.setCollider("rectangle",100,0,600,1100)

//=========================================================PLAYER=============================================================================
    player = createSprite(windowWidth/2 , windowHeight/2+100)
    player.addAnimation("walk1", PlayerWR)
    player.addAnimation("walk2",PlayerWL)
    player.addAnimation("idle", PlayerI)
    player.addAnimation("jump",PlayerJ)
    player.addAnimation("jump2",PlayerJL)
    player.addAnimation("oof",PlayerOOF)
    player.changeAnimation("idle",PlayerI)
    player.scale = 0.35
   
//=========================================================ENEMY===========================================================================
    enemy1 = createSprite(windowWidth/2 +750, windowHeight/2-200)
    enemy1.addAnimation("Enemy1L",Enemy1L)
    enemy1.addAnimation("Enemy1R",Enemy1R)
    enemy1.debug =true
    enemy1.scale = 0.5
    enemy1.setCollider("circle",0,0,80)

    enemy2 = createSprite(windowWidth/2 + 3250, windowHeight/2+50)
    enemy2.addAnimation("Enemy2R",Enemy2WR)
    enemy2.addAnimation("Enemy2L", Enemy2W)
    //enemy2.debug = true
    enemy2.setCollider("rectangle",0,100,400,1000)
    enemy2.scale = 0.15

    enemy2.velocityX = 4.5
 


  
//================================================================title====================================================================
    ts = createSprite(windowWidth/2, windowHeight/2)
    ts.addImage(bgTitle)
    ts.scale = 2.8
    ts.visible = false

    titleN = createSprite(windowWidth/2, windowHeight/2-200)
    titleN.addImage(Ntitle2)
    titleN.scale = 2.5
    titleN.visible = false
        
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

function draw(){
    background(255)
  
    if(gameState === "play"){
     
      
        //====================GAME START===============================
        backg.visible = true
        ts.visible = false
        titleN.visible = false
        PG.setVisibleEach(true)
        JG.setVisibleEach(false)
   
        //===========================camera============================

        camera.position.x = player.x
        //camera.position.y = player.y
        

       //======================collide==================================

        npc1.collide(PG)
        enemy2.collide(PG)
        player.collide(PG)
        player.collide(moving1)
        

        //=======================moving 1===============================
        moving1.bounceOff(bouncebox)
        moving1.bounceOff(bouncebox2)

        jumpboxM1.x = moving1.x

        //===================gravity===================================
        player.velocityY += 1
        npc1.velocityY += 1
        enemy2.velocityY += 1

        //=====================npc=====================================
        if(player.x > npc1.x){
            npc1.changeAnimation("Npc1R",NpcI1R)
        }

        if(player.x < npc1.x || player.x === npc1.x ){
            npc1.changeAnimation("Npc1L",NpcI1R)
        }

        //==================================== enemy2 ==============================================
        enemy2.bounceOff(bounceboxE1)
        enemy2.bounceOff(bounceboxE2)

        if(enemy2.velocityX > 0){
            enemy2.changeAnimation("Enemy2R",Enemy2WR)
        }

        else if(enemy2.velocityX < 0){
            enemy2.changeAnimation("Enemy2L",Enemy2W)
        }

        
        //=======================player================================

        //DIE
        if(death === true){
            player.changeAnimation("oof", PlayerOOF)
            player.scale = 0.18
            player.setCollider("rectangle", 0,0,550,450)
            player.velocityX = 0
            player.velocityY = player.velocityY + 1
            
        }

        if(player.isTouching(enemy1) || player.y > windowWidth || player.isTouching(enemy2) ){
            death = true
        }



if(death === false){
        //JUMP
        if(keyWentDown("W") && player.isTouching(JG)){
            player.changeAnimation("jump",PlayerJ)
            player.velocityY = -20
        }
        if(keyWentUp("W")){
            player.changeAnimation("idle",PlayerI)
        }


        //RIGHT
        if(keyDown("D")){
            player.changeAnimation("walk1",PlayerWR)
            if(keyDown("W")){
              player.changeAnimation("jump",PlayerJ)  
            }
            player.velocityX = 5.5
            ///////////////////////////////////////////////////////////////////////////////
        }
        if(keyWentUp("D")){
            player.velocityX = 0
            player.changeAnimation("idle",PlayerI)
        }

        //LEFT
        if(keyDown("A")){
            player.changeAnimation("walk2",PlayerWL)
            if(keyDown("W")){
                player.changeAnimation("jump2",PlayerJL)  
              }
            player.velocityX = -5.5
        }
        if(keyWentUp("A")){
            player.velocityX = 0
            player.changeAnimation("idle",PlayerI)
        }
    }

        
    }  

   if(gameState === "title"){
        ts.visible = true
        titleN.visible = true
    }
    drawSprites()
    
if(gameState==="title"){

    textSize(25)
    fill("#5dcad8")
    strokeWeight(3)
    stroke(0)
    text("Press 'SPACE' to start", windowWidth/2 -150, windowHeight/2 +70)

    if(keyDown("SPACE")){
        gameState = "play"
    }
    
}

}



function createPlatform(xpos,ypos,scale){

 

    platform = createSprite(xpos,ypos)
    jumpbox = createSprite(xpos,ypos)

    

    
    //platform.debug = true
    //jumpbox.debug = true

    jumpbox.setCollider("rectangle", -10 , -200 ,300,20)
   
    platform.setCollider("rectangle", -10 , -360 ,580,50)
        platform.addImage(PlatformI2)
        platform.scale = scale

    PG.add(platform)
    JG.add(jumpbox)

}

function createPlatform2(xpos,ypos,scale){
    platform2 = createSprite(xpos,ypos)
    jumpbox2 = createSprite(xpos,ypos - 20)
    jumpbox2.addImage(PlatformI1)
    jumpbox2.scale = scale
    platform2.addImage(PlatformI1)
    platform2.scale = scale
    //platform2.debug = true
    PG.add(platform2)
    JG.add(jumpbox2)
}
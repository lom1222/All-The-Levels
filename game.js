
var log = [];

var totalLevels = 0;

var levels = {
  notDying : {name : "Not Dying", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, color : "rgb(200,150,200)"},
  growing : {name : "Growing", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, color : "rgb(0,200,0)"},
  eating : {name : "Eating", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, color : "rgb(150,100,0)"},
  drinking : {name : "Drinking", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, color : "rgb(50,50,200)"},
  thinking : {name : "Thinking", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, color : "rgb(200,200,0)"},
  upgrading : {name : "Upgrading", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, color : "rgb(100,100,200)"},
  sleeping : {name : "Sleeping", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, color : "rgb(100,100,120)"},
  clicking : {name : "Clicking", level : 0, xp : 0, xpReq : 100, xpReqBase : 100, unlocked : false, color : "rgb(150,100,100)"},
  evolving : {name : "Evolving", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, color : "rgb(100,150,100)"},
  killing : {name : "Killing", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, color : "rgb(250,0,0)"},
  assimilating : {name : "Assimilating", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, color : "rgb(250,0,150)"},
  automating : {name : "Automating", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, color : "rgb(250,200,50)"},
  accelerating : {name : "Accelerating", level : 0, xp : 0, xpReq : 100, xpReqBase : 100, unlocked : false, color : "rgb(250,200,200)"},
  learning : {name : "Learning", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, color : "rgb(0,150,250)"},
  levelingUp : {name : "Leveling Up", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, color : "rgb(150,150,150)"},
  idling : {name : "Idling", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, color : "rgb(100,100,150)"},
  randomNumberGenerating : {name : "RNG'ing", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, color : "rgb(250,250,250)"},
  gathering : {name : "Gathering", level : 0, xp : 0, xpReq : 400, xpReqBase : 400, unlocked : false, color : "rgb(100,80,20)"},
  building : {name : "Building", level : 0, xp : 0, xpReq : 10000, xpReqBase : 10000, unlocked : false, color : "rgb(100,150,20)"},
  efficiencyIncreasing : {name : "Efficiency Increasing", level : 0, xp : 0, xpReq : 200, xpReqBase : 200, unlocked : false, color : "rgb(250,100,100)"},
  mathematising : {name : "Mathematising", level : 0, xp : 0, xpReq : 200, xpReqBase : 200, unlocked : false, color : "rgb(150,0,150)"},
  saving : {name : "Saving", level : 0, xp : 0, xpReq : 200, xpReqBase : 200, unlocked : false, color : "rgb(150,250,150)"},
  loading : {name : "Loading", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, color : "rgb(150,250,250)"},
  resetting : {name : "Resetting", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, advanced : true, color : "rgb(0,0,0)"},
  observing : {name : "Observing", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, advanced : true, color : "rgb(200,200,250)"},
  perceiving : {name : "Perceiving", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, advanced : true, color : "rgb(250,250,100)"},
  insightCollecting : {name : "Insight Collecting", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, advanced : true, color : "rgb(250,100,250)"},
  researching : {name : "Researching", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, advanced : true, color : "rgb(150,50,150)"},
  enchancing : {name : "Enchancing", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, advanced : true, color : "rgb(250,250,100)"},
  timeWarping : {name : "Time Warping", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, advanced : true, color : "rgb(200,150,50)"},
};

var sleepingTime = 0;
var randomNumber = 0;
var maxUpgrade = 3;
var maxEvolve = 3;
var maxAutomate = 3;
var maxEnchance = 5;
var saveCount = 0;
var resetting = false;
var researchNode;

init();
function init(){
  createLevels();
  createResearchNode();
  if(!load()){
    unlock("notDying");
  }
}

function createLevels(){
  var levelNames = Object.keys(levels);
  var levelsDiv = document.getElementById("levelsDiv");
  for(var x = 0;x < levelNames.length;x++){
    var level = document.createElement("div");
    level.className = "level";
    level.style.color = levels[levelNames[x]].color;
    level.id =  levelNames[x]+"Level";
    level.innerHTML = levels[levelNames[x]].name + " (<span id='"+levelNames[x]+"LevelValue'>"+levels[levelNames[x]].level+"</span>): ";
    var xpBar = document.createElement("div");
    xpBar.className = "xpBar";
    level.appendChild(xpBar);
    var progressBar = document.createElement("div");
    progressBar.className = "progressBar";
    progressBar.id = levelNames[x]+"Xp";
    xpBar.appendChild(progressBar);
    levelsDiv.appendChild(level);
  }
}

function createResearchNode(){
  researchNode = document.createElement("img");
  researchNode.id = "researchNode";
  researchNode.src = "researchNode.png";
  researchNode.onclick = function(){collectResearchNode();};
  document.body.appendChild(researchNode);
}

function unlock(level){
  levels[level].unlocked = true;
  fadeIn(document.getElementById(level+"Level"));
  addToLog("Unlocked "+levels[level].name+"!");
  if(level=="growing"){
    fadeIn(document.getElementById("growButton"));
    document.getElementById("growButton").disabled = false;
  }else if(level=="eating"){
    fadeIn(document.getElementById("eatButton"));
    document.getElementById("eatButton").disabled = false;
  }else if(level=="drinking"){
    fadeIn(document.getElementById("drinkButton"));
    document.getElementById("drinkButton").disabled = false;
  }else if(level=="thinking"){
    fadeIn(document.getElementById("thinkButton"));
    document.getElementById("thinkButton").disabled = false;
  }else if(level=="upgrading"){
    fadeIn(document.getElementById("upgrade1Button"));
    document.getElementById("upgrade1Button").disabled = false;
  }else if(level=="evolving"){
    fadeIn(document.getElementById("evolve1Button"));
    document.getElementById("evolve1Button").disabled = false;
  }else if(level=="automating"){
    fadeIn(document.getElementById("automate1Button"));
    document.getElementById("automate1Button").disabled = false;
  }else if(level=="killing"){
    fadeIn(document.getElementById("killButton"));
    document.getElementById("killButton").disabled = false;
  }else if(level=="assimilating"){
    fadeIn(document.getElementById("assimilateButton"));
    document.getElementById("assimilateButton").disabled = false;
  }else if(level=="learning"){
    fadeIn(document.getElementById("learnButton"));
    document.getElementById("learnButton").disabled = false;
  }else if(level=="accelerating"){
    fadeIn(document.getElementById("accelerateButton"));
    document.getElementById("accelerateButton").disabled = false;
  }else if(level=="randomNumberGenerating"){
    fadeIn(document.getElementById("generateRandomNumberButton"));
    document.getElementById("generateRandomNumberButton").disabled = false;
    fadeIn(document.getElementById("randomNumber"));
  }else if(level=="gathering"){
    fadeIn(document.getElementById("gatherButton"));
    document.getElementById("gatherButton").disabled = false;
  }else if(level=="building"){
    fadeIn(document.getElementById("buildButton"));
    document.getElementById("buildButton").disabled = false;
  }else if(level=="saving"){
    fadeIn(document.getElementById("saveButton"));
    document.getElementById("saveButton").disabled = false;
  }else if(level=="efficiencyIncreasing"){
    fadeIn(document.getElementById("increaseEfficiencyButton"));
    document.getElementById("increaseEfficiencyButton").disabled = false;
  }else if(level=="loading"){
    fadeIn(document.getElementById("loadButton"));
    document.getElementById("loadButton").disabled = false;
  }else if(level=="resetting"){
    fadeIn(document.getElementById("resetButton"));
    document.getElementById("resetButton").disabled = false;
  }else if(level=="researching"){
    fadeIn(document.getElementById("researchButton"));
    document.getElementById("researchButton").disabled = false;
  }else if(level=="enchancing"){
    fadeIn(document.getElementById("enchance1Button"));
    document.getElementById("enchance1Button").disabled = false;
  }
}

function upgrade(num){
  if(levels.growing.level>=5*num){
    levels.growing.level-=5*num;
    levels.growing.xpReq = 5*Math.pow(2,levels.growing.level);
    totalLevels-=5*num;
    gainXp("upgrading",10*Math.pow(2,num-1));
    if(num<maxUpgrade){
      fadeIn(document.getElementById("upgrade"+(num+1)+"Button"));
      document.getElementById("upgrade"+(num+1)+"Button").disabled = false;
    }
    document.getElementById("upgrade"+num+"Button").disabled = true;
    document.getElementById("growingLevelValue").innerHTML = levels.growing.level;
    document.getElementById("totalLevel").innerHTML = totalLevels;
    addToLog("Leveled down 'growing' level to level "+levels.growing.level+"!!!");
    if(num==1){
      unlock("sleeping");
      unlock("clicking");
    }else if(num==2){
      unlock("observing");
      unlock("perceiving");
      unlock("insightCollecting");
    }else if(num==3){
      unlock("researching");
    }
  }
}

function evolve(num){
  if(levels.notDying.level>=3*num){
    levels.notDying.level-=3*num;
    levels.notDying.xpReq = 5*Math.pow(2,levels.notDying.level);
    totalLevels-=3*num;
    gainXp("evolving",10*Math.pow(2,num-1));
    if(num<maxEvolve){
      fadeIn(document.getElementById("evolve"+(num+1)+"Button"));
      document.getElementById("evolve"+(num+1)+"Button").disabled = false;
    }
    document.getElementById("evolve"+num+"Button").disabled = true;
    document.getElementById("notDyingLevelValue").innerHTML = levels.notDying.level;
    document.getElementById("totalLevel").innerHTML = totalLevels;
    addToLog("Leveled down 'Not Dying' level to level "+levels.notDying.level+"!!!");
    if(num==1){
      unlock("killing");
    }else if(num==2){
      unlock("learning");
    }else if(num==3){
      unlock("gathering");
    }
  }
}

function automate(num){
  if(levels.thinking.level>=4*num){
    levels.thinking.level-=4*num;
    levels.thinking.xpReq = 10*Math.pow(2,levels.thinking.level);
    totalLevels-=4*num;
    gainXp("automating",10*Math.pow(2,num-1));
    if(num<maxAutomate){
      fadeIn(document.getElementById("automate"+(num+1)+"Button"));
      document.getElementById("automate"+(num+1)+"Button").disabled = false;
    }
    document.getElementById("automate"+num+"Button").disabled = true;
    document.getElementById("thinkingLevelValue").innerHTML = levels.thinking.level;
    document.getElementById("totalLevel").innerHTML = totalLevels;
    addToLog("Leveled down 'Thinking' level to level "+levels.thinking.level+"!!!");
    if(num==1){
      unlock("accelerating");
    }else if(num==2){
      unlock("efficiencyIncreasing");
    }else if(num==3){
      unlock("mathematising");
    }
  }
}

function enchance(num){
  if(levels.researching.level>=1*num){
    levels.researching.level-=1*num;
    levels.researching.xpReq = 10*Math.pow(2,levels.researching.level);
    totalLevels-=1*num;
    gainXpAdv("enchancing",1);
    if(num<maxEnchance){
      fadeIn(document.getElementById("enchance"+(num+1)+"Button"));
      document.getElementById("enchance"+(num+1)+"Button").disabled = false;
    }
    document.getElementById("enchance"+num+"Button").disabled = true;
    document.getElementById("researchingLevelValue").innerHTML = levels.researching.level;
    document.getElementById("totalLevel").innerHTML = totalLevels;
    addToLog("Leveled down 'Researching' level to level "+levels.researching.level+"!!!");
  }
  if(num==1){
    unlock("timeWarping");
  }else if(num==2){

  }else if(num==3){

  }else if(num==4){

  }else if(num==5){

  }
}

function assimilate(){
  if(levels.killing.xp>=1){
    gainXp("assimilating",1);
    gainXp("growing",5);
    levels.killing.xp--;
    document.getElementById("killingXp").style.width = Math.min(100,(100*levels.killing.xp/levels.killing.xpReq))+"%";
  }
}

function learn(){
  if(levels.thinking.xp>=10){
    gainXp("learning",1);
    levels.thinking.xp-=10;
    document.getElementById("thinkingXp").style.width = Math.min(100,(100*levels.thinking.xp/levels.thinking.xpReq))+"%";
  }
}

function generateRandomNumber(){
  gainXp("randomNumberGenerating",1);
  randomNumber = Math.random()*(1+0.2*levels.randomNumberGenerating.level);
  document.getElementById("randomNumber").innerHTML = randomNumber;
}

function gather(){
  gainXp("gathering",(1+levels.gathering.level*0.2)*levels.eating.level*levels.drinking.level*(0.2+levels.eating.xp/levels.eating.xpReq*4.8)*(0.2+levels.drinking.xp/levels.drinking.xpReq*4.8));
  levels.eating.xp *= 0.95;
  levels.drinking.xp *= 0.95;
  document.getElementById("eatingXp").style.width = Math.min(100,(100*levels.eating.xp/levels.eating.xpReq))+"%";
  document.getElementById("drinkingXp").style.width = Math.min(100,(100*levels.drinking.xp/levels.drinking.xpReq))+"%";
}

function build(){
  gainXp("building",levels.gathering.xp);
  levels.gathering.xp = 0;
  document.getElementById("gatheringXp").style.width = Math.min(100,(100*levels.gathering.xp/levels.gathering.xpReq))+"%";
}

function research(){
  if(levels.observing.xp>=1&&levels.perceiving.xp>=1&&levels.insightCollecting>=1){
    levels.observing.xp--;
    levels.perceiving.xp--;
    levels.insightCollecting.xp--;
    gainXpAdv("researching",1+0.1*(levels.observing.level+levels.perceiving.level+levels.insightCollecting.level));
  }
}

function reset(){
  if(totalLevels>=100+levels.resetting.level*5){
    resetting = true;
    var delay = 0;
    var levelNames = Object.keys(levels);
    for(var x = 0;x < levelNames.length;x++){
      var level = levels[levelNames[x]];
      if(level.advanced!=true&&level.unlocked){
        setTimeout(function(level,levelName){
          totalLevels-=level.level;
          level.level = 0;
          level.xp = 0;
          level.xpReq = level.xpReqBase;
          document.getElementById(levelName+"Xp").style.width = Math.min(100,(100*level.xp/level.xpReq))+"%";
          document.getElementById(levelName+"LevelValue").innerHTML = level.level;
        },delay+3000,level,levelNames[x]);
        setTimeout(function(item){fadeOut(item);},delay,document.getElementById(levelNames[x]+"Level"));
        setTimeout(function(item){fadeIn(item);},delay+4000,document.getElementById(levelNames[x]+"Level"));
        delay+=100;
      }
    }
    document.getElementById("resetCost").innerHTML = (100+levels.resetting.level*5)+"";
    levels.resetting.level++;
    document.getElementById("resettingLevelValue").innerHTML = levels.resetting.level;
    resetting = false;
  }
}

function gainXp(levelName, XP){
  if(levels[levelName].unlocked&&levels[levelName].advanced!=true){
    var progressBar = document.getElementById(levelName+"Xp");
    var level = levels[levelName];
    level.xp += XP*(1+totalLevels/200)*(1+levels.evolving.level*0.10)*(1+randomNumber/20)*(1+levels.efficiencyIncreasing.level*0.05)*(1+levels.resetting.level*0.25);
    progressBar.style.width = Math.min(100,(100*level.xp/level.xpReq))+"%";
  }
}

function gainXpAdv(levelName, XP){
  if(levels[levelName].unlocked){
    var progressBar = document.getElementById(levelName+"Xp");
    var level = levels[levelName];
    level.xp += XP*(1+totalLevels/200)*(1+levels.resetting.level*0.25);
    progressBar.style.width = Math.min(100,(100*level.xp/level.xpReq))+"%";
  }
}

function addToLog(string){
  log.unshift(string);
  let htmlLog = document.getElementById("log");
  let item = document.createElement("p");
  item.className = "logItem";
  item.innerHTML = string;
  htmlLog.insertBefore(item, htmlLog.childNodes[0]);
  if(htmlLog.childNodes.length>24){
    htmlLog.removeChild(htmlLog.childNodes[24]);
  }
  fadeIn(item);
}

function fadeIn(item){
  let opacity = item.style.opacity-0.02;
  let fade = setInterval(function(){
    opacity+= 0.02;
    item.style.opacity = opacity;
    if(opacity>=1){
      clearInterval(fade);
    }
  },50);
}

function fadeOut(item){
  let opacity = item.style.opacity-0.02;
  let fade = setInterval(function(){
    opacity-= 0.02;
    item.style.opacity = opacity;
    if(opacity<=0){
      clearInterval(fade);
    }
  },50);
}

var researchNodeTimer = function(){
  var rand = Math.random();
  gainXpAdv("timeWarping",1);
  researchNode.style.display = "none";
  if(levels.perceiving.unlocked&&rand<=(0.1+0.01*levels.perceiving.level)){
    let top = Math.round(Math.random()*document.body.scrollHeight)+"px";
    let left = Math.round(Math.random()*document.body.scrollWidth)+"px";
    researchNode.style.top = top;
    researchNode.style.left = left;
    researchNode.style.display = "block";
    // console.log("hi "+left+" "+top);
  }
  setTimeout(researchNodeTimer,Math.round(10000/(1+levels.observing.level*0.05+levels.timeWarping.level*0.05)));
}
setTimeout(researchNodeTimer,Math.round(10000/(1+levels.observing.level*0.05+levels.timeWarping.level*0.05)));

function collectResearchNode(){
  researchNode.style.display = "none";
  var rand = Math.floor(Math.random()*3);
  if(rand==0){
    gainXpAdv("observing",1+0.2*levels.insightCollecting.level);
  }else if(rand==1){
    gainXpAdv("perceiving",1+0.2*levels.insightCollecting.level);
  }else{
    gainXpAdv("insightCollecting",1+0.2*levels.insightCollecting.level);
  }
}

var secondTimer = function secondTimer(){
  ///not dying
  gainXp("notDying",1);
  document.getElementById("notDyingXp").style.width = Math.min(100,(100*levels.notDying.xp/levels.notDying.xpReq))+"%";

  ///autoGrow
  if(levels.eating.xp >= levels.eating.level&&levels.drinking.xp >= levels.drinking.level&&levels.drinking.level > 0&&levels.eating.level > 0){
    levels.eating.xp -= levels.eating.level;
    document.getElementById("eatingXp").style.width = Math.min(100,(100*levels.eating.xp/levels.eating.xpReq))+"%";
    levels.drinking.xp -= levels.drinking.level;
    document.getElementById("drinkingXp").style.width = Math.min(100,(100*levels.drinking.xp/levels.drinking.xpReq))+"%";
    gainXp("growing",levels.eating.level+levels.drinking.level);
  }

  ///sleeping
  if(levels.sleeping.unlocked&&sleepingTime>5+levels.sleeping.level){
    gainXp("sleeping",1+Math.log10(sleepingTime));
  }
  sleepingTime++;

  ///automating
  if(levels.automating.level>0){
    gainXp("eating",1+(levels.automating.level*+levels.eating.level)*0.2);
    if(levels.automating.level>1){
      gainXp("drinking",1+(levels.automating.level*+levels.drinking.level)*0.1);
    }
  }

  ///Learning
  gainXp("thinking",levels.learning.level/3);

  ///Idling
  if(levels.idling.unlocked){
    var random = Math.floor(Math.random()*Object.keys(levels).length);
    // console.log(random + " = "+ Object.keys(levels)[random]+" + "+(levels.idling.level/5)+"xp");
    gainXp(Object.keys(levels)[random]+"",levels.idling.level/10);
    gainXp("idling",1);
    if(levels.randomNumberGenerating.unlocked){
      gainXp("randomNumberGenerating",0.2);
    }
  }

  ///rng'ing
  document.getElementById("randomNumberGeneratingLevel").style.color = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";

  ///checkUnlocks
  if(!levels.growing.unlocked&&levels.notDying.level>0){
    unlock("growing");
  }
  if(!levels.eating.unlocked&&levels.growing.level>0){
    unlock("eating");
  }
  if(!levels.drinking.unlocked&&levels.growing.level>0){
    unlock("drinking");
  }
  if(!levels.thinking.unlocked&&levels.growing.level>4){
    unlock("thinking");
  }
  if(!levels.upgrading.unlocked&&levels.thinking.level>2){
    unlock("upgrading");
  }
  if(!levels.evolving.unlocked&&levels.thinking.level>4){
    unlock("evolving");
  }
  if(!levels.automating.unlocked&&levels.thinking.level>6){
    unlock("automating");
  }
  if(!levels.assimilating.unlocked&&levels.killing.level>0){
    unlock("assimilating");
  }
  if(!levels.levelingUp.unlocked&&totalLevels>49){
    unlock("levelingUp");
  }
  if(!levels.idling.unlocked&&levels.sleeping.level>4){
    unlock("idling");
  }
  if(!levels.randomNumberGenerating.unlocked&&levels.idling.level>0){
    unlock("randomNumberGenerating");
  }
  if(!levels.building.unlocked&&levels.gathering.level>0){
    unlock("building");
  }
  if(!levels.saving.unlocked&&saveCount>100){
    unlock("saving");
  }
  if(!levels.loading.unlocked&&levels.saving.level>0){
    unlock("loading");
  }
  if(!levels.resetting.unlocked&&totalLevels>99){
    unlock("resetting");
  }
  if(!levels.enchancing.unlocked&&levels.researching.level>0){
    unlock("enchancing");
  }
  setTimeout(secondTimer, Math.round(1000/(1+0.03*levels.accelerating.level+levels.timeWarping.level*0.05)));
};
setTimeout(secondTimer, Math.round(1000/(1+0.03*levels.accelerating.level+levels.timeWarping.level*0.05)));

setInterval(function frame(){
  var levelNames = Object.keys(levels);
  for(var x = 0;x < levelNames.length;x++){
    var level = levels[levelNames[x]];

    ///level ups
    if(level.xp >= level.xpReq){
      level.level++;
      level.xp-=level.xpReq;
      level.xpReq*=2;
      totalLevels++;
      addToLog("Leveled up '"+level.name+"' level to level "+level.level+"!!!");
      document.getElementById(levelNames[x]+"LevelValue").innerHTML = level.level;
      document.getElementById("totalLevel").innerHTML = totalLevels;
      document.getElementById(levelNames[x]+"Xp").style.width = Math.min(100,(100*level.xp/level.xpReq))+"%";
      if(levels.levelingUp.unlocked){
        gainXp("levelingUp",1);
      }
    }
  }
},20);

setInterval(function autoSave(){
  save();
  saveCount++;
},10000);

document.addEventListener('click', function(event){
  sleepingTime = 0;
  if(levels.clicking.unlocked){
    gainXp("clicking",1);
  }
},false);

function save(){
  localStorage.allTheLevelsSave = btoa(JSON.stringify(levels));
  // console.log("saved");
  if(levels.saving.unlocked){
    gainXp("saving",1);
  }
}

function load(){
  if(localStorage.allTheLevelsSave != undefined && localStorage.allTheLevelsSave != null){
    totalLevels=0;
    var temp = JSON.parse(atob(localStorage.allTheLevelsSave));
    // console.log("loaded");
    for(var x = 0;x < Object.keys(temp).length;x++){
      // if(Object.keys(temp)[x]=="insighting"){
      //   temp.insightCollecting = temp.insighting;
      //   delete temp.insighting;
      // }
      let levelName = Object.keys(temp)[x];
      levels[levelName].level = temp[levelName].level;
      levels[levelName].xp = temp[levelName].xp;
      levels[levelName].unlocked = temp[levelName].unlocked;
      levels[levelName].xpReq = levels[levelName].xpReqBase*Math.pow(2,levels[levelName].level);
      // console.log(levelName+" "+levels[levelName].xpReq);
      if(levels[levelName].unlocked){
        unlock(levelName);
        document.getElementById(levelName+"LevelValue").innerHTML = levels[levelName].level;
        document.getElementById(levelName+"Xp").style.width = Math.min(100,(100*levels[levelName].xp/levels[levelName].xpReq))+"%";
        totalLevels+=levels[levelName].level;
      }
    }
    document.getElementById("totalLevel").innerHTML = totalLevels;
    document.getElementById("resetCost").innerHTML = (100+levels.resetting.level*5)+"";
    checkUpgradesOnLoad();
    if(levels.loading.unlocked){
      gainXp("loading",1);
    }
    return true;
  }
  return false;
}

function checkUpgradesOnLoad(){
  if(levels.sleeping.unlocked){
    fadeIn(document.getElementById("upgrade2Button"));
    document.getElementById("upgrade2Button").disabled = false;
    document.getElementById("upgrade1Button").disabled = true;
  }
  if(levels.observing.unlocked){
    fadeIn(document.getElementById("upgrade3Button"));
    document.getElementById("upgrade3Button").disabled = false;
    document.getElementById("upgrade2Button").disabled = true;
  }
  if(levels.researching.unlocked){
    document.getElementById("upgrade3Button").disabled = true;
  }
  if(levels.killing.unlocked){
    fadeIn(document.getElementById("evolve2Button"));
    document.getElementById("evolve2Button").disabled = false;
    document.getElementById("evolve1Button").disabled = true;
  }
  if(levels.learning.unlocked){
    fadeIn(document.getElementById("evolve3Button"));
    document.getElementById("evolve3Button").disabled = false;
    document.getElementById("evolve2Button").disabled = true;
  }
  if(levels.gathering.unlocked){
    document.getElementById("evolve3Button").disabled = true;
  }
  if(levels.accelerating.unlocked){
    fadeIn(document.getElementById("automate2Button"));
    document.getElementById("automate2Button").disabled = false;
    document.getElementById("automate1Button").disabled = true;
  }
  if(levels.efficiencyIncreasing.unlocked){
    fadeIn(document.getElementById("automate3Button"));
    document.getElementById("automate3Button").disabled = false;
    document.getElementById("automate2Button").disabled = true;
  }
  if(levels.mathematising.unlocked){
    document.getElementById("automate3Button").disabled = true;
  }
  if(levels.timeWarping.unlocked){
    fadeIn(document.getElementById("enchance2Button"));
    document.getElementById("enchance2Button").disabled = false;
    document.getElementById("enchance1Button").disabled = true;
  }
}








//blank

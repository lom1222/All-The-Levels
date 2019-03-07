
var log = [];

var totalLevels = 0;

var levels = {
  notDying : {name : "Not Dying", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, color : "rgb(200,150,200)", parent : "levelsDiv"},
  growing : {name : "Growing", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, color : "rgb(0,200,0)", parent : "levelsDiv"},
  eating : {name : "Eating", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, color : "rgb(150,100,0)", parent : "levelsDiv"},
  drinking : {name : "Drinking", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, color : "rgb(50,50,200)", parent : "levelsDiv"},
  thinking : {name : "Thinking", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, color : "rgb(200,200,0)", parent : "levelsDiv"},
  upgrading : {name : "Upgrading", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, color : "rgb(100,100,200)", parent : "levelsDiv"},
  sleeping : {name : "Sleeping", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, color : "rgb(100,100,120)", parent : "levelsDiv"},
  clicking : {name : "Clicking", level : 0, xp : 0, xpReq : 100, xpReqBase : 100, unlocked : false, color : "rgb(150,100,100)", parent : "levelsDiv"},
  evolving : {name : "Evolving", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, color : "rgb(100,150,100)", parent : "levelsDiv"},
  killing : {name : "Killing", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, color : "rgb(250,0,0)", parent : "levelsDiv"},
  assimilating : {name : "Assimilating", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, color : "rgb(250,0,150)", parent : "levelsDiv"},
  automating : {name : "Automating", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, color : "rgb(250,200,50)", parent : "levelsDiv"},
  accelerating : {name : "Accelerating", level : 0, xp : 0, xpReq : 100, xpReqBase : 100, unlocked : false, color : "rgb(250,200,200)", parent : "levelsDiv"},
  learning : {name : "Learning", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, color : "rgb(0,150,250)", parent : "levelsDiv"},
  levelingUp : {name : "Leveling Up", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, color : "rgb(150,150,150)", parent : "levelsDiv"},
  idling : {name : "Idling", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, color : "rgb(100,100,150)", parent : "levelsDiv"},
  randomNumberGenerating : {name : "RNG'ing", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, color : "rgb(250,250,250)", parent : "levelsDiv"},
  gathering : {name : "Gathering", level : 0, xp : 0, xpReq : 400, xpReqBase : 400, unlocked : false, color : "rgb(100,80,20)", parent : "levelsDiv"},
  building : {name : "Building", level : 0, xp : 0, xpReq : 10000, xpReqBase : 10000, unlocked : false, color : "rgb(100,150,20)", parent : "levelsDiv"},
  efficiencyIncreasing : {name : "Efficiency Increasing", level : 0, xp : 0, xpReq : 200, xpReqBase : 200, unlocked : false, color : "rgb(250,100,100)", parent : "levelsDiv"},
  mathematising : {name : "Mathematising", level : 0, xp : 0, xpReq : 500, xpReqBase : 500, unlocked : false, color : "rgb(150,250,100)", parent : "levelsDiv"},
  saving : {name : "Saving", level : 0, xp : 0, xpReq : 200, xpReqBase : 200, unlocked : false, color : "rgb(150,250,150)", parent : "levelsDiv"},
  loading : {name : "Loading", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, color : "rgb(150,250,250)", parent : "levelsDiv"},
  resetting : {name : "Resetting", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, advanced : true, color : "rgb(0,0,0)", parent : "levelsDiv"},
  observing : {name : "Observing", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, advanced : true, color : "rgb(200,200,250)", parent : "levelsDiv"},
  perceiving : {name : "Perceiving", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, advanced : true, color : "rgb(250,250,100)", parent : "levelsDiv"},
  insightCollecting : {name : "Insight Collecting", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, advanced : true, color : "rgb(250,100,250)", parent : "levelsDiv"},
  researching : {name : "Researching", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, advanced : true, color : "rgb(150,50,150)", parent : "levelsDiv"},
  enchancing : {name : "Enchancing", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, advanced : true, color : "rgb(250,250,100)", parent : "levelsDiv"},
  timeWarping : {name : "Time Warping", level : 0, xp : 0, xpReq : 300, xpReqBase : 300, unlocked : false, advanced : true, color : "rgb(150,100,250)", parent : "levelsDiv"},
  familyAcquiring : {name : "Family Acquiring", level : 0, xp : 0, xpReq : 20, xpReqBase : 20, unlocked : false, advanced : true, color : "rgb(200,150,50)", parent : "levelsDiv"},
  understanding : {name : "Understanding", level : 0, xp : 0, xpReq : 20, xpReqBase : 20, unlocked : false, advanced : true, color : "rgb(255,255,255)", parent : "levelsDiv"},
  collecting : {name : "Collecting", level : 0, xp : 0, xpReq : 10000, xpReqBase : 10000, unlocked : false, advanced : true, color : "rgb(200,0,100)", parent : "levelsDiv2"},
  absorbing : {name : "Absorbing", level : 0, xp : 0, xpReq : 1000, xpReqBase : 1000, unlocked : false, advanced : true, color : "rgb(0,0,0)", parent : "levelsDiv2"},
  training : {name : "Training", level : 0, xp : 0, xpReq : 1000, xpReqBase : 1000, unlocked : false, advanced : true, color : "rgb(200,50,50)", parent : "levelsDiv2"},
  displeasing : {name : "Displeasing", level : 0, xp : 0, xpReq : 60, xpReqBase : 60, unlocked : false, advanced : true, color : "rgb(250,100,50)", parent : "levelsDiv2"},
  upsizing : {name : "Upsizing", level : 0, xp : 0, xpReq : 100, xpReqBase : 100, unlocked : false, advanced : true, color : "rgb(100,250,50)", parent : "levelsDiv2"},
  selecting : {name : "Selecting", level : 0, xp : 0, xpReq : 150, xpReqBase : 150, unlocked : false, advanced : true, color : "rgb(100,200,250)", parent : "levelsDiv2"},
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
var acquireFamilyCooldown = 0;
var mathematiseNum1 = 0;
var mathematiseNum2 = 0;
var mathematiseSymbol = 0;
var understandingGrowing = true;
var understandingShadow = 0;
var unlockedLevels = 0;
var selectingUnlocks = [false,false,false,false,false];

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
  for(var x = 0;x < levelNames.length;x++){
    var levelName = levelNames[x];
    var level = levels[levelName];
    var levelsDiv = document.getElementById(level.parent);
    var levelDiv = document.createElement("div");
    levelDiv.className = "level";
    levelDiv.style.color = level.color;
    levelDiv.id =  levelName+"Level";
    var xpBar = document.createElement("div");
    xpBar.className = "xpBar";
    var progressBar = document.createElement("div");
    if(level.parent=="levelsDiv"){
      progressBar.className = "progressBar";
    }else if(level.parent=="levelsDiv2"){
      progressBar.className = "progressBar2";
    }
    progressBar.id = levelName+"Xp";
    xpBar.appendChild(progressBar);
    if(level.parent=="levelsDiv"){
      levelDiv.innerHTML = level.name + " (<span id='"+levelName+"LevelValue'>"+level.level+"</span>): ";
      levelDiv.appendChild(xpBar);
    }else if(level.parent=="levelsDiv2"){
      levelDiv.appendChild(xpBar);
      levelDiv.innerHTML += " :"+"(<span id='"+levelName+"LevelValue'>"+level.level+"</span>) "+level.name ;
    }
    levelsDiv.appendChild(levelDiv);
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
  unlockedLevels++;
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
  }else if(level=="familyAcquiring"){
    fadeIn(document.getElementById("acquireFamilyButton"));
    document.getElementById("acquireFamilyButton").disabled = false;
  }else if(level=="mathematising"){
    fadeIn(document.getElementById("mathematiseButton"));
    document.getElementById("mathematiseButton").disabled = false;
    fadeIn(document.getElementById("mathematiseFormula"));
    document.getElementById("mathematiseFormula").disabled = false;
    fadeIn(document.getElementById("mathematiseAnswer"));
    document.getElementById("mathematiseAnswer").disabled = false;
  }else if(level=="training"){
    fadeIn(document.getElementById("trainButton"));
    document.getElementById("trainButton").disabled = false;
  }else if(level=="absorbing"){
    fadeIn(document.getElementById("absorbButton"));
    document.getElementById("absorbButton").disabled = false;
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
    unlock("upsizing");
    document.getElementById("top").style.fontSize = "24px";
    document.getElementById("totalLevelString").style.textDecoration = "underline";
    document.getElementById("slimeString").style.color = "rgb(150,250,150)";
  }else if(num==2){
    unlock("selecting");
    document.getElementById("autoGrowCheck").disabled = false;
    fadeIn(document.getElementById("autoGrowCheck"));
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

function autoGenerateRandomNumber(){
  gainXp("randomNumberGenerating",1);
  temp = Math.random()*0.01 - 0.005 + randomNumber;
  if(temp>=randomNumber){
    randomNumber = Math.min(temp,1+0.18*levels.randomNumberGenerating.level);
    document.getElementById("randomNumber").innerHTML = randomNumber;
  }
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

function mathematise(){
  var givenAnswer = document.getElementById("mathematiseAnswer").value;
  var correctAnswer = 0;
  var mathematiseSymbolString = "";
  /// 0 = +, 1 = -, 2 = *, 3 = /
  if(mathematiseSymbol==0){
    correctAnswer = mathematiseNum1+mathematiseNum2;
  }else if(mathematiseSymbol==1){
    correctAnswer = mathematiseNum1-mathematiseNum2;
  }else if(mathematiseSymbol==2){
    correctAnswer = mathematiseNum1*mathematiseNum2;
  }else{
    correctAnswer = mathematiseNum1/mathematiseNum2;
  }
  if(givenAnswer == correctAnswer){
    gainXp("mathematising",10);
  }
  mathematiseSymbol = Math.floor(Math.random()*4);
  mathematiseNum2 = Math.floor(Math.random()*100);
  if(mathematiseSymbol==3){
    mathematiseNum1 = mathematiseNum2*Math.floor(Math.random()*100);
    mathematiseSymbolString = "/";
  }else{
    mathematiseNum1 = Math.floor(Math.random()*100);
    if(mathematiseSymbol==0){
      mathematiseSymbolString = "+";
    }else if(mathematiseSymbol==1){
      mathematiseSymbolString = "-";
    }else{
      mathematiseSymbolString = "*";
    }
  }
  document.getElementById("mathematiseFormula").innerHTML = mathematiseNum1+" "+mathematiseSymbolString+" "+mathematiseNum2+" = ";
}

function research(){
  if(levels.observing.xp>=1&&levels.perceiving.xp>=1&&levels.insightCollecting.xp>=1){
    levels.observing.xp--;
    levels.perceiving.xp--;
    levels.insightCollecting.xp--;
    document.getElementById("observingXp").style.width = Math.min(100,(100*levels.observing.xp/levels.observing.xpReq))+"%";
    document.getElementById("perceivingXp").style.width = Math.min(100,(100*levels.perceiving.xp/levels.perceiving.xpReq))+"%";
    document.getElementById("insightCollectingXp").style.width = Math.min(100,(100*levels.insightCollecting.xp/levels.insightCollecting.xpReq))+"%";
    gainXpAdv("researching",1+0.1*(levels.observing.level+levels.perceiving.level+levels.insightCollecting.level));
  }
}

function reset(){
  if(totalLevels>=100+levels.resetting.level*25){
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
    document.getElementById("resetCost").innerHTML = (100+levels.resetting.level*25)+"";
    levels.resetting.level++;
    document.getElementById("resettingLevelValue").innerHTML = levels.resetting.level;
    resetting = false;
  }
}

function acquireFamily(){
  acquireFamilyCooldown = 0;
  document.getElementById("acquireFamilyButton").disabled = true;
  gainXpAdv("familyAcquiring",1);
}

function train(){
  gainXpAdv("training",levels.familyAcquiring.level-levels.displeasing.level);
  if(levels.displeasing.unlocked){
    gainXpAdv("displeasing",levels.displeasing.level+1);
  }
}

function absorb(){
  gainXpAdv("absorbing",levels.collecting.xp/100);
  levels.collecting.xp = 0;
  document.getElementById("collectingXp").style.width = Math.min(100,(100*levels.collecting.xp/levels.collecting.xpReq))+"%";
}

function gainXp(levelName, XP){
  if(levels[levelName].unlocked&&levels[levelName].advanced!=true){
    var progressBar = document.getElementById(levelName+"Xp");
    var level = levels[levelName];
    level.xp += XP*(1+totalLevels/200)*(1+levels.evolving.level*0.10)*(1+randomNumber/20)*(1+levels.efficiencyIncreasing.level*0.05)*(1+levels.resetting.level*0.25);
    progressBar.style.width = Math.min(100,(100*level.xp/level.xpReq))+"%";
    if(levels.collecting.unlocked){
      gainXpAdv("collecting",1+levels.collecting.level*0.05);
    }
  }
}

function gainXpAdv(levelName, XP){
  if(levels[levelName].unlocked){
    var progressBar = document.getElementById(levelName+"Xp");
    var level = levels[levelName];
    level.xp += XP*(1+levels.enchancing.level*0.1)*(1+totalLevels/1000);
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

var researchNodeTimer = function researchNodeTimer(){
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
  if(document.getElementById("autoGrowCheck").checked){
    if(levels.eating.xp >= levels.eating.level&&levels.drinking.xp >= levels.drinking.level&&levels.drinking.level > 0&&levels.eating.level > 0){
      levels.eating.xp -= levels.eating.level;
      document.getElementById("eatingXp").style.width = Math.min(100,(100*levels.eating.xp/levels.eating.xpReq))+"%";
      levels.drinking.xp -= levels.drinking.level;
      document.getElementById("drinkingXp").style.width = Math.min(100,(100*levels.drinking.xp/levels.drinking.xpReq))+"%";
      gainXp("growing",levels.eating.level+levels.drinking.level);
    }
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
  if(document.getElementById("autoGenerateCheck").checked){
    autoGenerateRandomNumber();
  }

  ///family acquiring (thats really hard to spell btw)
  acquireFamilyCooldown++;
  if(acquireFamilyCooldown>=5){
    document.getElementById("acquireFamilyButton").disabled = false;
  }

  ///absorbing
  if(document.getElementById("autoAbsorbCheck").checked){
    absorb();
  }

  ///displeasing
  if(levels.displeasing.unlocked){
    if(levels.displeasing.xp<=0&&levels.displeasing.level!=0){
      levels.displeasing.level--;
      levels.displeasing.xpReq/=2;
      levels.displeasing.xp = levels.displeasing.xpReq;
      totalLevels--;
      document.getElementById("displeasingLevelValue").innerHTML = levels.displeasing.level;
      document.getElementById("totalLevel").innerHTML = totalLevels;
    }
    if(levels.displeasing.xp>0){
      gainXpAdv("displeasing",-1);
    }else if (levels.displeasing.xp<0) {
      levels.displeasing.xp = 0;
    }
    if(levels.displeasing.level>=10){
      document.getElementById("trainButton").disabled = true;
    }
    if(levels.displeasing.level<=5){
      document.getElementById("trainButton").disabled = false;
    }
  }

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
  if(!levels.familyAcquiring.unlocked&&levels.building.level>0){
    unlock("familyAcquiring");
  }
  if(!levels.understanding.unlocked&&levels.mathematising.level>0){
    unlock("understanding");
  }
  if(!levels.timeWarping.unlocked&&levels.accelerating.level>4&&levels.efficiencyIncreasing.level>4){
    unlock("timeWarping");
  }
  if(!levels.collecting.unlocked&&unlockedLevels>31){
    unlock("collecting");
  }
  if(!levels.training.unlocked&&levels.familyAcquiring.level>2){
    unlock("training");
  }
  if(!levels.absorbing.unlocked&&levels.resetting.level>4){
    unlock("absorbing");
  }
  if(!levels.displeasing.unlocked&&levels.training.level>0){
    unlock("displeasing");
  }
  if(!selectingUnlocks[0]&&levels.selecting.level>0){
    selectingUnlocks[0] = true;
    document.getElementById("autoGenerateCheck").disabled = false;
    fadeIn(document.getElementById("autoGenerateCheck"));
  }
  if(!selectingUnlocks[1]&&levels.selecting.level>1){
    selectingUnlocks[1] = true;
    document.getElementById("autoAbsorbCheck").disabled = false;
    fadeIn(document.getElementById("autoAbsorbCheck"));
  }
  setTimeout(secondTimer, Math.round(1000/(1+0.03*levels.accelerating.level+levels.timeWarping.level*0.05)));
};
setTimeout(secondTimer, Math.round(1000/(1+0.03*levels.accelerating.level+levels.timeWarping.level*0.05)));

setInterval(function frame(){
  var levelNames = Object.keys(levels);
  for(var x = 0;x < levelNames.length;x++){
    var level = levels[levelNames[x]];

    ///level ups
    if(level.xp >= level.xpReq&&(levelNames[x]!="familyAcquiring"||(levelNames[x]=="familyAcquiring"&&level.level<levels.building.level))){
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

setInterval(function animation(){
  // text-shadow: 0px 0px 6px white;
  if(understandingGrowing){
    understandingShadow+=0.3;
    if(understandingShadow>=6){
      understandingGrowing = false;
    }
  }else{
    understandingShadow-=0.3;
    if(understandingShadow<=0){
      understandingGrowing = true;
    }
  }
  document.getElementById("understandingLevel").style.textShadow = "0px 0px "+understandingShadow+"px white";
},50);

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
      // if(Object.keys(temp)[x]=="optionSelecting"){
      //   temp.selecting = temp.optionSelecting;
      //   delete temp.optionSelecting;
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
    document.getElementById("resetCost").innerHTML = (100+levels.resetting.level*25)+"";
    mathematise();
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
  if(levels.upsizing.unlocked){
    fadeIn(document.getElementById("enchance2Button"));
    document.getElementById("enchance2Button").disabled = false;
    document.getElementById("enchance1Button").disabled = true;
    document.getElementById("top").style.fontSize = "24px";
    document.getElementById("totalLevelString").style.textDecoration = "underline";
    document.getElementById("slimeString").style.color = "rgb(150,250,150)";
  }
  if(levels.selecting.unlocked){
    fadeIn(document.getElementById("enchance3Button"));
    document.getElementById("enchance3Button").disabled = false;
    document.getElementById("enchance2Button").disabled = true;
    document.getElementById("autoGrowCheck").disabled = false;
    fadeIn(document.getElementById("autoGrowCheck"));
    if(levels.selecting.level>0){
      document.getElementById("autoGenerateCheck").checked = true;
    }
  }
}








//blank

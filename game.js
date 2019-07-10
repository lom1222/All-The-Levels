//
//my commenting is awful, i tried, if you have any question and know how to contact me (discord, maybe reddit), go ahead
//ill give a quick explanation of each variable if its important
//and hopefully i can write up some pseudocode to explain the functions
//

//saves the strings that i send to the log on the right side of the screen
var log = [];

//self explanatory, saves total level ups
var totalLevels = 0;

//the meat of the game.
//each line in the levels variable is a 'level' and is used to create the text and tooltips, and save the numbers for them
//name : the displayed name for the level, the actual name that i use in my code is the one before the colon
//level : saves the level of the level
//xp : saves the xp aquired to the next level up
//xpReq : saves the total xp requirement for the next level up
//xpReqBase : holds the xp requirement for the first level up, the reason this is saved in a different variable as xpReq is so i can update the base values and have it effect your current save
//unlocked : boolean that says if the level is unlocked or not
//xpSecCounter : holds how much xp has been aquired since the last xp/sec reset
//skillType : holds which skill the level is aligned to (this is used to give bonuses and other things)
//type : holds what type of level the level is, this is used to determine which levels should be effected in certain situations (for example only basic levels are reset on soft reset)
//color : holds the color value for the level text
//parent : holds which levelDiv this level is upended into on creation
//stars : holds maximum stars this level has achieved, this is separate from level because it isnt reset
//hint : what is displayed in log if you press the hint button and the level is the next one in the list
var levels = {
  notDying : {name : "Not Dying", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, xpSecCounter : 0, skillType : "constitutioning", type : "basic", color : "rgb(200,150,200)", parent : "levelsDiv", stars : 0, hint : "i can write anything here and nobody will ever know"},
  growing : {name : "Growing", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, xpSecCounter : 0, skillType : "constitutioning", type : "basic", color : "rgb(0,200,0)", parent : "levelsDiv", stars : 0, hint : "you are seriously impatient"},
  eating : {name : "Eating", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, xpSecCounter : 0, skillType : "constitutioning", type : "basic", color : "rgb(150,100,0)", parent : "levelsDiv", stars : 0, hint : "try clicking the only button on your screen apart from this one"},
  drinking : {name : "Drinking", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, xpSecCounter : 0, skillType : "constitutioning", type : "basic", color : "rgb(50,50,200)", parent : "levelsDiv", stars : 0, hint : "you are terrible at games"},
  thinking : {name : "Thinking", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "basic", color : "rgb(200,200,0)", parent : "levelsDiv", stars : 0, hint : "you need to grow up before i overload your brain"},
  upgrading : {name : "Upgrading", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "basic", color : "rgb(100,100,200)", parent : "levelsDiv", stars : 0, hint : "hold on, let me think if i should tell you.... nah"},
  sleeping : {name : "Sleeping", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, xpSecCounter : 0, skillType : "constitutioning", type : "basic", color : "rgb(100,100,120)", parent : "levelsDiv", stars : 0, hint : "only some kind of an upgraded piece of slime can figure it out, so not you"},
  clicking : {name : "Clicking", level : 0, xp : 0, xpReq : 100, xpReqBase : 100, unlocked : false, xpSecCounter : 0, skillType : "dexteritying", type : "basic", color : "rgb(150,100,100)", parent : "levelsDiv", stars : 0, hint : "this is just a reminder that you should stop looking at the source files"},
  evolving : {name : "Evolving", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, xpSecCounter : 0, skillType : "constitutioning", type : "basic", color : "rgb(100,150,100)", parent : "levelsDiv", stars : 0, hint : "do you ever think before you act?"},
  killing : {name : "Killing", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, xpSecCounter : 0, skillType : "strengthing", type : "basic", color : "rgb(250,0,0)", parent : "levelsDiv", stars : 0, hint : "you are too far below me in darwinian terms"},
  assimilating : {name : "Assimilating", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, xpSecCounter : 0, skillType : "constitutioning", type : "basic", color : "rgb(250,0,150)", parent : "levelsDiv", stars : 0, hint : "just go postal, its perfectly legal around here"},
  automating : {name : "Automating", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "basic", color : "rgb(250,200,50)", parent : "levelsDiv", stars : 0, hint : "this one is hard... try thinking about it"},
  accelerating : {name : "Accelerating", level : 0, xp : 0, xpReq : 100, xpReqBase : 100, unlocked : false, xpSecCounter : 0, skillType : "dexteritying", type : "basic", color : "rgb(250,200,200)", parent : "levelsDiv", stars : 0, hint : "let machines do the work (i hope skynet happens)"},
  learning : {name : "Learning", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "basic", color : "rgb(0,150,250)", parent : "levelsDiv", stars : 0, hint : "lets just say you need to get on my alpha predator level"},
  levelUping : {name : "Level Uping", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "basic", color : "rgb(150,150,150)", parent : "levelsDiv", stars : 0, hint : "you require additional level ups"},
  idling : {name : "Idling", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "basic", color : "rgb(100,100,150)", parent : "levelsDiv", stars : 0, hint : "go to sleep, preferably forever"},
  randomNumberGenerating : {name : "RNG'ing", level : 0, xp : 0, xpReq : 30, xpReqBase : 30, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "basic", color : "rgb(250,250,250)", parent : "levelsDiv", stars : 0, hint : "stop touching the damn buttons"},
  gathering : {name : "Gathering", level : 0, xp : 0, xpReq : 400, xpReqBase : 400, unlocked : false, xpSecCounter : 0, skillType : "dexteritying", type : "basic", color : "rgb(100,80,20)", parent : "levelsDiv", stars : 0, hint : "something about life finding a way, leave your apedom behind"},
  building : {name : "Building", level : 0, xp : 0, xpReq : 1000, xpReqBase : 1000, unlocked : false, xpSecCounter : 0, skillType : "strengthing", type : "basic", color : "rgb(100,150,20)", parent : "levelsDiv", stars : 0, hint : "go do the only job you are qualified to do... gathering in the fields"},
  efficiencyIncreasing : {name : "Efficiency Increasing", level : 0, xp : 0, xpReq : 200, xpReqBase : 200, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "basic", color : "rgb(250,100,100)", parent : "levelsDiv", stars : 0, hint : "fire your employes and hire robots"},
  mathematising : {name : "Mathematising", level : 0, xp : 0, xpReq : 500, xpReqBase : 500, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "basic", color : "rgb(150,250,100)", parent : "levelsDiv", stars : 0, hint : "actually, just kill all the humans and bow down to your automatic-overlords"},
  saving : {name : "Saving", level : 0, xp : 0, xpReq : 200, xpReqBase : 200, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "basic", color : "rgb(150,250,150)", parent : "levelsDiv", stars : 0, hint : "are you sure this game auto saves? (you probably shouldnt refresh)"},
  loading : {name : "Loading", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "basic", color : "rgb(150,250,250)", parent : "levelsDiv", stars : 0, hint : "backup your files"},
  resetting : {name : "Resetting", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "resetting", color : "rgb(0,0,0)", parent : "levelsDiv", stars : 0, hint : "you cant handle the next one unless you have at least broken the runescape level cap"},
  autoclicking : {name : "Autoclicking", level : 0, xp : 0, xpReq : 2500, xpReqBase : 2500, unlocked : false, xpSecCounter : 0, skillType : "dexteritying", type : "advanced", color : "rgb(150,0,250)", parent : "levelsDiv", stars : 0, hint : "you require additional arthritis"},
  observing : {name : "Observing", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "advanced", color : "rgb(200,200,250)", parent : "levelsDiv", stars : 0, hint : "you need to upgrade your intellectual skills to understand the metagame narrative of the absolutely unrivaled genious piece of art that this game embodies, in fact, you should be happy that it has graced you with the opportunity to have its save files be on your chromes localstorage and provide a way for skynet to finally take over"},
  perceiving : {name : "Perceiving", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "advanced", color : "rgb(250,250,100)", parent : "levelsDiv", stars : 0, hint : "real talk tho, thanks for playing and caring enough to look throught the game files i guess?"},
  insightCollecting : {name : "Insight Collecting", level : 0, xp : 0, xpReq : 5, xpReqBase : 5, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "advanced", color : "rgb(250,100,250)", parent : "levelsDiv", stars : 0, hint : "but back to reality, you are a worthless piece of slime and i am the perfect android, only a super saiyan child could possibly defeat me"},
  researching : {name : "Researching", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "advanced", color : "rgb(150,50,150)", parent : "levelsDiv", stars : 0, hint : "pretty sure you are suspecting this already, but you need to install a new brain OS upgrade. uh, i mean update"},
  enchancing : {name : "Enchancing", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "advanced", color : "rgb(250,250,100)", parent : "levelsDiv", stars : 0, hint : "you should coalesce all the informationg on this game and study it"},
  timeWarping : {name : "Time Warping", level : 0, xp : 0, xpReq : 300, xpReqBase : 300, unlocked : false, xpSecCounter : 0, skillType : "dexteritying", type : "advanced", color : "rgb(150,100,250)", parent : "levelsDiv", stars : 0, hint : "you need to increase the efficiency and speed at which skynet destroys the last remnants of the human population"},
  familyAcquiring : {name : "Family Acquiring", level : 0, xp : 0, xpReq : 20, xpReqBase : 20, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "advanced", color : "rgb(200,150,50)", parent : "levelsDiv", stars : 0, hint : "do what a real man should do, build a house"},
  understanding : {name : "Understanding", level : 0, xp : 0, xpReq : 100, xpReqBase : 100, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "ultimate", color : "rgb(255,255,255)", parent : "levelsDiv2", stars : 0, hint : "just put 1 + 1 together"},
  collecting : {name : "Collecting", level : 0, xp : 0, xpReq : 10000, xpReqBase : 10000, unlocked : false, xpSecCounter : 0, skillType : "strengthing", type : "advanced", color : "rgb(200,0,100)", parent : "levelsDiv2", stars : 0, hint : "type 'upupdowndownleftrightleftrightba' and submit your answer"},
  absorbing : {name : "Absorbing", level : 0, xp : 0, xpReq : 1000, xpReqBase : 1000, unlocked : false, xpSecCounter : 0, skillType : "constitutioning", type : "advanced", color : "rgb(0,0,0)", parent : "levelsDiv2", stars : 0, hint : "i gave you a prestige mechanic for a reason, use it smart guy!"},
  training : {name : "Training", level : 0, xp : 0, xpReq : 1000, xpReqBase : 1000, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "advanced", color : "rgb(200,50,50)", parent : "levelsDiv2", stars : 0, hint : "get a life, and a family"},
  displeasing : {name : "Displeasing", level : 0, xp : 0, xpReq : 60, xpReqBase : 60, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "advanced", color : "rgb(250,100,50)", parent : "levelsDiv2", stars : 0, hint : "well, obviously, train your children to be slaves"},
  upsizing : {name : "Upsizing", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, xpSecCounter : 0, skillType : "strengthing", type : "advanced", color : "rgb(100,250,50)", parent : "levelsDiv2", stars : 0, hint : "one of the buttons is misspelled, click it"},
  selecting : {name : "Selecting", level : 0, xp : 0, xpReq : 150, xpReqBase : 150, unlocked : false, xpSecCounter : 0, skillType : "dexteritying", type : "advanced", color : "rgb(100,200,250)", parent : "levelsDiv2", stars : 0, hint : "enhance your gaming experience with this one simpe trick : git good"},
  reclaiming : {name : "Reclaiming", level : 0, xp : 0, xpReq : 100, xpReqBase : 100, unlocked : false, xpSecCounter : 0, skillType : "constitutioning", type : "advanced", color : "rgb(255,255,255)", parent : "levelsDiv2", stars : 0, hint : "since you suck, try sucking everything inside you"},
  hovering : {name : "Hovering", level : 0, xp : 0, xpReq : 500, xpReqBase : 500, unlocked : false, xpSecCounter : 0, skillType : "dexteritying", type : "advanced", color : "rgb(160,160,255)", parent : "levelsDiv2", stars : 0, hint : "beetween this game and death, what would you select?"},
  mining : {name : "Mining", level : 0, xp : 0, xpReq : 250, xpReqBase : 250, unlocked : false, xpSecCounter : 0, skillType : "strengthing", type : "advanced", color : "rgb(150,75,50)", parent : "levelsDiv2", stars : 0, hint : "its time to play minecraft, go collect some resources"},
  forging : {name : "Forging", level : 0, xp : 0, xpReq : 32, xpReqBase : 32, unlocked : false, xpSecCounter : 0, skillType : "strengthing", type : "advanced", color : "rgb(255,100,0)", parent : "levelsDiv2", stars : 0, hint : "i already told you, its time to play minecraft, do the thing thats the first part of the name"},
  crafting : {name : "Crafting", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "advanced", color : "rgb(150,200,50)", parent : "levelsDiv2", stars : 0, hint : "now take all that iron ore you got after playing minecraft and make it into something useful"},
  equipping : {name : "Equipping", level : 0, xp : 0, xpReq : 300, xpReqBase : 300, unlocked : false, xpSecCounter : 0, skillType : "dexteritying", type : "advanced", color : "rgb(225,225,150)", parent : "levelsDiv2", stars : 0, hint : "wait, you wanted to... equip your items? thats not how this game works, keep crafting slave"},
  rolling : {name : "Rolling", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "advanced", color : "rgb(125,100,255)", parent : "levelsDiv2", stars : 0, hint : "do what the karate kid did, put it on, take it off, drop it, pick it up, put it on the stand, take it off the stand, put it on, etc... yeah, i know im referencing the bad one"},
  itemUpgrading : {name : "Item upgrading", level : 0, xp : 0, xpReq : 20, xpReqBase : 20, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "advanced", color : "rgb(100,255,200)", parent : "levelsDiv2", stars : 0, hint : "if you still havent noticed, you generally just have to click the new buttons that appear on screen to unlock more buttons"},
  skilling : {name : "Skilling", level : 0, xp : 0, xpReq : 100, xpReqBase : 100, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "advanced", color : "rgb(255,255,255)", parent : "levelsDiv2", stars : 0, hint : "you need.... slightly better items before i let you continue, its to dangereous for a weak adventurer like you, you dont even have an arrow... anywhere in your body"},
  strengthing : {name : "Str-ing", level : 0, xp : 0, xpReq : 500, xpReqBase : 500, unlocked : false, xpSecCounter : 0, skillType : "strengthing", type : "advanced", color : "rgb(255,100,100)", parent : "skillingDiv", stars : 0, hint : "you know there is no real goal to this game other than to get big numbers? therefore you can never win"},
  dexteritying : {name : "Dex-ing", level : 0, xp : 0, xpReq : 500, xpReqBase : 500, unlocked : false, xpSecCounter : 0, skillType : "dexteritying", type : "advanced", color : "rgb(100,255,100)", parent : "skillingDiv", stars : 0, hint : "ok, i might as well explain some mechanics if you havent cheated and checked the js"},
  constitutioning : {name : "Con-ing", level : 0, xp : 0, xpReq : 500, xpReqBase : 500, unlocked : false, xpSecCounter : 0, skillType : "constitutioning", type : "advanced", color : "rgb(255,255,100)", parent : "skillingDiv", stars : 0, hint : "leveling up takes x2 as much xp every level up, but there are many ways to boost your xp"},
  intelligenceing : {name : "Int-ing", level : 0, xp : 0, xpReq : 500, xpReqBase : 500, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "advanced", color : "rgb(100,100,255)", parent : "skillingDiv", stars : 0, hint : "items are probably the most powerful way to progress, try getting a ring or an amulet, also level up your items"},
  wisdoming : {name : "Wis-ing", level : 0, xp : 0, xpReq : 500, xpReqBase : 500, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "advanced", color : "rgb(255,255,100)", parent : "skillingDiv", stars : 0, hint : "each item type does a certain unique thing, there are also unique affixes you can only get by leveling up crafting"},
  charismaing : {name : "Cha-ing", level : 0, xp : 0, xpReq : 500, xpReqBase : 500, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "advanced", color : "rgb(255,100,255)", parent : "skillingDiv", stars : 0, hint : "if you figured out all the codes to unlock tooltips legit, you are incredible, thanks for not cheating"},
  exporting : {name : "Exporting", level : 0, xp : 0, xpReq : 200, xpReqBase : 200, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "advanced", color : "rgb(150,250,150)", parent : "levelsDiv2", stars : 0, hint : "save me the trouble, just figure it out yourself"},
  importing : {name : "Importing", level : 0, xp : 0, xpReq : 50, xpReqBase : 50, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "advanced", color : "rgb(150,250,250)", parent : "levelsDiv2", stars : 0, hint : "i honestly am really impressed if you got this message in the log, just go export a few times"},
  achieving : {name : "Achieving", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "ultimate", color : "rgb(255,255,255)", parent : "levelsDiv2", stars : 0, hint : "clearly you need to enchance your deduction capabilities, because this is just sad"},
  featureCreaping : {name : "Feature creaping", level : 0, xp : 0, xpReq : 10, xpReqBase : 10, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "advanced", color : "rgb(200,220,120)", parent : "levelsDiv2", stars : 0, hint : "thou art not of the sufficien skill to even utter a word in my presence"},
  moreOptioning : {name : "More optioning", level : 0, xp : 0, xpReq : 300, xpReqBase : 300, unlocked : false, xpSecCounter : 0, skillType : "dexteritying", type : "ultimate", color : "rgb(0,0,0)", parent : "levelsDiv2", stars : 0, hint : "zoom and _____!!!!"},
  plusIdling : {name : "+Idling", level : 0, xp : 0, xpReq : 1000, xpReqBase : 1000, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "advanced", color : "rgb(150,150,25)", parent : "levelsDiv2", stars : 0, hint : "this is the final regular level you need to unlock, not bad. i think you know how its done, there is a one time use button you havent used yet.... you genius"},
  cheatCoding : {name : "Cheat Coding", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, xpSecCounter : 0, skillType : "dexteritying", type : "achievement", color : "rgb(0,200,0)", parent : "achievementsDiv", stars : 0, hint : "what is the most famous cheat code of all time?"},
  hardResetting : {name : "Hard Resetting", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, xpSecCounter : 0, skillType : "charismaing", type : "achievement", color : "rgb(0,0,0)", parent : "achievementsDiv", stars : 0, hint : "just... delete all your progress :P <3"},
  longItemNaming : {name : "Long Item Naming", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, xpSecCounter : 0, skillType : "intelligenceing", type : "achievement", color : "rgb(200,100,0)", parent : "achievementsDiv", stars : 0, hint : "this one is for those who have.... a long one"},
  achievingUnderstanding : {name : "Achieving Understanding", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, xpSecCounter : 0, skillType : "wisdoming", type : "achievement", color : "rgb(255,255,255)", parent : "achievementsDiv", stars : 0, hint : "do you understand?"},
  absolutePerfecting : {name : "Absolute Perfecting", level : 0, xp : 0, xpReq : 1, xpReqBase : 1, unlocked : false, xpSecCounter : 0, skillType : "strengthing", type : "achievement", color : "rgb(255,255,255)", parent : "achievementsDiv", stars : 0, hint : "i doubt if anyone will ever get this one legit, i know i havent, just make.... the perfect item"},
};

//time since last click
var sleepingTime = 0;
//your random number
var randomNumber = 0;
//amount of 'upgrade' upgrades, used to make sure i dont crash the game trying to access a button that doesnt exist :P
var maxUpgrade = 3;
//amount of 'evolve' upgrades, same reasoning
var maxEvolve = 3;
//amount of 'evolve' upgrades, same reasoning
var maxAutomate = 3;
//amount of 'evolve' upgrades, same reasoning
var maxEnchance = 5;
//amount of times the game has been saved in the current instance, used to unlock the saving skill (the game autosaves so its not a paradox)
var saveCount = 0;
//is the game resetting or not? used to check if i should put things in log or not, so that resetting doesnt spam you
var resetting = false;
//holds the research node dom object
var researchNode;
//cooldown until you can use the aquire family button
var acquireFamilyCooldown = 0;
//the first random mathematise number
var mathematiseNum1 = 0;
//the second random mathematise number
var mathematiseNum2 = 0;
//randomized symbol to be used in mathematising
var mathematiseSymbol = 0;
//check for if the understanding shadow should be growing or not
var understandingGrowing = true;
//how big the understanding shadow is
var understandingShadow = 0;
//how many levels are unlocked
var unlockedLevels = 0;
//holds values for which of the 'selecting' options/upgrades are unlocked, this way you cant unlock things twice by accident
var selectingUnlocks = [false,false,false,false,false];
//how many stars you have in total, used to level up upsizing
var totalStars = 0;
//holds values for which of the 'upsizing' options/upgrades are unlocked
var upsizingUnlocks = [false,false];
//are you hovering over hover or not?
var hover = false;
//holds values for which of the 'crafting' options/upgrades are unlocked
var craftingUnlocks = [false,false];
//holds values for which of the 'item upgrade' options/upgrades are unlocked
var itemUpgradeUnlocks = [false,false];
//holds values for which of the 'item upstar' options/upgrades are unlocked
var itemUpstarUnlocks = [false,false];
//is the game loading? used to check if i should display/run a few things or not
var loading = false;
//how many messages should be saved in the log, extras are deleted
var logLength = 24;
//how many achievements you have unlocked, used to level up achieving
var achievementsComplete = 0;
//is the hard reset button unlocked? important, not sure why tbh, i forgot and too lazy to check
var hardResetButtonUnlocked = false;
//are you hard resetting? some things shouldnt run if you are hard resetting
var hardResetting = false;
//holds values for which of the 'equipping' options/upgrades are unlocked, yes there is only one, deal with it
var equippingUnlocks = false;
//how many O's the long item naming string has
var longItemNamingOs = 1;
//holds values for which of the 'auto clicking' options/upgrades are unlocked
var autoclickingUnlock = false;
//holds values for which of the 'item auto clicking' options/upgrades are unlocked
var itemAutoClickingUnlocks = [false,false];
//holds values for which of the 'more optioning' options/upgrades are unlocked
var moreOptioningUnlocks = [false,false,false,false,false,false,false];
//how long the current xp/sec calculation has been going for, the total xp is divided by this to get aproximate xp/sec
var xpSecTimer = 1;
//saves variables for the random rainbow colorizer, r is red, g is green, b is blue, phase is which one is changing, and speed is how much is it changing in one tick (1/20th of a second)
var rainbow = {r : 0, g : 0, b : 0, phase : 0, speed : 13};
//the first crafted item, saves everything about it, at start is it initialized to be empty using the equalsEmptyItem function
var craftedItem = {};
equalsEmptyItem(craftedItem);
//the first equipped item, saves everything about it, at start is it initialized to be empty using the equalsEmptyItem function
var equippedItem = {};
equalsEmptyItem(equippedItem);
//the second equipped item, saves everything about it, at start is it initialized to be empty using the equalsEmptyItem function
var equippedItem2 = {};
equalsEmptyItem(equippedItem2);
//holds available item types and everything about them.
//lvlReq : the crafting level requirement to get this item type
//xpBonus : the xp bonus of the item type, 0.05 = 5%
//type : what body part is it on?
//name : the displayed name
//
//hand : +str modifier, also adds training effect to everything
//feet : +dex modifier, also tick speed
//body : +con modifier, also use less xp for stuff
//head : +int modifier, also getter rng
//amulet : +wis modifier, also xp
//ring : +char modifier, also adds another autoclick
var itemTypes = {
  gloves : {lvlReq : 0, xpBonus : 0.05, type : "hand", name : "gloves"},
  boots : {lvlReq : 0, xpBonus : 0.05, type : "feet", name : "boots"},
  tunic : {lvlReq : 0, xpBonus : 0.05, type : "body", name : "tunic"},
  cap : {lvlReq : 0, xpBonus : 0.05, type : "head", name : "cap"},
  mits : {lvlReq : 1, xpBonus : 0.07, type : "hand", name : "mits"},
  greaves : {lvlReq : 1, xpBonus : 0.07, type : "feet", name : "greaves"},
  vest : {lvlReq : 1, xpBonus : 0.07, type : "body", name : "vest"},
  hat : {lvlReq : 1, xpBonus : 0.07, type : "head", name : "hat"},
  gauntlets : {lvlReq : 2, xpBonus : 0.10, type : "hand", name : "gauntlets"},
  armBoots : {lvlReq : 2, xpBonus : 0.10, type : "feet", name : "armoured boots"},
  mail : {lvlReq : 2, xpBonus : 0.10, type : "body", name : "mail"},
  helm : {lvlReq : 2, xpBonus : 0.10, type : "head", name : "helm"},
  enchGloves : {lvlReq : 3, xpBonus : 0.15, type : "hand", name : "enchanted gloves"},
  scaleBoots : {lvlReq : 3, xpBonus : 0.15, type : "feet", name : "scale boots"},
  scaleMail : {lvlReq : 3, xpBonus : 0.15, type : "body", name : "scale mail"},
  fullHelm : {lvlReq : 3, xpBonus : 0.15, type : "head", name : "full helm"},
  amulet : {lvlReq : 3, xpBonus : 0.25, type : "amulet", name : "amulet"},
  enchGauntlets : {lvlReq : 5, xpBonus : 0.20, type : "hand", name : "enchanted gauntlets"},
  enchBoots : {lvlReq : 5, xpBonus : 0.20, type : "feet", name : "enchanted boots"},
  fullMail : {lvlReq : 5, xpBonus : 0.20, type : "body", name : "full mail"},
  enchHelm : {lvlReq : 5, xpBonus : 0.20, type : "head", name : "enchanted helm"},
  enchAmulet : {lvlReq : 5, xpBonus : 0.35, type : "amulet", name : "enchanted amulet"},
  enchRing : {lvlReq : 5, xpBonus : 0.00, type : "ring", name : "enchanted ring"},
  drakGauntlets : {lvlReq : 7, xpBonus : 0.25, type : "hand", name : "dragonscale gauntlets"},
  drakBoots : {lvlReq : 7, xpBonus : 0.25, type : "feet", name : "dragonscale boots"},
  enchChest : {lvlReq : 7, xpBonus : 0.25, type : "body", name : "enchanted chestpiece"},
  enchFullHelm : {lvlReq : 7, xpBonus : 0.25, type : "head", name : "enchanted full helm"},
  drakAmulet : {lvlReq : 7, xpBonus : 0.45, type : "amulet", name : "dragon tear"},
  drakRing : {lvlReq : 7, xpBonus : 0.00, type : "ring", name : "dragonforged ring"},
  tarasqueGauntlets : {lvlReq : 9, xpBonus : 0.30, type : "hand", name : "tarasquescale gauntlets"},
  tarasqueBoots : {lvlReq : 9, xpBonus : 0.30, type : "feet", name : "tarasquescale boots"},
  drakMail : {lvlReq : 9, xpBonus : 0.30, type : "body", name : "dragonscale mail"},
  drakHelm : {lvlReq : 9, xpBonus : 0.30, type : "head", name : "dragonscale full helm"},
  tarasqueAmulet : {lvlReq : 9, xpBonus : 0.60, type : "amulet", name : "tarasque tear"},
  tarasqueRing : {lvlReq : 9, xpBonus : 0.00, type : "ring", name : "tarasqueforged ring"},
};
//holds the item ranks, these are how good the item/the suffix inspect
//lvlReq : what crafting level the item has to be to get these
//xpBonus : the xp bonus you get from having this on your item 0.01 = 1%
//name : the displayed name of the rank
var itemRanks = {
  broken : {lvlReq : 0, xpBonus : 0.00, name : "broken"},
  awful : {lvlReq : 0, xpBonus : 0.01, name : "awful"},
  terrible : {lvlReq : 0, xpBonus : 0.02, name : "terrible"},
  shabby : {lvlReq : 0, xpBonus : 0.03, name : "shabby"},
  disgusting : {lvlReq : 0, xpBonus : 0.04, name : "disgusting"},
  bad : {lvlReq : 1, xpBonus : 0.05, name : "bad"},
  substandard : {lvlReq : 1, xpBonus : 0.06, name : "substandard"},
  inferior : {lvlReq : 1, xpBonus : 0.07, name : "inferior"},
  inadequate : {lvlReq : 1, xpBonus : 0.08, name : "inadequate"},
  faulty : {lvlReq : 1, xpBonus : 0.09, name : "faulty"},
  secondRate : {lvlReq : 2, xpBonus : 0.10, name : "second-rate"},
  meh : {lvlReq : 2, xpBonus : 0.11, name : "meh"},
  amateurish : {lvlReq : 2, xpBonus : 0.12, name : "amateurish"},
  poor : {lvlReq : 2, xpBonus : 0.13, name : "poor"},
  okay : {lvlReq : 2, xpBonus : 0.14, name : "okay"},
  tolerable : {lvlReq : 3, xpBonus : 0.15, name : "tolerable"},
  acceptable : {lvlReq : 3, xpBonus : 0.16, name : "acceptable"},
  satisfactory : {lvlReq : 3, xpBonus : 0.17, name : "satisfactory"},
  passable : {lvlReq : 3, xpBonus : 0.18, name : "passable"},
  blank : {lvlReq : 3, xpBonus : 0.19, name : ""},
  suitable : {lvlReq : 4, xpBonus : 0.20, name : "suitable"},
  appropriate : {lvlReq : 4, xpBonus : 0.21, name : "appropriate"},
  worthwhile : {lvlReq : 4, xpBonus : 0.22, name : "worthwhile"},
  ethical : {lvlReq : 4, xpBonus : 0.23, name : "ethical"},
  good : {lvlReq : 4, xpBonus : 0.24, name : "good"},
  quality : {lvlReq : 5, xpBonus : 0.25, name : "quality"},
  able : {lvlReq : 5, xpBonus : 0.26, name : "able"},
  capable : {lvlReq : 5, xpBonus : 0.27, name : "capable"},
  proficient : {lvlReq : 5, xpBonus : 0.28, name : "proficient"},
  refined : {lvlReq : 5, xpBonus : 0.29, name : "refined"},
  adept : {lvlReq : 6, xpBonus : 0.30, name : "adept"},
  elite : {lvlReq : 6, xpBonus : 0.31, name : "elite"},
  firstRate : {lvlReq : 6, xpBonus : 0.32, name : "first-rate"},
  excellent : {lvlReq : 6, xpBonus : 0.33, name : "excellent"},
  expert : {lvlReq : 6, xpBonus : 0.34, name : "expert"},
  superb : {lvlReq : 7, xpBonus : 0.35, name : "superb"},
  marnificent : {lvlReq : 7, xpBonus : 0.36, name : "marnificent"},
  exceptional : {lvlReq : 7, xpBonus : 0.37, name : "exceptional"},
  masterful : {lvlReq : 7, xpBonus : 0.38, name : "masterful"},
  incredible : {lvlReq : 7, xpBonus : 0.39, name : "incredible"},
  breathtaking : {lvlReq : 8, xpBonus : 0.40, name : "breathtaking"},
  resplendent : {lvlReq : 8, xpBonus : 0.41, name : "resplendent"},
  dazzling : {lvlReq : 8, xpBonus : 0.42, name : "dazzling"},
  glorious : {lvlReq : 8, xpBonus : 0.43, name : "glorious"},
  unimaginable : {lvlReq : 8, xpBonus : 0.44, name : "unimaginable"},
  exalted : {lvlReq : 9, xpBonus : 0.45, name : "exalted"},
  magnolious : {lvlReq : 9, xpBonus : 0.46, name : "magnolious"},
  splendacious : {lvlReq : 9, xpBonus : 0.47, name : "splendacious"},
  splendiferous : {lvlReq : 9, xpBonus : 0.48, name : "splendiferous"},
  perfect : {lvlReq : 9, xpBonus : 0.49, name : "perfect"},
  transcendent : {lvlReq : 10, xpBonus : 0.50, name : "transcendent"},
};
//10* 30/30 transcendent knowledge 10* 30/30 transcendent tarasque tear of 10* 30/30 transcendent knowledge (clvl 10)
//unique item affixes that arent just the level (the affixes can also be the name of a level)
//lvlReq : level requirement to get the affix
//name : the displayed name of the affix
var itemAffixTypes = {
  automatic : {lvlReq : 3, name : "automatic"}, //gives auto xp for advanced based on base xp requirement
  xpBoost : {lvlReq : 4, name : "xp boosting"}, //gives overall xp boost
  superSpeed : {lvlReq : 5, name : "super speedy"}, //increases tick speed
  random : {lvlReq : 6, name : "random"}, //makes rng better
  reset : {lvlReq : 7, name : "better reset"}, //makes reset bonus better
  knowledge : {lvlReq : 8, name : "knowledge"}, //gives understanding xp
};
//init function, it is ran as soon as the script loads.
//creates dom objects for levels, the research node, skilling div, and tries to load if possible, otherwise unlocks notDying
init();
function init(){
  createLevels();
  createResearchNode();
  createSkillingDiv();
  if(!loadFromLocalstorage()){
    unlock("notDying");
  }
}
//creates the level Dom objects:
//xp bar, name, background of the xp bar, adds ID's and classes to all of them and colours the text, then uppends them to their parent div
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
    if(document.getElementById(level.parent).className=="levelsDivLeft"){
      progressBar.className = "progressBar";
    }else if(document.getElementById(level.parent).className=="levelsDivRight"||level.parent=="skillingDiv"){
      progressBar.className = "progressBar2";
    }
    progressBar.id = levelName+"Xp";
    xpBar.appendChild(progressBar);
    xpBar.appendChild(createTooltip(levelName));
    var levelNameSpan = "<span id='"+levelName+"Name'>"+level.name+"</span>";
    var levelLevelValueSpan = "<span id='"+levelName+"LevelValue'>"+level.level+"</span>"
    if(document.getElementById(level.parent).className=="levelsDivLeft"){
      levelDiv.innerHTML += levelNameSpan + " ("+levelLevelValueSpan+"): ";
      levelDiv.appendChild(xpBar);
    }else if(document.getElementById(level.parent).className=="levelsDivRight"||level.parent=="skillingDiv"){
      levelDiv.appendChild(xpBar);
      levelDiv.innerHTML += " :("+levelLevelValueSpan+") "+levelNameSpan;
    }
    levelsDiv.appendChild(levelDiv);
  }
}
//creates the tooltips for each level
//each block is a single thing, most of it is just classnames and setting the innerhtml, which is the text, then uppending to parent
function createTooltip(levelName){
  var level = levels[levelName];
  var levelTooltip = document.createElement("div");
  levelTooltip.className = "tooltip";
  levelTooltip.id = levelName+"Tooltip";

  var tooltipHeader = document.createElement("div");
  tooltipHeader.className = "tooltipHeader";
  tooltipHeader.innerHTML = level.name;
  levelTooltip.appendChild(tooltipHeader);

  var xpRawValue = document.createElement("div");
  xpRawValue.className = "xpRawValue removed";
  xpRawValue.id = levelName+"XpRawValue";
  xpRawValue.innerHTML = "XP: 0/"+level.xpReqBase;
  levelTooltip.appendChild(xpRawValue);

  var xpPercentValue = document.createElement("div");
  xpPercentValue.className = "xpPercentValue removed";
  xpPercentValue.id = levelName+"XpPercentValue";
  xpPercentValue.innerHTML = "XP%: 0%";
  levelTooltip.appendChild(xpPercentValue);

  var xpPerSecValue = document.createElement("div");
  xpPerSecValue.className = "xpPerSecValue removed";
  xpPerSecValue.id = levelName+"XpPerSecValue";
  xpPerSecValue.innerHTML = "XP/sec: 0";
  levelTooltip.appendChild(xpPerSecValue);

  var advancedTooltip = document.createElement("div");
  advancedTooltip.className = "advancedTooltip removed";
  advancedTooltip.id = levelName+"AdvancedTooltip";
  levelTooltip.appendChild(advancedTooltip);

  var tooltipStarValue = document.createElement("div");
  tooltipStarValue.className = "tooltipStarValue";
  tooltipStarValue.id = levelName+"TooltipStarValue";
  tooltipStarValue.innerHTML = "Stars: 0";
  advancedTooltip.appendChild(tooltipStarValue);

  var tooltipTypeValue = document.createElement("div");
  tooltipTypeValue.className = "tooltipTypeValue";
  tooltipTypeValue.id = levelName+"TooltipTypeValue";
  tooltipTypeValue.innerHTML = "Type: "+level.type;
  advancedTooltip.appendChild(tooltipTypeValue);

  var tooltipSkillTypeValue = document.createElement("div");
  tooltipSkillTypeValue.className = "tooltipSkillTypeValue";
  tooltipSkillTypeValue.id = levelName+"TooltipSkillTypeValue";
  tooltipSkillTypeValue.innerHTML = "Skill Type: "+level.skillType;
  advancedTooltip.appendChild(tooltipSkillTypeValue);

  var secretTooltip = document.createElement("div");
  secretTooltip.className = "secretTooltip removed";
  secretTooltip.id = levelName+"SecretTooltip";
  levelTooltip.appendChild(secretTooltip);

  var tooltipColorValue = document.createElement("div");
  tooltipColorValue.className = "tooltipColorValue";
  tooltipColorValue.id = levelName+"TooltipColorValue";
  tooltipColorValue.innerHTML = "Color: "+level.color;
  secretTooltip.appendChild(tooltipColorValue);

  var tooltipHintValue = document.createElement("div");
  tooltipHintValue.className = "tooltipHintValue";
  tooltipHintValue.id = levelName+"TooltipHintValue";
  tooltipHintValue.innerHTML = "Hint: "+level.hint;
  secretTooltip.appendChild(tooltipHintValue);

  return levelTooltip;
}
//creates the research node, and appends it to the body element
function createResearchNode(){
  researchNode = document.createElement("img");
  researchNode.id = "researchNode";
  researchNode.src = "researchNode.png";
  researchNode.onclick = function(){collectResearchNode();};
  document.body.appendChild(researchNode);
}
//creates the skilling div and appends it to the skilling level
function createSkillingDiv(){
  document.getElementById("skillingLevel").appendChild(document.getElementById("skillingDiv"));
}
//this is used to unlock a level,
//when a level name is submitted to this it is unlocked, a message is sent to log,
//and unique things are done based on each one if those things are needed.
function unlock(level){
  if(hardResetting){
    return;
  }
  levels[level].unlocked = true;
  unlockedLevels++;
  fadeIn(document.getElementById(level+"Level"));
  if(!loading){
    addToLog("Unlocked "+levels[level].name+"!");
  }
  if(levels[level].type=="achievement"){
    achievementsComplete++;
    levels[level].level = 1;
    gainXpUlt("achieving",1);
  }
  addToTrainingSelector(level);
  if(level=="growing"){
    changeElementEnabledStatus("growButton",false,true,true);
  }else if(level=="eating"){
    changeElementEnabledStatus("eatButton",false,true,true);
  }else if(level=="drinking"){
    changeElementEnabledStatus("drinkButton",false,true,true);
  }else if(level=="thinking"){
    changeElementEnabledStatus("thinkButton",false,true,true);
  }else if(level=="upgrading"){
    changeElementEnabledStatus("upgrade1Button",false,false,true);
  }else if(level=="evolving"){
    changeElementEnabledStatus("evolve1Button",false,false,true);
  }else if(level=="automating"){
    changeElementEnabledStatus("automate1Button",false,false,true);
  }else if(level=="killing"){
    changeElementEnabledStatus("killButton",false,true,true);
    changeElementEnabledStatus("evolve2Button",false,false,true);
    changeElementEnabledStatus("evolve1Button",true,false,false);
  }else if(level=="assimilating"){
    changeElementEnabledStatus("assimilateButton",false,true,true);
  }else if(level=="learning"){
    changeElementEnabledStatus("learnButton",false,true,true);
    changeElementEnabledStatus("evolve3Button",false,false,true);
    changeElementEnabledStatus("evolve2Button",true,false,false);
  }else if(level=="accelerating"){
    changeElementEnabledStatus("accelerateButton",false,true,true);
    changeElementEnabledStatus("automate2Button",false,false,true);
    changeElementEnabledStatus("automate1Button",true,false,false);
  }else if(level=="randomNumberGenerating"){
    changeElementEnabledStatus("generateRandomNumberButton",false,true,true);
    fadeIn(document.getElementById("randomNumber"));
  }else if(level=="gathering"){
    changeElementEnabledStatus("gatherButton",false,true,true);
    changeElementEnabledStatus("evolve3Button",true,false,false);
  }else if(level=="building"){
    changeElementEnabledStatus("buildButton",false,true,true);
  }else if(level=="saving"){
    changeElementEnabledStatus("saveButton",false,true,true);
    changeElementEnabledStatus("basicActionsSelectButton",false,false,true);
    changeElementEnabledStatus("metaActionsSelectButton",false,false,true);
  }else if(level=="efficiencyIncreasing"){
    changeElementEnabledStatus("increaseEfficiencyButton",false,true,true);
    changeElementEnabledStatus("automate3Button",false,false,true);
    changeElementEnabledStatus("automate2Button",true,false,false);
  }else if(level=="loading"){
    changeElementEnabledStatus("loadButton",false,true,true);
  }else if(level=="resetting"){
    changeElementEnabledStatus("resetButton",false,true,true);
  }else if(level=="researching"){
    changeElementEnabledStatus("researchButton",false,true,true);
    changeElementEnabledStatus("upgrade3Button",true,false,false);
  }else if(level=="enchancing"){
    changeElementEnabledStatus("enchance1Button",false,false,true);
  }else if(level=="familyAcquiring"){
    changeElementEnabledStatus("acquireFamilyButton",false,true,true);
  }else if(level=="mathematising"){
    changeElementEnabledStatus("mathematiseButton",false,true,true);
    changeElementEnabledStatus("mathematiseFormula",false,false,true);
    changeElementEnabledStatus("mathematiseAnswer",false,false,true);
    changeElementEnabledStatus("automate3Button",true,false,false);
  }else if(level=="training"){
    changeElementEnabledStatus("trainButton",false,true,true);
  }else if(level=="absorbing"){
    changeElementEnabledStatus("absorbButton",false,true,true);
  }else if(level=="displeasing"){
    changeElementEnabledStatus("trainingSelect",false,false,true);
  }else if(level=="upsizing"){
    levels.upsizing.level = 0;
    levels.upsizing.xp = totalStars;
    levels.upsizing.xpReq = levels.upsizing.xpReqBase;
    document.getElementById("top").style.fontSize = "24px";
    document.getElementById("totalLevelString").style.textDecoration = "underline";
    document.getElementById("slimeString").style.color = "rgb(150,250,150)";
    changeElementEnabledStatus("enchance2Button",false,false,true);
    changeElementEnabledStatus("enchance1Button",true,false,false);
  }else if(level=="reclaiming"){
    changeElementEnabledStatus("reclaimButton",false,true,true);
  }else if(level=="hovering"){
    document.getElementById("hoveringLevel").addEventListener("mouseover", function(){enterHover();});
    document.getElementById("hoveringLevel").addEventListener("mouseout", function(){leaveHover();});
  }else if(level=="mining"){
    changeElementEnabledStatus("mineButton",false,true,true);
    changeElementEnabledStatus("itemActionsSelectButton",false,false,true);
  }else if(level=="forging"){
    changeElementEnabledStatus("forgeButton",false,true,true);
  }else if(level=="crafting"){
    changeElementEnabledStatus("craftButton",false,true,true);
    fadeIn(document.getElementById("item"));
  }else if(level=="equipping"){
    changeElementEnabledStatus("equipButton",false,true,true);
    fadeIn(document.getElementById("equippedItem"));
  }else if(level=="rolling"){
    changeElementEnabledStatus("rerollTypeButton",false,true,true);
    changeElementEnabledStatus("rerollRankButton",false,true,true);
  }else if(level=="itemUpgrading"){
    changeElementEnabledStatus("itemUpgradeButton",false,true,true);
  }else if (level=="achieving") {
    levels.achieving.level = 0;
    levels.achieving.xp = achievementsComplete;
    levels.achieving.xpReq = levels.achieving.xpReqBase;
    changeElementEnabledStatus("basicLevelsSelectButton",false,false,true);
    changeElementEnabledStatus("achievementLevelsSelectButton",false,false,true);
    if(levels.selecting.unlocked){
      changeElementEnabledStatus("enchance4Button",false,false,true);
      changeElementEnabledStatus("enchance3Button",true,false,false);
    }
  }else if(level=="featureCreaping"){
    changeElementEnabledStatus("itemUpstarButton",false,true,true);
  }else if(level=="exporting"){
    changeElementEnabledStatus("exportButton",false,true,true);
    changeElementEnabledStatus("saveCode",false,false,true);
  }else if(level=="importing"){
    changeElementEnabledStatus("importButton",false,true,true);
  }else if(level=="autoclicking"){
    changeElementEnabledStatus("autoclickingSelect",false,false,true);
    fadeIn(document.getElementById("autoclickingText"));
  }else if(level=="sleeping"){
    changeElementEnabledStatus("upgrade2Button",false,false,true);
    changeElementEnabledStatus("upgrade1Button",true,false,false);
  }else if(level=="observing"){
    changeElementEnabledStatus("upgrade3Button",false,false,true);
    changeElementEnabledStatus("upgrade2Button",true,false,false);
  }else if(level=="selecting"){
    changeElementEnabledStatus("enchance3Button",false,false,true);
    changeElementEnabledStatus("enchance2Button",true,false,false);
    changeElementEnabledStatus("autoGrowCheck",false,false,true);
    if(levels.achieving.unlocked){
      changeElementEnabledStatus("enchance4Button",false,false,true);
      changeElementEnabledStatus("enchance3Button",true,false,false);
    }
  }else if(level=="moreOptioning"){
    changeElementEnabledStatus("enchance5Button",false,false,true);
    changeElementEnabledStatus("enchance4Button",true,false,false);
    changeElementEnabledStatus("enableTooltipsCheck",false,false,true);
    fadeIn(document.getElementById("enableTooltipsText"));
    document.getElementById("importingTooltip").innerHTML += "<br>import 'XP values'";
  }else if(level=="plusIdling"){
    changeElementEnabledStatus("enchance5Button",true,false,false);
  }
}
//run when you click an upgrade button, checks if upgrade is possible and if true
//it subtracts levels, unlocks the next thing, disables previous button
function upgrade(num){
  if(levels.growing.level>=5*num){
    levels.growing.level-=5*num;
    levels.growing.xpReq = levels.growing.xpReqBase*Math.pow(2,levels.growing.level);
    totalLevels-=5*num;
    gainXp("upgrading",10*Math.pow(2,num-1));
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
//same thing as upgrade but with evolve buttons
function evolve(num){
  if(levels.notDying.level>=3*num){
    levels.notDying.level-=3*num;
    levels.notDying.xpReq = levels.notDying.xpReqBase*Math.pow(2,levels.notDying.level);
    totalLevels-=3*num;
    gainXp("evolving",10*Math.pow(2,num-1));
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
//same thing as upgrade but with automate buttons
function automate(num){
  if(levels.thinking.level>=4*num){
    levels.thinking.level-=4*num;
    levels.thinking.xpReq = levels.thinking.xpReqBase*Math.pow(2,levels.thinking.level);
    totalLevels-=4*num;
    gainXp("automating",10*Math.pow(2,num-1));
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
//same thing as upgrade but with enchance buttons
function enchance(num){
  if(levels.researching.level>=1*num){
    levels.researching.level-=1*num;
    levels.researching.xpReq = levels.researching.xpReqBase*Math.pow(2,levels.researching.level);
    totalLevels-=1*num;
    gainXpAdv("enchancing",1);
    document.getElementById("researchingLevelValue").innerHTML = levels.researching.level;
    document.getElementById("totalLevel").innerHTML = totalLevels;
    addToLog("Leveled down 'Researching' level to level "+levels.researching.level+"!!!");
  }
  if(num==1){
    unlock("upsizing");
  }else if(num==2){
    unlock("selecting");
    changeElementEnabledStatus("autoGrowCheck",false,false,true);
  }else if(num==3){
    unlock("achieving");
  }else if(num==4){
    unlock("moreOptioning");
  }else if(num==5){
    unlock("plusIdling");
  }
}
//run when you assimilate, works only if you have kiling xp, subtracts killing xp, adds assimilating and growing xp
function assimilate(){
  if(levels.killing.xp>=1){
    gainXp("assimilating",1);
    gainXp("growing",5);
    minusExactXp("killing",1);
  }
}
//run when you learn, works if you have thinking xp, -thinking xp, +learning xp
function learn(){
  if(levels.thinking.xp>=10){
    gainXp("learning",1);
    minusExactXp("thinking",10);
  }
}
//generates a random number when you press the button
//the max number is based on your rng'ing level
function generateRandomNumber(){
  gainXp("randomNumberGenerating",1);
  var randNumMult = getRandomNumberMultiplier();
  randomNumber = Math.random()*(1+0.2*levels.randomNumberGenerating.level*randNumMult);
  document.getElementById("randomNumber").innerHTML = randomNumber;
}
//automatically generates a random number
//the max number is based on your rng'ng level but slightly lower
//only updates the number if the generated one is higher
function autoGenerateRandomNumber(){
  gainXp("randomNumberGenerating",1);
  var randNumMult = getRandomNumberMultiplier();
  var temp = (Math.random()*0.01 - 0.005)*randNumMult + randomNumber;
  if(temp>=randomNumber){
    randomNumber = Math.min(temp,1+0.18*levels.randomNumberGenerating.level*randNumMult);
    document.getElementById("randomNumber").innerHTML = randomNumber;
  }
}
//returns the random number multiplier, which increases the max random number that can be generated
function getRandomNumberMultiplier(){
  let randNumMult = 1;
  if(equippedItem.equippementType=="head"){
    randNumMult++;
  }
  if(equippedItem2.equippementType=="head"){
    randNumMult++;
  }
  if(equippedItem.suffix.type=="random"){
    randNumMult+=0.5;
  }
  if(equippedItem2.suffix.type=="random"){
    randNumMult+=0.5;
  }
  if(equippedItem.prefix.type=="random"){
    randNumMult+=0.5;
  }
  if(equippedItem2.prefix.type=="random"){
    randNumMult+=0.5;
  }
  return randNumMult;
}
//runs when you gather, gives gathering xp based on eating and drinking
//multiplies eating and drinking xp by 0.95
function gather(){
  gainXp("gathering",(1+levels.gathering.level*0.2)*levels.eating.level*levels.drinking.level*(0.2+levels.eating.xp/levels.eating.xpReq*4.8)*(0.2+levels.drinking.xp/levels.drinking.xpReq*4.8));
  levels.eating.xp *= 0.95;
  levels.drinking.xp *= 0.95;
  resetXpBar("eating");
  resetXpBar("drinking");
}
//runs when you build, -gathering xp, +building xp based on gathering xp
function build(){
  gainXpAdv("building",levels.gathering.xp);
  levels.gathering.xp = 0;
  resetXpBar("gathering");
}
//runs when  you mathematise, if you gave the right answer, you get xp
//if the answer is a certain thing, if unlocks cheat coding
//creates a new random math equation
function mathematise(){
  var givenAnswer = document.getElementById("mathematiseAnswer").value;
  if(!levels.cheatCoding.unlocked&&givenAnswer=="upupdowndownleftrightleftrightba"){
    unlock("cheatCoding");
  }
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
//runs when you research, requires observing, perceiving, and insightCollecting xp.
//subtracts those xp's, adds researching xp.
function research(){
  if(levels.observing.xp>=1&&levels.perceiving.xp>=1&&levels.insightCollecting.xp>=1){
    minusExactXp("observing",1);
    minusExactXp("perceiving",1);
    minusExactXp("insightCollecting",1);
    gainXpAdv("researching",1+0.1*(levels.observing.level+levels.perceiving.level+levels.insightCollecting.level));
  }
}
//runs when you reset above the required level
//resets all basic levels to level 0, adds 1 resetting level, which increases your xp gain and unlocks things
//also when you reset it makes the levels fade out one by one, then appear one by one by putting a delay before those things happen
function reset(){
  if(totalLevels>=100+levels.resetting.level*25){
    resetting = true;
    var delay = 0;
    var levelNames = Object.keys(levels);
    for(var x = 0;x < levelNames.length;x++){
      var level = levels[levelNames[x]];
      if(level.type=="basic"&&level.unlocked){
        setTimeout(function(level,levelName){
          totalLevels-=level.level;
          level.level = 0;
          level.xp = 0;
          level.xpReq = level.xpReqBase;
          resetXpBar(levelName);
          document.getElementById(levelName+"LevelValue").innerHTML = level.level;
        },delay+3000,level,levelNames[x]);
        setTimeout(function(item){fadeOut(item);},delay,document.getElementById(levelNames[x]+"Level"));
        setTimeout(function(item){fadeIn(item);},delay+4000,document.getElementById(levelNames[x]+"Level"));
        delay+=100;
      }
    }
    levels.resetting.level++;
    document.getElementById("resetButton").childNodes[1].innerHTML = (100+25*levels.resetting.level);
    document.getElementById("resettingLevelValue").innerHTML = levels.resetting.level;
    resetting = false;
  }
}
//runs when you aquire family and the cooldown is high enough. resets cooldown to 0, changes the button to be enabled, and gives xp
function acquireFamily(){
  acquireFamilyCooldown = 0;
  changeElementEnabledStatus("acquireFamilyButton",true,false,false);
  gainXpAdv("familyAcquiring",1);
}
//runs when you train, gives xp based on family aquiring level - displeasing level
//adds xp to displeasing (uses the minus exact xp function to add exact amounts so it doesnt scale)
function train(){
  gainXpAdv("training",levels.familyAcquiring.level-levels.displeasing.level);
  if(levels.displeasing.unlocked){
    minusExactXp("displeasing",-levels.displeasing.level-1);
  }
}
//adds a level to the training selector drop down menu, so it can be ran automatically
function addToTrainingSelector(level){
  if(levels[level].type!="achievement"&&level!="resetting"){
    let option = document.createElement("option");
    option.innerHTML = levels[level].name;
    option.value = level;
    if(level=="absorbing"){
      option.style.color = "white";
    }else{
      option.style.color = levels[level].color;
    }
    option.id = level+"Option";
    document.getElementById("trainingSelect").appendChild(option);
    let option2 = option.cloneNode(true);
    document.getElementById("trainingSelect2").appendChild(option2);
  }
}
//changes a dom elements status
//can change if it is disabled or not, if it can be auto clicked, and if the element should fade in when being enabled
function changeElementEnabledStatus(elementId, toDisable, hasAutoclickingOption, shouldFadeIn){
  let element = document.getElementById(elementId);
  element.disabled = toDisable;
  if(shouldFadeIn){
    fadeIn(document.getElementById(elementId));
  }
  if(hasAutoclickingOption&&element.className=="actionButton"){
    if(toDisable){
      var autoclickingOptions = document.getElementsByClassName("autoclickingOption");
      for(var x = 0;x < autoclickingOptions.length;x++){
        let option = autoclickingOptions[x];
        if(option.id == elementId+"Option"){
          option.parentNode.removeChild(option);
        }
      }
    }else{
      let option = document.createElement("option");
      option.innerHTML = element.innerHTML;
      option.value = elementId;
      option.style.color = "white";
      option.id = elementId+"Option";
      option.className = "autoclickingOption";
      document.getElementById("autoclickingSelect").appendChild(option);
      let option2 = option.cloneNode(true);
      document.getElementById("autoclickingSelect2").appendChild(option2);
      let option3 = option.cloneNode(true);
      document.getElementById("itemAutoclickingSelect").appendChild(option3);
      let option4 = option.cloneNode(true);
      document.getElementById("itemAutoclickingSelect2").appendChild(option4);
    }
  }
}
//runs when you absorb, removes collecting xp, gains absorbing xp
function absorb(){
  gainXpAdv("absorbing",levels.collecting.xp/100);
  levels.collecting.xp = 0;
  resetXpBar("collecting");
}
//runs when you reclaim, smoothely removes absorbing xp, smoothely adds reclaiming xp, and adds xp to a random basc levels based on how much xp is used
function reclaim(){
  smoothXpTransition("reclaiming",levels.absorbing.xp/50, true, true);
  smoothXpTransition("absorbing",-levels.absorbing.xp,false,false);
  let reclaimedLevels = Math.floor(levels.absorbing.xp/50);
  for(let x = 0;x<reclaimedLevels;x++){
    var random = Math.floor(Math.random()*Object.keys(levels).length);
    gainXp(Object.keys(levels)[random]+"",100+levels.reclaiming.level*25);
  }
}
//runs when you forge, removes mining xp, adds forging xp
function forge(){
  if(levels.mining.xp >= 10){
    minusExactXp("mining",10);
    gainXpAdv("forging",1);
  }
}
//runs when you craft, minus forging xp, adds crafting xp, creates a new item
function craft(){
  if(levels.forging.xp >= 10){
    minusExactXp("forging",10);
    gainXpAdv("crafting",1);
    createItem();
  }
}
//runs when you equip, changes the crafted item with the item in the slot you selected, then checks if item should have autoclickers on it, adds equipping xp
function equip(slot){
  var temp;
  if(slot == 1){
    temp = equippedItem;
    equippedItem = craftedItem;
    if(equippedItem.equippementType=="ring"){
      changeElementEnabledStatus("itemAutoclickingSelect",false,false,false);
    }else{
      changeElementEnabledStatus("itemAutoclickingSelect",true,false,false);
      document.getElementById("itemAutoclickingSelect").value = "";
    }
    writeItemName(1);
  }else{
    temp = equippedItem2;
    equippedItem2 = craftedItem;
    if(equippedItem2.equippementType=="ring"){
      changeElementEnabledStatus("itemAutoclickingSelect2",false,false,false);
    }else{
      changeElementEnabledStatus("itemAutoclickingSelect2",true,false,false);
      document.getElementById("itemAutoclickingSelect2").value = "";
    }
    writeItemName(2);
  }
  craftedItem = temp;
  writeItemName(0);
  gainXpAdv('equipping',1);
}
//rerolls an affix of an item type or rank. minus crafting xp, adds rolling xp, rolls the affix, and writes the item name
function reroll(typeOrRank, affixToRoll){
  if(levels.crafting.xp >= 5){
    minusExactXp("crafting",5);
    roll(typeOrRank, affixToRoll);
    gainXpAdv("rolling",1);
  }
  writeItemName(0);
}
//upgrades an affix of an item, minus forging xp, adds crafting and item upgrading xp
function itemUpgrade(affixToUpgrade){
  if(affixToUpgrade=="item"&&levels.forging.xp >= 25&&craftedItem.level<craftedItem.maxLevel){
    minusExactXp("forging",25);
    craftedItem.level++;
    gainXpAdv("itemUpgrading",1);
    gainXpAdv("crafting",1);
  }else if(affixToUpgrade=="suffix"&&levels.forging.xp >= 50&&craftedItem.suffix.level<craftedItem.suffix.maxLevel){
    minusExactXp("forging",50);
    craftedItem.suffix.level++;
    gainXpAdv("itemUpgrading",2);
    gainXpAdv("crafting",2);
  }else if(affixToUpgrade=="prefix"&&levels.forging.xp >= 100&&craftedItem.prefix.level<craftedItem.prefix.maxLevel){
    minusExactXp("forging",100);
    craftedItem.prefix.level++;
    gainXpAdv("itemUpgrading",3);
    gainXpAdv("crafting",3);
  }
  writeItemName(0);
}
//upstars an affix of an item, minus upgrading xp, adds feature creaping xp and crafting xp
function itemUpstar(affixToUpgrade){
  if(affixToUpgrade=="item"&&levels.itemUpgrading.xp >= 10*(craftedItem.stars+1)){
    minusExactXp("itemUpgrading",10*(craftedItem.stars+1));
    craftedItem.stars++;
    gainXpAdv("featureCreaping",1);
    gainXpAdv("crafting",1);
  }else if(affixToUpgrade=="suffix"&&levels.itemUpgrading.xp >= 20*(craftedItem.suffix.stars+1)){
    minusExactXp("itemUpgrading",20*(craftedItem.stars+1));
    craftedItem.suffix.stars++;
    gainXpAdv("featureCreaping",2);
    gainXpAdv("crafting",2);
  }else if(affixToUpgrade=="prefix"&&levels.itemUpgrading.xp >= 40*(craftedItem.prefix.stars+1)){
    minusExactXp("itemUpgrading",40*(craftedItem.stars+1));
    craftedItem.prefix.stars++;
    gainXpAdv("featureCreaping",3);
    gainXpAdv("crafting",3);
  }
  writeItemName(0);
}
//rolls either the type or the rank of the affix, prefix, or item itself
function roll(typeOrRank, affixToRoll){
  if(typeOrRank=="type"){
    if(affixToRoll=="item"){
      var types = getItemTypes(craftedItem.craftingLevel);
      var typeNumber = Math.floor(Math.random()*types.length);
      craftedItem.type = types[typeNumber];
      craftedItem.equippementType = itemTypes[types[typeNumber]].type;
    }else{
      var types = getAffixTypes(craftedItem.craftingLevel);
      var typeNumber = Math.floor(Math.random()*types.length);
      if(affixToRoll=="prefix"){
        craftedItem.prefix.type = types[typeNumber];
      }else if(affixToRoll=="suffix"){
        craftedItem.suffix.type = types[typeNumber];
      }
    }
  }else if(typeOrRank=="rank"){
    var ranks = getItemRanks(craftedItem.craftingLevel);
    var rankNumber = Math.floor(Math.random()*ranks.length);
    if(affixToRoll=="item"){
      craftedItem.rank = ranks[rankNumber];
    }else if(affixToRoll=="prefix"){
      craftedItem.prefix.rank = ranks[rankNumber];
    }else if(affixToRoll=="suffix"){
      craftedItem.suffix.rank = ranks[rankNumber];
    }
  }
}
//creates an item by rolling all the suffixes and prefixes that it should have based on crafting level
function createItem(){
  equalsEmptyItem(craftedItem);
  craftedItem.craftingLevel = levels.crafting.level;
  craftedItem.maxLevel = 10+Math.floor(Math.random()*levels.crafting.level*2);
  roll("type","item");
  roll("rank","item");
  if(levels.crafting.level > 1){
    craftedItem.suffix.maxLevel = 10+Math.floor(Math.random()*levels.crafting.level*2);
    roll("type","suffix");
    roll("rank","suffix");
  }
  if(levels.crafting.level > 3){
    craftedItem.prefix.maxLevel = 10+Math.floor(Math.random()*levels.crafting.level*2);
    roll("type","prefix");
    roll("rank","prefix");
  }
  writeItemName(0);
}
//writes the item name by checking all types ranks, stars, levels, affixes and prefixes in the correct order.
function writeItemName(slot){
  var itemWithName = {};
  var completeItemName = "nothing";

  if(slot==0){
    itemWithName = craftedItem;
  }else if(slot==1){
    itemWithName = equippedItem;
  }else{
    itemWithName = equippedItem2;
  }

  if(itemWithName.type!="nothing"){
    var suffix = "";
    if(itemWithName.suffix.type!=""){
      suffix += (levels.featureCreaping.unlocked?itemWithName.suffix.stars + "* ":"");
      suffix += (levels.itemUpgrading.unlocked?itemWithName.suffix.level + "/" + itemWithName.suffix.maxLevel + " ":"");
      suffix += itemRanks[itemWithName.suffix.rank].name + " ";
      if(itemWithName.suffix.type.substring(itemWithName.suffix.type.length-3)=="ing"){
        suffix += levels[itemWithName.suffix.type].name;
      }else{
        suffix += itemAffixTypes[itemWithName.suffix.type].name;
      }
    }

    var itemName = (levels.featureCreaping.unlocked?itemWithName.stars + "* ":"");
    itemName += (levels.itemUpgrading.unlocked?itemWithName.level + "/" + itemWithName.maxLevel + " ":"");
    itemName += itemRanks[itemWithName.rank].name + " " + itemTypes[itemWithName.type].name;

    var prefix = "";
    if(itemWithName.prefix.type!=""){
      prefix += (levels.featureCreaping.unlocked?itemWithName.prefix.stars + "* ":"");
      prefix += (levels.itemUpgrading.unlocked?itemWithName.prefix.level + "/" + itemWithName.prefix.maxLevel + " ":"");
      prefix += itemRanks[itemWithName.prefix.rank].name + " ";
      if(itemWithName.prefix.type.substring(itemWithName.prefix.type.length-3)=="ing"){
        prefix += levels[itemWithName.prefix.type].name;
      }else{
        prefix += itemAffixTypes[itemWithName.prefix.type].name;
      }
    }

    var itemCraftingLevel = itemWithName.craftingLevel;

    completeItemName = prefix + " " + itemName + (itemWithName.suffix.type!=""?" of ":"") + suffix + " (clvl "+itemCraftingLevel+")";
    if(!levels.longItemNaming.unlocked&&completeItemName.length>=100){
      unlock("longItemNaming");
    }
    if(!levels.absolutePerfecting.unlocked&&completeItemName=="10* 30/30 transcendent knowledge 10* 30/30 transcendent tarasque tear of 10* 30/30 transcendent knowledge (clvl 10)"){
      unlock("absolutePerfecting");
    }
  }

  if(slot==0){
    document.getElementById("itemName").innerHTML = completeItemName;
  }else if(slot==1){
    document.getElementById("equippedItemName").innerHTML = completeItemName;
  }else{
    document.getElementById("equippedItem2Name").innerHTML = completeItemName;
  }
}
//returns available item types for the item based on crafting level
function getItemTypes(craftingLevel){
  var types = [];
  var itemTypeKeys = Object.keys(itemTypes);
  for(var x = 0;x < itemTypeKeys.length;x++){
    var itemType = itemTypes[itemTypeKeys[x]];
    if(itemType.lvlReq <= craftingLevel){
      types.push(itemTypeKeys[x]);
    }
  }
  return types;
}
//retusn available item ranks for the item  based on crafting level
function getItemRanks(craftingLevel){
  var ranks = [];
  var itemRankKeys = Object.keys(itemRanks);
  for(var x = 0;x < itemRankKeys.length;x++){
    var itemRank = itemRanks[itemRankKeys[x]];
    if(itemRank.lvlReq <= craftingLevel){
      ranks.push(itemRankKeys[x]);
    }
  }
  return ranks;
}
//returns available affix types based on item crafting level
function getAffixTypes(craftingLevel){
  var types = [];
  var levelKeys = Object.keys(levels);
  for(var x = 0;x < levelKeys.length;x++){
    var level = levels[levelKeys[x]];
    if(level.unlocked&&(level.type=="basic"||level.type=="advanced")){
      types.push(levelKeys[x]);
    }
  }
  var affixTypeKeys = Object.keys(itemAffixTypes);
  for(var x = 0;x < affixTypeKeys.length;x++){
    var affixType = itemAffixTypes[affixTypeKeys[x]];
    if(affixType.lvlReq <= craftingLevel){
      types.push(affixTypeKeys[x]);
    }
  }
  return types;
}
//toggles the visibility of xp values in a tooltip, type determines which is toggled : raw, percent, or per sec values
function toggleXpValues(type){
  gainXpAdv('selecting',1);
  var display = "none";
  if((document.getElementById("showXpValueCheck").checked&&type=="raw")||(document.getElementById("showXpPercentCheck").checked&&type=="per")||(document.getElementById("showXpPerSecCheck").checked&&type=="sec")){
    display = "block";
  }else {
    display = "none";
  }
  var values;
  if(type=="raw"){
    values = document.getElementsByClassName("xpRawValue");
  }else if(type=="per"){
    values = document.getElementsByClassName("xpPercentValue");
  }else if(type=="sec"){
    values = document.getElementsByClassName("xpPerSecValue");
  }
  for(var x = 0;x < values.length;x++){
    values[x].style.display = display;
  }
}
//toggles visibility of tooltips, advanced tooltips and secret tooltips
function toggleTooltips(type){
  if(type=="basic"){
    var enabled = document.getElementById("enableTooltipsCheck").checked;
    var tooltips = document.getElementsByClassName("tooltip");
    for(var x = 0;x < tooltips.length;x++){
      tooltips[x].style.opacity = enabled?1:0;
    }
  }else if(type=="advanced"){
    var enabled = document.getElementById("enableAdvTooltipsCheck").checked;
    var tooltips = document.getElementsByClassName("advancedTooltip");
    for(var x = 0;x < tooltips.length;x++){
      tooltips[x].style.display = enabled?"block":"none";
    }
    document.getElementById("questionTooltip").style.opacity = enabled?1:0;
  }else if(type=="secret"){
    var enabled = document.getElementById("enableSecretTooltipsCheck").checked;
    var tooltips = document.getElementsByClassName("secretTooltip");
    for(var x = 0;x < tooltips.length;x++){
      tooltips[x].style.display = enabled?"block":"none";
    }
  }
}
//when you hover over hover, makes hover true :P have fun interpreting that.
var enterHover = function enterHover(){
  hover = true;
}
//when you stop hovering over hover, makes hover false.
var leaveHover = function leaveHover(){
  hover = false;
}
//smoothely transitions xp beetween 2 values, based on levelname, the xp, can also give the xp and give to adv levels.
function smoothXpTransition(level, xp, useGain, adv){
  let count = 0;
  let smooth = setInterval(function(){
    count++;
    if(useGain){
      if(adv){
        gainXpAdv(level,xp/100);
      }else{
        gainXp(level,xp/100);
      }
    }else{
      levels[level].xp+=xp/100;
      resetXpBar(level);
    }
    if(count==100){
      clearInterval(smooth);
    }
  },20);
}
//gain xp, this only works for basic levels, has a lot of modifiers like :
//evolving level, random number, efficiency increasing, resetting level xp modifier, stars of the level, item modifier, skill modifier, achievements, training modifier, and item affix modifier
function gainXp(levelName, XP){
  if(levels[levelName].unlocked&&levels[levelName].type=="basic"){
    var level = levels[levelName];
    var xpToGain = XP*(1+totalLevels/200);
    xpToGain *= 1 + levels.evolving.level*0.08;
    xpToGain *= 1 + randomNumber/20;
    xpToGain *= 1 + levels.efficiencyIncreasing.level*0.03;
    xpToGain *= 1 + getResettingLevelXpModifier();
    xpToGain *= 1 + level.stars*0.1;
    xpToGain *= 1 + getItemXpModifier(levelName);
    xpToGain *= 1 + getSkillXpModifier(levelName);
    xpToGain *= 1 + achievementsComplete*0.05;
    xpToGain *= 1 + getTrainingXpModifier(levelName);
    xpToGain *= 1 + getItemAffixXpModifier();
    level.xp += xpToGain;
    level.xpSecCounter += xpToGain;
    resetXpBar(levelName);
    if(levels.collecting.unlocked){
      gainXpAdv("collecting",1+levels.collecting.level*0.05);
    }
  }
}
//same as normal gain xp, but also works for advanced levels, has less/ smaller modifiers
function gainXpAdv(levelName, XP){
  if(levels[levelName].unlocked&&(levels[levelName].type=="advanced"||levels[levelName].type=="basic")){
    var level = levels[levelName];
    var xpToGain = XP*(1+totalLevels/1000);
    xpToGain *= 1 + levels.enchancing.level*0.1;
    xpToGain *= 1 + level.stars*0.1;
    xpToGain *= 1 + getItemXpModifier(levelName)/3;
    xpToGain *= 1 + getSkillXpModifier(levelName)/2;
    xpToGain *= 1 + achievementsComplete*0.02;
    xpToGain *= 1 + getTrainingXpModifier(levelName);
    xpToGain *= 1 + getItemAffixXpModifier()/2;
    level.xp += xpToGain;
    level.xpSecCounter += xpToGain;
    resetXpBar(levelName);
  }
}
//same as gain xp, but also works with advanced and ultimate levels, has even less/smaller modifiers
function gainXpUlt(levelName, XP){
  if(levels[levelName].unlocked&&(levels[levelName].type=="ultimate"||levels[levelName].type=="advanced"||levels[levelName].type=="basic")){
    var level = levels[levelName];
    var xpToGain = XP*(1+totalLevels/5000);
    xpToGain *= 1 + getSkillXpModifier(levelName)/5;
    xpToGain *= 1 + level.stars*0.05;
    xpToGain *= 1 + achievementsComplete*0.01;
    xpToGain *= 1 + getItemAffixXpModifier()/5;
    level.xp += xpToGain;
    level.xpSecCounter += xpToGain;
    resetXpBar(levelName);
  }
}
//subtracts an exact amount of xp from a level
function minusExactXp(levelName, XP){
  if(levels[levelName].unlocked){
    var xpUseDivisor = 1;
    if(equippedItem.equippementType=="body"){
      xpUseDivisor++;
    }
    if(equippedItem2.equippementType=="body"){
      xpUseDivisor++;
    }
    levels[levelName].xp -= XP/xpUseDivisor;
    resetXpBar(levelName);
  }
}
//resets the xp bar so that it is at the correct values.
function resetXpBar(levelName){
  var level = levels[levelName];
  var percentValue = Math.min(100,(100*level.xp/level.xpReq)).toFixed(1)+"%";
  document.getElementById(levelName+"Xp").style.width = percentValue;
  var oneInHundred = Math.floor(Math.random()*100)==0&&levels.moreOptioning.level!=2;
  //496d706f727427536563274966526573656172636856697369626c65
  document.getElementById(levelName+"XpPercentValue").innerHTML = "XP%: "+percentValue + (oneInHundred?"<div class='reallySmallText'>496d706f7274 2753656327 4966 5265736561726368 56697369626c65</div>":"");
  oneInHundred = Math.floor(Math.random()*100)==0&&levels.moreOptioning.level!=1;
  document.getElementById(levelName+"XpRawValue").innerHTML = "XP: "+Math.round(level.xp)+"/"+(oneInHundred?"'%'&click?":Math.round(level.xpReq));
  oneInHundred = Math.floor(Math.random()*100)==0&&levels.moreOptioning.level!=3;
  //✓ ☐ //☐☐✓✓✓☐✓✓☐?
  document.getElementById(levelName+"XpPerSecValue").innerHTML = "XP/sec: "+(oneInHundred?"☐☐✓✓✓☐✓✓☐?":(level.xpSecCounter/xpSecTimer).toFixed(1));
}
//gets the skill xp modifier for the level, this is based on skilling sub skills
function getSkillXpModifier(levelName){
  var skillXpModifier = 0;
  var skill = levels[levelName].skillType;
  var skillLevel = levels[skill].level;
  var skillEquipType = {strengthing : "hand", dexteritying : "feet", constitutioning : "body", intelligenceing : "head", wisdoming : "amulet", charismaing : "ring"};
  skillXpModifier += skillLevel*0.05;
  if(equippedItem.equippementType==skillEquipType[skill]){
    skillXpModifier += skillLevel*0.05;
  }
  if(equippedItem2.equippementType==skillEquipType[skill]){
    skillXpModifier += skillLevel*0.05;
  }
  return skillXpModifier;
}
//gets the resetting level modifier, based on the level, and the item equipped
function getResettingLevelXpModifier(){
  let xpModifier = 1;
  if(equippedItem.suffix.type=="reset"){
    xpModifier+=0.25;
  }
  if(equippedItem2.suffix.type=="reset"){
    xpModifier+=0.25;
  }
  if(equippedItem.prefix.type=="reset"){
    xpModifier+=0.25;
  }
  if(equippedItem2.prefix.type=="reset"){
    xpModifier+=0.25;
  }
  xpModifier*=levels.resetting.level*0.2;
  return xpModifier;
}
//gets training xp modifier based on if the level is selected in training
function getTrainingXpModifier(levelName){
  if(levels.training.unlocked){
    var trainingXpModifier = 0;
    var trainingBonus = (levels.training.level+levels.familyAcquiring.level)*0.02;
    if(document.getElementById("trainingSelect").value==levelName){
      trainingXpModifier += trainingBonus;
    }
    if(document.getElementById("trainingSelect2").value==levelName){
      trainingXpModifier += trainingBonus;
    }
    if(equippedItem.equippementType=="hand"){
      trainingXpModifier += trainingBonus;
    }
    if(equippedItem2.equippementType=="hand"){
      trainingXpModifier += trainingBonus;
    }
    return trainingXpModifier;
  }
}
//gets the item xp modifier for the level, this is based on item stars, levels, affixes, and if the affix matches, then affix ranks and stars as well
function getItemXpModifier(levelName){
  var xpModifier = 0;
  var globalModifier = 0;
  var specificLevelModifier = 0;
  if(equippedItem.type!="nothing"){
    globalModifier += itemRanks[equippedItem.rank].xpBonus + equippedItem.level*0.005 + equippedItem.stars*0.03;
    globalModifier += itemTypes[equippedItem.type].xpBonus + equippedItem.level*0.005 + equippedItem.stars*0.03;
    if(equippedItem.prefix.type == levelName){
      specificLevelModifier += itemRanks[equippedItem.prefix.rank].xpBonus + equippedItem.prefix.level*0.005 + equippedItem.prefix.stars*0.03;
    }
    if(equippedItem.suffix.type == levelName){
      specificLevelModifier += itemRanks[equippedItem.suffix.rank].xpBonus + equippedItem.suffix.level*0.005 + equippedItem.suffix.stars*0.03;
    }
  }
  if(equippedItem2.type!="nothing"){
    globalModifier += itemRanks[equippedItem2.rank].xpBonus + equippedItem2.level*0.005 + equippedItem2.stars*0.03;
    globalModifier += itemTypes[equippedItem2.type].xpBonus + equippedItem2.level*0.005 + equippedItem2.stars*0.03;
    if(equippedItem2.prefix.type == levelName){
      specificLevelModifier += itemRanks[equippedItem2.prefix.rank].xpBonus + equippedItem2.prefix.level*0.005 + equippedItem2.prefix.stars*0.03;
    }
    if(equippedItem2.suffix.type == levelName){
      specificLevelModifier += itemRanks[equippedItem2.suffix.rank].xpBonus + equippedItem2.suffix.level*0.005 + equippedItem2.suffix.stars*0.03;
    }
  }
  xpModifier += globalModifier;
  xpModifier += specificLevelModifier;
  return xpModifier;
}
//gets item affix modifier, this is based solely on if the items you have have the xp boost affix
//its separate so that its multiplicative
function getItemAffixXpModifier(){
  let xpModifier = 0;
  if(equippedItem.suffix.type=="xpBoost"){
    xpModifier += 0.1;
  }
  if(equippedItem2.suffix.type=="xpBoost"){
    xpModifier += 0.1;
  }
  if(equippedItem.prefix.type=="xpBoost"){
    xpModifier += 0.1;
  }
  if(equippedItem2.prefix.type=="xpBoost"){
    xpModifier += 0.1;
  }
  return xpModifier;
}
//resets all the xp per sec counters and resets the timer to 0
function resetXpPerSecCounters(){
  var levelNames = Object.keys(levels);
  for(var x = 0;x < levelNames.length;x++){
    levels[levelNames[x]].xpSecCounter = 0;
  }
  xpSecTimer = 0;
}
//adds a string to log, deletes string over the log limit
function addToLog(string){
  log.unshift(string);
  let htmlLog = document.getElementById("log");
  let item = document.createElement("p");
  item.className = "logItem";
  item.innerHTML = string;
  htmlLog.insertBefore(item, htmlLog.childNodes[0]);
  if(htmlLog.childNodes.length>logLength){
    htmlLog.removeChild(htmlLog.childNodes[logLength]);
  }
  fadeIn(item);
}
//fades in a Dom object over time
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
//fades out a dom object over time
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
//returns an empty item object, used in initializing items on script load
//crafting level : the item crating level, determines the available affixes, ranks, and types.
//equippementType : the type of equippement.
//type : the type of item, this is different from equippement type :D
//rank : rank of item
//stars : the stars on the item.
//level : the level of the item.
//maxLevel : the max level of the item.
//suffix :
//  type : type of suffix.
//  rank : rank of suffix.
//  stars : stars on the suffix.
//  level : level of the suffix.
//  maxLevel : max level of the suffix.
//prefix : ALL THE SAME THING AS THE SUFFIX.
function equalsEmptyItem(item){
  var emptyItem = {
    craftingLevel : 0, equippementType : "",
    type : "nothing", rank : "", stars : 0, level : 0, maxLevel : 0,
    suffix : {type : "", rank : "", stars : 0, level : 0, maxLevel : 0},
    prefix : {type : "", rank : "", stars : 0, level : 0, maxLevel : 0},
  };
  var itemKeys = Object.keys(emptyItem);
  for(var x = 0; x < itemKeys.length;x++){
    item[itemKeys[x]] = emptyItem[itemKeys[x]];
  }
}
//research node timer, hides and shows the research node based on a timer, the chance increases with perceiving levels.
var researchNodeTimer = function researchNodeTimer(){
  var rand = Math.random();
  gainXpAdv("timeWarping",1);
  researchNode.style.display = "none";
  if(levels.perceiving.unlocked&&rand<=(0.1+0.01*levels.perceiving.level)){
    let top = (Math.round(Math.random()*document.body.scrollHeight)-100)+"px";
    let left = (Math.round(Math.random()*document.body.scrollWidth)-100)+"px";
    researchNode.style.top = top;
    researchNode.style.left = left;
    researchNode.style.display = "block";
  }
  setTimeout(researchNodeTimer,Math.round(10000/(1+levels.observing.level*0.05+levels.timeWarping.level*0.05)));
}
setTimeout(researchNodeTimer,Math.round(10000/(1+levels.observing.level*0.05+levels.timeWarping.level*0.05)));
//when you click the research node, it runs this, hides the node, adds xp.
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
//second timer, runs every second, checks if you have unlocked something, changes the color of rng'ing text
//adds to xp sec timer, changes cheat coding string, and changing long item naming string
setInterval(function secondTimer(){

  ///xp/sec calculations
  xpSecTimer++;

  ///rng'ing
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);
  document.getElementById("randomNumberGeneratingLevel").style.color = "rgb("+r+","+g+","+b+")";
  if(document.getElementById("autoGenerateCheck").checked){
    autoGenerateRandomNumber();
  }


  //cheatCoding
  if(levels.cheatCoding.unlocked){
    var rand = Math.floor(Math.random()*2);
    var cheatE = rand==0?"e":"3";
    rand = Math.floor(Math.random()*2);
    var cheatA = rand==0?"a":"4";
    rand = Math.floor(Math.random()*2);
    var cheatO = rand==0?"o":"0";
    rand = Math.floor(Math.random()*2);
    var cheatI = rand==0?"i":"1";
    rand = Math.floor(Math.random()*2);
    var cheatSpace = rand==0?" ":"_";
    var cheatName = "Ch"+cheatE+cheatA+"t"+cheatSpace+"C"+cheatO+"d"+cheatI+"ng";
    document.getElementById("cheatCodingName").innerHTML = cheatName;
  }

  //longItemNaming
  if(levels.longItemNaming.unlocked){
    var rand = Math.floor(Math.random()*4);
    if(rand<2&&longItemNamingOs<10){
      longItemNamingOs++;
    }else if(rand==2&&longItemNamingOs>1){
      longItemNamingOs--;
    }else if(rand==3&&longItemNamingOs==10){
      longItemNamingOs = 1;
    }
    var os = "o";
    for(var x= 1;x < longItemNamingOs;x++){
      os+="o";
    }
    document.getElementById("longItemNamingName").innerHTML = "L"+os+"ng Item Naming";
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
  if(!levels.levelUping.unlocked&&totalLevels>49){
    unlock("levelUping");
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
    changeElementEnabledStatus("autoGenerateCheck",false,false,true);
    document.getElementById("autoGenerateCheck").checked = true;
  }
  if(!selectingUnlocks[1]&&levels.selecting.level>1){
    selectingUnlocks[1] = true;
    changeElementEnabledStatus("autoAbsorbCheck",false,false,true);
  }
  if(!selectingUnlocks[2]&&levels.selecting.level>2){
    selectingUnlocks[2] = true;
    changeElementEnabledStatus("autoIncreaseEfficiencyCheck",false,false,true);
    document.getElementById("autoIncreaseEfficiencyCheck").checked = true;
  }
  if(!selectingUnlocks[3]&&levels.selecting.level>3){
    selectingUnlocks[3] = true;
    changeElementEnabledStatus("autoAccelerateCheck",false,false,true);
    document.getElementById("autoAccelerateCheck").checked = true;
  }
  if(!selectingUnlocks[4]&&levels.selecting.level>4){
    selectingUnlocks[4] = true;
    changeElementEnabledStatus("trainingSelect2",false,false,true);
  }
  if(!upsizingUnlocks[0]&&levels.upsizing.level>0){
    upsizingUnlocks[0] = true;
    document.getElementById("slimeString").innerHTML = "BIG Piece of slime";
    document.getElementById("slimeString").fontSize = "36px";
  }
  if(!upsizingUnlocks[1]&&levels.upsizing.level>1){
    upsizingUnlocks[1] = true;
    document.getElementById("slimeString").innerHTML = "GIANT Piece of slime";
    document.getElementById("slimeString").fontSize = "44px";
  }
  if(!levels.reclaiming.unlocked&&levels.absorbing.level>0){
    unlock("reclaiming");
  }
  if(!levels.hovering.unlocked&&levels.selecting.level>2){
    unlock("hovering");
  }
  if(!levels.mining.unlocked&&levels.collecting.level>2){
    unlock("mining");
  }
  if(!levels.forging.unlocked&&levels.mining.level>0){
    unlock("forging");
  }
  if(!levels.crafting.unlocked&&levels.forging.level>0){
    unlock("crafting");
  }
  if(!levels.rolling.unlocked&&(levels.equipping.level>0||levels.crafting.level>1)){
    unlock("rolling");
  }
  if(!levels.equipping.unlocked&&levels.crafting.level>0){
    unlock("equipping");
  }
  if(!levels.itemUpgrading.unlocked&&levels.rolling.level>0){
    unlock("itemUpgrading");
  }
  if(!levels.skilling.unlocked&&levels.itemUpgrading.level>1){
    unlock("skilling");
  }
  if(!levels.featureCreaping.unlocked&&levels.skilling.level>2){
    unlock("featureCreaping");
  }
  if(!craftingUnlocks[0]&&levels.crafting.level>1){
    craftingUnlocks[0] = true;
    changeElementEnabledStatus("rerollSuffixTypeButton",false,true,true);
    changeElementEnabledStatus("rerollSuffixRankButton",false,true,true);
  }
  if(!craftingUnlocks[1]&&levels.crafting.level>3){
    craftingUnlocks[1] = true;
    changeElementEnabledStatus("prefixUpgradeButton",false,true,true);
    changeElementEnabledStatus("rerollPrefixTypeButton",false,true,true);
    changeElementEnabledStatus("rerollPrefixRankButton",false,true,true);
  }
  if(!itemUpgradeUnlocks[0]&&levels.crafting.level>1&&levels.itemUpgrading.unlocked){
    itemUpgradeUnlocks[0] = true;
    changeElementEnabledStatus("suffixUpgradeButton",false,true,true);
  }
  if(!itemUpgradeUnlocks[1]&&levels.crafting.level>3&&levels.upgrading.unlocked){
    itemUpgradeUnlocks[1] = true;
    changeElementEnabledStatus("prefixUpgradeButton",false,true,true);
  }
  if(!itemUpstarUnlocks[0]&&levels.crafting.level>1&&levels.featureCreaping.unlocked){
    itemUpstarUnlocks[0] = true;
    changeElementEnabledStatus("suffixUpstarButton",false,true,true);
  }
  if(!itemUpstarUnlocks[1]&&levels.crafting.level>3&&levels.featureCreaping.unlocked){
    itemUpstarUnlocks[1] = true;
    changeElementEnabledStatus("prefixUpstarButton",false,true,true);
  }
  if(!levels.strengthing.unlocked&&levels.skilling.unlocked){
    unlock("strengthing");
    unlock("dexteritying");
    unlock("constitutioning");
    unlock("intelligenceing");
    unlock("wisdoming");
    unlock("charismaing");
  }
  if(!levels.exporting.unlocked&&levels.saving.level>4){
    unlock("exporting");
  }
  if(!levels.importing.unlocked&&(levels.loading.level>4||levels.exporting.level>0)){
    unlock("importing");
  }
  if(!hardResetButtonUnlocked&&(levels.resetting.level>9||levels.hardResetting.unlocked)){
    hardResetButtonUnlocked = true;
    changeElementEnabledStatus("hardResetButton",false,false,true);
  }
  if(!equippingUnlocks&&levels.equipping.level>2&&levels.skilling.level>4){
    equippingUnlocks = true;
    changeElementEnabledStatus("equipButton2",false,true,true);
    fadeIn(document.getElementById("equippedItem2"));
  }
  if(!levels.autoclicking.unlocked&&levels.clicking.level>4){
    unlock("autoclicking");
  }
  if(!autoclickingUnlock&&levels.autoclicking.level>4){
    autoclickingUnlock = true;
    changeElementEnabledStatus("autoclickingSelect2",false,false,true);
  }
  if(!itemAutoClickingUnlocks[0]&&equippedItem.equippementType=="ring"){
    itemAutoClickingUnlocks[0] = true;
    fadeIn(document.getElementById("itemAutoclickingSelect"));
    fadeIn(document.getElementById("itemAutoclickingText"));
  }
  if(!itemAutoClickingUnlocks[1]&&equippedItem2.equippementType=="ring"){
    itemAutoClickingUnlocks[1] = true;
    fadeIn(document.getElementById("itemAutoclickingSelect2"));
    fadeIn(document.getElementById("itemAutoclickingText"));
  }
  if(!moreOptioningUnlocks[0]&&levels.moreOptioning.level>0){
    moreOptioningUnlocks[0] = true;
    changeElementEnabledStatus("showXpValueCheck",false,false,true);
    fadeIn(document.getElementById("showXpValueText"));
  }
  if(!moreOptioningUnlocks[1]&&levels.moreOptioning.level>1){
    moreOptioningUnlocks[1] = true;
    changeElementEnabledStatus("showXpPercentCheck",false,false,true);
    fadeIn(document.getElementById("showXpPercentText"));
  }
  if(!moreOptioningUnlocks[2]&&levels.moreOptioning.level>2){
    moreOptioningUnlocks[2] = true;
    changeElementEnabledStatus("showXpPerSecCheck",false,false,true);
    changeElementEnabledStatus("resetXpPerSecButton",false,false,true);
    fadeIn(document.getElementById("showXpPerSecText"));
  }
  if(!moreOptioningUnlocks[3]&&levels.moreOptioning.level>3){
    moreOptioningUnlocks[3] = true;
    changeElementEnabledStatus("enableAdvTooltipsCheck",false,false,true);
    fadeIn(document.getElementById("enableAdvTooltipsText"));
  }
  if(!moreOptioningUnlocks[4]&&levels.moreOptioning.level>4){
    moreOptioningUnlocks[4] = true;
    changeElementEnabledStatus("enableSecretTooltipsCheck",false,false,true);
    fadeIn(document.getElementById("enableSecretTooltipsText"));
  }
  if(!levels.achievingUnderstanding.unlocked&&levels.understanding.level>0){
    unlock("achievingUnderstanding");
  }
},1000);
//tick timer, runs every second, but gets faster based on tickspeed bonuses from different things.
//adds not dying xp, does all the auto things like auto growing, sleeping, idling, advanced idling,
//automating, learning, family aquiring, absorbing,displeasing, efficiencyIncreasing, accelerating,hovering, skilling, autoclicking,
//random xp based on item affixes, and calculates tickspeed.
var tickTimer = function tickTimer(){
  ///not dying
  if(levels.notDying.unlocked){
    gainXp("notDying",1);
  }

  ///autoGrow
  if(document.getElementById("autoGrowCheck").checked){
    if(levels.eating.xp >= levels.eating.level&&levels.drinking.xp >= levels.drinking.level&&levels.drinking.level > 0&&levels.eating.level > 0){
      minusExactXp("eating",levels.eating.level);
      minusExactXp("drinking",levels.drinking.level);
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
  if(levels.learning.unlocked){
    gainXp("thinking",levels.learning.level/3);
  }

  ///Idling
  if(levels.idling.unlocked){
    var random = Math.floor(Math.random()*Object.keys(levels).length);
    gainXp(Object.keys(levels)[random]+"",levels.idling.level/10);
    gainXp("idling",1);
    if(levels.randomNumberGenerating.unlocked){
      gainXp("randomNumberGenerating",0.2);
    }
  }

  ///family acquiring (thats really hard to spell btw)
  if(levels.familyAcquiring.unlocked){
    acquireFamilyCooldown++;
    if(acquireFamilyCooldown>=5){
      changeElementEnabledStatus("acquireFamilyButton",false,false,false);
    }
  }

  ///absorbing
  if(levels.absorbing.unlocked&&document.getElementById("autoAbsorbCheck").checked){
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
      changeElementEnabledStatus("trainButton",true,false,false);
    }
    if(levels.displeasing.level<=5){
      changeElementEnabledStatus("trainButton",false,false,false);
    }
  }

  ///efficiencyIncreasing
  if(document.getElementById("autoIncreaseEfficiencyCheck").checked){
    gainXp("efficiencyIncreasing",0.2);
  }

  ///accelerating
  if(document.getElementById("autoAccelerateCheck").checked){
    gainXp("accelerating",0.1);
  }

  ///Hovering
  if(levels.hovering.unlocked&&hover){
    gainXpAdv("hovering",1);
  }

  //skilling
  if(levels.skilling.unlocked){
    var train1Val = document.getElementById("trainingSelect").value;
    var train2Val = document.getElementById("trainingSelect2").value;
    if(train1Val=="strengthing"||train1Val=="dexteritying"||train1Val=="constitutioning"||train1Val=="intelligenceing"||train1Val=="wisdoming"||train1Val=="charismaing"){
      gainXpAdv(train1Val,1);
    }
    if(train2Val=="strengthing"||train2Val=="dexteritying"||train2Val=="constitutioning"||train2Val=="intelligenceing"||train2Val=="wisdoming"||train2Val=="charismaing"){
      gainXpAdv(train2Val,1);
    }
    let strXpPer = levels.strengthing.level==levels.skilling.level?levels.strengthing.xp/levels.strengthing.xpReq:1;
    let dexXpPer = levels.dexteritying.level==levels.skilling.level?levels.dexteritying.xp/levels.dexteritying.xpReq:1;
    let conXpPer = levels.constitutioning.level==levels.skilling.level?levels.constitutioning.xp/levels.constitutioning.xpReq:1;
    let intXpPer = levels.intelligenceing.level==levels.skilling.level?levels.intelligenceing.xp/levels.intelligenceing.xpReq:1;
    let wisXpPer = levels.wisdoming.level==levels.skilling.level?levels.wisdoming.xp/levels.wisdoming.xpReq:1;
    let chaXpPer = levels.charismaing.level==levels.skilling.level?levels.charismaing.xp/levels.charismaing.xpReq:1;
    let skillingXpPer = Math.min(strXpPer,dexXpPer,conXpPer,intXpPer,wisXpPer,chaXpPer);
    levels.skilling.xp = skillingXpPer*levels.skilling.xpReq;
    resetXpBar("skilling");
  }

  //autoclicking
  if(levels.autoclicking.unlocked){
    autoclick();
  }

  //+idling
  if(levels.plusIdling.unlocked){
    giveRandomAdvXp(levels.plusIdling.level/10);
    gainXpAdv("plusIdling",1);
    if(levels.randomNumberGenerating.unlocked){
      gainXp("randomNumberGenerating",0.2);
    }
  }

  //automatic item affixes
  if(equippedItem.suffix.type=="automatic"){
    giveRandomAdvXp(0.25);
  }
  if(equippedItem.prefix.type=="automatic"){
    giveRandomAdvXp(0.25);
  }
  if(equippedItem2.suffix.type=="automatic"){
    giveRandomAdvXp(0.25);
  }
  if(equippedItem2.prefix.type=="automatic"){
    giveRandomAdvXp(0.25);
  }

  //knowledge (understanding xp)
  if(equippedItem.suffix.type=="knowledge"){
    gainXpUlt("understanding",0.1);
  }
  if(equippedItem2.suffix.type=="knowledge"){
    gainXpUlt("understanding",0.1);
  }
  if(equippedItem.prefix.type=="knowledge"){
    gainXpUlt("understanding",0.1);
  }
  if(equippedItem2.prefix.type=="knowledge"){
    gainXpUlt("understanding",0.1);
  }

  //calculating tickspeed for next tick
  var tickspeed = 1;
  tickspeed += levels.accelerating.level*0.02;
  tickspeed += levels.timeWarping.level*0.02
  if(equippedItem.equippementType=="feet"){
    tickspeed *= 1.08;
  }
  if(equippedItem2.equippementType=="feet"){
    tickspeed *= 1.08;
  }
  if(equippedItem.suffix.type=="superSpeed"){
    tickspeed *= 1.03;
  }
  if(equippedItem2.suffix.type=="superSpeed"){
    tickspeed *= 1.03;
  }
  if(equippedItem.prefix.type=="superSpeed"){
    tickspeed *= 1.03;
  }
  if(equippedItem2.prefix.type=="superSpeed"){
    tickspeed *= 1.03;
  }
  setTimeout(tickTimer, Math.round(1000/tickspeed));
};
setTimeout(tickTimer, 1000);
//gives advanced xp to a random level based on the level modifier, and modiier based on the triggering source.
//this is triggered by auto item affixes and +idling (advances idling)
function giveRandomAdvXp(multiplier){
  let random = Math.floor(Math.random()*Object.keys(levels).length);
  let level = Object.keys(levels)[random];
  gainXpAdv(level,levels[level].xpReqBase/3600*multiplier);
}
//a frame, runs all the time, checks for level ups, thats about it
setInterval(function frame(){
  var levelNames = Object.keys(levels);
  for(var x = 0;x < levelNames.length;x++){
    let levelName = levelNames[x];
    var level = levels[levelName];

    ///level ups
    if(level.xp >= level.xpReq&&(levelName!="familyAcquiring"||(levelName=="familyAcquiring"&&level.level<levels.building.level))){
      level.level++;
      level.xp-=level.xpReq;
      level.xpReq*=2;
      totalLevels++;
      addToLog("Leveled up '"+level.name+"' level to level "+level.level+"!!!");
      document.getElementById(levelName+"LevelValue").innerHTML = level.level;
      document.getElementById("totalLevel").innerHTML = totalLevels;
      resetXpBar(levelName);
      if(level.level%10==0&&level.level/10>level.stars){
        if(level.level/10>level.stars){
          level.stars++;
          totalStars++;
          if(level.stars == 1){
            document.getElementById(levelName+"Xp").style.backgroundColor = "rgb(250,250,100)";
          }else if(level.stars == 2){
            document.getElementById(levelName+"Xp").style.backgroundColor = "rgb(140,250,140)";
          }else if(level.stars == 3){
            document.getElementById(levelName+"Xp").style.backgroundColor = "rgb(150,150,250)";
          }
          gainXpAdv("upsizing",1);
          document.getElementById(levelName+"TooltipStarValue").innerHTML = "Stars: "+level.stars;
        }
      }
      if(levels.levelUping.unlocked){
        gainXp("levelUping",1);
      }
    }
  }
},20);
//the understanding shadow animation, goes up and down and resets the style.
setInterval(function understandingAnimation(){
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
  document.getElementById("moreOptioningLevel").style.textShadow = "0px 0px "+understandingShadow+"px white";
},50);
//the rainbow animation, changes rainbow values based on phase and resets the style.
setInterval(function rainbowAnimation(){
  document.getElementById("achievingUnderstandingLevel").style.color = "rgb("+rainbow.r+","+rainbow.g+","+rainbow.b+")";
  if(rainbow.phase==0){
    rainbow.r += rainbow.speed;
  }else if(rainbow.phase==1){
    rainbow.g += rainbow.speed;
  }else if(rainbow.phase==2){
    rainbow.b += rainbow.speed;
  }else if(rainbow.phase==3){
    rainbow.r -= rainbow.speed;
  }else if(rainbow.phase==4){
    rainbow.g -= rainbow.speed;
  }else if(rainbow.phase==5){
    rainbow.b -= rainbow.speed;
  }
  if(rainbow.r>255){
    rainbow.r = 255;
  }else if(rainbow.g>255){
    rainbow.g = 255;
  }else if(rainbow.b>255){
    rainbow.b = 255;
  }else if(rainbow.r<0){
    rainbow.r = 0;
  }else if(rainbow.g<0){
    rainbow.g = 0;
  }else if(rainbow.b<0){
    rainbow.b = 0;
  }else{
    return;
  }
  rainbow.phase = Math.floor(Math.random()*6);
},50);
//autoclicks based on selected autoclicking choices
function autoclick(){
  checkAutoClick(document.getElementById("autoclickingSelect").value);
  checkAutoClick(document.getElementById("autoclickingSelect2").value);
  checkAutoClick(document.getElementById("itemAutoclickingSelect").value);
  checkAutoClick(document.getElementById("itemAutoclickingSelect2").value);
}
//checks that the option isnt blank and runs simulate multiple auto clicks
function checkAutoClick(option){
  if(option!=""){
    simulateMultipleAutoClicks(document.getElementById(option));
  }
}
//clicks, then based on autoclicking level calculates the chance to click again, the failure chance doubles every time until the click fails
function simulateMultipleAutoClicks(element){
  var chanceForFail = Math.pow(0.9,levels.autoclicking.level);
  var rand = 0;
  while(true){
    element.click();
    gainXpAdv("autoclicking",1);
    rand = Math.random();
    if(rand>=chanceForFail){
      chanceForFail *= 2;
    }else{
      break;
    }
  }
}
//auto saves on an interval
setInterval(function autoSave(){
  save();
  saveCount++;
},10000);
//event listener for a click, any click trigers this.
document.addEventListener('click', function(event){
  sleepingTime = 0;
  if(levels.clicking.unlocked){
    gainXp("clicking",1);
  }
},false);
//saves, gets save code, converts to json, and saves it in local storage.
function save(){
  var allTheLevelsSave = getSaveCode();
  localStorage.allTheLevelsSave = btoa(JSON.stringify(allTheLevelsSave));
  if(levels.saving.unlocked){
    gainXp("saving",1);
  }
}
//gets the localstorage variable for the save and runs the load function
function loadFromLocalstorage(){
  if(localStorage.allTheLevelsSave != undefined && localStorage.allTheLevelsSave != null){
    if(load(localStorage.allTheLevelsSave)){
      return true;
    }
  }
  return false;
}
//loads the last save you had before you hard reset, this exists for emergencies.
function loadPreHardResetSave(){
  load(localStorage.allTheLevelsSaveBeforeLastHardReset);
}
//loads. uses the save to determine the variables that need to be changed within the levels variable.
function load(save){
  loading = true;
  totalLevels=0;
  totalStars=0;
  achievementsComplete=0;
  var tempAllSaves = JSON.parse(atob(save));
  var temp = tempAllSaves.levelsSave;
  for(var x = 0;x < Object.keys(temp).length;x++){
    //////
    // let toReplace = "levelingUp";
    // let replaceWith = "levelUping";
    // if(Object.keys(temp)[x]==toReplace){
    //   temp[replaceWith] = temp[toReplace];
    //   delete temp[toReplace];
    // }
    ///////
    let levelName = Object.keys(temp)[x];
    let level = levels[levelName];
    level.level = temp[levelName].level;
    level.xpReq = level.xpReqBase*Math.pow(2,level.level);
    level.xp = temp[levelName].xp;
    level.stars = temp[levelName].stars;
    document.getElementById(levelName+"TooltipStarValue").innerHTML = "Stars: "+level.stars;
    unlock(levelName);
    document.getElementById(levelName+"LevelValue").innerHTML = level.level;
    resetXpBar(levelName);
    level.stars = Math.max(level.stars,Math.floor(level.level/10));
    if(level.stars == 1){
      document.getElementById(levelName+"Xp").style.backgroundColor = "rgb(250,250,100)";
    }else if(level.stars == 2){
      document.getElementById(levelName+"Xp").style.backgroundColor = "rgb(140,250,140)";
    }else if(level.stars == 3){
      document.getElementById(levelName+"Xp").style.backgroundColor = "rgb(150,150,250)";
    }else{
      document.getElementById(levelName+"Xp").style.backgroundColor = "rgb(255,255,255)";
    }
    totalStars+=level.stars;
    totalLevels+=level.level;
    gainXpAdv("upsizing",level.stars);
  }
  document.getElementById("totalLevel").innerHTML = totalLevels;
  document.getElementById("resetButton").childNodes[1].innerHTML = (100+25*levels.resetting.level);
  mathematise();
  if(levels.loading.unlocked){
    gainXp("loading",1);
  }
  loadItem(0, tempAllSaves.craftedItemSave);
  loadItem(1, tempAllSaves.equippedItemSave);
  loadItem(2, tempAllSaves.equippedItemSave2);
  loading = false;
  return true;
}
//loads an item, changes item values to the saved ones.
function loadItem(slot, save){
  var loadedItem = {};
  equalsEmptyItem(loadedItem);

  var itemValues = Object.keys(save);
  for(var x = 0;x < itemValues.length;x++){
    if(save[itemValues[x]]!=undefined&&save[itemValues[x]]!=null){
      loadedItem[itemValues[x]] = save[itemValues[x]];
    }
  }

  if(slot==0){
    craftedItem = loadedItem;
  }else if(slot==1){
    equippedItem = loadedItem;
    if(equippedItem.equippementType=="ring"){
      changeElementEnabledStatus("itemAutoclickingSelect",false,false,false);
    }else{
      changeElementEnabledStatus("itemAutoclickingSelect",true,false,false);
      document.getElementById("itemAutoclickingSelect").value = "";
    }
  }else{
    equippedItem2 = loadedItem;
    if(equippedItem2.equippementType=="ring"){
      changeElementEnabledStatus("itemAutoclickingSelect2",false,false,false);
    }else{
      changeElementEnabledStatus("itemAutoclickingSelect2",true,false,false);
      document.getElementById("itemAutoclickingSelect2").value = "";
    }
  }
  writeItemName(slot);
}
//gets the save code. basically creates a variable that holds ONLY the things that could potentially change and cant be calculated, this is to save on storage space and string length, so the exports are short.
function getSaveCode(){
  var levelsSave = {};
  var levelNames = Object.keys(levels);
  for(var x = 0;x < levelNames.length;x++){
    var level = levels[levelNames[x]];
    if(level.unlocked){
      var levelSave = {};
      levelSave.level = level.level;
      levelSave.xp = level.xp;
      levelSave.stars = level.stars;
      levelsSave[levelNames[x]] = levelSave;
    }
  }
  var completeSave = {levelsSave : levelsSave, craftedItemSave : craftedItem, equippedItemSave : equippedItem, equippedItemSave2 : equippedItem2};
  return completeSave;
}
//writes the save code in the export/import textbox
function exportSave(){
  document.getElementById("saveCode").value = btoa(JSON.stringify(getSaveCode()));
  gainXpAdv("exporting",1);
}
//takes the save code in the textbox and runs it throught the load function.
function importSave(){
  var saveCode = document.getElementById("saveCode").value;
  if(saveCode=="XP values"&&levels.moreOptioning.level==0){
    levels.moreOptioning.xp = levels.moreOptioning.xpReq;
  }else if(saveCode=="sec"&&levels.moreOptioning.level==2){
    if(document.getElementById("researchNode").style.display=="block"){
      levels.moreOptioning.xp = levels.moreOptioning.xpReq;
    }
  }else{
    load(saveCode);
  }
  gainXpAdv("importing",1);
}
//resets everything. saves your last save in a separate localstorage variable just in case.
function hardReset(){
  var saveCode = document.getElementById("saveCode").value;
  if(saveCode=="5574"&&levels.moreOptioning.level==4){
    levels.moreOptioning.xp = levels.moreOptioning.xpReq;
    return;
  }
  var allTheLevelsSave = getSaveCode();
  localStorage.allTheLevelsSaveBeforeLastHardReset = btoa(JSON.stringify(allTheLevelsSave));

  hardResetting = true;
  sleepingTime = 0;
  randomNumber = 0;
  selectingUnlocks = [false,false,false,false,false];
  upsizingUnlocks = [false,false];
  craftingUnlocks = [false,false];
  itemUpgradeUnlocks = [false,false];
  itemUpstarUnlocks = [false,false];
  achievementsComplete = 0;

  var delay = 0;
  var levelNames = Object.keys(levels);
  for(var x = 0;x < levelNames.length;x++){
    var level = levels[levelNames[x]];
    if(level.unlocked&&level.type!="ultimate"&&level.type!="achievement"){
      setTimeout(function(level,levelName){
        level.unlocked = false;
        unlockedLevels--;
        totalStars -= level.stars;
        level.stars = 0;
        totalLevels-=level.level;
        level.level = 0;
        level.xp = 0;
        level.xpReq = level.xpReqBase;
        resetXpBar(levelName);
        document.getElementById(levelName+"LevelValue").innerHTML = level.level;
      },delay+3000,level,levelNames[x]);
      setTimeout(function(item){fadeOut(item);},delay,document.getElementById(levelNames[x]+"Level"));
      delay+=100;
    }
  }

  var actionButtons = document.getElementsByClassName("actionButton");
  delay = 0;
  for(var x = 0;x<actionButtons.length;x++){
    setTimeout(function(item){fadeOut(item);},delay,actionButtons[x]);
    changeElementEnabledStatus(actionButtons[x].id,true,true,false);
    delay+=100;
  }

  var hiddenItems = document.getElementsByClassName("hidden");
  delay = 0;
  for(var x = 0;x<hiddenItems.length;x++){
    setTimeout(function(item){fadeOut(item);},delay,hiddenItems[x]);
    changeElementEnabledStatus(hiddenItems[x].id,true,false,false);
    delay+=100;
  }

  setTimeout(function(item){fadeIn(item);},10000,document.getElementById("notDyingLevel"));
  setTimeout(function(){
    hardResetting = false;
    unlock("notDying");
    save();
    loadFromLocalstorage();
  },10000);

  if(!levels.hardResetting.unlocked){
    unlock("hardResetting");
  }
}
//displays a string in log based on the next level you havent unlocked and its hint.
function askForHelp(){
  if(document.getElementById("saveCode").value=="%"&&levels.moreOptioning.level==1){
    levels.moreOptioning.xp=levels.moreOptioning.xpReq;
  }else if(levels.moreOptioning.level==3){//☐☐✓✓✓☐✓✓☐?
    if(!document.getElementById("autoGrowCheck").checked&&!document.getElementById("autoAccelerateCheck").checked&&document.getElementById("autoIncreaseEfficiencyCheck").checked
    &&document.getElementById("autoGenerateCheck").checked&&document.getElementById("autoAbsorbCheck").checked&&!document.getElementById("enableTooltipsCheck").checked
    &&document.getElementById("showXpValueCheck").checked&&document.getElementById("showXpPercentCheck").checked&&!document.getElementById("showXpPerSecCheck").checked){
      levels.moreOptioning.xp=levels.moreOptioning.xpReq;
    }
  }
  var levelKeys = Object.keys(levels);
  for(var x = 0;x < levelKeys.length;x++){
    if(!levels[levelKeys[x]].unlocked){
      addToLog(levels[levelKeys[x]].hint);
      return;
    }
  }
}
//selects an actions tab, basically switches views beetween basic, options, and item tabs by making them dissappear/ appear
function selectActionsTab(tab){
  if(tab=="basic"){
    document.getElementById("basicActionsDiv").style.display = "block";
  }else{
    document.getElementById("basicActionsDiv").style.display = "none";
  }
  if(tab=="meta"){
    document.getElementById("metaActionsDiv").style.display = "block";
    document.getElementById("resetButton").childNodes[1].innerHTML = (100+25*levels.resetting.level);
  }else{
    document.getElementById("metaActionsDiv").style.display = "none";
  }
  if(tab=="item"){
    document.getElementById("itemActionsDiv").style.display = "block";
  }else{
    document.getElementById("itemActionsDiv").style.display = "none";
  }
}
//selects a levels tab, same thing as actions but for basic/ achieves tabs.
function selectLevelsTab(tab){
  if(tab=="basic"){
    document.getElementById("levelsDivHolder").style.display = "block";
  }else{
    document.getElementById("levelsDivHolder").style.display = "none";
  }
  if(tab=="achievements"){
    document.getElementById("achievementsDivHolder").style.display = "block";
  }else{
    document.getElementById("achievementsDivHolder").style.display = "none";
  }
}







//wow that commenting took a long time, and its still trash, lel.
//blank

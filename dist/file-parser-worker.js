var e=require("dayjs"),t=require("lodash/cloneDeep.js"),i=require("events"),a=require("uuid"),n=require("fs"),s=require("path"),r=require("dayjs/plugin/customParseFormat.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=/*#__PURE__*/o(e),l=/*#__PURE__*/o(t),h=/*#__PURE__*/o(i),d=/*#__PURE__*/o(n),u=/*#__PURE__*/o(s),g=/*#__PURE__*/o(r);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},c.apply(this,arguments)}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,p(e,t)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function k(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return f(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,t){if(void 0===t&&(t=0),"number"==typeof e)return isNaN(e)?t:e;var i;try{i=parseInt(e),isNaN(i)&&(i=t)}catch(e){i=t}return i}var b=function(e){this.lineSplit=void 0,this.timestamp=void 0,this.lineSplit=e,this.timestamp=new Date(this.lineSplit[1])},S=/*#__PURE__*/function(e){function t(t){var i;return(i=e.call(this,t)||this).message=void 0,i.message=i.lineSplit[2],i}return v(t,e),t}(b),D=/*#__PURE__*/function(e){function t(t){var i;return(i=e.call(this,t)||this).phaseCode=void 0,i.phaseCode=y(t[2]),i}return v(t,e),t}(b),E=/*#__PURE__*/function(e){function t(t){var i;return(i=e.call(this,t)||this).id=void 0,i.name=void 0,i.classId=void 0,i.class=void 0,i.gearScore=void 0,i.currentHp=void 0,i.maxHp=void 0,i.id=t[2],i.name=t[3]||"Unknown Entity",i.classId=y(t[4]),i.class=t[5]||"UnknownClass",i.gearScore=t[7],i.currentHp=y(t[8]),i.maxHp=y(t[9]),i}return v(t,e),t}(b),N=/*#__PURE__*/function(e){function t(t){var i;return(i=e.call(this,t)||this).id=void 0,i.name=void 0,i.currentHp=void 0,i.maxHp=void 0,i.id=t[2],i.name=t[4]||"Unknown Entity",i.currentHp=y(t[5]),i.maxHp=y(t[6]),i}return v(t,e),t}(b),T=/*#__PURE__*/function(e){function t(t){var i;return(i=e.call(this,t)||this).id=void 0,i.name=void 0,i.killerId=void 0,i.killerName=void 0,i.id=t[2],i.name=t[3]||"Unknown Entity",i.killerId=t[4],i.killerName=t[5]||"Unknown Entity",i}return v(t,e),t}(b),w=/*#__PURE__*/function(e){function t(t){var i;return(i=e.call(this,t)||this).id=void 0,i.name=void 0,i.skillId=void 0,i.skillName=void 0,i.id=t[2],i.name=t[3]||"Unknown Entity",i.skillId=t[4],i.skillName=t[5]||"Unknown Skill",i}return v(t,e),t}(b),H=/*#__PURE__*/function(e){function t(t){var i;return(i=e.call(this,t)||this).id=void 0,i.name=void 0,i.skillId=void 0,i.skillName=void 0,i.skillStage=void 0,i.id=t[2],i.name=t[3]||"Unknown Entity",i.skillId=t[4],i.skillName=t[5]||"Unknown Skill",i.skillStage=y(t[6]),i}return v(t,e),t}(b),A=/*#__PURE__*/function(e){function t(t){var i;return(i=e.call(this,t)||this).id=void 0,i.name=void 0,i.skillId=void 0,i.skillName=void 0,i.skillEffectId=void 0,i.skillEffect=void 0,i.targetId=void 0,i.targetName=void 0,i.damage=void 0,i.damageModifier=void 0,i.isCrit=void 0,i.isBackAttack=void 0,i.isFrontAttack=void 0,i.currentHp=void 0,i.maxHp=void 0,i.id=t[2],i.name=t[3]||"Unknown Entity",i.skillId=y(t[4]),i.skillName=t[5]||"Unknown Skill",i.skillEffectId=y(t[6]),i.skillEffect=t[7],i.targetId=t[8],i.targetName=t[9]||"Unknown Entity",i.damage=y(t[10]),i.damageModifier="1"==t[11],i.isCrit="1"==t[12],i.isBackAttack="1"==t[13],i.isFrontAttack="1"==t[14],i.currentHp=y(t[15]),i.maxHp=y(t[16]),i}return v(t,e),t}(b),I=/*#__PURE__*/function(e){function t(t){var i;return(i=e.call(this,t)||this).id=void 0,i.name=void 0,i.healAmount=void 0,i.id=t[2],i.name=t[3]||"Unknown Entity",i.healAmount=y(t[4]),i}return v(t,e),t}(b),P=/*#__PURE__*/function(e){function t(t){var i;return(i=e.call(this,t)||this).id=void 0,i.name=void 0,i.buffId=void 0,i.buffName=void 0,i.isNew=void 0,i.sourceId=void 0,i.sourceName=void 0,i.shieldAmount=void 0,i.id=t[2],i.name=t[3]||"Unknown Entity",i.buffId=t[4],i.buffName=t[5],i.isNew="1"==t[6],i.sourceId=t[7],i.sourceName=t[8]||"Unknown Entity",i.shieldAmount=y(t[9]),i}return v(t,e),t}(b),O=/*#__PURE__*/function(e){function t(t){var i;return(i=e.call(this,t)||this).id=void 0,i.name=void 0,i.id=t[2],i.name=t[3]||"Unknown Entity",i}return v(t,e),t}(b),x={"Serenade of Salvation":{duration:3},"Holy Aura":{duration:16e3},"Holy Protection":{duration:7e3},Demonize:{duration:1500}},R=/*#__PURE__*/function(){function e(e){void 0===e&&(e=!1),this.eventEmitter=void 0,this.resetTimer=void 0,this.debugLines=void 0,this.isLive=void 0,this.dontResetOnZoneChange=void 0,this.resetAfterPhaseTransition=void 0,this.splitOnPhaseTransition=void 0,this.removeOverkillDamage=void 0,this.phaseTransitionResetRequest=void 0,this.phaseTransitionResetRequestTime=void 0,this.game=void 0,this.encounters=void 0,this.healSources=void 0,this.eventEmitter=new h.default,this.resetTimer=null,this.debugLines=!1,this.isLive=e,this.dontResetOnZoneChange=!1,this.resetAfterPhaseTransition=!1,this.splitOnPhaseTransition=!1,this.removeOverkillDamage=!0,this.phaseTransitionResetRequest=!1,this.phaseTransitionResetRequestTime=0,this.resetState(),this.encounters=[],this.isLive&&setInterval(this.broadcastStateChange.bind(this),100)}var t=e.prototype;return t.resetState=function(){this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"Resetting state"});var e=+new Date;this.game={startedOn:e,lastCombatPacket:e,fightStartedOn:0,entities:{},damageStatistics:{totalDamageDealt:0,topDamageDealt:0,totalDamageTaken:0,topDamageTaken:0,totalHealingDone:0,topHealingDone:0,totalShieldDone:0,topShieldDone:0}},this.healSources=[],this.eventEmitter.emit("reset-state")},t.softReset=function(){this.resetTimer=null;var e=l.default(this.game.entities);this.resetState();for(var t=0,i=Object.keys(e);t<i.length;t++){var a=i[t];+new Date-e[a].lastUpdate>6e5||this.updateEntity(e[a].name,{name:e[a].name,class:e[a].class,isPlayer:e[a].isPlayer,gearScore:e[a].gearScore,maxHp:e[a].maxHp,currentHp:e[a].currentHp})}},t.cancelReset=function(){this.resetTimer&&clearTimeout(this.resetTimer),this.resetTimer=null},t.splitEncounter=function(){var e=l.default(this.game);0==e.fightStartedOn||0==e.damageStatistics.totalDamageDealt&&!e.damageStatistics.totalDamageTaken||this.encounters.push(e),this.resetState()},t.broadcastStateChange=function(){this.eventEmitter.emit("state-change",this.game)},t.parseLogLine=function(e){if(e){var t=e.trim().split("|");if(!(t.length<1)&&t[0]){var i=y(t[0]);try{switch(i){case 0:this.onMessage(t);break;case 1:this.onInitEnv();break;case 2:this.onPhaseTransition(t);break;case 3:this.onNewPc(t);break;case 4:this.onNewNpc(t);break;case 5:this.onDeath(t);break;case 6:this.onSkillStart(t);break;case 7:this.onSkillStage(t);break;case 8:this.onDamage(t);break;case 9:this.onHeal(t);break;case 10:this.onBuff(t);break;case 11:this.onCounterattack(t)}}catch(e){this.eventEmitter.emit("log",{type:"error",message:e})}}}},t.updateEntity=function(e,t){var i={lastUpdate:+new Date};this.game.entities[e]=c({},e in this.game.entities?this.game.entities[e]:{lastUpdate:0,id:"",name:"",class:"",isPlayer:!1,isDead:!1,deathTime:0,gearScore:"",currentHp:0,maxHp:0,damageDealt:0,healingDone:0,shieldDone:0,damageTaken:0,skills:{},hits:{total:0,crit:0,backAttack:0,frontAttack:0,counter:0}},t,i)},t.onMessage=function(e){var t=new S(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onMessage: "+t.message}),t.message.startsWith("Arguments:")||this.eventEmitter.emit("message",t.message)},t.onInitEnv=function(){this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onInitEnv"}),this.isLive?!1===this.dontResetOnZoneChange&&null==this.resetTimer&&(this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"Setting a reset timer"}),this.resetTimer=setTimeout(this.softReset.bind(this),6e3),this.eventEmitter.emit("message","new-zone")):(this.splitEncounter(),this.eventEmitter.emit("message","new-zone"))},t.onPhaseTransition=function(e){var t=new D(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onPhaseTransition: "+t.phaseCode}),this.isLive&&(this.eventEmitter.emit("message","phase-transition-"+t.phaseCode),this.resetAfterPhaseTransition&&(this.phaseTransitionResetRequest=!0,this.phaseTransitionResetRequestTime=+new Date)),!this.isLive&&this.splitOnPhaseTransition&&this.splitEncounter()},t.onNewPc=function(e){var t=new E(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onNewPc: "+t.id+", "+t.name+", "+t.classId+", "+t.class+", "+t.gearScore+", "+t.currentHp+", "+t.maxHp}),this.updateEntity(t.name,c({name:t.name,class:t.class,isPlayer:!0},t.gearScore&&"0"!=t.gearScore&&{gearScore:t.gearScore},{currentHp:t.currentHp,maxHp:t.maxHp}))},t.onNewNpc=function(e){var t=new N(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onNewNpc: "+t.id+", "+t.name+", "+t.currentHp+", "+t.maxHp}),this.updateEntity(t.name,{name:t.name,isPlayer:!1,currentHp:t.currentHp,maxHp:t.maxHp})},t.onDeath=function(e){var t=new T(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onDeath: "+t.name+" "+t.killerName}),this.updateEntity(t.name,{name:t.name,isDead:!0,deathTime:t.timestamp.getTime()})},t.onSkillStart=function(e){var t=new w(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onSkillStart: "+t.id+", "+t.name+", "+t.skillId+", "+t.skillName}),Object.keys(x).includes(t.skillName)&&this.healSources.push({source:t.name,expires:+t.timestamp+x[t.skillName].duration}),this.updateEntity(t.name,{name:t.name,isDead:!1})},t.onSkillStage=function(e){var t=new H(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onSkillStage: "+t.name+", "+t.skillId+", "+t.skillName+", "+t.skillStage})},t.onDamage=function(e){if(!(e.length<16)){var t=new A(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onDamage: "+t.id+", "+t.name+", "+t.skillId+", "+t.skillName+", "+t.skillEffectId+", "+t.skillEffect+", "+t.targetId+", "+t.targetName+", "+t.damage+", "+t.currentHp+", "+t.maxHp}),this.phaseTransitionResetRequest&&this.phaseTransitionResetRequestTime>0&&this.phaseTransitionResetRequestTime<+new Date-1500&&(this.softReset(),this.phaseTransitionResetRequest=!1),this.updateEntity(t.name,{name:t.name}),this.updateEntity(t.targetName,{name:t.targetName,currentHp:t.currentHp,maxHp:t.maxHp});var i=this.game.entities[t.name],a=this.game.entities[t.targetName];if(!a.isPlayer&&this.removeOverkillDamage&&t.currentHp<0&&(t.damage=t.damage+t.currentHp),t.skillName in this.game.entities[t.name].skills||(this.game.entities[t.name].skills[t.skillName]=c({},{name:"",totalDamage:0,maxDamage:0,hits:{total:0,crit:0,backAttack:0,frontAttack:0,counter:0}},{name:t.skillName})),!("Bleed"===t.skillName&&t.damage>1e7)){var n=t.isCrit?1:0,s=t.isBackAttack?1:0,r=t.isFrontAttack?1:0;this.game.entities[t.name].skills[t.skillName].totalDamage+=t.damage,t.damage>this.game.entities[t.name].skills[t.skillName].maxDamage&&(this.game.entities[t.name].skills[t.skillName].maxDamage=t.damage),this.game.entities[t.name].damageDealt+=t.damage,this.game.entities[t.targetName].damageTaken+=t.damage,"Bleed"!==t.skillName&&(this.game.entities[t.name].hits.total+=1,this.game.entities[t.name].hits.crit+=n,this.game.entities[t.name].hits.backAttack+=s,this.game.entities[t.name].hits.frontAttack+=r,this.game.entities[t.name].skills[t.skillName].hits.total+=1,this.game.entities[t.name].skills[t.skillName].hits.crit+=n,this.game.entities[t.name].skills[t.skillName].hits.backAttack+=s,this.game.entities[t.name].skills[t.skillName].hits.frontAttack+=r),i.isPlayer&&(this.game.damageStatistics.totalDamageDealt+=t.damage,this.game.damageStatistics.topDamageDealt=Math.max(this.game.damageStatistics.topDamageDealt,i.damageDealt)),a.isPlayer&&(this.game.damageStatistics.totalDamageTaken+=t.damage,this.game.damageStatistics.topDamageTaken=Math.max(this.game.damageStatistics.topDamageTaken,a.damageTaken)),0===this.game.fightStartedOn&&(this.game.fightStartedOn=+t.timestamp),this.game.lastCombatPacket=+t.timestamp}}},t.onHeal=function(e){var t=new I(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onHeal: "+t.id+", "+t.name+", "+t.healAmount});for(var i,a="",n=k(this.healSources);!(i=n()).done;){var s=i.value;if(s.expires>=+t.timestamp){a=s.source;break}}a&&(this.updateEntity(a,{name:a}),this.game.entities[a].healingDone+=t.healAmount,this.game.entities[a].isPlayer&&(this.game.damageStatistics.totalHealingDone+=t.healAmount,this.game.damageStatistics.topHealingDone=Math.max(this.game.damageStatistics.topHealingDone,this.game.entities[a].healingDone)))},t.onBuff=function(e){var t=new P(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onBuff: "+t.id+", "+t.name+", "+t.buffId+", "+t.buffName+", "+t.sourceId+", "+t.sourceName+", "+t.shieldAmount}),t.shieldAmount&&t.isNew&&(this.updateEntity(t.name,{name:t.name}),this.game.entities[t.name].shieldDone+=t.shieldAmount,this.game.entities[t.name].isPlayer&&(this.game.damageStatistics.totalShieldDone+=t.shieldAmount,this.game.damageStatistics.topShieldDone=Math.max(this.game.damageStatistics.topShieldDone,this.game.entities[t.name].shieldDone)))},t.onCounterattack=function(e){var t=new O(e);this.debugLines&&this.eventEmitter.emit("log",{type:"debug",message:"onCounterattack: "+t.id+", "+t.name}),this.updateEntity(t.name,{name:t.name}),this.game.entities[t.name].hits.counter+=1},e}();m.default.extend(g.default),module.exports=function(e,t,i,n,s){try{var r=e.slice(0,-4),o=r+".json",m=d.default.readFileSync(u.default.join(i,e),"utf-8");if(!m)return s(null,"empty log");var l=new R(!1);!0===t&&(l.splitOnPhaseTransition=!0);for(var h,g=k(m.split("\n").filter(function(e){return null!=e&&""!=e}));!(h=g()).done;)l.parseLogLine(h.value);l.splitEncounter();var v=l.encounters;if(v.length>0){for(var p,f={encounters:[]},y=k(v);!(p=y()).done;){var b=p.value,S=b.lastCombatPacket-b.fightStartedOn;if(!(S<=1e3)){for(var D={name:"",damageTaken:0,isPlayer:!1},E=0,N=Object.values(b.entities);E<N.length;E++){var T=N[E];T.damageTaken>D.damageTaken&&(D={name:T.name,damageTaken:T.damageTaken,isPlayer:T.isPlayer})}var w={duration:S,mostDamageTakenEntity:D},H=a.v4(),A=r+"_"+H+"_encounter.json";f.encounters.push(c({encounterId:H,encounterFile:A},w)),d.default.writeFileSync(u.default.join(n,A),JSON.stringify(c({},b,w)))}}return d.default.writeFileSync(u.default.join(n,o),JSON.stringify(f)),s(null,"log parsed")}return s(null,"no encounters found")}catch(e){return s(e,"log parser error")}};
//# sourceMappingURL=file-parser-worker.js.map

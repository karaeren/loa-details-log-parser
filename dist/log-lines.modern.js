function i(i,s=0){if("number"==typeof i)return isNaN(i)?s:i;let t;try{t=parseInt(i),isNaN(t)&&(t=s)}catch(i){t=s}return t}class s{constructor(i){this.lineSplit=void 0,this.timestamp=void 0,this.lineSplit=i,this.timestamp=new Date(this.lineSplit[1])}}class t extends s{constructor(i){super(i),this.message=void 0,this.message=this.lineSplit[2]}}class e extends s{constructor(i){super(i),this.playerId=void 0,this.playerId=i[2]}}class n extends s{constructor(s){super(s),this.phaseCode=void 0,this.phaseCode=i(s[2])}}class h extends s{constructor(s){super(s),this.id=void 0,this.name=void 0,this.classId=void 0,this.class=void 0,this.gearScore=void 0,this.currentHp=void 0,this.maxHp=void 0,this.id=s[2],this.name=s[3]||"Unknown Entity",this.classId=i(s[4]),this.class=s[5]||"UnknownClass",this.gearScore=s[7],this.currentHp=i(s[8]),this.maxHp=i(s[9])}}class o extends s{constructor(s){super(s),this.id=void 0,this.name=void 0,this.currentHp=void 0,this.maxHp=void 0,this.id=s[2],this.name=s[4]||"Unknown Entity",this.currentHp=i(s[5]),this.maxHp=i(s[6])}}class d extends s{constructor(i){super(i),this.id=void 0,this.name=void 0,this.killerId=void 0,this.killerName=void 0,this.id=i[2],this.name=i[3]||"Unknown Entity",this.killerId=i[4],this.killerName=i[5]||"Unknown Entity"}}class a extends s{constructor(i){super(i),this.id=void 0,this.name=void 0,this.skillId=void 0,this.skillName=void 0,this.id=i[2],this.name=i[3]||"Unknown Entity",this.skillId=i[4],this.skillName=i[5]||"Unknown Skill"}}class l extends s{constructor(s){super(s),this.id=void 0,this.name=void 0,this.skillId=void 0,this.skillName=void 0,this.skillStage=void 0,this.id=s[2],this.name=s[3]||"Unknown Entity",this.skillId=s[4],this.skillName=s[5]||"Unknown Skill",this.skillStage=i(s[6])}}class r extends s{constructor(s){super(s),this.id=void 0,this.name=void 0,this.skillId=void 0,this.skillName=void 0,this.skillEffectId=void 0,this.skillEffect=void 0,this.targetId=void 0,this.targetName=void 0,this.damage=void 0,this.damageModifier=void 0,this.isCrit=void 0,this.isBackAttack=void 0,this.isFrontAttack=void 0,this.currentHp=void 0,this.maxHp=void 0,this.id=s[2],this.name=s[3]||"Unknown Entity",this.skillId=i(s[4]),this.skillName=s[5]||"Unknown Skill",this.skillEffectId=i(s[6]),this.skillEffect=s[7],this.targetId=s[8],this.targetName=s[9]||"Unknown Entity",this.damage=i(s[10]),this.damageModifier="1"==s[11],this.isCrit="1"==s[12],this.isBackAttack="1"==s[13],this.isFrontAttack="1"==s[14],this.currentHp=i(s[15]),this.maxHp=i(s[16])}}class c extends s{constructor(s){super(s),this.id=void 0,this.name=void 0,this.healAmount=void 0,this.id=s[2],this.name=s[3]||"Unknown Entity",this.healAmount=i(s[4])}}class v extends s{constructor(s){super(s),this.id=void 0,this.name=void 0,this.buffId=void 0,this.buffName=void 0,this.isNew=void 0,this.sourceId=void 0,this.sourceName=void 0,this.shieldAmount=void 0,this.id=s[2],this.name=s[3]||"Unknown Entity",this.buffId=s[4],this.buffName=s[5],this.isNew="1"==s[6],this.sourceId=s[7],this.sourceName=s[8]||"Unknown Entity",this.shieldAmount=i(s[9])}}class m extends s{constructor(i){super(i),this.id=void 0,this.name=void 0,this.id=i[2],this.name=i[3]||"Unknown Entity"}}export{v as LogBuff,m as LogCounterattack,r as LogDamage,d as LogDeath,c as LogHeal,e as LogInitEnv,t as LogMessage,o as LogNewNpc,h as LogNewPc,n as LogPhaseTransition,l as LogSkillStage,a as LogSkillStart};
//# sourceMappingURL=log-lines.modern.js.map

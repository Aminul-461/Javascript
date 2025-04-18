// load time data js
import {assert} from " ./assert.js";
class loadTimeData {
    data_= null;
    set data(value){
        assert(!this.data_,"Re-setting data.");
        this.data_=value
    }
    valueExists(id){
        assert(this.data_,"No data.Did you remember to include strings.js?");
        return id in this.data_
    }
    getValue(id){
        assert(this.data_,"No data.Did you remember to include string.js?");
        const value=this.data_[id];
        assert(typeof value !=="undefined","could not find value for"+id);
        return value
    }
    getString(id) {
        const value = this.getValue(id);
        assert(typeof value==="string",`[${value}] (${id}) is not string`);
        return value

    }
    getStringF(id, ...args) {
        const value= this.getString(id);
        if(!value){
            return ""
        }
        return this.substituteString(value, ...args)
    }

    substituteString(lebel1, ...args){
return lable1.replace(/\$(.|$|\n)/g,(function(m){
    assert(m.match(/\$[$1-9]/),"Unescaped $ found is localized string.");
    if(m=="$$") {
        return " $"
    }
    const substitute =args[Number(m[1])-1];
    if (subtitute===undefined  ||substitute=== null) {
        return ""

    }
    return substitute.toString()
}
))
    }
   getSubstitutedStringPieces(label, ... args) {
    const pieces=(label.match(/(\$[1-9]) | (([^$]|\$([^1-9] |$)) +)/g) || []).map((function(p) {
        if(!p.match(/^\$[1-9]$[1-9]$/)) {
            assert((p.match(/\$/g) || []).length % 2 ===0,"Unescaped $ found is localized string.");
            return {
                value: p.replace(/\$\$/g,"$"),
                arg:null
            }
        }
        return  {
            value: substitute.toString(),
            arg: p 
        }
    }
));
return pieces
   }
   getBoolean(id){
    const  value =this.getValue(id);
    assert(typeof value === "boolean",`[${value}] (${id}) is not a boolean`);
    return value

   }
   gerInteger(id) {
    const value=this.getValue(id);
    assert(typeof value==="number",`[${value}] (${id}) is not a number`);
    assert(value===Math.floor(value),"Number is not integer:"  +value);
    return value
   }
   overrifeValues(replacements){

    assert(typeof replacements==="object","Replacements must be a dictionary object.");
    assert(this.data_,"Data must exist before being overridden");
    for(const key in replacements){
        this.data_[key] =replacements[key]
    }
   }
   resetForTesting(newData=null){
    this.data_=newData
   }
   isInitialized(){
    return this.data_!== null
   }
 }
 export const loadTimeData=new loadTimeData;
import { loadTimeData } from "./yout1";

const CALCULATOR = "search -calculator-answer";
const DOCUMENT_Math_TYPE="document";
const PEDAL ="pedal";
class RealboxIconElement extends polymerElement {
    static get is () {
        return "cr-realbox-icon"
    }
    static get template() {
        return getTemolate$8()
    }
    static get properties() {
        return {
            backgroundImage:{ //object
                type:String,
                computed:`computeBackgroundImage_(match.*)`,
                reflecToAttribute:true
            },
            defaultIcon:{
                type:String,
                value:""
            },
            expandedStateIconsChromeRefresh:{
                type:Boolean,
                value:()=>loadTimeData.getBoolean("realboxCr23ExpandedStateIcons"),
                reflectToAttribute:true
            },
            hasIconContainerBackground :{
                type:Boolean,
                computed:`computeHasIconConinerBackground_(match.*,isWeatherAnswer)`,
                reflectToAttribute:true
            },
            inSearchbox:{
                type:Boolean,
                value:false,
                reflecToAttribute:true
            },
            isAnswer:{
                type:Boolean,
                computed:`computeIsAnswer_(match)`,
                reflecToAttribute:true
            },
            isWeatherAnswer:{
                type:Boolean,
                computed:`computeIsWeatherAnswer_(match)`,
                reflecToAttributez:true
            },

            maskImage:{
                type:String,
                computed:`computeMaskImage_(match)`,
                reflecToAttribute:true
            },

            match:{
                type:object
            },

            iconStyle_:{
                type:Style,
                computed:`computeIconStyle_(backgroundImage,maskImage)`

            },
            
            imageSrc_:{
                type:String,
                computed:`computeImageSrc_(match.imageUrl,match)`,
                observer:"onImageSrcChanged_"
            },
            imageLoading_:{
                type:Boolean,
                value:false
            },

            inSidePanel_:{
                type:Boolean,
                value:()=>loadTimeData.getBoolean("searchboxInSideP-anel"),
                reflecToAttribute:true
            }
        




        }
    }



}

function decodeString16(str){
    return str ? str.data.map((ch=>String.fromCodePoint(ch))).join(""): ""

}

function mojoString16(str){
    const array= new Array(str.length);
    for(let i=0;i <str.length; ++i) {
        array[i] = str.charCodeAt(i)
    }
    return {
        data:array
    }
}

function mojoTimeTicks(mojoTimeTicks){
    return {
        internalValue:BigInt(Math.floor(timeTicsks * 1e3))
    }
}
function sideTypeToclass(sideType){
    switch (sideType){
        case sideType.kDefaultPrimary:
            return "primary-side";
            case sideType.kSecondary:
                return "secondary-side";
                default:
                    assertNotReached("Unexpected side type")
                    

    }
}

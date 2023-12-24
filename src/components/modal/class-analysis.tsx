
import { dataObj } from "../../utils/Wine-Data"
import { Alcohol } from "../../interface/alcohol.interface"
import ClassAnalysisRender from "../views/class-analysis-render/class-analysis-render"


let alcoholDto:Alcohol[] = dataObj // Json Data
let classArr:any = []; // no. of classes to be rendered
let fieldValue:any = {}; // storing array data of class according to field name
let renderFields:string[] = ['Flavanoids', 'Gamma'] // field names for computation

const ClassAnalysis = () => {
    classArr = getTotalClass();
    return (
      <>
      {renderFields.map((field:string, index:number)=><ClassAnalysisRender fieldName={field} fieldValue = {getFieldValue(field)} key={index}/>)}
      </>
    );
}

// get total no. of classes 
let getTotalClass = ()=>{
  let getAllClass: number[] = [];
  alcoholDto.forEach((res: any)=>res.Alcohol ? getAllClass.push(res.Alcohol) : "")
  return new Set(getAllClass)
}


// get required field value 
let getFieldValue = (fieldName: string) =>{
  fieldValue[fieldName] = []

  // loop to insert className obj inside fieldValue which will be equals to total number of classes
  for (const i of classArr) {
    fieldValue[fieldName][i-1] = {'className' : []}
  }


  switch(fieldName){

    case 'Flavanoids':
      for(let i = 0; i<alcoholDto.length; i++){
        // pushing data to flavanoids className array according to loop index
        fieldValue[fieldName][alcoholDto[i]['Alcohol']-1]['className'].push(alcoholDto[i]['Flavanoids'])
      }
      break;


    case 'Gamma':
      for(let i = 0; i<alcoholDto.length; i++){
        let gamma = 0;
        gamma = +((+alcoholDto[i].Ash * +alcoholDto[i].Hue)/ +alcoholDto[i].Magnesium).toFixed(3);
        // pushing data to gamma className array according to loop index
        fieldValue[fieldName][alcoholDto[i]['Alcohol']-1]['className'].push(gamma)
      }
      break;

      default:
        break;
  }

  return fieldValue[fieldName]
}

export default ClassAnalysis
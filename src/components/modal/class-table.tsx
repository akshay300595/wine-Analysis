import ClassTableRender from "../views/class-table-render/class-table-render"

let fieldValArr:any[] = [] 
let mean:any = [];
let median:any = [];
let mode:any = [];
const ClassTable = (props: any) => {
  fieldValArr = props.tableDto.fieldValue;
  getAnalysis();
  return (
    <ClassTableRender name={props.tableDto.fieldName} mean={mean} median={median} mode={mode}/>
  )
}

export default ClassTable

// finding mean
let getMean = (arr:any) => {
  let sum = arr.reduce((total:any, val:any)=>total + +val)
  return sum/arr.length;
}

// finding median
let getMedian = (arr:any) => {
  if(arr.length === 0){
    return NaN;
  }
  else{

    const sortedArray = arr.slice().sort((a:any, b:any) => a - b);// array sorted
    const middleIndex = Math.floor(sortedArray.length / 2);// finding middle index of sorted array
  
    // for odd 
    if (sortedArray.length % 2 === 1) {
      return sortedArray[middleIndex];
    }
    // for even
    else{
      const middleElementsSum = sortedArray[middleIndex - 1] + sortedArray[middleIndex];
      return middleElementsSum / 2;
    }
  }
  }


// finding mode
  let getMode = (arr:any) => {
    if (arr.length === 0) {
      return [];
    } 
  
    else{

    const frequencyMap:any = {}; // map to store frequency of each repeating data

    arr.forEach((element:any) => {
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });
  

    const maxFrequency = Math.max(...Object.values(frequencyMap) as number[]);// finding max value to get most repeating element
    const modes = Object.keys(frequencyMap).filter(
      key => frequencyMap[key] === maxFrequency // finding out all keys from frequency map whose value is equal to maxFrequency
    );

    // const numericModes = modes.map(Number);
    return modes;
    }  
  }



let getAnalysis = ()=>{
  mean = [];
  median =[];
  mode = [];
for(let i = 0; i<fieldValArr.length; i++){
  mean.push(getMean(fieldValArr[i]['className']));
  median.push(getMedian(fieldValArr[i]['className']));
  mode.push(getMode(fieldValArr[i]['className']));
}
}







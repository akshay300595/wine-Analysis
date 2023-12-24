import "./class-table-render.scss"

const ClassTableRender = (props: any) => {
  
  return (
    <>
      <table className="table-sub-container">
            <tr className="table-row">
                <th>Measure</th>
                {props.mean.map((val:any, index:any)=><th key={index}>class {index+1}</th>)}
            </tr>

            <tr className="table-row">
                <th>{props.name} Mean</th>
                {props.mean.map((val:any, index:any)=><td key={index}>{val.toFixed(3)}</td>)}
            </tr>

            <tr className="table-row">
            <th>{props.name} Median</th>
                {props.median.map((val:any, index:any)=><td key={index}>{val.toFixed(3)}</td>)}
            </tr>


            <tr className="table-row">
            <th>{props.name} Mode</th>
                {props.mode.map((val:any, index:any)=><td key={index}>{(+val[0]).toFixed(3)}</td>)}
            </tr>
  


      </table>
    </>
  )
}

export default ClassTableRender
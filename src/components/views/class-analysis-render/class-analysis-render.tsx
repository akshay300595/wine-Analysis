import React from 'react'
import "./class-analysis-render.scss"
import ClassTable from '../../modal/class-table'

const ClassAnalysisRender = (prop:any) => {
  return (
    <>
      <div className='table-container'>
          <ClassTable tableDto={prop}/>
      </div>
    </>
  )
}

export default ClassAnalysisRender
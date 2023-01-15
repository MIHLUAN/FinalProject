import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArrJobByNameApi } from '../../redux/reducers/jobReducer';
import JobItem from './JobItem';
const JobList = () => {
  
  const { arrJobByName } = useSelector((state) => state.jobReducer);
  console.log(arrJobByName);

  useEffect(() => {
    const header = document.querySelector('.header-section');
    header.classList.add('is-sticky')
    header.classList.add('is-sticky1')

  });
  const newArrJob=(arrTypeJob)=>{
    const rows = [];
    for (const i in arrTypeJob) {
        rows.push(arrTypeJob[i]);
    }
    return rows
}

  return (

    <div className='jobList' style={{  paddingTop: '200px' }}>
      <div className='container row job_Item'>
        {newArrJob(arrJobByName)?.map((item,index)=>{
         return JobItem(item,index)
        })}
        
  </div>
    </div>

  )
}

export default JobList
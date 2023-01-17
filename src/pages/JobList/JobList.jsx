import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArrJobByNameApi } from '../../redux/reducers/jobReducer';
import JobItem from './JobItem';
import { Button, Input, Space, Switch } from 'antd';
import { PaginatedList } from 'react-paginated-list';
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
  const renderNotFoundForSearch=()=>{
    console.log('kkk',arrJobByName.length);
    if(arrJobByName?.length===0)
    return <div className='text-center'>
   <img width={'500px'} className='mb-4' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/apps/empty-search-results.229c0d3.png" alt="empty result image" />
    <h3 className='fw-bold'>No Services Found For Your Search</h3> 
    </div>
    return 
  }

  return (

    <div className='jobList' style={{  paddingTop: '180px',paddingBottom:'50px' }}>
      <div className='container row job_Item'>
        <h3>Result </h3>
        <div className='mt-2 mb-2 d-flex justify-content-between' >
        <div className='left d-flex justify-content-start'>
          <select className='me-3 fw-bold'><option >Category</option></select>
          <select className='me-3 fw-bold'><option >Seller Detalls</option></select>
          <select className='me-3 fw-bold'><option >Budget</option></select>
          <select className='fw-bold'><option >Dellvery Time</option></select>
        </div>
        <div className='right d-flex justify-content-end'>
        <Switch
        className='me-1'
          style={{width:'10px'}}
          checked={false}
          checkedChildren="Input"
          unCheckedChildren=""
        />
        <p className='me-3 fw-bold'>Pro Servlces</p>
        <Switch
        className='me-1'
        style={{width:'10px'}}
          checked={false}
          checkedChildren="Input"
          unCheckedChildren=""
        />
        <p className='me-3 fw-bold'>Pro Local sellers</p>
        <Switch
        className='me-1'
        style={{width:'10px'}}
          checked={false}
          checkedChildren="Input"
          unCheckedChildren=""
        />
        <p className=' fw-bold'>Pro Online seller</p>

        </div>
        </div>
        {renderNotFoundForSearch()}
        <PaginatedList
          list={newArrJob(arrJobByName)}
          itemsPerPage={8}
          renderList={(list) => (
            <div className='row'>
              {list.map((item, index) => {
                return JobItem(item, index)
              })}

            </div>
          )}
        />
        
        
  </div>
    </div>

  )
}

export default JobList
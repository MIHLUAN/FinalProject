import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../..';
import JobType from '../../pages/JobType/JobType';
import { getArrJobByTypeDetailApi, getMenuApi } from '../../redux/reducers/jobReducer';

const MenuHome = () => {
    const { typeJob } = useSelector(state => state.jobReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        const action = getMenuApi();
        dispatch(action);
    }, []);
    // console.log(typeJob)
    const newArrJob=(arrTypeJob)=>{
        const rows = [];
        for (const i in arrTypeJob) {
            rows.push(arrTypeJob[i]);
        }
        return rows
    }
    // const renderMenuDetail=(arrTypeJob)=>{
       
    //     return newArrJob(arrTypeJob).map((dsjop,index)=>{
    //         console.log(dsjop);
    //        })
    // }
    
    const renderJob=(e)=>{
        const action = getArrJobByTypeDetailApi(e);
        dispatch(action);
        history.push('/joblist');
        // console.log(e)
    }
    const renderMenu = (arrTypeJob) => {
        // const rows = [];
        // for (const i in arrTypeJob) {
        //     rows.push(arrTypeJob[i]);
        // }
        // console.log(arrTypeJob)
        return newArrJob(typeJob).map((item, index) => {
            // console.log(item)
            return <div key={index} class="dropdown">
                <button class="nut_dropdown">{item?.tenLoaiCongViec}</button>
                <div class="noidung_dropdown d-flex">
                {
                    newArrJob(item?.dsNhomChiTietLoai)?.map((dsjob,index)=>{
                        // console.log(dsjob);
                        return <>
                        <div key={index} className='loaiCV'>
                        <p className=''>{dsjob?.tenNhom}</p>
                        {
                            newArrJob(dsjob?.dsChiTietLoai)?.map((job,index)=>{
                                // console.log(job);
                                return  <a key={index} onClick={()=>renderJob(job.id)} href="#">{job?.tenChiTiet}</a>
                            })
                        }
                      
                </div>
                        </>
                    })
                
                }
                </div>
            </div>
        })
    }
    return (
        <div>{renderMenu(typeJob)}</div>
    )
}

export default MenuHome
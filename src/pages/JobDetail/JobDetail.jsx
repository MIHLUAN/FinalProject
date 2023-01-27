import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getJobDetailApi } from '../../redux/reducers/jobReducer';

const JobDetail = () => {
  const { JobDetail } = useSelector((state) => state.jobReducer);
  console.log(JobDetail[0]?.tenChiTietLoai);
  const param=useParams();
  console.log(param.id);
  const dispatch=useDispatch();
  useEffect(()=>{
    const action = getJobDetailApi(param.id);
    dispatch(action);
  },[param.id])
  const renderStar=(numberStar)=>{
    let x=""
    for(let i=0;i<numberStar;i++){
      x+="★"
    }

    return <span className='star'>{x}</span>
  }
  return (
    <div className='jobDetail' style={{  paddingTop: '150px',paddingBottom:'50px' }}>
    <div className='container'>
    <div className='content d-flex'>
    <div className='left'>
    <div className='text-primary'>{JobDetail[0]?.tenLoaiCongViec}<span> <i class="fa fa-angle-right"> </i></span> {JobDetail[0]?.tenNhomChiTietLoai}<span> <i class="fa fa-angle-right"></i> </span>{JobDetail[0]?.tenChiTietLoai}</div>
    <h3 className='nameJob mt-4 mb-3'>{JobDetail[0]?.congViec?.tenCongViec}</h3>
    <div className='info'>
    <div className='avatar'><img src={JobDetail[0]?.avatar}/></div>
    <span className='name_nguoiTao'>{JobDetail[0]?.tenNguoiTao}</span>
    <span className='level'>Top Rated Seller |</span>
    {renderStar(JobDetail[0]?.congViec?.saoCongViec)}
    <span className='star'>{JobDetail[0]?.congViec?.saoCongViec}</span>
    <span>(<span>{JobDetail[0]?.congViec?.danhGia}</span>)</span>
    </div>
    <div className='img'>
    <img src={JobDetail[0]?.congViec?.hinhAnh}/>
    </div>
    </div>
    <div className='right'>
    <div className='tableRight'>
    <div className='header-table d-flex'>
    <div className=''>Basic</div>
    <div className=''>Standard</div>
    <div>Premlum</div>
    </div>
    <div className='body-table'>
    <div className='row'>
    <div className='col text-start'>Standard</div><div className='col text-end'>${JobDetail[0]?.congViec?.giaTien}</div>
    </div>
    <p className='mb-4 text'>Create a simle web application for your bussiness</p> 
    <p className='mota'> {JobDetail[0]?.congViec?.moTaNgan}</p>
    <div className='btnContinue'>
    Continue(<span>${JobDetail[0]?.congViec?.giaTien}</span>)
    </div>
    <div className='linkfooter'>Compare Packages</div>
    </div>
    <div>
    </div>
    </div>
    </div>
    </div> 
    </div>
    </div>
  )
}

export default JobDetail
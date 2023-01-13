import React, { useEffect } from 'react'

const JobList = () => {
  useEffect(() => {
    const header = document.querySelector('.header-section');
    header.classList.add('is-sticky') 
    header.classList.add('is-sticky1')
});


  return (
            
<div style={{height:'75vh'}}>JobList</div>

  )
}

export default JobList
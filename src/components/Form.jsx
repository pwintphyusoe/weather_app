import React, { useRef } from 'react'
import Swal from 'sweetalert2'

const Form = ({fetchData}) => {

    const searchKey = useRef();

    // const searchingData = () => {
    //     fetchData(searchKey.current.value);
    //     searchKey.current.value='';
    // }

    
    const searchingData = () => {
        if(searchKey.current.value !== ""){
        fetchData(searchKey.current.value);
        searchKey.current.value='';
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "Please Enter the country name OR city name!"
      });
    }
    }
  return (
    <div className='p-3 d-flex'>
        <input type="text" ref={searchKey} className="form-control me-1" id="" />
        <input type="button" onClick={() => searchingData() } value="Search" className='btn btn-dark text-white' />
    </div>
  )
}

export default Form
import React from 'react'

function PanForm(props) {
  return (
    <>
      
    <h4  className='m-3'>PAN Information</h4>
    <div className='d-flex flex-wrap'>
        <div className='col-sm-6 p-3'>
            <p>PAN Name</p>
            <input type="text" ></input>
        </div>
        <div className='col-sm-6 p-3'>
            <p>PAN Number</p>
            <input type="text"></input>
        </div>
        <div className='col-sm-6 p-3'>
            <p>PAN Image</p>
            <input type="file"></input>
        </div>
    </div>
    <div>
        <button onCLick={props.prevStep}>Previous </button>
        <button onClick={props.nextStep}>Save and Finish</button>
    </div>
    </>
  )
}

export default PanForm
import React from 'react'

function PanForm(props) {
  return (
    <>
      
    <h4  className='kyc-heading'>PAN Information</h4>
    <div className='d-flex flex-wrap'>
        <div className=' kyc-input-div col-sm-6 p-3'>
            <p>PAN Name</p>
            <input type="text" ></input>
        </div>
        <div className='kyc-input-div col-sm-6 p-3'>
            <p>PAN Number</p>
            <input type="text"></input>
        </div>
        <div className='kyc-input-div col-sm-6 p-3'>
            <p>PAN Image</p>
            <input type="file"></input>
        </div>
    </div>
    <div>
        <button className="kyc-buttons" onCLick={props.prevStep}>Previous </button>
        <button className="kyc-buttons" onClick={props.nextStep}>Save and Finish</button>
    </div>
    </>
  )
}

export default PanForm
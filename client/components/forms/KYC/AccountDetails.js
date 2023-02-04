import React from 'react'

function AccountDetails(props) {
  return (
    <>
      
    <h4  className='m-3'>Account Details</h4>
    <div className='d-flex flex-wrap'>
        <div className='col-sm-6 p-3'>
            <p>Account Holder Name</p>
            <input type="text" ></input>
        </div>
        <div className='col-sm-6 p-3'>
            <p>Account Number</p>
            <input type="text"></input>
        </div>
        <div className='col-sm-6 p-3'>
            <p>Bank Name</p>
            <input type="text"></input>
        </div>
        <div className='col-sm-6 p-3'>
            <p>IFSC Code</p>
            <input type="text"></input>
        </div>
        <div className='col-sm-6 p-3'>
            <p>Upload Cancel Cheque/ Passbook</p>
            <input type="file"></input>
        </div>
        <div className='col-sm-6 p-3'>
            <p>Paytm mobile No.</p>
            <input type="text" ></input>
        </div>
        <div className='col-sm-6 p-3'>
            <p>*Instructions:</p>
            <p> 1. Make sure the bank holder name and account number are visible on the file uploaded</p>
            <p> 2. You can upload scan,photo,PDF type document</p>
        </div>
    </div>
    <div>
        <button onCLick={props.prevStep}>Previous </button>
        <button onClick={props.nextStep}>Next</button>
    </div>
    </>
  )
}

export default AccountDetails
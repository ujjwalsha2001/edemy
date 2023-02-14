import React from "react";

function ProfileForm(props) {
  return (
    <>
      <h4 className="kyc-heading">Profile Information</h4>
      <div className="d-flex flex-wrap">
        <div className="kyc-input-div col-sm-6 p-3">
          <p>First Name</p>
          <input type="text" readOnly="readOnly" placeholder="Kislay"></input>
        </div>
        <div className="kyc-input-div col-sm-6 p-3">
          <p>Last Name</p>
          <input type="text" readOnly="readOnly" placeholder="Singh"></input>
        </div>
        <div className="kyc-input-div col-sm-6 p-3">
          <p>Mobile Number</p>
          <input
            type="text"
            readOnly="readOnly"
            placeholder="234234234"
          ></input>
        </div>
        <div className="kyc-input-div col-sm-6 p-3">
          <p>City</p>
          <input type="text" placeholder="City"></input>
        </div>
        <div className="kyc-input-div col-sm-6 p-3">
          <p>State</p>
          <input type="text" placeholder="State"></input>
        </div>
        <div className="kyc-input-div col-sm-6 p-3">
          <p>Document Type</p>
          <input type="text" placeholder="document"></input>
        </div>
        <div className="kyc-input-div col-sm-6 p-3">
          <p>Upload Front Side</p>
          <input type="file" placeholder="document"></input>
        </div>
        <div className="kyc-input-div col-sm-6 p-3">
          <p>Upload Back Side</p>
          <input type="file" placeholder="document"></input>
        </div>
      </div>
      <div>
        <button className="kyc-buttons" onClick={props.nextStep}>Next</button>
      </div>
    </>
  );
}

export default ProfileForm;

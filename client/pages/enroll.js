import React from 'react'
import axios from "axios"

function enroll() {

  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === '[object Date]'
  }
  
  function isObj(val) {
    return typeof val === 'object'
  }
  
   function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val)
    } else {
      return val
    }
  }
  
  function buildForm({ action, params }) {
    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', action)
  
    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', key)
      input.setAttribute('value', stringifyValue(params[key]))
      form.appendChild(input)
    })
  
    return form
  }
  
   function post(details) {
    const form = buildForm(details)
    document.body.appendChild(form)
    form.submit()
    form.remove()
  }


const getData=async(data)=>{
    return fetch('http://localhost:8000/api/payment',{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then(response=>response.json()).catch(err=>console.log(err))
}
const makePayment=()=>{
    getData({amount:500,email:"abc@gmail.com"}).then(response=>{
      var information={
        action:`https://securegw-stage.paytm.in/order/process`,
        params:response
      }
      post(information)
    })
}
  return (
    <div>
        <button onClick={makePayment}>Pay Using Paytm</button>
    </div>
  )
}

export default enroll
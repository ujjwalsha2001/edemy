import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import AWS from "aws-sdk";
import formidable from "express-formidable";
var PaytmChecksum = require('./PaytmChecksum')
require('dotenv').config()
const {v4:uuidv4}=require('uuid')

export const pay = async (req, res) => {
  const { email, amount } = req.body;
  const total = JSON.stringify(amount)
    let params=[];
    // initialize params using .env
    params['MID']=process.env.MID
    params['WEBSITE']=process.env.WEBSITE
    params['CHANNEL_ID']=process.env.CHANNEL_ID
    params['INDUSTRY_TYPE_ID']=process.env.INDUSTRY_TYPE_ID
    params['ORDER_ID']=uuidv4()
    params['TXN_AMOUNT']=total
    params['CALLBACK_URL']='http://localhost:8000/api/payment/callback'
    params["EMAIL"]=email
    params["MOBILE_NO"]="7830982282"
    // console.log(req.body);
    // validation
    if (!email) return res.status(400).send("Email is required");
    if (!amount) return res.status(400).send("Amount is required");
    var paytmChecksum =await  PaytmChecksum.generateSignature(params, process.env.KEY).then(function(result){
            let paytmParam={
                ...params,
                "CHECKSUMHASH":result
            }
            res.json(paytmParam)
        }).catch(function(error){
            return res.status(400).send("Error. Try again.");
        });
    } 

export const callback=async(req,res)=>{
    const form=new formidable.IncomingFrom();
    form.parse(req,(err,fields,file)=>{
        console.log(fields)
    })
}

const nodemailer = require('nodemailer');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const q = faunadb.query;

export async function handler(event, context, callback){


try{
 min="777";

  return {
    statusCode: 200,
    body: min
  }
}catch(err){
//console.log(err)
  return {
    statusCode: 400,
    body: "err"
  };
}

}

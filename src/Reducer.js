import {legacy_createStore} from "redux"

 export function emailLogin(e){
    return{
        type:"EMAIL_LOGIN",
        payload:e
    }
 }
 export function emailSignup(e){
    return{
        type:"EMAIL_SIGNUP",
        payload:e
    }
 }
 export function passwordLogin(e){
    return{
        type:"PASS_LOG",
        payload:e
    }
 }
 export function passwordSignup(e){
    return{
        type:"PASS_SIGN",
        payload:e
    }
 }
 export function conPassword(e){
    return{
        type:"CON_PASS",
        payload:e
    }
 }
const initDataLogin={
    loginMail:'',
    loginPass:'',
    signMail:'',
    signPass:'',
    conPass:''
}
function reducerLogin(state=initDataLogin,action){
    switch(action.type){
        case "EMAIL_LOGIN":
            return {
                ...state,
                loginMail:action.payload
            }
        case "EMAIL_SIGNUP":
            return {
                ...state,
                signMail:action.payload
            }
        case "PASS_LOG":
            return {
                ...state,
                loginPass:action.payload
            }
        case "PASS_SIGN":
            return {
                ...state,
                signPass:action.payload
            }
        case "CON_PASS":
            return {
                ...state,
                conPass:action.payload
            }

        default:
            return{
                state
            }
    }
 }

 export function tranType(e){
    return{
        type:"TRAN_TYPE",
        payload:e
    }
 }
 export function tranName(e){
    return{
        type:"TRAN_NAME",
        payload:e
    }
 }
 export function tranAmount(e){
    return{
        type:"TRAN_AMOUNT",
        payload:e
    }
 }
 export function tranComments(e){
    return{
        type:"TRAN_COMM",
        payload:e
    }
}
 
    const initDataTran={
      type:"",
      name:"",
      amount:"",
      comments:""
    }
 
 function reducerTran(state=initDataTran,action){
     switch(action.type){
       case 'TRAN_TYPE' :
        return{
            ...state,
            type:action.payload
        }
       case 'TRAN_NAME' :
        return{
            ...state,
            name:action.payload
        }
       case 'TRAN_AMOUNT' :
        return{
            ...state,
            amount:action.payload
        }
       case 'TRAN_COMM' :
        return{
            ...state,
            comments:action.payload
        }
     }
      
 }















export const store = legacy_createStore(reducerLogin)
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
const initData={
    loginMail:'',
    loginPass:'',
    signMail:'',
    signPass:'',
    conPass:''
}
function reducer(state=initData,action){
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













export const store = legacy_createStore(reducer)
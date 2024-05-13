

export const trimText = (text="",number)=>{
    const newText = text.substring(0,number);
    return `${newText} ...`
}

export const TOKEN_NAME = "--tolbert-app-token--";

export const SERVER_URL = "http://192.168.0.1:3000"
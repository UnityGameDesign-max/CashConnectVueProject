import {
    Environment
} from '@/common';

const validateUserUri = `${Environment.apiHost}/login`;
const proxy = 'https://cors-anywhere.herokuapp.com';

export async function executeLoginUser(credentials){
    try {
        const response = await fetch(`${validateUserUri}`, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            data: JSON.stringify(credentials)
        })
        const data = await response.json();
        return data;
    }catch(error){
        return{
            ok: false,
            error: error
        }
    }
}




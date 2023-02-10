import {
    Environment
} from '@/common';

const validateUserUri = `${Environment.apiHost}/login`;

export async function executeLoginUser(credentials){
    try {
        const response = await fetch(`${validateUserUri}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json();
        return {
            status: response.status,
            response:data
        }
    }catch(error){
        return{
            ok: false,
            error: error
        }
    }
}




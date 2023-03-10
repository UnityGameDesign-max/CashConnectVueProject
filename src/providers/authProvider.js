import {
    Environment
} from '@/common';

import { 
    Messages 
} from '@/common';

import { 
    errorHandlingToProvideResults
} from '@/common/helpers';

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
        errorHandlingToProvideResults(response, Messages);

        return {
            status: response.status,
            response: data
        }
    }
    catch(error){
        return error.message;
    }
}


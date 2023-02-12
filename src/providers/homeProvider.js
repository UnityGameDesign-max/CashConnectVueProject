import { 
    splitRemoteUri 
} from '@/common/helpers/splitRemoteUriHelper';

export async function getAccountTransactions(resObj){
    const remoteHost = splitRemoteUri(resObj);
    try{
        const response = await fetch(remoteHost, {
            method: 'get',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `${resObj.user}:${resObj.pass}`
            }
        });
        const data = await response.json();
        return data;
    }
    catch(error){
        return error;
    }
}
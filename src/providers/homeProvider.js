import { 
    splitRemoteUri 
} from '@/common/helpers/splitRemoteUriHelper';

// import PouchDB from 'pouchdb';


// export function getAccountTransactions(resObj){
//     let pouchDB = new PouchDB(splitRemoteUri(resObj));
// }



// export async function getAccountTransactions(resObj){
//     const remoteHost = splitRemoteUri(resObj);
//     try{
//         const response = await fetch(remoteHost, {
//             method: 'get',
//             headers: {
//                 'Content-Type': 'application/json; charset=utf-8',
//                 'Access-Control-Allow-Origin': '*',
//                 'Authorization': `${resObj.user}:${resObj.pass}`
//             }
//         });
//         const data = await response.json();
//         return data;
//     }
//     catch(error){
//         return error;
//     }
// }


// const db = new PouchDB(splitRemoteUri());
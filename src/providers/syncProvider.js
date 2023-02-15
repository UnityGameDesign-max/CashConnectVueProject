import 
    PouchDB 
from 'pouchdb';

import { 
    getRemoteHost 
} from '@/common/helpers';

export class synchronizationProvider {
    constructor(resObj){
        this.resObj = resObj;
    }
    static authorizationDetails = {
        username: this.resObj.username,
        password: this.resObj.password
    }
    
    static pocdb = new PouchDB(
        `${getRemoteHost(this.resObj)}/pouch_poc`,{
            auth: synchronizationProvider.authorizationDetails
        }
    );

    async getTransactionDocs(){
        const remoteDB = synchronizationProvider.pocdb;
        try{
            const transactionDocs = await remoteDB.find({
                selector: {type: 'tnx'}
            })
            return transactionDocs;
        }catch(error){
            return error;
        }
    }
}


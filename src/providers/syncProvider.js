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
    authorizationDetails = {
        username: this.resObj?.user,
        password: this.resObj?.pass
    }

    getRemoteHostUrl = getRemoteHost(this.resObj);
    
    pocdb = new PouchDB(
        `${getRemoteHost(this.resObj)}/pouch_poc`, {
            auth: synchronizationProvider.authorizationDetails
        }
    );

    async getTransactionDocs(){
        const remoteDB = synchronizationProvider.pocdb;
        try{
            const transactionDocs = await remoteDB.find({
                selector: {
                    type: 'tnx'
                }
            })
            return await transactionDocs.json();
        }catch(error){
            return error;
        }
    }
}


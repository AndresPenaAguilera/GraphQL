import { paginationOptions } from "../lib/utils";
import { F1 } from "./data-source";

export class CircuitsData extends F1{
    constructor(){
        super();
    }

    async getCircuits(pageElements: number =-1, page: number=1){
       
        if(pageElements === -1){
            return await this.get('circuits.json',{
                cacheOptions:{ttl: 60}
            });
        }
        
        return await this.get(`circuits.json?${ paginationOptions(pageElements,page) }`,{
            cacheOptions:{ttl: 60}
        });
        
    }

    async getCircuitById(id : String){
       
        return await this.get(`circuits/${ id }.json?`,{
            cacheOptions:{ttl: 60}
        });
        
    }

    
}
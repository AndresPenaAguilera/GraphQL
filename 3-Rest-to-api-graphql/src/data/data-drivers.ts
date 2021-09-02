import internal from "stream";
import { checkYear, paginationOptions, roundCheck } from "../lib/utils";
import { F1 } from "./data-source";

export class DriversData extends F1{
    constructor(){
        super();
    }

    async getDrivers(pageElements: number = -1, page: number = 1){
        if(pageElements === -1){
            return await this.get('drivers.json?limit=1000',{
                cacheOptions:{ttl: 60}
            });
        }

        return await this.get(`drivers.json?${ paginationOptions(pageElements,page) }`,{
            cacheOptions:{ttl: 60}
        });
        
    }

    async getDriversByYear(year: String){
        
        year = checkYear(year)

        return await this.get(`${ year }/drivers.json`,{
            cacheOptions:{ttl: 60}
        });
    }

    async getDriversByYearAndRound(year: String, round: number){
        
        year = checkYear(year);
        round = roundCheck(round);

        return await this.get(`${ year }/${ round }/drivers.json`,{
            cacheOptions:{ttl: 60}
        });
    }

    async getDriver(id: String){
        return await this.get(`drivers/${ id }.json`,{
            cacheOptions:{ttl: 60}
        });
    }

    async getSeasonPilotsRanking(year: String){

        year = checkYear(year);

        return await this.get(`${ year }/driverStandings.json`,{
            cacheOptions:{ttl: 60}
        });
    }
}
import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

const type: IResolvers = {
    Season:{
        year: parent => parent.season,
        urlMovile: parent => getWikipediaMobileUrl(parent.url)
    },
    Race:{
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
        urlMovile: parent => getWikipediaMobileUrl(parent.url)
    },
    Circuit:{
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location,
        urlMovile: parent => getWikipediaMobileUrl(parent.url)
    },
    Location:{
        lng: parent => parent.long,
    },
    Driver:{
        id: parent => parent.driverId,
        name : parent => parent.givenName.concat(' ').concat(parent.familyName),
        urlMovile: parent => getWikipediaMobileUrl(parent.url)
    }
};

export default type;
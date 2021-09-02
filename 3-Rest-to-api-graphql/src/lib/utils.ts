export function getWikipediaMobileUrl(url: string){
    return (url !== undefined) ? url.replace('wikipedia','m.wikipedia'):''
}

export function checkYear(year: String)
{
    const currentYear = new Date().getFullYear();

    if(isNaN(+year) || +year <1950 || +year > currentYear){
        return String(currentYear);
    }

    return year;
}

export function roundCheck(round: number){
    if(round>=100){
        return 1;
    }
    return round;
}

export function paginationOptions(pageElements: number = -1, page: number = 1){
    const offset = (page - 1) * pageElements;
    const limit = pageElements;
    const filter = `limit=${ limit }&offset=${ offset }`;
    return filter;
}
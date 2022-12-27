//console.log("%s %c",res, "font-size:14; color: green"); create macro for formated Log 
//console.log('%c Big message', 'font-size: 36px; font-weight: bold');

export default async function getDog(route) {
    let data;
    const response = await fetch(route, { 
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then( (res)=> res.json())
    .then( (result) => {
        data = result.message;
    })
    .catch( (err)=> {
            console.log("%c ERROR ON FETCH: %s","font-size: 14px; color: red",err);
        });

    console.log("%c URL: %c %s", "color: green; font-size: 16px", "color: blue; font-size: 12px;", data);
    return data;
}
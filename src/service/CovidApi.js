const fetchSummary = () => {
    return fetch("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(result => {
            
            console.log(result);
            return result
        });
}

const fetchCountryData = (countryName) => {
    return fetch(`https://api.covid19api.com/total/dayone/country/${countryName}`)
        .then(response => response.json())
        .then(result => result)
}

const wrapPromise = (promise) => {
    let status = 'pending';
    let result = '';
    let suspender = promise().then(data => {
        status = 'success';
        result = data;
    }, err => {
        status = 'error';
        result = err;
    })

    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            }
            else if (status === 'error') {
                throw result;
            }
            return result;
        }
    }
}

export const createResource = () => {
    return {
        fetchSummary: wrapPromise(fetchSummary),
        fetchCountryData: wrapPromise(fetchCountryData)
    }
}
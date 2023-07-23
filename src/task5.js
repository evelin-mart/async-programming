import { token, headers } from './task4';

const urls = [
    'https://api.json-generator.com/templates/AodXIm7GI_rw/data',
    'https://api.json-generator.com/templates/12KYr4vXAwl8/data',
    'https://api.json-generator.com/templates/VWML7F936ssE/data',
    'https://api.json-generator.com/templates/vylkCcQ_dkj3/data',
    'https://api.json-generator.com/templates/OZ6kZHzlHVIw/data'
]

export const foo = () => {
    Promise.allSettled(urls.map(url => fetch(url, { headers })))
        .then(results => results.map(res => res.value.json()))
        .then(data => console.log(data))
        .catch(e => console.log(e));
}

export const foo2 = () => {
    
}

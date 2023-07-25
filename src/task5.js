const token = 'cbm0st03wt8x1djun3ww0yvr777pved7ryxqfx35';
const headers = {
    Authorization: `Bearer ${token}`,
};

const urls = [
    'https://api.json-generator.com/templates/AodXIm7GI_rw/data',
    'https://api.json-generator.com/templates/12KYr4vXAwl8/data',
    'https://api.json-generator.com/templates/VWML7F936ssE/data',
    'https://api.json-generator.com/templates/vylkCcQ_dkj3/data',
    'https://api.json-generator.com/templates/OZ6kZHzlHVIw/data',
];

const foo = () => {
    Promise.allSettled(urls.map((url) => fetch(url, { headers })))
        .then((response) =>
            Promise.allSettled(
                response.map((res) => (res.status === 'fulfilled' ? res.value.json() : res)),
            ),
        )
        .then((data) => data.map((res) => (res.status === 'fulfilled' ? res.value : res)))
        .then((data) => console.log(data))
        .catch((e) => console.log(e.message));
};

const foo2 = () => {
    const result = [];

    const promise = urls.reduce(
        (acc, url) =>
            acc
                .then(() => fetch(url, { headers }))
                .then((res) => res.json())
                .then((data) => result.push(data)),
        Promise.resolve(),
    );

    promise.then(() => result).then(console.log);
};

foo();
foo2();

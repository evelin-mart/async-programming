const token = 'cbm0st03wt8x1djun3ww0yvr777pved7ryxqfx35';
export const headers = {
    Authorization: `Bearer ${token}`,
};
const url = 'https://api.json-generator.com/templates';
const endpoint1 = '/pcQ6pBAfCtFE/data';
const endpoint2 = '/AodXIm7GI_rw/data';

const foo = () => {
    fetch(`${url}${endpoint1}`, { headers })
        .then((res) => res.json())
        .then(({ hasUsersData }) => {
            if (hasUsersData) {
                return fetch(`${url}${endpoint2}`, { headers });
            }
            throw new Error('empty response');
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
};

foo();

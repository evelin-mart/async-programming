const getUsers = (url) => fetch(url);

async function foo(url) {
    try {
        const res = await getUsers(url);
        const [user] = await res.json();
        console.log(user);
    } catch (e) {
        console.log('Error!', e);
    }
}

foo('https://jsonplaceholder.typicode.com/users');
foo('ht://jsonplaceholder.typicode.com/users');

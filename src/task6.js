const getResolvedPromise = (value) => Promise.resolve(value);

getResolvedPromise(500)
    .then((value) => {
        if (value > 300) {
            throw new Error('Ошибка');
        }
    })
    .catch((e) => console.log(e.message))
    .finally(() => console.log('This is finally'));

getResolvedPromise(500);

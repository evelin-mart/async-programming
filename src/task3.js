const delay = (ms) => {
    return new Promise((res) => setTimeout(() => res(100), ms));
};

delay(1000).then((value) => console.log(`Done with ${value}`));

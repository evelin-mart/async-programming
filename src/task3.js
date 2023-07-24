export const delay = (ms) => {
    return new Promise((res) => setTimeout(() => res(100), ms));
};

class Musician {
    constructor(albumsUrl) {
        this.albumsUrl = albumsUrl;
    }

    async getAlbums() {
        try {
            const res = await fetch(this.albumsUrl);
            const albums = await res.json();
            return albums;
        } catch (e) {
            return e.message;
        }
    }
}

const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
musician.getAlbums().then((albums) => console.log(albums));

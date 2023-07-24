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

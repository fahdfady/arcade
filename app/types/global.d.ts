export { };

declare global {

    type Clients = {
        readonly id: number,
        name: string,
        shortname: string,
        img: string,
    }[];

    const apiURL: string = "https://62f40773a84d8c9681317867.mockapi.io/";
}
export { };

declare global {

    type Socials = {
        readonly id: number,
        readonly name: string,
        readonly link: string,
        readonly type: string,
    }[];

    const apiURL: string = "https://62f40773a84d8c9681317867.mockapi.io/";
}
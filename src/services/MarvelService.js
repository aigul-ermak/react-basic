class MarvelService {


    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=1fcc9ab2ab408ec51bd24f98c4cd45d2'

    getResourse = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResourse(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
    }

    getAllCharacter = (id) => {
        return this.getResourse(`${this._apiBase}characters /${id} ?${this._apiKey}`);
    }

}



export default MarvelService;

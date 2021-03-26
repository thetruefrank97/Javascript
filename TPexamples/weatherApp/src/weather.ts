export class Weather{
    private apiKey:string;
    private city:string;
    constructor(city:string){
        this.apiKey = `572485c2421c70fee72af4838719c4ef`;
        this.city=city;
    }

    //Fetch weather from API
    public async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)

        const responseData = await response.json();

        return responseData;

    }

    //Change weather location
    public changeLocation(city:string){
        this.city=city;
    }
}

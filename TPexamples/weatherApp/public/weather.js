var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Weather {
    constructor(city) {
        this.apiKey = `572485c2421c70fee72af4838719c4ef`;
        this.city = city;
    }
    //Fetch weather from API
    getWeather() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
            const responseData = yield response.json();
            return responseData;
        });
    }
    //Change weather location
    changeLocation(city) {
        this.city = city;
    }
}

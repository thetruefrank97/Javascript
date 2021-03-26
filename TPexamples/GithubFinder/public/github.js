var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class GitHub {
    constructor() {
        this.client_id = "31f709a6889975d68ebb";
        this.client_secret = "82d118bfff913b0f4365f321f2d9afbd0cea451f";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }
    getUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const profileResponse = yield fetch(`https://api.github.com/users/${user}?client_id =${this.client_id}&client_secret=${this.client_secret}`);
            const repoResponse = yield fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
            const profile = yield profileResponse.json();
            const repos = yield repoResponse.json();
            return {
                profile,
                repos
            };
        });
    }
}

export class GitHub
{
    private client_id:string;
    private client_secret:string;
    private repos_count:number;
    private repos_sort:string;

    constructor(){
        this.client_id = "31f709a6889975d68ebb";
        this.client_secret="82d118bfff913b0f4365f321f2d9afbd0cea451f"
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    public async  getUser(user:any){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id =${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }

    }

}

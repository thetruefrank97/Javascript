export class GitHub
{
    private client_id:string;
    private client_secret:string;

    constructor(){
        this.client_id = "31f709a6889975d68ebb";
        this.client_secret="82d118bfff913b0f4365f321f2d9afbd0cea451f"
    }

    public async  getUser(user:any){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id =${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }

    }

}

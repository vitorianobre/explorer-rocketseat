export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
        // Transformando o data em JSON
        .then(data => data.json())
        
        // Desestruturação -> pegando somente login, name, public_repos e followers de dentro do data
        .then(({ login, name, public_repos, followers }) => ({
            // shorthand -> login: login
            login,
            name,
            public_repos,
            followers
        }))
        
        /* O objeto shorthand {
            login,
            name,
            public_repos,
            followers
        } será o retorno da função fetch */
    }
}
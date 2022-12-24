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
        
        /*O objeto shorthand {
            login,
            name,
            public_repos,
            followers
        } será o retorno da função fetch*/
    }
}

// Classe que vai conter a lógica dos dados, ou seja, como serão estruturados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)

        this.load()
    }

    load () {
        this.entries = localStorage.getItem('@github-favorites:') || []
    }

    delete(user) {
        const filteredEntries = this.entries.filter( entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
    }
}

// Classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')


        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')
                if (isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <td class="user">
            <img src="http://github.com/vitorianobre.png" alt="Imagem de Vitoria Nobre">
            <a href="http://github.com/vitorianobre" target="_blank">
                <p>Vitoria Nobre</p>
                <span>vitorianobre</span>
            </a>
        </td>
        <td class="repositories">17</td>
        <td class="followers">2</td>
        <td>
            <button class="remove">&times;</button>
        </td>
        `
        return tr        
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}
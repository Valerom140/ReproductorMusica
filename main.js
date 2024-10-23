let cancion =
{
    titulo: 'Enamorado Tuyo',
    artista: 'Cuarteto de nos',
    album: 'Porfiado',
    duracion: '4:19',
    letra: 'sadasdasdas',
    portada: 'album',

    sonando: () => {
        console.log(cancion.letra)
    },

    cambiartitulo: (nuevotitulo) => {
        cancion.titulo = nuevotitulo
    }


}
let contenedor = document.getElementById('track/list')

axios.get('https://api.institutoalfa.org/api/songs').then((res) => {
    console.log(res.data.songs)

    res.data.songs.map(() =>{
        let div = document.createElement('div')
        div.setAttribute('class', 'Cancion')
        
        div.innerHTML = `
        <img src="/imges/image (4).png" alt="">
                <h2>Enamorado Tuyo</h2>
                <ul>
                    <li>103.739.123</li>
                    <li> 4:19</li>
                    <li>porfiado</li>
                </ul>
            </section>
            `
    })
})
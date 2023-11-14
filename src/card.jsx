function Card({nome, imagem, data}){
    return(
        <div>
            <h3>{nome}</h3>
            <img src={imagem}/>
            <p>{data}</p>
        </div>
    )
}

export default Card
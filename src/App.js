import React from "react"
import favoriteFruit from "./banana.jpg"
import "./App.css"

export default class State extends React.Component{

  state ={
    nome: 'Breno',
    idade: 18,
    comidaFavorita: 'Escondidinho de frango',
    musicas:["Incendeia", "Zombie", "Oceans","Tell me milet"],
  }

  render(){
    return(
      <div>
        <h1> Eaí, meu nome é {this.state.nome}.</h1>
        <h2> Eu tenho {this.state.idade},</h2>
        <h3>Gosto de {this.state.comidaFavorita}.</h3>
        <h3>Eu amo muito dessas musicas: </h3>
        
        <ol type="I">
          <li> {this.state.musicas[0]} </li>
          <li> {this.state.musicas[1]} </li>
          <li> {this.state.musicas[2]} </li>
          <li> {this.state.musicas[3]} </li>
        </ol>
        <p>E essa é a minha fruta favorita.</p>
        <img src= {favoriteFruit} alt="imagem de uma Banana" />
      </div>
    )
  }
}
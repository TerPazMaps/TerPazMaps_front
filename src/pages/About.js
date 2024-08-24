import React from "react";
function About() {
  return (
    <div style={{ width: "90%", margin: "0 auto", textAlign: "justify" }}>
      O WSMaps é uma plataforma que busca exibir informações de deversos bairros
      paraenses, foco de estuddo do{" "}
      <a href="https://www.biblio.campusananindeua.ufpa.br/index.php/conteudo-do-menu-superior/797-mapas-digitais" target="_blank">
        Projeto Mapas Digitais
      </a>
      , que com a ajuda dos moradores locais coletou dados de 7 regiões,
      referente a diversas estátisticas relacionadas à urbanização, comércio e
      eduacação, esses dados foram condençados em uma API que foi utilizada
      neste projeto.
    </div>
  );
}
export default About;

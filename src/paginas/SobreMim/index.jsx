import PostModelo from "componentes/PostModelo";
import React from "react";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>
        Olá, meu nome é <strong>Fúlvia!</strong>
      </h3>
      <img
        src={fotoSobreMim}
        alt="foto sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou Desenvolvedora de Front-end na Indico Innovation e
        estou feliz de te ver por aqui. Minha história com programação começou
        no Alura, quando iniciei a formação front-end. Eu aprendi lógica de
        programação Javascript, HTML e CSS.
      </p>

      <p className={styles.paragrafo}>
        No ensino superior, escolhi cursar Desenvolvimento Web (Anhanguera). Lá
        eu tive a oportunidade de estudar desenvolvimento web para ser um dos
        mantenedores do site deles.{" "}
      </p>

      <p className={styles.paragrafo}>
        Com isso tive minha experiência de dev mais próxima da realidade, com
        prazos de implementação para o site, e aprendi muito enquanto
        codificava.
      </p>

      <p className={styles.paragrafo}>
        Desde então, tem sido aprenas aprendizados atrás de aprendizados. A
        Alura é uma escola não só para seus alunos e alunas, mas também para os
        colaboradores e colaboradoras. Hoje sou muito feliz de ter a
        oportunidade de trazer esses conteúdos ricos e encantadores para você.
        Espero que aprenda bastante!
      </p>
    </PostModelo>
  );
}

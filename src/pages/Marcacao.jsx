import React from "react";

function Marcacao() {
  return (
    <div id="marcacao">
      <h1>Contactos</h1>
      <div className="form">
        <div id="form">
          <p>
            <b>Horário:</b>
            <br />
            Segunda-Sexta: 10:00 - 20:00
            <br />
            Sábados, Domingos e Feriados: Encerrado
            <br />
            <br />
            <b>Morada:</b>
            <br />
            Rua Carlos Paião 9B, Vila Fria
            <br />
            2740-028, Porto Salvo, OEIRAS
            <br />
          </p>
          <p>
            Para fazer a sua marcação, pode usar o seguinte <br />
            <b>Número de telefone:</b> 915 483 010
          </p>
          <p>Ou então use o seguinte formulário para enviar por email:</p>
          <form
            method="post"
            action="mailto:jsilva.massagem@gmail.com"
            encType="multipart/form-data"
            name="EmailForm"
            className="d-flex flex-column"
          >
            <label>Nome</label>
            <input type="text" name="name" required />
            <label>Email</label>
            <input type="email" name="email" required />
            <label>Mensagem</label>
            <textarea name="message" rows="6" className="textarea"></textarea>
            <button type="submit" className="btn btn-primary btn-md m-3">
              Enviar mensagem
            </button>
          </form>
        </div>
        <img id="loja" src="../marcacao.jpg" />
      </div>
    </div>
  );
}

export default Marcacao;

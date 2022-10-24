import React, { useState } from "react";
import "./Form.css";
import Axios from "axios";


export default function Form() {
  // const [article, setArticle] = useState({
  //   title: "",
  //   body: "",
  // });

  // const dispatch = useDispatch();

  // const handleForm = (e) => {
  //   e.preventDefault();

  //   dispatch({
  //       type: 'ADDARTICLE',
  //       payload: article
  //   })

  //   setArticle({
  //       title: "",
  //       body: ""
  //   })
  // };

  // const handleInputs = (e) => {
  //   if (e.target.classList.contains("inp-title")) {
  //     const newObjState = { ...article, title: e.target.value };
  //     setArticle(newObjState);
  //   } else if (e.target.classList.contains("inp-body")) {
  //     const newObjState = { ...article, body: e.target.value };
  //     setArticle(newObjState);
  //   }
  // };

  const url = "C:/Users/Y9G8AT706/Desktop/DESK/React/ReactLearning/12-my-app/src/Components/Form/action_page.json"
  const [data, setData] = useState({
    name: "",
    date: "",
    iduser: ""
  })

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      date: data.date,
      iduser: parseInt(data.iduser),
    })
    .then(res => {
      console.log(res.data);
    })
  }

  function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata);
  }


  return (
    <div>
      <h1 className="title-form">Ecrivez un article</h1>

      <div>
        <form onSubmit={(e) => submit(e)}>
          <input onChange={(e) =>handle(e)} id="name" value={data.name} placeholder="name" type="text"/>
          <input onChange={(e) =>handle(e)} id="date" value={data.date} placeholder="date" type="date"/>
          <input onChange={(e) =>handle(e)} id="iduser" value={data.iduser} placeholder="iduser" type="number"/>
          <button>Submit</button>
        </form>
      </div>


      {/* <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input
          onChange={handleInputs}
          value={article.title}
          type="text"
          id="title"
          placeholder="Entrez votre nom"
          className="inp-title"
        />

        <label htmlFor="article">Votre article</label>
        <textarea
          onChange={handleInputs}
          value={article.body}
          id="article"
          placeholder="Votre article"
          className="inp-body"
        ></textarea>

        <button>Envoyer l'article</button>
      </form> */}
    </div>
  );
}

import { useState, useEffect } from 'react';
import axios from 'axios';

import './app.scss';

export default function App() {
  const [info, setInfo] = useState([]);

  const pegarDados = async () => {
    const dados = await axios.get('https://fakestoreapi.com/products');
    setInfo(dados.data);
  };

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <>
      <section>
        <h1>Promoções</h1>
        <section className="grid">
          {info.map((item) => (
            <article key={item.id}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <h3>R$ {item.price.toFixed(2)}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}

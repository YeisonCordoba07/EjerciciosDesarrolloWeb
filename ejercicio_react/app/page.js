"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';

const Cuenta = (entrada) => {


  useEffect(() => {
    console.log("Actualizar Nombres");
  }, [Cuenta]);

  return (
    <div>
      <p>
        Hola {entrada.nombre}, tienes {entrada.edad}.
      </p>
    </div>

  );
}



export default function Home() {
  const [saldo, setSaldo] = useState(200);

  useEffect(() => {
    console.log("Actualizar SALDO");
  }, [saldo]);


  return (
    <main>

      <div>
        <Cuenta nombre="Yeison" edad="18"></Cuenta>
        <Cuenta nombre="Maven2" edad="11"></Cuenta>
        <Cuenta nombre="Noctis" edad="6"></Cuenta>
      </div>

      <div>
        <p>Saldo: ${saldo}</p>
        <button onClick={() => {setSaldo(saldo + 10) }}>Aumentar 10</button>
        <button onClick={() => {setSaldo(saldo - 10) }}>Disminuir 10</button>
      </div>

    </main>
  )
}

import styles from "./Clase4.module.css";
import { productos } from "./productos";


function Clase4() {


  return (
    <>
      <h1 className={styles.titulo}>productos</h1>
      <div className={styles.container}>
        <ul className={styles.lista}>
        {productos.map((producto)=>{
          return(
              <li key={producto.id} className={styles.item}>
                  <h2 className={styles.itemNombre}>{producto.nombre}</h2>
                  <img className={styles.itemImg} src={producto.imagen} alt={producto.nombre} />
                  <h3 className={styles.itemPrecio}>{producto.precio}</h3>
              </li>
          )
        })}     
        </ul>
      </div>
    </>
  )
}

export default Clase4

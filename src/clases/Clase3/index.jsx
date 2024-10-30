import { Card } from "./components/Card"
import Saludo from "./components/Saludo"


function Clase3() {


  return (
    <>
      <Saludo nombre="juan">hola</Saludo>
      <Card text="tarjeta 1"><button>agregar</button></Card>
      <Card text="tarjeta 2"><button>agregar</button></Card>
      <Card text="tarjeta 3"></Card>
    </>
  )
}

export default Clase3

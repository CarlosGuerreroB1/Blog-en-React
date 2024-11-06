import Post from "../Post/Post"
import "./posts.css"

export default function Posts() {
  return (
    <div className='posts'>
      <Post
      category="Tecnología"
      title="Lo mas nuevo en el mundo de las tarjetas gráficas"
      description="Nvidia acaba de lanzar al mercado su mas reciente tarjeta grafica la RTX 4060 Ti"
      date="Hace 2 horas"
      image="https://nomadaware.com.ec/wp-content/uploads/GeForce-RTX%E2%84%A2-4060-EAGLE-OC-8G-01.png"
      />
      <Post
      category="Música"
      title="Muere un gigante de la música, Quincy Jones, el celebre productor de Thriller de Michael Jackson"
      description="Se confirma la muerte del celebre productor a sus 91 años en Bel Air"
      date="Hace 1 hora"
      image="https://indierocks.sfo3.digitaloceanspaces.com/wp-content/uploads/2024/11/quincy_jones_fallece-a-los-91-anos_.webp"
      />
      <Post
       category="Deportes"
       title="Millionaria demanda de Damian el Kitu Diaz a Barcelona"
       description="Damian Diaz presento su demanda ante la federacion Ecuatoriana de Futbol, donde fue aceptda, en conclusion Barcelona tiene un plazo para pagarle $47K en 30 dias"
       date="Hace 3 horas"
       image="https://www.ole.com.ar/images/2024/10/30/7SbAAgWM3_1290x760__1.jpg"
      />
      <Post
      category="TV y Cine"
      title="Lionsgate pone en marcha el rodaje de la pelicula de OUTLAST"
      description="La productora esta desarrollando una pelicula de terror en base al popular videojuego"
      date="Hace 4 horas"
      image="https://revistayume.com/wp-content/uploads/2024/10/outlast-whistleblower-stukach-1013-1296x700.jpg"
      />
    </div>
  )
}

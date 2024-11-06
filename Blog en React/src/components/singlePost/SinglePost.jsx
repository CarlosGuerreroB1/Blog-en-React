import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://th.bing.com/th/id/OIP.C8E49e_0EzlSAWYrTc1RDwAAAA?rs=1&pid=ImgDetMain"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Bienvenidos a Nuestro Blog
          <div className="singlePostEdit">
            {/*<i className="singlePostIcon fa-solid fa-pen-to-square"></i> 
                        <i className="singlePostIcon fa-solid fa-trash"></i>*/}
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autores: <b>Luis, Samuel y Jhon</b>
          </span>
          <span className="singlePostDate">1 hora aproximadamente</span>
        </div>
        <p className="singlePostDesc">
          Bienvenidos a nuestro blog personal, un espacio creado por estudiantes
          de segundo semestre de la carrera de Software con el objetivo de
          compartir nuestra pasión y conocimiento en diversos temas de interés.
          En este sitio, encontrarás contenido variado y actualizado sobre
          deportes, música, tecnología y TV-cine, donde abordamos las últimas
          tendencias, noticias y análisis en cada área. Nuestro blog no solo es
          un espacio para leer, sino también para interactuar y expresar tus
          opiniones. Los usuarios tienen la oportunidad de publicar sus propios
          contenidos, y si lo desean, incluir imágenes para hacer cada
          publicación aún más atractiva y personal. Además, cada publicación
          cuenta con una sección de comentarios, lo que permite a los lectores
          compartir sus pensamientos y generar debates interesantes. Hemos
          diseñado funciones para que cada usuario tenga control total sobre su
          contenido y sus interacciones: puedes editar o eliminar tus
          publicaciones y comentarios en cualquier momento, lo que hace que la
          experiencia sea flexible y adaptable a tus necesidades. Asimismo,
          hemos implementado un sistema de inicio de sesión seguro, donde cada
          usuario puede acceder a su cuenta con un usuario y contraseña,
          garantizando la privacidad de tus datos y tus publicaciones. Únete a
          nuestra comunidad y disfruta de un espacio dinámico y en constante
          crecimiento donde puedes mantenerte informado, interactuar con otros
          lectores, y dejar tu huella con tus propias publicaciones.
        </p>
      </div>
    </div>
  );
}

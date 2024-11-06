import "./sidebar.css"


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ACERCA DE MI</span>
        <img src="https://www.yunbitsoftware.com/blog/wp-content/uploads/2020/03/364146-PB1OW0-666.jpg" alt="" />
        <p>Somos estudiastes de Ing. en Software. En este proyecto, hemos creado un blog personal, desarrollado en React, que nos permitio  practicar y mejorar nuestras habilidades en el desarrollo de aplicaciones web.</p>
      </div>
      <div className="sidebarItem"></div>
      <div className="sidebarTitle">Categoria

        <ul className="sidebarList">
          <li className="sidebarListItem">Deportes</li>
          <li className="sidebarListItem">Tecnologia</li>
          <li className="sidebarListItem">Musica</li>
          <li className="sidebarListItem">Cine</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTile">Sigueme </span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-tiktok"></i>
        </div>
      </div>
    </div>
  )
}
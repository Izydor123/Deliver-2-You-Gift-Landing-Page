import './Header.css'
import logo from '../assets/Deliever2You-1250x1250.png'

const Header = () => {

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
        {logo ? (
            <img src={logo} alt="Deliver2You Corporate Gifts" className="logo" key="logo" />
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="header-text">
          <h1>Acessórios para empresas</h1>
          <p>Otimize a produtividade da sua empresa com os nossos acessórios e muito mais</p>
          <p>Descubra alguns dos nossos produtos</p>
        </div>
        <div className="logo-container"></div>
      </div>
    </header>
  )
}

export default Header

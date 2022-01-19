import './App.css';
import logo from './react-logo.png'


function Header() {
  return (
    <header>
      <nav className="nav">
        <img className='navLogo' src={logo} alt='react-logo'/>
        <ul className="navMenuItems">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className='footer'>
      <strong>©2022 Copyright </strong>by Burak
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Test header</h1>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ol>
      {/* © = alt + 0169 */}
    </div>
  );
}

function Page4() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Page4;

import "./Footer.css";


function Footer() {


  const year = new Date().getFullYear();


  return (

    <footer className="site-footer">


      <p>
        &copy; {year} Arnav Jhawar. Built with React ❤️
      </p>



      <nav className="social-links">


        <a
          href="https://github.com/ConvivableCable22"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>



        <a
          href="https://www.linkedin.com/in/arnavjhawar22"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>


      </nav>


    </footer>

  );

}


export default Footer;
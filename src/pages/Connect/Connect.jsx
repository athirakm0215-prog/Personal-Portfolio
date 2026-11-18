// src/pages/Connect/Connect.jsx
import './Connect.css';
import Pagetransition from '../../components/Pagetransition/Pagetransition';
import Glitchheading from '../../components/Glitchheading/Glitchheading';

// 

function Connect() {
  return (
    <Pagetransition>
    <section className="connect">
      <h1 className="connect-title">
        <span className="connect-arrow">&laquo;</span>
        <Glitchheading>CONNECT</Glitchheading>
        <span className="connect-arrow">&raquo;</span>
      </h1>

      {/* <p className="connect-subtitle">Let's Build Something Meaningful</p> */}

      <div className="connect-stage">
        {/* Rotating rings. Each dot is a child of its ring, so it always sits exactly on the line. */}
        <div className="ring ring-outer" aria-hidden="true">
          <span className="ring-dot" />
        </div>
        <div className="ring ring-inner" aria-hidden="true">
          <span className="ring-dot" />
        </div>

        <img src="/connect.png" alt="Athira K M" className="connect-photo" />

        <div className="connect-card top-left">
          <h4>EMAIL</h4>
          <a
  className="connect-card-link"
  href="mailto:athirakm0215@gmail.com"
>
          <p>athirakm0215@gmail.com</p></a>
        </div>

        <div className="connect-card bottom-left">
          <h4>WHATSAPP</h4>
          <a
  className="connect-card-link"
  href="https://wa.me/918289900188"
  target="_blank"
  rel="noopener noreferrer"
>
          <p>+91 82899 00188</p></a>
        </div>
        

        <div className="connect-card top-right">
          <h4>BEHANCE</h4>
          <a
  className="connect-card-link"
  href="https://www.behance.net/athirakm1"
  target="_blank"
  rel="noopener noreferrer"
>
          <p>behance.net/athirakm1</p></a>
        </div>

        <div className="connect-card bottom-right">
          <h4>LINKEDIN</h4>
          <a
  className="connect-card-link"
  href="https://www.linkedin.com/in/athira-k-m-00b153220/"
  target="_blank"
  rel="noopener noreferrer"
>
          <p>linkedin.com/in/athirakm</p></a>
        </div>
      </div>
    </section>
    </Pagetransition>
  );
}

export default Connect;
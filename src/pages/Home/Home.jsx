// src/pages/Home/Home.jsx
import { ArrowRightIcon } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import Pagetransition from '../../components/Pagetransition/Pagetransition';
import Glitchheading from '../../components/Glitchheading/Glitchheading';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Pagetransition>
      <section className="home">
        <h1 className="home-title">
          <Glitchheading className="home-title-sub">WELCOME TO</Glitchheading>
          <br />
          <Glitchheading className="home-title-main">MY PORTFOLIO</Glitchheading>
        </h1>

        <p className="home-role">UI/UX Designer • Frontend Developer • Educator</p>
        <p className="home-description">
          A collection of ideas, experiences, and digital products crafted
          through creativity, strategy, and user-centered design. Explore
          my journey, projects, and the stories behind them.
        </p>

        <button className="home-start" onClick={() => navigate('/about')}>
          <span className="home-start-gap">
            <span className="home-start-inner">
              Start  <img src="/icons/tree-growth.svg" alt="" className="start-icon" />
            </span>
          </span>
        </button>
      </section>
    </Pagetransition>
  );
}
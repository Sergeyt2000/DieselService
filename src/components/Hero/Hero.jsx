import css from './Hero.module.css';

export default function Hero() {
    return (
      <div className={css.hero}>
        <div className={css.content}>
          <h1 className={css.title}>
            Ремонт та діагностика форсунок і паливних насосів високого тиску (ПНВТ)
          </h1>
          {/* <h1>Ласкаво просимо до Diesel Injector Service!</h1> */}
          <img className={css.logo} src="/img/dis-logo.png" alt="Logo"></img>
        </div>
      </div>
    );
}

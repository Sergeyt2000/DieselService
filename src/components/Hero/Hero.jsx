import css from './Hero.module.css';

export default function Hero() {
    return (
      <div className={css.hero}>
        <div className={css.content}>
          {/* <h1>Ласкаво просимо до Diesel Service!</h1> */}
          {/* <h1>Ласкаво просимо до Diesel Injector Service!</h1> */}
          <img width={1000} src="/public/img/dis-logo.png" alt="Logo"></img>
          {/* <p>
            Ваш надійний партнер у світі дизельних двигунів та обслуговування.
          </p> */}
        </div>
      </div>
    );
}
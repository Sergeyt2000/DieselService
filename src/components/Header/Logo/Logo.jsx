import css from './Logo.module.css'

export default function Logo() {
    return (
        <div className={css.logo}>
            <img width={250} src="/img/logo.png" alt="Diesel Service Logo" />
        </div>
    );
}
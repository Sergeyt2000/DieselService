import css from './Header.module.css'
import Logo from './Logo/Logo.jsx'
import Navigation from './Navigation/Navigation.jsx'

export default function Header() {
  return (
    <div className={css.header}>
      <Logo />
      <Navigation />
    </div>
  );
}

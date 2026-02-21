import css from "./ServiceCard.module.css";

export default function ServiceCard({ url, alt, description }) {
    return (
      <div className={css.serviceCard}>
        <img src={url} alt={alt} />
        <div className={css.content}>
            <h3 className={css.title}>{alt}</h3>
            <p className={css.description}>{description}</p>
        </div>
      </div>
    );
}
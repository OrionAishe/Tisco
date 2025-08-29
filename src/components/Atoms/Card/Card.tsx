import styles from './Card.module.scss';
import Image from 'next/image';

export interface props {
    title: string;
    subtitle: string;
    text: string;
    seal: boolean;
    price: string;
    variant: string;
}

const Card = (props: props) => {
    const { subtitle, title, text, price, variant, seal } = props;
    return (
        <div className={variant == 'Primary' ? styles.Card__primary : styles.Card__secondary}>
            <p className={styles.Card__title}>{title}</p>
            <p className={styles.Card__subtitle}>{subtitle}</p>
            <p className={styles.Card__text}>{text}</p>
            <p className={styles.Card__price}>{price}</p>
            {seal ?
                <Image
                    className={styles.Card__image}
                    height={50}
                    width={50}
                    src={'/selo.png'}
                    alt={'VI Ranking da Cúpula da Cachaça 2024 – O Alambiqueiro'}
                /> : ''}
        </div>
    )
}

export default Card;
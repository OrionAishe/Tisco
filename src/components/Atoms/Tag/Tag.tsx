import styles from './Tag.module.scss';
import Image from 'next/image';

interface props {
    title: string;
    variant: string;
    seal: boolean
}

const Tag = (props: props) => {
    const { title, variant, seal } = props;
    return (
        <div className={variant == "Primary" ? styles.Tag__primary : styles.Tag__secondary}>
            <h2>{title}</h2>
            {seal ?
                <div className={styles.Tag__text}>
                    <Image
                        className={styles.Card__image}
                        height={50}
                        width={50}
                        src={'/selo.png'}
                        alt={'VI Ranking da Cúpula da Cachaça 2024 – O Alambiqueiro'}
                    />
                    <p>Entre as 50 melhores cachaças do Brasil pela VI Cúpula da Cachaça 2024</p>
                </div> : ''}
        </div>

    )
}

export default Tag;
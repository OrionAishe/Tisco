import Tag from "@/components/Atoms/Tag/Tag";
import CardCategories, { props as CardProps } from "@/components/Molecules/CardCategories/CardCategories";
import styles from './CardDisplay.module.scss';

interface props {
    title: string;
    Cards: CardProps[];
    variant: string;
}

const CardDisplay = (props: props) => {
    const { title, Cards, variant } = props;

    return (
        <div className={styles.CardDisplay}>
            <Tag title={title} variant={variant} seal={true}></Tag>
            <div className={variant == 'Primary' ? styles.CardDisplay__primary : styles.CardDisplay__secondary}>
                {Cards.map((item, index) => {
                    return <CardCategories key={index} title={item.title} Cards={item.Cards} variant={item.variant}></CardCategories>
                })}
            </div>
        </div>
    )
}

export default CardDisplay;
import Card, { props as CardProps } from "@/components/Atoms/Card/Card";
import Tag from "@/components/Atoms/Tag/Tag";
import styles from './CardCategories.module.scss';

export interface props {
    title: string;
    Cards: CardProps[];
    variant: string;
}

const CardCategories = (props: props) => {
    const { title, Cards, variant } = props;
    return (
        <div className={variant == "Primary" ? styles.CardCategories__primary : styles.CardCategories__secondary}>
            <Tag title={title} variant={variant} seal={false}></Tag>
            {Cards.map((item, index) => {
                return <Card
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    text={item.text}
                    seal={item.seal}
                    price={item.price}
                    variant={item.variant} />
            })}
        </div>
    )
}

export default CardCategories;
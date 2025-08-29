import Link from "next/link";
import { MouseEventHandler } from "react";
import styles from './Button.module.scss';

interface props {
    title: string;
    link: string;
    Click?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: props) => {
    const { link, Click, title } = props;

    return (
        <Link href={link} >
            <button className={styles.Button} onClick={Click}>
                {title}
            </button>
        </Link>
    )
}

export default Button;
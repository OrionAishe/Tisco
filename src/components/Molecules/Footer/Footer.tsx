import Link from "next/link";
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Footer__text}>
                <div className={styles.Footer__logo}>TISCO</div>
                <div className={styles.Footer__contact}>
                    <h3>Contact</h3>
                    <div>
                        <p>+1+86 852 346 000</p>
                        <p>info@foodzero.com</p>
                    </div>
                    <div>
                        <p>1959 Sepulveda Blvd.</p>
                        <p>Culver City, CA, 90230</p>
                    </div>
                </div>
            </div>
            <div>
                <p>© 2025 TISCO BAR LTDA - ME - CNPJ 61.259.203/0001-91</p>
                <Link href={"https://github.com/OrionAishe"}>created by Orion Aishe Antonucci</Link>
            </div>
        </footer>
    )
}

export default Footer;
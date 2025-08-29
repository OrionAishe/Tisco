'use client'
import React from 'react';
import styles from './Header.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Atoms/Button/Button';

const Header = () => {
    const Menu = React.createRef<HTMLDivElement>();
    const Burger1 = React.createRef<HTMLDivElement>();
    const Burger2 = React.createRef<HTMLDivElement>();

    function OpenNav() {
        Burger1.current?.classList.toggle(styles.Open);
        Burger2.current?.classList.toggle(styles.Open);
        Menu.current?.classList.toggle(styles.Open);
    }
    const NavList = [
        { title: 'HOME', src: '/' },
        { title: 'CACHAÇAS', src: '/cachacas' },
        { title: 'CARDÁPIO', src: '/cardapio' },
        { title: 'SOBRE', src: '/sobre' },
        { title: 'CONTATO', src: '/contato' }
    ]

    return (
        <header className={styles.Header}>
            <ul className={styles.Header__logo}>
                <li>
                    <Link href={'/'}><Image width={80} height={80} src={'/TISCO.png'} alt={'TISCO'} /></Link>
                </li>
                <li className={styles.Header__list}>
                    <div className={styles.MenuHamburguer} ref={Burger1} onClick={OpenNav}>
                        <div className={styles.Menu_burguer1} />
                        <div className={styles.Menu_burguer2} />
                        <div className={styles.Menu_burguer3} />
                    </div>
                </li>
            </ul>
            <ul className={styles.Header__reservation}>
                <li className={styles.Header__list}><Link href={'https://wa.me/86852346000'}>+86 852 346 000</Link></li>
                <li><Button title={'Reservas'} link={'https://wa.me/86852346000?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva'}></Button></li>
            </ul>
            <div className={styles.Header__text}>
                <h1>
                    View Our New Menu
                </h1>
                <h3>The freshest ingredients for you every day</h3>
            </div>
            <div className={styles.Header__Menu} ref={Menu}>
                <div className={styles.MenuHamburguer} ref={Burger2} onClick={OpenNav}>
                    <div className={styles.Menu_burguer1} />
                    <div className={styles.Menu_burguer2} />
                    <div className={styles.Menu_burguer3} />
                </div>
                <ul className={styles.Header__navigation}>
                    {NavList.map((item, index) => {
                        return (
                            <li key={index}><Link href={item.src}>{item.title}</Link></li>
                        )
                    })}
                </ul>
                <div className={styles.Header__contact}>
                    <h2>Contact</h2>
                    <div className={styles.Header__contacttext}>
                        <div>
                            <p>+86 852 346 000</p>
                            <p>info@foodzero.com</p>
                        </div>
                        <div>
                            <p>1959 Sepulveda Blvd.</p>
                            <p>Culver City, CA, 90230</p>
                        </div>
                        <Link target='_blank' href={'https://www.instagram.com/tisco.sp'}><Image width={28} height={28} src={'/instagram.svg'} alt={''}></Image></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
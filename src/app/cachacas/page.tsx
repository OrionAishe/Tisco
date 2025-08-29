import Image from 'next/image';
import styles from './page.module.scss'
import CardDisplay from '@/components/Organisms/CardDisplay/CardDisplay';
import brancas from './brancas.json';
import envelhecidas from './envelhecidas.json'

export default function Cachacas() {
    return (
        <div className={styles.Cachacas}>
            <h1>TISCO</h1>
            <CardDisplay title={'Brancas'} Cards={brancas} variant={'Secondary'} />
            <CardDisplay title='Envelhecidas' variant='Primary' Cards={envelhecidas} />
            <Image width={640} height={1138} src={'/cachacasenvelhecidas.webp'} alt={''}></Image>
        </div>
    );
}

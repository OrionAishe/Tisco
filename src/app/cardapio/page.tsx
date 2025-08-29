import Image from 'next/image';

export default function Cachacas() {
    return (
        <>
            <Image width={640} height={1138} src={'/cardapiopetiscos.webp'} alt={''}></Image>
            <Image width={640} height={1138} src={'/cardapiocervejas.webp'} alt={''}></Image>
        </>
    );
}
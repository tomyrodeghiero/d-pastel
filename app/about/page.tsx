import ContactForm from '@/components/contact-form'
import HeaderBackground from '@/components/header-background'
import QuoteCard from '@/components/quote-card'
import SectionCard from '@/components/section-card'
import { BG_ABOUT, SECTION_CARD_01, SECTION_CARD_02 } from '@/utils/constants/assets'
import React from 'react'

const AboutPage = () => {
    return (
        <>
            <HeaderBackground
                background={BG_ABOUT}
                title="Sobre Nosotros"
                subtitle="Inicio - Nosotros"
                focusPosition='top'
            />
            <QuoteCard />
            <div className='px-5'>
                <SectionCard
                    title="Lo Que Hacemos"
                    description="Es un hecho conocido que un ambiente bien diseñado puede influir en cómo nos sentimos y actuamos. En D-pastel, transformamos espacios para reflejar su verdadera esencia."
                    buttonText="Ir a la Tienda"
                    buttonLink="/shop"
                    imageSrc={SECTION_CARD_01}
                    imagePosition="right"
                />
                <SectionCard
                    title="El Resultado Final"
                    description="Nuestra visión se materializa en cada rincón que diseñamos. El objetivo no es solo llenar un espacio, sino darle vida y propósito, creando lugares donde las personas se sientan realmente vivas."
                    buttonText="Conocer Más"
                    buttonLink="/contact"
                    imageSrc={SECTION_CARD_02}
                    imagePosition="left"
                />
                <ContactForm />
            </div>
        </>
    )
}

export default AboutPage
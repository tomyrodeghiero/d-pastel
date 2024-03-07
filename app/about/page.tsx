import ContactForm from '@/components/contact-form'
import HeaderBackground from '@/components/header-background'
import QuoteCard from '@/components/quote-card'
import SectionCard from '@/components/section-card'
import { BG_ABOUT, SECTION_CARD_01 } from '@/utils/constants/assets'
import React from 'react'

const AboutPage = () => {
    return (
        <>
            <HeaderBackground
                background={BG_ABOUT}
                title="Sobre Nosotros"
                subtitle="Inicio - Nosotros"
                focusPosition='bottom'
            />
            <QuoteCard />
            <SectionCard
                title="Lo Que Hacemos"
                description="Es un hecho conocido que un ambiente bien diseñado puede influir en cómo nos sentimos y actuamos. En D-pastel, transformamos espacios para reflejar su verdadera esencia."
                buttonText="Ir a la Tienda"
                buttonLink="#"
                imageSrc={SECTION_CARD_01}
                imagePosition="right"
            />
            <SectionCard
                title="El Resultado Final"
                description="Nuestra visión se materializa en cada rincón que diseñamos. El objetivo no es solo llenar un espacio, sino darle vida y propósito, creando lugares donde las personas se sientan realmente vivas."
                buttonText="Conocer Más"
                buttonLink="#"
                imageSrc={SECTION_CARD_01}
                imagePosition="left"
            />
            <ContactForm />
        </>
    )
}

export default AboutPage
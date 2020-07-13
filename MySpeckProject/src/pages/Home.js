import React, { useEffect } from 'react';
import Progress from 'rsup-progress';

import { Section } from '../lib/styles/GeneralStyles';

//Components
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import Card from '../components/Card/Card';
import SectionLastYear from '../components/SectionLastYear/SectionLastYear';

// Images
import ImgAbout from '../assets/img/about.jpg'
import ImgSpeakers from '../assets/img/speakers.jpg';
import ImgAgenda from '../assets/img/calendar.jpg';
import ImgPartner from '../assets/img/partner.jpg';

const Home = () => {
    const progress = new Progress({
        height: 5,
        color: '#BF283D',
    });

    useEffect(() => {
        progress.start()
        setTimeout(() => {
            progress.end();
        }, 1000)
    }, []);

    return (
        <>
            <Hero />
            <Section>
                <About />
                <CardsContainer>
                    <Card image={ImgAbout} alt="About">O tjednu karijera</Card>
                    <Card image={ImgSpeakers} alt="Speakers">Predavači</Card>
                    <Card image={ImgAgenda} alt="Agenda">Raspored</Card>
                    <Card image={ImgPartner} alt="Partners">Partneri</Card>
                </CardsContainer>
            </Section>
            <SectionLastYear />
        </>
    );
}

export default Home;
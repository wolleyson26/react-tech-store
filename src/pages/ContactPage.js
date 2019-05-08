import React from 'react'
import Hero from '../components/Hero'
import ContactImg from '../images/contactBcg.jpeg'
import Contact from '../components/ContactPage/Contact'

export default function ContactPage() {
    return (
        <>
            <Hero img={ContactImg} />
            <Contact />
        </>
    )
}

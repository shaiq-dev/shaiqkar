import React from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';

export default function Home() {
    return (
        <>
            <Head>
                <title>{'<shaiqKar />'}</title>
            </Head>
            <div className="wrapper">
                <Hero />
            </div>
        </>
    );
}

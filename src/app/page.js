'use client';

import Hero from '@/app/_ui/organisms/hero';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const newValue = window.innerWidth < 400;
    setIsMobile(newValue);
  }, []);

  return (
    <>
      <Hero />
      {/* {isMobile ? (
        <>
          <OfferingsSection />
          <ExperiencesSection />
        </>
      ) : (
        <Maintenance customMessage="If you are seeing this message, it means that the desktop version of the website is not ready yet. Please use a mobile device to view the website." />
      )} */}
    </>
  );
}

"use client"
import { useEffect, useState } from 'react';
import './agenda.css'

export default function Page() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const handleLoad = () => setIframeLoaded(true);
      iframe.addEventListener('load', handleLoad);

      return () => iframe.removeEventListener('load', handleLoad); // Cleanup
    }
  }, []);

  return (
    <main className='main-container'>
      <div style={{
        position: "relative", width: "100%", height: "0", paddingTop: "46.25%",
        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", overflow: "hidden",
        borderRadius: "8px", willChange: "transform"
      }}>
        {!iframeLoaded && <p>Loading...</p>}
        <iframe loading="lazy" style={{
          position: "absolute", width: "100%", height: "100%", top: "0", left: "0",
          border: "none"
        }}
          src="https://www.canva.com/design/DAGPLDtawxc/8PMqXyXcW0tyIQsmv7qKMA/view?embed" allow="fullscreen">
        </iframe>
      </div>
    </main>
  );
}

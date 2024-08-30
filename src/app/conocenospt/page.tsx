import { useEffect, useState } from 'react';
import './agenda.css'

export default function Page() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    setIframeLoaded(false);
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.onload = () => setIframeLoaded(true);
    }
  }, []);

  return (
    <main className='main-container'>
      <div style={{position: "relative", width: "100%", height: "0", paddingTop: "46.25%;",
       paddingBottom: "0", boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", overflow: "hidden",
       borderRadius: "8px", willChange: "transform"}}>
        {!iframeLoaded && <p>Loading...</p>}
        <iframe loading="lazy" style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", border: "none", padding: "0",margin: "0"}}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGPLDtawxc&#x2F;8PMqXyXcW0tyIQsmv7qKMA&#x2F;view?embed" allowFullScreen={true} allow="fullscreen">
        </iframe>
      </div>
    </main>
  );
}
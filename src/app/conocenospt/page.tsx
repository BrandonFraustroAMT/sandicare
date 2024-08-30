"use client"
import { useRouter } from 'next/router';
import './agenda.css'
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const reloadIframe = () => {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.src = iframe.src;
      }
    };

    // Forzar la recarga del iframe al acceder a una ruta específica
    if (['/conocenospt', '/sandicheckpt', '/checkatusaludpt', '/telemedicinapt'].includes(router.pathname)) {
      reloadIframe();
    }

    // Detectar cambios en la ruta
    router.events.on('routeChangeComplete', reloadIframe);

    // Limpiar el listener al desmontar el componente
    return () => {
      router.events.off('routeChangeComplete', reloadIframe);
    };
  }, [router]);
  return (
    <main className='main-container'>
      <div style={{position: "relative", width: "100%", height: "0", paddingTop: "46.25%;",
       paddingBottom: "0", boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", overflow: "hidden",
       borderRadius: "8px", willChange: "transform"}}>
        <iframe loading="lazy" style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", border: "none", padding: "0",margin: "0"}}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGPLDtawxc&#x2F;8PMqXyXcW0tyIQsmv7qKMA&#x2F;view?embed" allowFullScreen={true} allow="fullscreen">
        </iframe>
      </div>
    </main>
  );
}
import '../conocenospt/agenda.css'

export default function Page() {
  return (
    <main className='main-container'>
      {/* <div className='agenda-container'>
        <iframe loading="lazy" className='agenda-iframe' src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGPLMFH3Qs&#x2F;mbijWZ369T9SGV0XWhldHw&#x2F;view?embed" allowFullScreen={true} allow="fullscreen">
        </iframe>
      </div> */}
      <div style={{position: "relative", width: "100%", height: "0", paddingTop: "46.25%;",
       paddingBottom: "0", boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", overflow: "hidden",
       borderRadius: "8px", willChange: "transform"}}>
        <iframe loading="lazy" style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0", border: "none", padding: "0",margin: "0"}}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGPLMFH3Qs&#x2F;mbijWZ369T9SGV0XWhldHw&#x2F;view?embed" allowFullScreen={true} allow="fullscreen">
        </iframe>
      </div>
    </main>
  );
}
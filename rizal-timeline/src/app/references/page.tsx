export default function ReferencesPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">References</h1>
      <p className="text-muted-foreground">These sources informed dates, places, and context:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a className="underline" href="https://www.britannica.com/biography/Jose-Rizal" target="_blank" rel="noreferrer">Encyclopaedia Britannica — José Rizal</a>
        </li>
        <li>
          <a className="underline" href="https://nhcp.gov.ph" target="_blank" rel="noreferrer">National Historical Commission of the Philippines</a>
        </li>
        <li>
          <a className="underline" href="https://commons.wikimedia.org/wiki/Jos%C3%A9_Rizal" target="_blank" rel="noreferrer">Wikimedia Commons — José Rizal</a>
        </li>
        <li>
          <a className="underline" href="https://en.wikipedia.org/wiki/Jos%C3%A9_Rizal" target="_blank" rel="noreferrer">Wikipedia — José Rizal (cross‑verified)</a>
        </li>
      </ul>
      <div className="pt-2 text-sm text-muted-foreground">
        Replace the Timeline source parameter with your published Google Sheet URL.
      </div>

      {/* YouTube Videos Section */}
      <section className="pt-8 space-y-6">
        <h2 className="text-xl font-semibold">Video Resources</h2>
        <p className="text-muted-foreground">Educational videos about José Rizal&apos;s life and legacy:</p>

        <div className="space-y-8">
          {/* Video 1 */}
          <article className="space-y-3">
            <div className="aspect-video w-full rounded-lg overflow-hidden border">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/awTUDlQr5Xw"
                title="Jose Rizal Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <h3 className="font-medium">The Life and Works of Jose Rizal</h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive documentary covering Rizal&apos;s biography, his education in Europe, 
              his literary works including Noli Me Tangere and El Filibusterismo, and his role 
              in inspiring the Philippine Revolution. This video provides context on how his 
              writings exposed colonial abuses and awakened Filipino nationalism.
            </p>
          </article>

          {/* Video 2 */}
          <article className="space-y-3">
            <div className="aspect-video w-full rounded-lg overflow-hidden border">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/vIhIwmHuJ4M"
                title="Jose Rizal: National Hero"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <h3 className="font-medium">Jose Rizal: The National Hero of the Philippines</h3>
            <p className="text-sm text-muted-foreground">
              An educational overview of Rizal&apos;s journey from his childhood in Calamba to his 
              execution in Bagumbayan. This video highlights his multifaceted talents as a 
              writer, doctor, sculptor, and linguist, and explains why he was chosen as the 
              national hero over other revolutionary figures.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

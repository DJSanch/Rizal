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
    </main>
  );
}

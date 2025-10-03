export type TimelineEvent = {
  year: number;
  month?: number;
  day?: number;
  headline: string;
  text: string;
  location?: string;
  group?: string;
  media?: { url: string; caption?: string; credit?: string };
};

export const events: TimelineEvent[] = [
  { year: 1861, month: 6, day: 19, headline: "Birth in Calamba, Laguna", text: "Born José Protasio Rizal Mercado y Alonso Realonda to Francisco Mercado and Teodora Alonso.", location: "Calamba, Laguna", group: "Family & Early Life" },
  { year: 1869, headline: "Primary schooling in Biñan", text: "Early lessons from his mother; studies under Justiniano Aquino Cruz in Biñan.", location: "Biñan, Laguna", group: "Family & Early Life" },
  { year: 1872, month: 1, day: 20, headline: "GomBurZa execution", text: "Execution of Gómez, Burgos, and Zamora shocks young Rizal and shapes his conscience.", location: "Manila", group: "Formative Context" },
  { year: 1877, month: 3, day: 23, headline: "BA from Ateneo Municipal", text: "Graduates Bachiller en Artes with top marks, excelling in literature and science.", location: "Manila", group: "Education" },
  { year: 1882, month: 5, day: 3, headline: "Departs for Spain", text: "Leaves Manila to pursue medical studies in Madrid.", location: "From Manila to Spain", group: "Travels" },
  { year: 1887, headline: "Noli Me Tángere published", text: "Novel exposing colonial abuses; printed in Berlin.", location: "Berlin", group: "Works & Writings" },
  { year: 1891, headline: "El Filibusterismo published", text: "Darker sequel critiquing entrenched power; printed in Ghent.", location: "Ghent", group: "Works & Writings" },
  { year: 1892, headline: "La Liga Filipina; exile to Dapitan", text: "Founds a civic reform group; arrested and exiled to Dapitan.", location: "Manila → Dapitan", group: "Civic Action" },
  { year: 1892, headline: "Exile in Dapitan begins", text: "Builds a school and clinic, conducts science, and leads civic projects.", location: "Dapitan", group: "Service & Science" },
  { year: 1896, month: 12, day: 30, headline: "Execution at Bagumbayan", text: "Executed by firing squad; becomes a national martyr.", location: "Manila", group: "Trial & Martyrdom" },
  { year: 1912, month: 12, day: 30, headline: "Reinterment at Rizal Monument", text: "Remains interred at Luneta; annual national commemoration.", location: "Manila", group: "Legacy" },
];



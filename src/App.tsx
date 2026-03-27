import { motion } from "motion/react";
import { 
  AlertTriangle, 
  ChevronRight, 
  Megaphone, 
  Shield, 
  Skull, 
  Swords, 
  Newspaper, 
  Users, 
  Mail, 
  HeartHandshake, 
  Calendar, 
  ArrowRight,
  Send,
  Instagram,
  Flag
} from "lucide-react";

const PirateLogo = () => (
  <div className="relative flex items-center justify-center w-14 h-14 bg-black border-4 border-red-600 transform -rotate-6 hover:rotate-0 transition-transform duration-200 shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]">
    <Swords className="w-10 h-10 text-white absolute opacity-70" strokeWidth={2} />
    <Skull className="w-8 h-8 text-red-600 absolute z-10 fill-black" strokeWidth={2.5} />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] text-black font-sans selection:bg-red-600 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black text-white border-b-8 border-red-600 shadow-[0px_8px_0px_0px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <PirateLogo />
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none">
              Antifa <br className="hidden md:block" />
              <span className="text-red-600">Nord-West</span> Celle
            </h1>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-black uppercase tracking-widest">
            <a href="#ueber-uns" className="hover:text-red-600 hover:-translate-y-1 transition-all">Über Uns</a>
            <a href="#aktuelles" className="hover:text-red-600 hover:-translate-y-1 transition-all">Aktuelles</a>
            <a href="#mitmachen" className="hover:text-red-600 hover:-translate-y-1 transition-all">Mitmachen</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-32">
        {/* Hero Section */}
        <section className="relative border-l-[12px] border-red-600 pl-6 md:pl-12 py-12 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
              Organisieren. <br />
              <span className="text-red-600">Kämpfen.</span> <br />
              Verändern.
            </h2>
            <p className="text-2xl md:text-3xl font-bold max-w-3xl border-l-8 border-black pl-6 py-2 bg-[#f4f4f4]">
              Wir sind die Antifaschistische Aktion Nord-West in Celle. Gegen jeden Antisemitismus, Rassismus und Faschismus.
            </p>
          </motion.div>
        </section>

        {/* Über Uns (About Us) */}
        <section id="ueber-uns" className="space-y-12">
          <div className="flex items-center gap-4 border-b-8 border-black pb-4">
            <Shield className="w-12 h-12 text-red-600" />
            <h3 className="text-5xl font-black uppercase tracking-tight">Über Uns</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Statement */}
            <div className="bg-black text-white p-8 border-4 border-red-600 shadow-[-12px_12px_0px_0px_rgba(220,38,38,1)]">
              <h4 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                <Flag className="text-red-600 w-8 h-8" /> Mission
              </h4>
              <p className="text-lg font-medium leading-relaxed">
                Wir verstehen uns als ein offenes, radikales und emanzipatorisches Bündnis. Unsere Arbeit richtet sich gegen die erstarkenden rechten Strukturen in Celle und Umgebung. Wir setzen auf Selbstorganisation, direkte Aktion und unversöhnlichen Antifaschismus. Faschismus ist keine Meinung, sondern ein Verbrechen.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-3xl font-black uppercase mb-6 flex items-center gap-3 text-red-600">
                <Megaphone className="w-8 h-8" /> Kernwerte
              </h4>
              <ul className="space-y-4 text-lg font-bold">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <span>Solidarität mit allen Betroffenen rechter Gewalt.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <span>Antikapitalismus als Grundlage für echte Befreiung.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <span>Feminismus und Kampf gegen das Patriarchat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <span>Kompromisslose Intervention gegen rechte Hetze.</span>
                </li>
              </ul>
            </div>

            {/* Historical Context */}
            <div className="bg-white p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(220,38,38,1)]">
              <h4 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                <AlertTriangle className="text-red-600 w-8 h-8" /> Geschichte
              </h4>
              <p className="text-lg font-medium leading-relaxed">
                Gegründet in den frühen 2000er Jahren als Reaktion auf die zunehmende Präsenz von Neonazi-Kameradschaften in der Lüneburger Heide, hat sich die Antifa Nord-West als konstante Gegenmacht etabliert. Von den Blockaden in Bad Nenndorf bis zu lokalen Aufklärungs-Kampagnen in Celle – unsere Geschichte ist geprägt von Widerstand auf der Straße und kontinuierlicher Recherchearbeit im Hintergrund.
              </p>
            </div>

            {/* Organizational Structure */}
            <div className="bg-red-600 text-white p-8 border-4 border-black shadow-[-12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                <Users className="w-8 h-8" /> Struktur
              </h4>
              <p className="text-lg font-medium leading-relaxed">
                Wir organisieren uns basisdemokratisch, hierarchiefrei und in autonomen Bezugsgruppen. Entscheidungen werden im Konsens auf unseren regelmäßigen Plena getroffen. Wir lehnen staatliche Institutionen als Lösung für das Faschismus-Problem ab und vertrauen auf die Kraft der organisierten Zivilgesellschaft und der außerparlamentarischen Opposition.
              </p>
            </div>
          </div>
        </section>

        {/* Aktuelles (News Feed) */}
        <section id="aktuelles" className="space-y-12">
          <div className="flex items-center gap-4 border-b-8 border-red-600 pb-4">
            <Newspaper className="w-12 h-12 text-black" />
            <h3 className="text-5xl font-black uppercase tracking-tight">Aktuelles</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                date: "24. März 2026",
                title: "Erfolgreiche Blockade in der Südheide",
                excerpt: "Über 500 Antifaschist:innen haben am Wochenende den geplanten Aufmarsch der 'Jungen Alternative' in der Südheide erfolgreich blockiert. Ein starkes Zeichen der Solidarität!",
                category: "Aktion"
              },
              {
                date: "12. März 2026",
                title: "Recherche: Rechte Netzwerke im Stadtrat",
                excerpt: "Unsere neue Recherche-Broschüre deckt die Verbindungen zwischen lokalen AfD-Politikern und der extrem rechten Szene in Celle auf. Jetzt online lesen.",
                category: "Recherche"
              },
              {
                date: "28. Februar 2026",
                title: "Aufruf: Gedenkdemonstration",
                excerpt: "Am kommenden Samstag rufen wir zur Gedenkdemonstration für die Opfer rassistischer Gewalt auf. Treffpunkt ist um 14 Uhr am Bahnhofsvorplatz. Bringt Fahnen und Transparente!",
                category: "Aufruf"
              }
            ].map((news, i) => (
              <motion.article 
                key={i}
                whileHover={{ y: -8, x: -8 }}
                className="bg-white border-4 border-black flex flex-col h-full group transition-transform shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] hover:shadow-[16px_16px_0px_0px_rgba(220,38,38,1)]"
              >
                <div className="bg-black text-white p-3 flex justify-between items-center border-b-4 border-black group-hover:bg-red-600 transition-colors">
                  <span className="font-bold uppercase tracking-widest text-sm">{news.category}</span>
                  <span className="text-sm font-mono">{news.date}</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-2xl font-black uppercase mb-4 leading-tight">{news.title}</h4>
                  <p className="text-gray-700 font-medium mb-6 flex-grow">{news.excerpt}</p>
                  <button className="flex items-center gap-2 text-red-600 font-black uppercase tracking-widest hover:text-black transition-colors mt-auto w-fit">
                    Weiterlesen <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Mitmachen (Get Involved) */}
        <section id="mitmachen" className="space-y-12">
          <div className="flex items-center gap-4 border-b-8 border-black pb-4">
            <HeartHandshake className="w-12 h-12 text-red-600" />
            <h3 className="text-5xl font-black uppercase tracking-tight">Mitmachen & Unterstützen</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Volunteer */}
            <div className="lg:col-span-2 bg-black text-white p-8 border-4 border-red-600 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] flex flex-col justify-between">
              <div>
                <h4 className="text-3xl font-black uppercase mb-4 flex items-center gap-3">
                  <Users className="text-red-600" /> Aktiv Werden
                </h4>
                <p className="text-lg font-medium mb-6">
                  Antifaschismus ist Handarbeit. Komm zu unserem offenen Plenum, lerne uns kennen und bring dich ein. Wir brauchen Leute für Recherche, Demosanitäter, Pressearbeit und Aktionen.
                </p>
              </div>
              <div className="bg-white text-black p-4 border-l-8 border-red-600 font-bold flex items-center gap-4">
                <Calendar className="w-8 h-8 text-red-600" />
                <div>
                  <p className="uppercase text-sm text-gray-500">Nächstes Offenes Treffen</p>
                  <p className="text-xl">Jeden 1. Dienstag im Monat, 19:00 Uhr</p>
                </div>
              </div>
            </div>

            {/* Donate */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-black uppercase mb-4 text-red-600">Spenden</h4>
                <p className="font-medium mb-6">
                  Unterstütze unsere Antirepressionsarbeit, Druckkosten für Flyer und Plakate sowie die Organisation von Veranstaltungen.
                </p>
              </div>
              <div className="space-y-3">
                <a href="#paypal" className="block w-full text-center bg-black text-white font-black uppercase py-3 border-2 border-black hover:bg-red-600 hover:border-red-600 transition-colors">
                  PayPal
                </a>
                <a href="#bank" className="block w-full text-center bg-white text-black font-black uppercase py-3 border-2 border-black hover:bg-gray-100 transition-colors">
                  Überweisung
                </a>
              </div>
            </div>

            {/* Newsletter & Socials */}
            <div className="bg-red-600 text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
                  <Mail /> Newsletter
                </h4>
                <p className="font-medium mb-4 text-sm">
                  Bleib auf dem Laufenden über Aktionen und Aufrufe.
                </p>
                <form className="space-y-2 mb-8" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="E-MAIL ADRESSE" 
                    className="w-full bg-white text-black px-4 py-2 font-bold border-2 border-black focus:outline-none focus:ring-4 focus:ring-black/50"
                  />
                  <button className="w-full bg-black text-white font-black uppercase py-2 border-2 border-black hover:bg-white hover:text-black transition-colors">
                    Eintragen
                  </button>
                </form>
              </div>
              
              <div>
                <h4 className="text-xl font-black uppercase mb-3">Netzwerke</h4>
                <div className="flex gap-4">
                  <a href="#insta" className="bg-black p-3 hover:bg-white hover:text-black transition-colors border-2 border-black">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#telegram" className="bg-black p-3 hover:bg-white hover:text-black transition-colors border-2 border-black">
                    <Send className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white border-t-[12px] border-red-600 py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <PirateLogo />
              <h2 className="text-3xl font-black uppercase">Antifa Nord-West Celle</h2>
            </div>
            <p className="text-gray-400 font-bold max-w-md text-lg leading-relaxed">
              Antifaschistische Aktion in Celle und Umgebung. <br/>
              Alerta Alerta Antifascista!
            </p>
          </div>
          <div className="md:text-right flex flex-col md:items-end justify-center">
            <h3 className="text-2xl font-black uppercase mb-4 text-red-600">Kontakt</h3>
            <p className="text-gray-300 font-mono mb-2">
              PGP-Key auf Anfrage.
            </p>
            <a href="mailto:kontakt@antifa-nw-celle.example.org" className="text-xl font-bold hover:text-red-600 transition-colors border-b-2 border-red-600 pb-1">
              kontakt@antifa-nw-celle.example.org
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

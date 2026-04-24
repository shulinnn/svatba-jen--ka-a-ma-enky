/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";
import fotka1 from "../fotka1.jpg";
import fotka2 from "../fotka2.jpg";
import fotka3 from "../fotka3.jpg";
import fotka4 from "../fotka4.jpg";
import fotka5 from "../fotka5.jpg";
import fotka6 from "../fotka6.jpg";
import fotka7 from "../fotka7.jpg";
import fotka8 from "../fotka8.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function App() {
  const navItems = [
    { name: "Náš příběh", href: "#pribeh" },
    { name: "Informace", href: "#info" },
    { name: "Harmonogram", href: "#harmonogram" },
    { name: "FAQ", href: "#faq" },
    { name: "Dotazník", href: "#dotaznik" },
    { name: "Dary", href: "#dary" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-wedding-accent/20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center">
          <ul className="hidden md:flex gap-8 text-sm font-serif uppercase tracking-widest text-wedding-text/70">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="hover:text-wedding-muted transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile indicator or simple text for small screens */}
          <div className="md:hidden font-serif text-xs tracking-[0.2em] uppercase text-wedding-muted">
            Jeníček & Mařenka
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <img
          src={fotka1}
          alt="Jeníček a Mařenka"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl lg:text-9xl font-serif mb-8 drop-shadow-md leading-tight"
          >
            Jeníček <br /> a Mařenka
          </motion.h1>
        </div>
        <div className="absolute bottom-12 left-0 w-full z-10 text-white px-8">
          <div className="flex justify-between items-end max-w-7xl mx-auto w-full">
            <p className="text-lg font-serif tracking-widest uppercase">27. 6. 2026</p>
            <p className="text-lg font-serif tracking-widest uppercase">MALOTOVI</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="pribeh" className="max-w-7xl mx-auto py-24 px-8 pt-32">
        <motion.h2 {...fadeIn} className="text-2xl md:text-4xl mb-16 text-center md:text-left">
          Jak děvčica z Hané potkala ogaru z Valašska
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <img
              src={fotka2}
              alt="Couple"
              className="w-full h-auto shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div {...fadeIn} className="space-y-6 text-lg leading-relaxed text-wedding-text/80">
            <p>
              Náš příběh se začal psát v roce 2023, ale jeho první kapitoly vznikaly už dávno předtím.
            </p>
            <p>
              Několik měsíců, možná i let, jsme se míjeli, nenápadně po sobě pokukovali a osud si s námi tiše pohrával. Až nastal ten správný čas, kdy se naše cesty skutečně protnuly a dali jsme jim společný směr.
            </p>
            <p>
              Novou etapu našeho života, ruku v ruce s otevřeným srdcem, zahájíme 27. června 2026 v kostele Všech svatých v Hradisku u Kroměříže.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto pb-24 px-8 grid md:grid-cols-2 gap-8">
        <motion.img
          {...fadeIn}
          src={fotka3}
          alt="Gallery 1"
          className="w-full h-auto shadow-lg"
          referrerPolicy="no-referrer"
        />
        <motion.img
          {...fadeIn}
          src={fotka4}
          alt="Gallery 2"
          className="w-full h-auto shadow-lg"
          referrerPolicy="no-referrer"
        />
      </section>
      {/* Info Section */}
      <section id="info" className="bg-wedding-accent/20 py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-[1fr_2fr] gap-16">
          <motion.h2 {...fadeIn} className="text-4xl md:text-6xl leading-tight font-serif">
            Pár<br />informací
          </motion.h2>
          <div className="space-y-16">
            <motion.div {...fadeIn} className="grid grid-cols-[auto_1fr] gap-8 border-t border-wedding-text/20 pt-8">
              <span className="text-2xl font-serif text-wedding-muted">01</span>
              <div>
                <h3 className="text-xl mb-4 font-medium">Máte fotografa a mohla bych ho vidět?</h3>
                <p className="text-wedding-text/70 leading-relaxed">
                  Na svatbě budeme mít profesionální fotografku, ale víme, že je mezi vámi spousta šikovných amatérů, kteří zachytí krásné momenty po svém. Klidně tedy vezměte do ruky telefon nebo fotoaparát a foťte. Ke společnému sdílení fotek pak bude připraven QR kód, který ve správný čas určitě objevíte.
                </p>
                <p className="text-wedding-text/70 leading-relaxed mt-4">
                  Během obřadu vás ale moc prosíme, nechte telefony i fotoaparáty schované. Fotografce plně důvěřujeme a budeme rádi, když si tento výjimečný okamžik užijete společně s námi, tady a teď.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="grid grid-cols-[auto_1fr] gap-8 border-t border-wedding-text/20 pt-8">
              <span className="text-2xl font-serif text-wedding-muted">02</span>
              <div>
                <h3 className="text-xl mb-4 font-medium">Barvy? Ano, ne, možná?</h3>
                <p className="text-wedding-text/70 leading-relaxed mb-6">
                  Na svatbě si přejeme hlavně pohodu a úsměvy. Pokud si ale rádi dáváte záležet i na outfitu a baví vás ladění barev, tahle paleta vám může posloužit jako malá inspirace. Když ne, svět se nezboří.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['#E5DAD8', '#C9C4B4', '#949474', '#4B5335', '#8B5E3C'].map((color, idx) => (
                    <div key={idx} className="w-12 h-12 rounded-full shadow-md border-2 border-white" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="grid grid-cols-[auto_1fr] gap-8 border-t border-wedding-text/20 pt-8">
              <span className="text-2xl font-serif text-wedding-muted">03</span>
              <div>
                <h3 className="text-xl mb-4 font-medium">Kde se potkáme u dobrého jídla <br /> a pití?</h3>
                <p className="text-wedding-text/70 leading-relaxed">
                  Svatební veselí se přesune do kulturního domu v Dolní Lhotě u Luhačovic. Pokud sem pojedete poprvé, doporučujeme zadat do navigace opravdu přesný cíl. Při orientaci podle map hledejte onu malou tečku poblíž Luhačovic. Za ty, kteří by omylem skončili u Ostravy, už bohužel nemůžeme nést odpovědnost. U kulturního domu je omezený počet parkovacích míst, proto prosíme, abyste svého čtyřkolového miláčka zaparkovali raději u kostela. Pokud však využijete svatební autobus, všechny tyto starosti můžete s klidem spustit z hlavy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Time Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto text-center">
        <motion.h2 {...fadeIn} className="text-4xl mb-4">Co s volnou chvílí?</motion.h2>
        <motion.p {...fadeIn} className="text-wedding-text/60 mb-16 max-w-2xl mx-auto">
          Pokud se k nám připojíte až ve večerních hodinách a budete mít čas navíc, připravili jsme pro vás několik tipů na zajímavá místa v okolí.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <motion.div {...fadeIn} className="space-y-4">
            <h3 className="text-xl border-b border-wedding-text/10 pb-2">Luhačovice</h3>
            <p className="text-wedding-text/70 text-sm leading-relaxed">
              Luhačovická kolonáda je místem, kde jsme často bloumali s teplou lázeňskou oplatkou v ruce a probrali úplně všechno. Pokud hledáte pohodu, sladkou tečku a příjemnou procházku, tady se jí rozhodně dočkáte.
            </p>
          </motion.div>
          <motion.div {...fadeIn} className="space-y-4">
            <h3 className="text-xl border-b border-wedding-text/10 pb-2">Kroměříž</h3>
            <p className="text-wedding-text/70 text-sm leading-relaxed">
              Navštívit můžete také Kroměříž. I když jsme se tehdy ještě neznali, prožili jsme tady svá nejlepší školní léta. Ne nadarmo se tomuto městu říká Hanácké Athény. Tady to zkrátka voní učením, příběhy a vzpomínkami na každém rohu.
            </p>
          </motion.div>
          <motion.div {...fadeIn} className="space-y-4">
            <h3 className="text-xl border-b border-wedding-text/10 pb-2">Zlín</h3>
            <p className="text-wedding-text/70 text-sm leading-relaxed">
              Právě tady začaly první krůčky. Dokonalá snídaně v Bistrotéce vás nejspíš čekat nebude (nechte si místo na svatební dobroty) a do Honzova kdysi oblíbeného podchodu na gyros se také vydávat nemusíte. Pokud ale chcete nasát trochu historie, architektury a inspirace, tohle město rozhodně stojí za zastavení.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="harmonogram" className="bg-wedding-accent/30 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <motion.h2 {...fadeIn} className="text-4xl md:text-6xl mb-20 leading-tight font-serif">
                (Velmi orientační)<br />harmonogram
              </motion.h2>
              <div className="relative pl-8 border-l-2 border-wedding-muted/30 space-y-12">
                {[
                  { time: "9:30", event: "Odjezd autobusu z Dolní Lhoty" },
                  { time: "11:00", event: "Začátek obřadu" },
                  { time: "12:30", event: "Odjezd svatebčanů na hostinu" },
                  { time: "13:30", event: "Oběd" },
                  { time: "16:30", event: "Příjezd večerních hostů" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    {...fadeIn}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-wedding-muted border-4 border-white shadow-sm" />
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                      <span className="font-serif text-2xl text-wedding-muted leading-none">{item.time}</span>
                      <span className="text-xl text-wedding-text/80">{item.event}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              {...fadeIn}
              className="relative mt-12 md:mt-0"
            >
              <div className="absolute -inset-4 border border-wedding-muted/20 -z-10 translate-x-8 translate-y-8" />
              <img
                src={fotka5}
                alt="Schedule"
                className="w-full aspect-[3/4] object-cover object-top shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-[1fr_2fr] gap-16">
          <motion.h2 {...fadeIn} className="text-4xl md:text-6xl leading-tight">
            Nejčastější<br />dotazy
          </motion.h2>
          <div className="space-y-16">
            <motion.div {...fadeIn} className="grid grid-cols-[auto_1fr] gap-8 border-t border-wedding-text/20 pt-8">
              <span className="text-2xl font-serif text-wedding-muted">01</span>
              <div>
                <h3 className="text-xl mb-4">Kdy mám přijít?</h3>
                <p className="text-wedding-text/70 leading-relaxed">
                  Ideální je příchod kolem 10:45. Budeš tak v klidu ty, i my. Pokud by se však cokoli stalo, není třeba se obávat, budeme především rádi, pokud se zúčastníš. U kostela je k dispozici dostatečně velké parkoviště. Pokud by přesto nebylo volné místo, je možné zaparkovat podél hlavní cesty nebo sjet autem dolů z kopce. Parkovací místo určitě najdeš.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="grid grid-cols-[auto_1fr] gap-8 border-t border-wedding-text/20 pt-8">
              <span className="text-2xl font-serif text-wedding-muted">02</span>
              <div>
                <h3 className="text-xl mb-4">Jak je to s autobusem?</h3>
                <p className="text-wedding-text/70 leading-relaxed">
                  Pokud už je to dlouho, co jsi neseděl v autobuse, a máš chuť si tento adrenalin znovu vyzkoušet na vlastní kůži, máš jedinečnou příležitost. Autobus bude vyjíždět v 9:30 z Dolní Lhoty (DL). Cesta zpět do DL je plánována krátce po skončení obřadu. Věříme, že této výpravy rozhodně nebudeš litovat.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="grid grid-cols-[auto_1fr] gap-8 border-t border-wedding-text/20 pt-8">
              <span className="text-2xl font-serif text-wedding-muted">03</span>
              <div>
                <h3 className="text-xl mb-4">Musím řešit svatební dress code?</h3>
                <p className="text-wedding-text/70 leading-relaxed">
                  Máš už dlouho vybrané šaty na naši svatbu a vůbec se neshodují s barvami, které jsou zde zmíněny? Vůbec to nevadí. Vezmi si to, v čem se cítíš dobře. Náš svatební den není o dokonalosti, ale o tom, abychom si ho všichni užili. Pokud jsou ti pohodlné ponožky v sandálech, klidně v nich přijď. Nevěsta se ženichem se na tebe rozhodně zlobit nebudou.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Questionnaire Section */}
      <section id="dotaznik" className="py-24 px-8 bg-wedding-accent/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-serif mb-8">Svatební dotazník</motion.h2>
          <motion.p {...fadeIn} className="text-wedding-text/70 text-lg leading-relaxed mb-12">
            Prosíme vás o vyplnění krátkého dotazníku, který nám pomůže s organizací našeho velkého dne. Vaše odpovědi jsou pro nás velmi důležité.
          </motion.p>
          <motion.div {...fadeIn}>
            <a 
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=_zrTWBHsT0e5819RFNfR63ZhLlTD9KlJpMbX2iRN7PlUQUJKUEJXSjcyRFEyNlhMODUyTlgwNTNKNC4u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-wedding-text text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-wedding-muted transition-colors shadow-lg uppercase tracking-widest"
            >
              Vyplnit dotazník
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gifts Section */}
      <section id="dary" className="bg-wedding-accent/10 py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.img
            {...fadeIn}
            src={fotka6}
            alt="Gift 1"
            className="w-full md:w-1/4 aspect-square object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
          <motion.div {...fadeIn} className="flex-1 text-center px-4">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-wedding-muted italic">
              "Svatebčané naši milí, dovolte nám prosbičku, raději než věcné dary, naplňte nám kasičku. Velkou radost budeme mít i z korunky drobné, nosit dříví do lesíčka, nebylo by vhodné."
            </p>
          </motion.div>
          <motion.img
            {...fadeIn}
            src={fotka7}
            alt="Gift 2"
            className="w-full md:w-1/4 aspect-square object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Footer Section */}
      <section id="kontakt" className="w-full bg-wedding-text text-white">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={fotka8}
            alt="Footer Couple"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wedding-text via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-12 text-center">
            <motion.h2 {...fadeIn} className="text-4xl md:text-7xl font-serif mb-4">Těšíme se na vás!</motion.h2>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-24 px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-serif leading-tight border-l-4 border-wedding-accent pl-8">
              Kontaktní<br />osoby
            </motion.h2>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:pl-12">
              <motion.div {...fadeIn} className="group">
                <h3 className="text-2xl font-serif mb-2 text-wedding-accent">Anna Pavlíková</h3>
                <p className="text-white/60 mb-6 font-light uppercase tracking-widest text-sm">(svědkyně nevěsty)</p>
                <a href="mailto:anna0909@seznam.cz" className="inline-flex items-center gap-3 text-lg hover:text-wedding-accent transition-all duration-300 group-hover:translate-x-2">
                  <div className="p-2 rounded-full border border-white/20 group-hover:border-wedding-accent">
                    <Mail size={20} />
                  </div>
                  anna0909@seznam.cz
                </a>
              </motion.div>
              <motion.div {...fadeIn} className="group">
                <h3 className="text-2xl font-serif mb-2 text-wedding-accent">Marie Pavlíková</h3>
                <p className="text-white/60 mb-6 font-light uppercase tracking-widest text-sm">(nevěsta)</p>
                <a href="mailto:pavlikovamaja@seznam.cz" className="inline-flex items-center gap-3 text-lg hover:text-wedding-accent transition-all duration-300 group-hover:translate-x-2">
                  <div className="p-2 rounded-full border border-white/20 group-hover:border-wedding-accent">
                    <Mail size={20} />
                  </div>
                  pavlikovamaja@seznam.cz
                </a>
              </motion.div>
              <motion.div {...fadeIn} className="group">
                <h3 className="text-2xl font-serif mb-2 text-wedding-accent">Jan Malota</h3>
                <p className="text-white/60 mb-6 font-light uppercase tracking-widest text-sm">(ženich)</p>
                <a href="tel:+420776072555" className="inline-flex items-center gap-3 text-lg hover:text-wedding-accent transition-all duration-300 group-hover:translate-x-2">
                  <div className="p-2 rounded-full border border-white/20 group-hover:border-wedding-accent">
                    <Phone size={20} />
                  </div>
                  776 072 555
                </a>
              </motion.div>
            </div>
          </div>
          
          <motion.div {...fadeIn} className="mt-32 pt-12 border-t border-white/10 text-center text-white/40 text-sm font-light tracking-widest uppercase">
            Jeníček & Mařenka • 27. 6. 2026
          </motion.div>
        </div>
      </section>
    </div>
  );
}

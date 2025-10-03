import { Separator } from "@/components/ui/separator";
import FadeIn from "@/components/FadeIn";
import BackToTop from "@/components/BackToTop";
import Image from "next/image";

export default function BlogpostPage() {
  return (
    <main className="max-w-3xl mx-auto py-10 space-y-10 snap-y snap-mandatory">
      {/* Header */}
      <FadeIn>
        <header className="space-y-6">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/Jose_Rizal_National_Monument.jpg"
              alt="José Rizal National Monument"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">José Rizal — Blogpost</h1>
            <p className="text-lg text-muted-foreground">
              A creative, long-form reading of Rizal&apos;s life and ideas.
            </p>
            <nav className="text-sm text-muted-foreground">
              <ul className="flex flex-wrap gap-3">
                <li><a className="underline" href="#introduction">Introduction</a></li>
                <li><a className="underline" href="#family">Biological Factors</a></li>
                <li><a className="underline" href="#education">Environmental Factors</a></li>
                <li><a className="underline" href="#literary-works">Life Experiences</a></li>
                <li><a className="underline" href="#life-abroad">Character Analysis</a></li>
                <li><a className="underline" href="#death-exile">Pitfalls and Heroism</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </FadeIn>

      {/* Introduction */}
      <FadeIn>
        <section id="introduction" className="space-y-4 min-h-screen flex flex-col justify-center snap-start">
          <h2 className="text-3xl font-semibold">Introduction</h2>
          <p className="text-base mb-4">
            José Protacio Rizal Mercado y Alonzo Realonda (1861–1896) is widely regarded as the
            Philippines&apos; national hero. A brilliant polymath—doctor, writer, linguist, scientist, and
            reformist—Rizal played a central role in awakening Filipino national consciousness during
            the late 19th century. Through his writings, particularly Noli Me Tangere and El Filibusterismo,
            he exposed the abuses of the Spanish friars and colonial officials. His peaceful advocacy for
            reform, combined with his execution by Spanish authorities, transformed him into a martyr
            and symbol of resistance.
          </p>
          <p className="text-base">
            This timeline explores the biological and environmental factors, key life experiences, and
            personal virtues and shortcomings that shaped Rizal&apos;s evolution from a young intellectual to
            a national hero. It also examines how his character was molded by both his upbringing and
            his encounters with colonial injustice.
          </p>
        </section>
      </FadeIn>

      <Separator />

      {/* Family / Biological Factors */}
      <FadeIn>
        <section id="family" className="space-y-4 min-h-screen flex flex-col justify-center snap-start">
          <h2 className="text-3xl font-semibold">Biological Factors</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">A. Inherited Traits</h3>
              <p className="text-base">
                Rizal was born into the Mercado–Alonzo family, both of which had a long history of
                education, civic involvement, and relative prosperity. His father, Francisco Mercado,
                was known for his intelligence and progressive farming techniques. His mother, Doña
                Teodora Alonso Realonda, was exceptionally well-educated for a Filipina woman at the time;
                she taught Rizal to read and write at age three. These inherited traits of intelligence,
                industriousness, and moral discipline laid the foundation for his later intellectual
                achievements and ethical convictions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">B. Physical Characteristics and Their Impact</h3>
              <p className="text-base">
                As a child, Rizal was frail and small for his age, which limited his engagement in physical
                play. This frailty motivated his parents to direct him toward intellectual pursuits, which
                shaped his scholarly habits early on. Additionally, Rizal suffered from nearsightedness
                (myopia), which encouraged reading and reflection rather than physical activity. These
                biological factors pushed him toward a life of study and contemplation—traits that would
                define his career as a writer, scholar, and reformer.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <Separator />

      {/* Education / Environmental Factors */}
      <FadeIn>
        <section id="education" className="space-y-4 min-h-screen flex flex-col justify-center snap-start">
          <h2 className="text-3xl font-semibold">Environmental Factors</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">A. Family Background and Upbringing</h3>
              <p className="text-base mb-4">
                Rizal grew up in Calamba, Laguna, in a prosperous, educated, and religious family.
                Their two-story stone house was surrounded by farmlands, reflecting their middle-class
                principalia status. His family valued education highly; most of his siblings were
                educated, and they often hosted intellectual conversations at home. This environment
                nurtured his intellectual curiosity and moral values.
              </p>
              <p className="text-base">
                The Mercado household functioned as a microcosm of Philippine society, where traditional
                Filipino values coexisted with Spanish colonial influences. Family members spoke both
                Tagalog and Spanish, creating a bilingual environment that would later enable Rizal to
                communicate effectively with diverse audiences. Religious practices in the family
                combined Catholic devotion with indigenous customs, teaching Rizal to appreciate both
                universal moral principles and local cultural expressions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">B. Educational Experiences</h3>
              <p className="text-base mb-4">
                Rizal received his early education under Maestro Justiniano in Biñan, where he learned
                basic literacy and arithmetic. Later, he studied at Ateneo Municipal, where he excelled
                academically and was recognized as one of the best students, graduating with highest honors.
                At Ateneo, Rizal encountered a Jesuit educational system that emphasized classical learning,
                moral formation, and competitive academic achievement, providing him with a solid foundation
                in both humanities and sciences.
              </p>
              <p className="text-base">
                His experience at the University of Santo Tomas exposed him to racial discrimination and
                institutional biases that characterized colonial education. Filipino students faced unequal
                treatment compared to their Spanish counterparts, with limited access to certain courses and
                positions. This discrimination frustrated Rizal and reinforced his belief in the need for
                educational reform. His decision to study abroad was not merely an academic choice but a
                political statement against the limitations imposed by colonial education.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">C. Social and Political Context</h3>
              <p className="text-base mb-4">
                Rizal grew up during a time of widespread friar abuse, land grabbing, and racial
                discrimination. His family became involved in a land dispute with the Dominican friars who
                claimed their Calamba property—this dispute exposed Rizal early to colonial injustice.
                The execution of Fathers Gomez, Burgos, and Zamora in 1872 marked a turning point in
                Philippine colonial history and deeply affected the young Rizal, demonstrating the brutal
                consequences of challenging colonial authority.
              </p>
              <p className="text-base">
                The broader social context of the late 19th century Philippines was characterized by
                increasing tensions between colonial authorities and the emerging Filipino middle class.
                Economic changes, including the opening of the Suez Canal and increased trade, created
                new opportunities for educated Filipinos while also exposing them to liberal ideas from
                Europe. The rise of the ilustrado class, to which Rizal belonged, created a new social group
                that was educated, relatively wealthy, and increasingly aware of their rights and the
                injustices of colonial rule.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <Separator />

      {/* Life Experiences */}
      <FadeIn>
        <section id="literary-works" className="space-y-4 min-h-screen flex flex-col justify-center snap-start">
          <h2 className="text-3xl font-semibold">Life Experiences</h2>
          <div className="space-y-6">
            {/* Abroad */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">A. Experiences Abroad</h3>
              <p className="text-base mb-4">
                In 1882, José Rizal made the bold decision to travel abroad, leaving the Philippines in
                secret to escape the close watch of Spanish colonial authorities. His departure was not
                merely an act of seeking education but also a calculated step to gain freedom of thought
                and expression. Arriving in Spain, Rizal enrolled at the Universidad Central de Madrid,
                where he pursued medicine and later specialized in ophthalmology. His academic journey was
                marked not only by diligence but also by his growing awareness of the injustices faced by
                his fellow Filipinos.
              </p>
              <p className="text-base">
                During his years in Madrid, Rizal became deeply involved in the intellectual and political
                circles of the time. He absorbed liberal, nationalist, and Enlightenment ideals, which
                profoundly shaped his worldview. He joined organizations of Filipino expatriates, such as
                the Propaganda Movement, where he worked with other reformists advocating for equality,
                representation, and reforms in the Spanish Cortes. After his stay in Spain, Rizal traveled
                across Europe to Paris and Berlin, where he trained further in ophthalmology. Berlin, in
                particular, proved to be one of the most productive periods of his life, where he completed
                his landmark novel Noli Me Tangere in 1887.
              </p>
            </div>
            {/* Dapitan */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">B. Life in Dapitan (1892–1896)</h3>
              <p className="text-base mb-4">
                After years in Europe, Rizal returned home in 1892 with the hope of advancing peaceful reform.
                He founded La Liga Filipina, a civic organization that sought to unite Filipinos in pursuing
                education, progress, and equality under Spanish law. The Spanish authorities, however, saw
                the movement as a threat. Within days of its establishment, Rizal was arrested and exiled
                to Dapitan, a remote town in Mindanao, marking the beginning of a four-year period of forced
                isolation.
              </p>
              <p className="text-base">
                In Dapitan, Rizal lived a life of service and productivity. He established a school, provided
                free medical services, and conducted research. He introduced innovations in agriculture and
                helped build a water system. Despite exile, Rizal demonstrated his deep love for his people
                through education, science, and civic work.
              </p>
            </div>
            {/* Execution */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">C. Arrest, Trial, and Execution</h3>
              <p className="text-base mb-4">
                In 1896, Rizal was granted permission to travel to Cuba, but he was arrested in Spain and
                sent back to Manila. He was accused of rebellion, sedition, and conspiracy, despite his
                consistent rejection of violent revolt. His trial was swift and unjust, and on December 30,
                1896, Rizal was executed at Bagumbayan. Walking to his death with dignity, he left behind
                Mi Último Adiós, a farewell poem that inspired future generations to continue the struggle
                for independence.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <Separator />

      {/* Character Analysis */}
      <FadeIn>
        <section id="life-abroad" className="space-y-4 min-h-screen flex flex-col justify-center snap-start">
          <h2 className="text-3xl font-semibold">Character Analysis</h2>
          
          {/* Virtues */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">A. Virtues and Strengths</h3>
            <div className="mb-6 space-y-4">
              <div className="group relative w-full h-64 rounded-lg overflow-hidden shadow-md">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                  style={{
                    backgroundImage: 'url(/images/perseverance.jpg)',
                  }}
                />
              </div>
              <p className="text-gray-600">
                Rizal&apos;s exceptional qualities that defined his character and leadership.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Intellectual brilliance</h4>
                <p className="text-sm text-muted-foreground">
                  Exceptional academic performance and innovative thinking across multiple disciplines.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Discipline and moral courage</h4>
                <p className="text-sm text-muted-foreground">
                  Unwavering commitment to principles despite personal risks and consequences.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Deep compassion and patriotism</h4>
                <p className="text-sm text-muted-foreground">
                  Genuine love for his people and dedication to their welfare and progress.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Multilingual and skilled in multiple disciplines</h4>
                <p className="text-sm text-muted-foreground">
                  Mastery of languages and expertise in medicine, literature, and sciences.
                </p>
              </div>
            </div>
          </div>

          {/* Weaknesses */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">B. Shortcomings and Weaknesses</h3>
            <div className="mb-6 space-y-4">
              <div className="group relative w-full h-64 rounded-lg overflow-hidden shadow-md">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                  style={{
                    backgroundImage: 'url(/images/Despair.jpg)',
                  }}
                />
              </div>
              <p className="text-gray-600">
                The challenges and limitations that shaped Rizal&apos;s character and decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Overcautious in embracing revolutionary means</h4>
                <p className="text-sm text-muted-foreground">
                  Reluctance to support armed resistance, limiting immediate political impact.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Emotional indecisiveness in personal matters</h4>
                <p className="text-sm text-muted-foreground">
                  Struggles with personal relationships and romantic commitments.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">At times politically idealistic</h4>
                <p className="text-sm text-muted-foreground">
                  Believing reform was possible within colonial structures despite evidence to the contrary.
                </p>
              </div>
            </div>
          </div>

          {/* Evolution */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">C. Evolution of Character</h3>
            <div className="mb-6 space-y-4">
              <div className="group relative w-full h-64 rounded-lg overflow-hidden shadow-md">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                  style={{
                    backgroundImage: 'url(/images/growth.jpg)',
                  }}
                />
              </div>
              <p className="text-gray-600">
                From a young intellectual seeking education abroad, Rizal matured into a reformist
                leader who inspired others through peaceful advocacy. His death ultimately turned him
                into a unifying national symbol.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>


      <Separator />

      {/* Pitfalls and Heroism */}
      <FadeIn>
        <section id="pitfalls-heroism" className="space-y-4 min-h-screen flex flex-col justify-center snap-start">
          <h2 className="text-3xl font-semibold">Pitfalls and Heroism</h2>
          <p className="text-base">
            Rizal’s life was marked by discrimination, constant surveillance, the persecution of his family, exile in Dapitan, and ultimately his unjust execution. Despite these hardships, he never abandoned his principles of justice and human dignity. He believed reform and education were the most powerful tools to awaken the Filipino people, even as the colonial system sought to silence him. Through his teaching, writing, and civic projects, Rizal showed that true heroism lay not in violence but in steadfast service to others.
          </p>
          <p className="text-base">
            His martyrdom at Bagumbayan in 1896 became the turning point that ignited the revolutionary movement. By embracing death with dignity, Rizal transformed into a national symbol whose sacrifice inspired Filipinos across generations to fight for freedom. His legacy endures not only in monuments and commemorations but in the ideals of education, civic responsibility, and peaceful reform. Rizal’s pitfalls, endured with resilience, became the foundation of his heroism, proving that one individual’s conviction can catalyze an entire nation’s awakening.
          </p>
        </section>
      </FadeIn>

      <Separator />

      {/* Acknowledgments */}
      <FadeIn>
        {/* Conclusion */}
        <section id="conclusion" className="space-y-4 min-h-screen flex flex-col justify-center snap-start">
          <h2 className="text-3xl font-semibold">Conclusion</h2>
          <p className="text-base">
            José Rizal’s life was shaped by his inherited traits, upbringing, education, travels, and experiences under colonial oppression. His intellectual and moral leadership awakened nationalist consciousness. His martyrdom transformed the reform movement into a revolution. His legacy endures as the moral and intellectual foundation of the Philippine nation.
          </p>
        </section>
      </FadeIn>

      <BackToTop />
    </main>
  );
}

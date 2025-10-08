import { Book, BookOpen, Globe, Languages, Dumbbell, Palette, Sparkles, Heart } from 'lucide-react';
import Carousel from '../components/Carousel';

const programmes = [
  {
    title: 'Montessori',
    icon: Book,
    description: 'Our Montessori programme follows the principles of Maria Montessori, emphasizing hands-on learning, self-directed activity, and collaborative play. Children work with specially designed materials that promote independence, concentration, and a love for learning. We create a prepared environment that allows each child to develop at their own pace while building confidence and essential life skills.',
    images: [
      'https://github.com/zedlink-dz/PICS/blob/main/montessori2.478Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/montessori3.007Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/montessori4.520Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/mmontessori1.960Z.png?raw=true',
    ],
    color: 'from-pink-500 to-rose-500',
  }, 
  {
    title: 'Arabic',
    icon: Languages,
    description: 'Our Arabic language programme introduces children to the beauty of the Arabic language through songs, stories, and interactive activities. We focus on building vocabulary, proper pronunciation, and basic reading and writing skills. Children learn about Algerian culture and traditions while developing a strong foundation in their mother tongue that will serve them throughout their educational journey.',
    images: [
      'https://github.com/zedlink-dz/PICS/blob/main/arab%201.139Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/arab2.598Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/arab3.588Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/arab%204.364Z.png?raw=true',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Quran',
    icon: BookOpen,
    description: 'Our Quran programme introduces young children to the Holy Quran in a gentle and age-appropriate manner. Children learn basic surahs, simple duas, and Islamic values through engaging activities and storytelling. We emphasize love and respect for the Quran while building memorization skills and understanding of Islamic principles in a nurturing environment.',
    images: [
      'https://github.com/zedlink-dz/PICS/blob/main/quran1.965Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/quran2.996Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/quran3.415Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/quran4.548Z.png?raw=true',
    ],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'English',
    icon: Globe,
    description: 'Our English language programme immerses children in English through play-based learning, songs, games, and stories. We use a communicative approach that emphasizes speaking and listening skills while gradually introducing reading and writing. Children develop confidence in using English naturally, preparing them for success in our increasingly globalized world.',
    images: [
      'https://github.com/zedlink-dz/PICS/blob/main/english1.576Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/english2.190Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/english3.614Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/english4.220Z.png?raw=trueg',
    ],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'French',
    icon: Languages,
    description: 'Our French language programme introduces children to this beautiful language through interactive activities, songs, and cultural experiences. Building on Algeria\'s bilingual heritage, we help children develop strong foundations in French vocabulary, pronunciation, and comprehension. The programme integrates language learning with cultural awareness, preparing children for future academic success.',
    images: [
      'https://github.com/zedlink-dz/PICS/blob/main/french1.920Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/french2.166Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/french3.652Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/french4.540Z.png?raw=true',
    ],
    color: 'from-purple-500 to-violet-500',
  },
  {
    title: 'Sport',
    icon: Dumbbell,
    description: 'Our sports programme promotes physical development, coordination, and healthy habits through age-appropriate activities and games. Children participate in structured physical education, outdoor play, and movement activities that build strength, balance, and motor skills. We emphasize teamwork, sportsmanship, and the joy of physical activity in a supportive environment.',
    images: [
      'https://github.com/zedlink-dz/PICS/blob/main/sport%201.352Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/sport%202.645Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/sport%203.484Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/sport%204.013Z.png?raw=true',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Painting, Coloration & Collage',
    icon: Palette,
    description: 'Our visual arts programme encourages creativity and self-expression through various mediums including painting, coloring, and collage work. Children explore colors, textures, and techniques while developing fine motor skills and artistic confidence. We celebrate each child\'s unique creativity and provide opportunities for them to express their imagination through art.',
    images: [
      'https://github.com/zedlink-dz/PICS/blob/main/painting1.433Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/painting2.838Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/painting3.080Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/painting4.230Z.png?raw=true',
    ],
    color: 'from-pink-500 to-fuchsia-500',
  },
  {
    title: 'Animation',
    icon: Sparkles,
    description: 'Our animation programme brings learning to life through music, drama, dance, and movement activities. Children participate in storytelling, puppet shows, role-play, and performances that develop communication skills, confidence, and creativity. We create magical moments where children can explore different characters, emotions, and scenarios in a fun and supportive environment.',
    images: [
      'https://github.com/zedlink-dz/PICS/blob/main/annimation1.289Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/animation2.430Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/annimation3.389Z.png?raw=true',
      'https://github.com/zedlink-dz/PICS/blob/main/annimation4.038Z.png?raw=true',
    ],
    color: 'from-yellow-500 to-amber-500',
  },
];

export default function Education() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-20 h-20 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Education Programmes</h1>
          <p className="text-xl md:text-2xl">
            A Comprehensive Curriculum Designed to Nurture Every Aspect of Your Child's Development
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {programmes.map((programme, index) => {
            const Icon = programme.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="mb-20"
              >
                <div className={`bg-gradient-to-r ${programme.color} rounded-2xl shadow-2xl overflow-hidden`}>
                  <div className="p-6 md:p-8 text-white text-center">
                    <Icon className="w-16 h-16 mx-auto mb-4 animate-bounce-gentle" />
                    <h2 className="text-4xl md:text-5xl font-bold">{programme.title}</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  {isEven ? (
                    <>
                      <div className="bg-white rounded-xl shadow-xl p-8 flex items-center">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {programme.description}
                        </p>
                      </div>
                      <div>
                        <Carousel images={programme.images} className="h-96" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <Carousel images={programme.images} className="h-96" />
                      </div>
                      <div className="bg-white rounded-xl shadow-xl p-8 flex items-center">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {programme.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-20 h-20 mx-auto mb-6 animate-spin-slow" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Holistic Approach to Early Education
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our comprehensive programmes work together to develop well-rounded, confident, and capable children ready for future success.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}
            className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 transform hover:scale-110 shadow-xl text-lg"
          >
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

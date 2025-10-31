import { Star, Award, Heart, MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import Carousel from '../components/Carousel';

const schoolImages = [
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/1.546Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/2.435Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/3.078Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/4.277Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/5.355Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/6.117Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/7.628Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/8.902Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/9.768Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/10.088Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/11.829Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/12.880Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/13.720Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/14.191Z.png?raw=true',
  'https://github.com/zedlink-dz/PICS/blob/main/nursery%20carousel/15.733Z.png?raw=true',
];

const teachers = [
  { name: 'Mrs. A.SAMIA', subject: 'Director', grade: 'All Grades', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/samia%20dg.png?raw=true' },
  { name: 'Mrs M.IMANE', subject: 'Secretary', grade: 'All Grades', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/imane%20secretary.png?raw=true' },
  { name: 'Mrs B.ASSIA', subject: 'English, Sport, Annimation, Painting-Colloring-Collage', grade: '3yo - 4yo - 5yo', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/Z.ASSIA.844Z.png?raw=true' },
  { name: 'Miss Z.ASSMA', subject: 'Arabic, Quran, French, Painting-Colloring-Collage', grade: '4-5 Years', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/assma.868Z.png?raw=true' },
  { name: 'Mrs A.BOUCHRA', subject: 'Arabic, Quran, French, Painting-Colloring-Collage', grade: '4-5 Years', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/bouchra.168Z.png?raw=true' },
  { name: 'Mrs L.HAKIMA', subject: 'Arabic, Quran, French, Painting-Colloring-Collage', grade: '3 Years', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/youssra.png?raw=true' },
  { name: 'Mrs N.ASSIA', subject: 'Arabic, French', grade: '1-2 Years', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/HAKIMA.968Z.png?raw=true' },
  { name: 'Mrs J.HIND', subject: 'Babysitting & Care', grade: '3 Month - 1 Year', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/HIND.477Z.png?raw=true' },
  { name: 'Dr. B.NADIA', subject: 'Speech Therapist "orthophoniste"', grade: 'All Grades', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/speech%20Therapist.png?raw=true' },
  { name: 'Dr. O.ZAHRA', subject: 'Pediatrician "Pédiatre', grade: 'All Grades', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/Dr%20Pediatrician.png?raw=true' },
  { name: 'Mrs. D.KARIMA', subject: 'Master Chef', grade: 'All Grades', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/karima%20master%20chef.420Z.png?raw=true' },
  { name: 'Mrs. R.RANIA', subject: 'Chef Assistant', grade: 'All Grades', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/nesrine%20chef.630Z.png?raw=true' },
  { name: 'Mrs. T.NESSRINE', subject: 'Hygiene', grade: 'All Grades', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/Generated%20Image%20October%2005,%202025%20-%201_23AM.png?raw=true' },
  { name: 'Mrs. F.NOUR', subject: 'Support Staff', grade: 'All Grades', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/nour%20support.png?raw=true' },
  { name: 'Mrs C.SAFIA', subject: 'Support Staff', grade: 'All Grades', image: 'https://github.com/zedlink-dz/PICS/blob/main/Nursery/assia%20support.png?raw=true' },
];

export default function Home() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 py-20 text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 animate-float">
          <Star className="w-16 h-16 text-yellow-200" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce-gentle">
          <Heart className="w-20 h-20 text-pink-200" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-spin-slow">
          <Sparkles className="w-12 h-12 text-purple-200" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            Welcome to L'ENFANT ROI & Preschool
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Where Every Child Shines Bright! Nurturing Young Minds with Love, Care & Excellence
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel images={schoolImages} className="h-[500px]" />
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6 flex items-center">
                <Heart className="w-12 h-12 mr-4 text-pink-500 animate-bounce-gentle" />
                About Us
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                L'ENFANT ROI & Preschool is a premier early childhood education center located in the heart of Algiers, Algeria. We provide a nurturing, safe, and stimulating environment where children aged 3 months to 5 years can learn, grow, and thrive.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our dedicated team of experienced educators combines international best practices with local cultural values to create a unique learning experience. We follow the Montessori approach while integrating Arabic, Quran studies, English, French, sports, and creative arts into our comprehensive curriculum.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At L'ENFANT ROI & preschool, we believe every child is unique and deserves personalized attention. Our low student-to-teacher ratio ensures that each child receives the care and support they need to develop confidence, creativity, and a lifelong love of learning.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/adYBXFv9Tfo" 
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-600 mb-12 flex items-center justify-center">
            <Award className="w-12 h-12 mr-4 text-yellow-500 animate-spin-slow" />
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-bounce-gentle" />
              <h3 className="text-2xl font-bold text-purple-600 mb-2">5-Star Rating</h3>
              <p className="text-gray-700">Consistently rated 5 stars by parents</p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <Award className="w-16 h-16 text-blue-500 mx-auto mb-4 animate-float" />
              <h3 className="text-2xl font-bold text-purple-600 mb-2">Certified Excellence</h3>
              <p className="text-gray-700">International Montessori accreditation</p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold text-purple-600 mb-2">2000+ Happy Kids</h3>
              <p className="text-gray-700">Trusted by families across Algiers</p>
            </div>
          </div>

          {/*<div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-2xl p-8 text-center text-white mb-12">
            <Award className="w-20 h-20 mx-auto mb-4 animate-bounce-gentle" />
            <h3 className="text-3xl font-bold mb-4">
              N°1 Nursery & Preschool in Algiers and Algeria
            </h3>
            <p className="text-xl mb-2">Recognized by the Minister of National Solidarity <span className="font-bold text-xl">"Mrs. Soraya Mouloudji"</span></p>
            <p className="text-lg opacity-90">Official Recognition for Educational Excellence</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="500"
              src="https://youtube.com/embed/Nt0ZyNWmlNg"
              title="Minister of Culture Visit"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div> */}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-600 mb-12">
            Our Amazing Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">{teacher.name}</h3>
                  <p className="text-lg text-gray-700 mb-2">{teacher.subject}</p>
                  <p className="text-gray-600 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    {teacher.grade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-600 mb-12">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-purple-600 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-pink-500 mr-4" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-700">+213 549 75 82 81</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-500 mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-700">l'enfantroi.dz@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-green-500 mr-4" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-700">Rue Kerkache Fatma, 16058 El Mohammadia ALGER </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155.86329834246527!2d3.1736738852421!3d36.73674390383995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e52012598a2d3%3A0x923c9ed8fc518d0b!2sNursery%20School%20Les%20Graines%20D&#39;%C3%A9veil!5e1!3m2!1sen!2sdz!4v1761947489747!5m2!1sen!2sdz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">Send Us a Message</h3>
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Name & Surname
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

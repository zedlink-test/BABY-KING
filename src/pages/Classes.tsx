import { Baby, Smile, Music, Palette, Cake } from 'lucide-react';
import Carousel from '../components/Carousel';

const classesData = [
  {
    title: 'Newborns',
    ageRange: '3 months - 1 year',
    icon: Baby,
    description: 'Our Newborn class provides a safe, nurturing environment for your youngest learners. We focus on sensory exploration, motor skill development, and creating strong bonds between caregivers and babies. Our experienced staff ensures each infant receives individualized attention in a warm, home-like setting with age-appropriate activities and plenty of cuddles.',
    images: [
      'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      'https://images.pexels.com/photos/8363097/pexels-photo-8363097.jpeg',
      'https://images.pexels.com/photos/8613299/pexels-photo-8613299.jpeg',
      'https://images.pexels.com/photos/8613337/pexels-photo-8613337.jpeg',
    ],
    color: 'from-pink-400 to-purple-400',
  },
  {
    title: 'Toddlers',
    ageRange: '1 - 2 years',
    icon: Smile,
    description: 'Our Toddler program encourages exploration and discovery. Children engage in hands-on activities that promote language development, fine and gross motor skills, and social interaction. We provide a structured yet flexible routine that supports their growing independence while maintaining a secure and loving environment where toddlers can learn at their own pace.',
    images: [
      'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      'https://images.pexels.com/photos/8363097/pexels-photo-8363097.jpeg',
      'https://images.pexels.com/photos/8613299/pexels-photo-8613299.jpeg',
      'https://images.pexels.com/photos/8613337/pexels-photo-8613337.jpeg',
    ],
    color: 'from-yellow-400 to-orange-400',
  },
  {
    title: '3-Year-Olds',
    ageRange: '3 years',
    icon: Music,
    description: 'Our 3-year-old program introduces children to structured learning through play. We focus on building foundational skills in literacy, numeracy, and social-emotional development. Children participate in circle time, creative arts, music, and outdoor play. Our Montessori-inspired approach allows children to explore their interests while developing important skills for future success.',
    images: [
      'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      'https://images.pexels.com/photos/8363097/pexels-photo-8363097.jpeg',
      'https://images.pexels.com/photos/8613299/pexels-photo-8613299.jpeg',
      'https://images.pexels.com/photos/8613337/pexels-photo-8613337.jpeg',
    ],
    color: 'from-green-400 to-teal-400',
  },
  {
    title: '4-Year-Olds',
    ageRange: '4 years',
    icon: Palette,
    description: 'Our 4-year-old program prepares children for kindergarten with a focus on early literacy, mathematical thinking, and problem-solving skills. Children engage in more complex projects, cooperative play, and begin formal instruction in Arabic, English, and French. We emphasize creativity, critical thinking, and building confidence in a supportive learning environment.',
    images: [
      'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      'https://images.pexels.com/photos/8363097/pexels-photo-8363097.jpeg',
      'https://images.pexels.com/photos/8613299/pexels-photo-8613299.jpeg',
      'https://images.pexels.com/photos/8613337/pexels-photo-8613337.jpeg',
    ],
    color: 'from-blue-400 to-indigo-400',
  },
  {
    title: '5-Year-Olds',
    ageRange: '5 years',
    icon: Cake,
    description: 'Our 5-year-old program provides comprehensive kindergarten preparation. Children develop advanced reading and writing skills, mathematical concepts, and scientific thinking. We emphasize independence, leadership, and social responsibility. Students participate in special projects, presentations, and activities that build confidence and prepare them for primary school success.',
    images: [
      'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      'https://images.pexels.com/photos/8363097/pexels-photo-8363097.jpeg',
      'https://images.pexels.com/photos/8613299/pexels-photo-8613299.jpeg',
      'https://images.pexels.com/photos/8613337/pexels-photo-8613337.jpeg',
    ],
    color: 'from-purple-400 to-pink-400',
  },
];

export default function Classes() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Classes</h1>
          <p className="text-xl md:text-2xl">
            Age-Appropriate Programs Designed for Every Stage of Development
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {classesData.map((classItem, index) => {
            const Icon = classItem.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`mb-20 ${isEven ? '' : ''}`}
              >
                <div className={`bg-gradient-to-r ${classItem.color} rounded-2xl shadow-2xl overflow-hidden`}>
                  <div className="p-6 md:p-8 text-white text-center">
                    <Icon className="w-16 h-16 mx-auto mb-4 animate-bounce-gentle" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">{classItem.title}</h2>
                    <p className="text-xl font-semibold">{classItem.ageRange}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  {isEven ? (
                    <>
                      <div className="bg-white rounded-xl shadow-xl p-8 flex items-center">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {classItem.description}
                        </p>
                      </div>
                      <div>
                        <Carousel images={classItem.images} className="h-96" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <Carousel images={classItem.images} className="h-96" />
                      </div>
                      <div className="bg-white rounded-xl shadow-xl p-8 flex items-center">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {classItem.description}
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

      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Enroll Your Child?</h2>
          <p className="text-xl mb-8">
            Join our Kiddy Kings family and give your child the best start in life!
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
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}

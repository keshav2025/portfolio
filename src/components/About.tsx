import React from 'react';
import { GraduationCap, Code2, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                I'm a dedicated Computer Science student at <strong>Polaris School of Technology</strong> 
                with a passion for full-stack development. My journey in technology began with curiosity 
                and has evolved into a commitment to creating impactful digital experiences.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                As a full-stack developer, I enjoy working across the entire development spectrum - 
                from crafting intuitive user interfaces to building robust backend systems. 
                I believe in writing clean, maintainable code and staying current with the latest 
                industry trends and best practices.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or working on innovative solutions that solve real-world problems.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
                <div className="text-gray-600">Technologies Mastered</div>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Education</h3>
              </div>
              <p className="text-gray-600">
                Pursuing Computer Science at Polaris School of Technology, 
                building a strong foundation in software engineering principles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-100 rounded-lg mr-4">
                  <Code2 className="text-teal-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Development</h3>
              </div>
              <p className="text-gray-600">
                Full-stack developer specializing in modern web and mobile technologies, 
                with experience in both frontend and backend development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <Heart className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Passion</h3>
              </div>
              <p className="text-gray-600">
                Passionate about creating user-centered applications that solve real problems 
                and make technology accessible to everyone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <Target className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Goal</h3>
              </div>
              <p className="text-gray-600">
                Aspiring to become a tech leader who drives innovation and mentors 
                the next generation of developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
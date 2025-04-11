// App.jsx
// App.jsx
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProfileImage from './components/ProfileImage';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12 space-y-16">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-8 rounded-xl shadow-lg">
        <About />
        <ProfileImage />
      </section>

      <section className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-8 rounded-xl shadow-lg">
        <Projects />
      </section>

      <section className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-8 rounded-xl shadow-lg">
        <Skills />
      </section>
    </div>
  );
}



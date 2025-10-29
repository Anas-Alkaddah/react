import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CoursesSection from './components/CoursesSection';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Signup from './components/signup';
import Login from './components/login';
import CourseDetails from './components/CourseDetails';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<><Hero /><CoursesSection showMoreLink={true} limit={3} variant="strip" /><ContactCTA /><Stats /></>} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<CoursesSection />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
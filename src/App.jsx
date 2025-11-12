import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
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
import { ThemeProvider } from './context/ThemeContext.jsx';
import { UserProvider } from './context/UserContext.jsx';
import RequireAuth from './components/RequireAuth.jsx';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<><Hero /><Partners /><About /> <CoursesSection showMoreLink={true} limit={3} variant="strip" /><ContactCTA /><Stats /></>} />
              <Route path="about" element={<About />} />
              <Route path="courses" element={<CoursesSection />} />
              <Route path="courses/:id" element={<RequireAuth><CourseDetails /></RequireAuth>} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="contact" element={<Contact />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
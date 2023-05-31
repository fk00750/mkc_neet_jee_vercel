import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Physics
import PhysicsDetailedSyllabusClass11 from "./Components/SyllabusComponents/DetailedSyllabus/Physics/PhysicsDetailedSyllabusClass11";
import PhysicsDetailedSyllabusClass12 from "./Components/SyllabusComponents/DetailedSyllabus/Physics/PhysicsDetailedSyllabusClass12";

// Chemistry
import ChemistryDetailedSyllabusClass11 from "./Components/SyllabusComponents/DetailedSyllabus/Chemistry/ChemistryDetailedSyllabusClass11";
import ChemistryDetailedSyllabusClass12 from "./Components/SyllabusComponents/DetailedSyllabus/Chemistry/ChemistryDetailedSyllabusClass12";

// Biology
import BiologyDetailedSyllabusClass11 from "./Components/SyllabusComponents/DetailedSyllabus/Biology/BiologyDetailedSyllabusClass11";
import BiologyDetailedSyllabusClass12 from "./Components/SyllabusComponents/DetailedSyllabus/Biology/BiologyDetailedSyllabusClass12";

// Pages
import Home from "./pages/Home";
import NeetSyllabus from "./pages/NeetSyllabus";
import JeeSyllabus from "./pages/JeeSyllabus";
import Course from "./pages/Course";
import FeeStructure from "./pages/FeeStructure";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JeeCourse from "./pages/JeeCourse";
import PreFoundation from "./pages/PreFoundation";

// about
import ChairpersonMessage from "./Components/AboutComponents/ChairpersonMessage";
import DirectorMessage from "./Components/AboutComponents/DirectorMessage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chairperson-message" element={<ChairpersonMessage />} />
        <Route path="/director-message" element={<DirectorMessage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/neet-course" element={<Course />} />
        <Route path="/jee-course" element={<JeeCourse />} />
        <Route
          path="/pre-foundation-class-nine-ten"
          element={
            <PreFoundation
              Content={
                "MKC Pre-Foundation course is designed for class 9th & 10th students. To shape a candidate in right direction its necessary to build a shape from root-level. Our course structure covers entire school syllabus along with competitive manner."
              }
              Class={"9 and 10"}
              CourseDuration={"2"}
              AdmissionFee={100000}
            />
          }
        />
        <Route
          path="/pre-foundation-class-ten"
          element={
            <PreFoundation
              Content={
                "MKC Pre-Foundation course is designed for class 10th students. To shape a candidate in right direction its necessary to build a shape from root-level. Our course structure covers entire school syllabus along with competitive manner."
              }
              Class={"10"}
              CourseDuration={"1"}
              AdmissionFee={50000}
            />
          }
        />
        {/* */}
        <Route path="/pre-foundation-class-ten" element={<PreFoundation />} />
        <Route path="/neet-syllabus" element={<NeetSyllabus />} />
        <Route path="/jee-syllabus" element={<JeeSyllabus />} />
        <Route path="/notification" element={<Notification />} />
        <Route
          path="/neet-fee-structure"
          element={<FeeStructure EXAM="NEET(UG)" />}
        />
        <Route
          path="/jee-fee-structure"
          element={<FeeStructure EXAM="JEE(MAIN+ADVANCED)" />}
        />
        <Route
          path="/physics-detailed-syllabus-class-11"
          element={<PhysicsDetailedSyllabusClass11 />}
        />
        <Route
          path="/physics-detailed-syllabus-class-12"
          element={<PhysicsDetailedSyllabusClass12 />}
        />
        <Route
          path="/chemistry-detailed-syllabus-class-11"
          element={<ChemistryDetailedSyllabusClass11 />}
        />
        <Route
          path="/chemistry-detailed-syllabus-class-12"
          element={<ChemistryDetailedSyllabusClass12 />}
        />
        <Route
          path="/biology-detailed-syllabus-class-11"
          element={<BiologyDetailedSyllabusClass11 />}
        />
        <Route
          path="/biology-detailed-syllabus-class-12"
          element={<BiologyDetailedSyllabusClass12 />}
        />
      </Routes>
    </Router>
  );
}

export default App;

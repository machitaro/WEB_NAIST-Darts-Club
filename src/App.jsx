import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Rule } from "./pages/Rule";
import { Contact } from "./pages/Contact";

const menuItems = [
  {
    title: "-HOME",
    link: "/#home",
    subItems: [
      { title: "about", link: "/#about" },
      { title: "what's darts", link: "/#what" },
      { title: "access", link: "/#access" }
    ]
  },
  { title: "-RULE", link: "/rule" },
  { title: "-CONTACT", link: "/contact" }
];

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Home menuItems={menuItems} />} 
        />
        <Route 
          path="/rule" 
          element={<Rule menuItems={menuItems} />} 
        />
        <Route 
          path="/contact" 
          element={<Contact menuItems={menuItems} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
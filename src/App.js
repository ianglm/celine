import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar"
import AddArticle from "./Containers/AddArticle/AddArticle"
import Contact from "./Containers/Contact/Contact"
import Article from "./Containers/Article/Article";
import { Routes, Route} from 'react-router-dom'
import Competences from "./Components/Competences/Competences";
import Enfant from "./Containers/Pages/Enfant";
import Cabinet from "./Containers/Pages/Cabinet";
import Actualites from "./Containers/Actualites/Actualites"


function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ecrire" element={<AddArticle/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/actualites/articles/:slug" element={<Article/>}/>
        <Route path="/actualites" element={<Actualites/>}/>
        <Route path="/competences" element={<Competences/>}/>
        <Route path="/enfant" element={<Enfant/>}/>
        <Route path="/cabinet" element={<Cabinet/>}/>
      </Routes>
    </>
  );
}

export default App;

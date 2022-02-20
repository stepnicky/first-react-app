import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import Favourite from './components/Favourite/Favourite.js';
import About from './components/About/About.js';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path ='/about' element={<About />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;

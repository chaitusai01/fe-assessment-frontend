import './App.css';
import Directory from './components/Directory/Directory';
import FindCare from './components/FindCare/FindCare';
import Header from './components/Header/Header';
import SecondaryFooter from './components/SecondaryFooter/SecondaryFooter';
import SecondaryHeader from './components/SecondaryHeader/SecondaryHeader';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <SecondaryHeader />
      <FindCare />
      <Directory />
      <Footer />
      <SecondaryFooter />
    </div>
  );
}

export default App;

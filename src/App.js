import './App.css';
import Header from './components/Header/Header';
import CosmeticsListPage from './components/PageLayout/CosmeticsListPage';
import SearchProvider from './state/search-context';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-Container"
        style={{ padding: "0 6rem" }}
      >
        <SearchProvider>
          <CosmeticsListPage />
        </SearchProvider>
      </div>
      {/* <Fotter/> */}

    </div>
  );
}

export default App;

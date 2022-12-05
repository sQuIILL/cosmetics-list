import './App.css';
import CosmeticsListPage from './components/PageLayout/CosmeticsListPage';
import SearchProvider from './state/search-context';

function App() {
  return (
    <div className="App">
      <div className="App-Container"
        style={{ width: "90vw", display: 'flex', margin: "auto", justifyContent: "center", alignItems: "flex-start", height: "100vh" }}
      >
        {/* <Header/> */}
        <SearchProvider>
          <CosmeticsListPage />
        </SearchProvider>
        {/* <Fotter/> */}
      </div>
    </div>
  );
}

export default App;

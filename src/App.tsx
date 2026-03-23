import './App.css';
import bgHeader from './assets/bg-header.png';
import bgFooter from './assets/bg-footer.png';

function App() {
  return (
    <>
      <main className='bg-primary-100'>
        <div className='container'>
          <div style={{ backgroundImage: `url(${bgHeader})`}} className='bg-cover bg-no-repeat bg-center'>
            <p className='pt-14 pb-32 text-primary-200 text-5xl font-semibold'>
              線上會議報名表
            </p>
          </div>
          <p className=''>container</p>
        </div>

      </main>
    </>
  )
}

export default App

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleUpload = () => {
    console.log("uploaded document");
  }

  const handleButtonClick = async () => {

    const response = await fetch(import.meta.env.VITE_FUNCTION_URL as string, {
      method: 'GET',
      headers: {
        'x-functions-key': import.meta.env.VITE_FUNCTION_API_KEY
      } as HeadersInit
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Tims dumb document uploader</h1>
      <div>
        <input type="file" id="fileUpload" />
        <button onClick={handleUpload}>Add</button>
      </div>
      <button onClick={handleButtonClick}>Send GET request</button>
    </>
  )
}
export default App
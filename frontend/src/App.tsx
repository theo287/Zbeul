import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white gap-8 px-4">
      <h1 className="text-3xl font-bold text-center">Choisis une personne :</h1>
      <div className="flex gap-6">
        <button
          onClick={() => navigate('/theo')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Théo
        </button>
        <button
          onClick={() => navigate('/esteban')}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Esteban
        </button>
      </div>
    </div>
  )
}

export default App

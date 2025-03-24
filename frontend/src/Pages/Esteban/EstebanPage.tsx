function EstebanPage() {
  return (
    <div className="h-screen bg-green-950 text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Page d’Esteban 🎯</h1>

      <p className="text-lg">
        Bienvenue sur la page dédiée à <strong>Esteban</strong>. Voici une petite liste :
      </p>

      <ul className="list-disc list-inside">
        <li>💡 Passionné de code</li>
        <li>🎮 Joue à Rocket League</li>
        <li>🧠 Toujours prêt à apprendre</li>
      </ul>

      <a
        href="/"
        className="mt-6 px-4 py-2 bg-white text-green-950 rounded hover:bg-gray-200 transition"
      >
        ⬅️ Retour à l’accueil
      </a>
    </div>
  )
}

export default EstebanPage

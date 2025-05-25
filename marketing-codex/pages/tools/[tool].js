import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'

export default function ToolPage() {
  const router = useRouter()
  const { tool } = router.query
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')

  const toolNames = {
    artigos: 'Gerador de Artigos',
    headlines: 'Gerador de Headlines',
    posts: 'Criador de Posts para Redes Sociais',
    resumos: 'Resumidor de Conteúdos',
  }

  const handleGenerate = () => {
    // Placeholder generation logic
    setResult(`Conteúdo gerado para ${toolNames[tool]}: ${prompt}`)
  }

  const handleSave = () => {
    const stored = JSON.parse(localStorage.getItem('contents') || '[]')
    const item = { tool, prompt, result, date: new Date().toISOString() }
    localStorage.setItem('contents', JSON.stringify([item, ...stored]))
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">{toolNames[tool]}</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="5"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Escreva seu prompt aqui..."
      />
      <div className="flex space-x-2 mb-4">
        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Gerar Conteúdo
        </button>
        {result && (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Salvar
          </button>
        )}
      </div>
      {result && (
        <div className="border p-4 rounded bg-gray-50">
          {result}
        </div>
      )}
    </Layout>
  )
}

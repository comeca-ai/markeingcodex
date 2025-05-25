import { useEffect, useState } from 'react'
import Layout from '../components/Layout'

export default function MyContent() {
  const [contents, setContents] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('contents') || '[]')
    setContents(stored)
  }, [])

  const handleDelete = index => {
    const updated = contents.filter((_, i) => i !== index)
    setContents(updated)
    localStorage.setItem('contents', JSON.stringify(updated))
  }

  const handleCopy = text => {
    navigator.clipboard.writeText(text)
  }

  const handleDownload = (text, idx) => {
    const element = document.createElement('a')
    const file = new Blob([text], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `conteudo-${idx + 1}.txt`
    document.body.appendChild(element)
    element.click()
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Meus Conteúdos</h1>
      {contents.length === 0 && <p className="text-gray-600">Nenhum conteúdo salvo.</p>}
      <ul className="space-y-4">
        {contents.map((item, idx) => (
          <li key={idx} className="border p-4 rounded bg-gray-50">
            <p className="mb-2 text-sm text-gray-500">{item.date}</p>
            <p className="mb-2 font-semibold">{item.tool}</p>
            <p className="mb-2 whitespace-pre-wrap">{item.result}</p>
            <div className="flex space-x-2 text-sm">
              <button onClick={() => handleCopy(item.result)} className="text-blue-600">Copiar</button>
              <button onClick={() => handleDownload(item.result, idx)} className="text-blue-600">Baixar</button>
              <button onClick={() => handleDelete(idx)} className="text-red-600">Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

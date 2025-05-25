import { useState } from 'react'
import Link from 'next/link'
import { Home, FileText, ChevronDown, File, Layers, Archive } from 'lucide-react'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <aside className="w-64 bg-gray-100 h-screen p-4 hidden sm:block">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/">
              <span className="flex items-center space-x-2 hover:text-blue-600">
                <Home size={20} /> <span>Dashboard</span>
              </span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center w-full space-x-2 hover:text-blue-600"
            >
              <Layers size={20} /> <span>Ferramentas</span> <ChevronDown size={16} />
            </button>
            {open && (
              <ul className="ml-6 mt-2 space-y-1">
                <li>
                  <Link href="/tools/artigos" className="hover:text-blue-600 flex items-center space-x-2">
                    <FileText size={18} /> <span>Artigos</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tools/headlines" className="hover:text-blue-600 flex items-center space-x-2">
                    <File size={18} /> <span>Headlines</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tools/posts" className="hover:text-blue-600 flex items-center space-x-2">
                    <File size={18} /> <span>Posts p/ Redes</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tools/resumos" className="hover:text-blue-600 flex items-center space-x-2">
                    <File size={18} /> <span>Resumos</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/my-content" className="flex items-center space-x-2 hover:text-blue-600">
              <Archive size={20} /> <span>Meus Conteúdos</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 overflow-y-auto h-screen">{children}</main>
    </div>
  )
}

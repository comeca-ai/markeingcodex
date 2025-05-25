import Link from 'next/link'

export default function DashboardCard({ title, description, href }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <Link href={href} className="mt-4 text-blue-600 hover:underline">
        Acessar
      </Link>
    </div>
  )
}

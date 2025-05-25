import Layout from '../components/Layout'
import DashboardCard from '../components/DashboardCard'

export default function Home() {
  const cards = [
    {
      title: 'Gerador de Artigos',
      description: 'Crie artigos completos a partir de um prompt.',
      href: '/tools/artigos',
    },
    {
      title: 'Gerador de Headlines',
      description: 'Encontre o título perfeito para sua matéria.',
      href: '/tools/headlines',
    },
    {
      title: 'Posts para Redes Sociais',
      description: 'Gere posts otimizados rapidamente.',
      href: '/tools/posts',
    },
    {
      title: 'Resumidor de Conteúdos',
      description: 'Resuma textos extensos com facilidade.',
      href: '/tools/resumos',
    },
  ]

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Olá, jornalista!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(card => (
          <DashboardCard key={card.href} {...card} />
        ))}
      </div>
    </Layout>
  )
}

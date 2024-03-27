import HeroPages4 from '@/components/HeroPages4'

interface Props {
  title: string
  desc: string
  button: string
  icon: string
  text?: [h2: string, h3: string, p: string, image: string]
}

const slugToDataMap: {
  [key: string]: Props
} = {
  marketAnalysis: {
    title: 'Название страницы 2',
    desc: 'Описание страницы 2',
    button: 'Кнопка страницы 2',
    icon: '/assets/analitic/standard-quality-control-concept-m.webp',
    text: ['', '', '', ''],
  },
  companyAnalysis: {
    title: 'Название страницы 2',
    desc: 'Описание страницы 2',
    button: 'Кнопка страницы 2',
    icon: '/assets/analitic/standard-quality-control-concept-m.webp',
    text: ['', '', '', ''],
  },
  competitorAnalysis: {
    title: 'Название страницы 3',
    desc: 'Описание страницы 2',
    button: 'Кнопка страницы 2',
    icon: '/assets/analitic/standard-quality-control-concept-m.webp',
    text: ['', '', '', ''],
  },
  targetAudienceAnalysis: {
    title: 'Название страницы 4',
    desc: 'Описание страницы 2',
    button: 'Кнопка страницы 2',
    icon: '/assets/analitic/standard-quality-control-concept-m.webp',
    text: ['', '', '', ''],
  },
}
const Page = ({ params }: { params: { slug: string } }) => {
  const pageData = slugToDataMap[params.slug]

  const { title, desc, button, icon } = pageData
  return (
    <div>
      <HeroPages4 title={title} desc={desc} button={button} icon={icon} />
      My Post {params.slug}
    </div>
  )
}

export default Page

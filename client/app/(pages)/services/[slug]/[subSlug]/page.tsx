import Content from '@/components/Content'
import HeroPages4 from '@/components/HeroPages4'
import Error404 from '../../../../not-found'
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
  companyAnalysis: {
    title: 'Анализ компании',
    desc: 'Описание страницы 1',
    button: 'Кнопка страницы 1',
    icon: '/assets/analitic/top-view-workmates-talking-about-bar-chart.webp',
    text: ['', '', '', ''],
  },
  marketAnalysis: {
    title: 'Анализ рынка',
    desc: 'Описание страницы 2',
    button: 'Кнопка страницы 2',
    icon: '/assets/analitic/close-up-glasses-annual-summary.webp',
    text: ['', '', '', ''],
  },
  competitorAnalysis: {
    title: 'Анализ конкурентов',
    desc: 'Описание страницы 3',
    button: 'Кнопка страницы 3',
    icon: '/assets/analitic/close-up-financial-document-table.webp',
    text: ['', '', '', ''],
  },
  targetAudienceAnalysis: {
    title: 'Анализ целевой аудитории',
    desc: 'Описание страницы 4',
    button: 'Кнопка страницы 4',
    icon: '/assets/analitic/individuality-concept-silhouettes.webp',
    text: ['', '', '', ''],
  },
  marketingStrategy: {
    title: 'Разработка маркетинговой стратегии',
    desc: 'Описание страницы 5',
    button: 'Кнопка страницы 5',
    icon: '/assets/analitic/individuality-concept-silhouettes.webp',
    text: ['', '', '', ''],
  },
  //   Дизайн,
  // designProducts
  // logoDevelopment
  // brandbookDevelopment
  // webDesign

  //РАзработка сайта
  //   landingPage,
  //   SEO,
  //   contextualAdvertising,

  // 	smm
  //   brandPromotion
}
const Page = ({ params }: { params: { subSlug: string } }) => {
  const pageData = slugToDataMap[params.subSlug]
  if (!pageData) {
    return <Error404 />
  }
  const { title, desc, button, icon } = pageData
  return (
    <div>
      <HeroPages4 title={title} desc={desc} button={button} icon={icon} />
      <Content />
    </div>
  )
}

export default Page

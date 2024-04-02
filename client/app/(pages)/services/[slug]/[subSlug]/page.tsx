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
    desc: 'Мы раскрываем потенциал вашего бизнеса. Наша услуга “Анализ компании” позволяет выявить ключевые точки роста и оптимизировать стратегию развития. Мы помогаем вам видеть не только цифры, но и возможности для прогресса.',
    button: 'Подробнее',
    icon: '/assets/analitic/top-view-workmates-talking-about-bar-chart.webp',
    text: ['', '', '', ''],
  },
  marketAnalysis: {
    title: 'Анализ рынка',
    desc: 'Мы подберем ключ к пониманию динамики вашей отрасли. Наша команда проводит глубокий анализ, чтобы выявить тренды и определить потенциал роста вашего бизнеса. С нашей помощью вы сможете принимать обоснованные решения, основанные на точных данных и комплексном понимании рынка.',
    button: 'Подробнее',
    icon: '/assets/analitic/close-up-glasses-annual-summary.webp',
    text: ['', '', '', ''],
  },
  competitorAnalysis: {
    title: 'Анализ конкурентов',
    desc: 'Наша компания предоставит вам стратегическое преимущество. Мы проводим всесторонний анализ деятельности ваших конкурентов, выявляем их сильные и слабые стороны. Это позволяет нашим клиентам эффективно адаптировать свои стратегии и опережать конкурентов, обеспечивая устойчивый рост и успех.',
    button: 'Подробнее',
    icon: '/assets/analitic/close-up-financial-document-table.webp',
    text: ['', '', '', ''],
  },
  targetAudienceAnalysis: {
    title: 'Анализ целевой аудитории',
    desc: 'Наша команда поможет вам понять сердце вашего бизнеса - вашу целевую аудиторию. Мы проводим тщательный анализ, чтобы выявить истинные потребности и предпочтения ваших клиентов, что позволяет создавать целенаправленные и эффективные маркетинговые кампании. С нашей помощью вы сможете наладить глубокую связь с вашей аудиторией и обеспечить стабильный рост вашего бренда.',
    button: 'Подробнее',
    icon: '/assets/analitic/individuality-concept-silhouettes.webp',
    text: ['', '', '', ''],
  },
  marketingStrategy: {
    title: 'Разработка маркетинговой стратегии',
    desc: 'Наша компания поможет создать фундамент для вашего бизнеса. Мы разрабатываем уникальные стратегии, ориентированные на достижение ваших бизнес-целей, увеличение продаж и укрепление позиций на рынке. Наш подход объединяет аналитику, креатив и оптимизацию ресурсов, чтобы вы могли не просто конкурировать, но и занимать лидирующие позиции в своей нише.',
    button: 'Подробнее',
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

'use client'
import CTA from '@/components/CTA'
import HeroPages4 from '@/components/HeroPages4'
import PreGallery from '@/components/PreGallery'
import Error404 from '../../../not-found'
type GalleryItem = {
  image: string
  alt: string
  h2: string
  href: string
}

type Props = {
  title: string
  desc: string
  button: string
  icon: string
  text?: string[]
  preGallery: GalleryItem[]
}

type SlugToDataMap = {
  [key: string]: Props
}

const slugToDataMap: SlugToDataMap = {
  strategy: {
    title: 'Стратегия',
    desc: 'Стратегия',
    button: 'Стратегия',
    icon: '/assets/strategy/map-lying-wooden-table.webp',
    preGallery: [
      {
        image: '/assets/strategy/map-lying-wooden-table.webp',
        alt: 'Аналитика',
        h2: 'Разработка маркетинговой стратегии',
        href: '/strategy/marketingStrategy',
      },
    ],
  },
  smm: {
    title: 'SMM',
    desc: 'SMM',
    button: 'SMM',
    icon: '/assets/strategy/map-lying-wooden-table.webp',
    preGallery: [
      {
        image:
          '/assets/SMM/online-marketing-branding-concept-laptop-screen.webp',
        alt: 'Продвижение бренда',
        h2: 'Продвижение бренда',
        href: '/smm/brandPromotion',
      },
    ],
  },
  design: {
    title: 'Дизайн',
    desc: 'Дизайн',
    button: 'Дизайн',
    icon: '/assets/strategy/map-lying-wooden-table.webp',
    preGallery: [
      {
        image: '/assets/design/stationery_rorozoa_16.webp',
        alt: 'Дизайн печатной продукции',
        h2: 'Дизайн печатной продукции',
        href: '/design/designProducts',
      },
      {
        image:
          '/assets/design/logo-be-creative-inspiration-design-concept.webp',
        alt: 'Разработка логотипа',
        h2: 'Разработка логотипа',
        href: '/design/logoDevelopment',
      },
      {
        image: '/assets/design/colorful-overloaded-bullet-journal (2).webp',
        alt: 'Разработка брендбука',
        h2: 'Разработка брендбука',
        href: '/design/brandbookDevelopment',
      },
      {
        image: '/assets/design/designed-stationery-business-visiting-card.webp',
        alt: 'Web-дизайн',
        h2: 'Web-дизайн',
        href: '/design/webDesign',
      },
    ],
  },
  analitic: {
    title: 'Аналитика',
    desc: 'Аналитика',
    button: 'Аналитика',
    icon: '/assets/analitic/top-view-workmates-talking-about-bar-chart.webp',
    text: ['', '', '', ''],
    preGallery: [
      {
        image:
          '/assets/analitic/top-view-workmates-talking-about-bar-chart.webp',
        alt: 'Анализ компании',
        h2: 'Анализ компании',
        href: '/analitic/companyAnalysis',
      },
      {
        image: '/assets/analitic/close-up-glasses-annual-summary.webp',
        alt: 'Анализ рынка',
        h2: 'Анализ рынка',
        href: '/analitic/marketAnalysis',
      },
      {
        image: '/assets/analitic/close-up-financial-document-table.webp',
        alt: 'Анализ конкурентов',
        h2: 'Анализ конкурентов',
        href: '/analitic/competitorAnalysis',
      },
      {
        image: '/assets/analitic/individuality-concept-silhouettes.webp',
        alt: 'Анализ целевой аудитории',
        h2: 'Анализ целевой аудитории',
        href: '/analitic/targetAudienceAnalysis',
      },
    ],
  },
  development: {
    title: 'Разработка сайтов',
    desc: 'Разработка сайтов',
    button: 'Разработка сайтов',
    icon: '/assets/strategy/map-lying-wooden-table.webp',
    preGallery: [
      {
        image: '/assets/development/online-web-design.webp',
        alt: 'Landing page,сайт-визитка, сайт каталог',
        h2: 'Landing page',
        href: '/development/landingPage',
      },
      {
        image:
          '/assets/development/seo-links-webinar-hand-cyberspace-concept.webp',
        alt: 'SEO',
        h2: 'SEO',
        href: '/development/SEO',
      },
      {
        image: '/assets/development/Contextual-Marketing-02-768x576.webp',
        alt: 'Контекстная реклама',
        h2: 'Контекстная реклама',
        href: '/development/contextualAdvertising',
      },
    ],
  },
}

const PageServices = ({ params }: { params: { slug: string } }) => {
  const pageData = slugToDataMap[params.slug]
  if (!pageData) {
    // Если данных нет, выбрасываем ошибку 404
    return <Error404 />
  }
  const { title, desc, button, icon, preGallery } = pageData
  return (
    <section>
      <HeroPages4 button={button} desc={desc} title={title} />
      <div className="py-12 bg-white">
        <div className="mx-auto px-8 sm:px-6 lg:py-0 md:px-8 xl:px-28 2xl:px-48">
          <div className="grid grid-cols-2 gap-y-5 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {preGallery.map((items, index) => (
              <PreGallery
                image={items.image}
                alt={items.alt}
                h2={items.h2}
                href={items.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </section>
  )
}

export default PageServices

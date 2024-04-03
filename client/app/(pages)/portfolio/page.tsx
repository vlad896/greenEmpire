'use client'

import AlternateElement from '@/components/AlternateElement'
import HeroPages4 from '@/components/HeroPages4'

const Portfolio = () => {
  const items = [
    {
      text: 'Antresol.bel - это компания, которая стремится к тому, чтобы ваш дом стал идеальным местом для жизни. Они предлагают широкий ассортимент антресолей высокого качества от лучших поставщиков в Республике Беларусь.В дополнение к широкому ассортименту антресолей, они также предлагают профессиональные услуги по изготовлению и установке гардеробных купе. ',
      imageSrc: '/assets/it-ChooseUs/opengraph-image.webp',
      isTextOnLeft: true,
    },
  ]
  return (
    <div className="overflow-x-hidden">
      <HeroPages4
        desc="Здесь вы можете ознакомиться с нашими самыми яркими и впечатляющими проектами, которые мы реализовали с нашими партнерами. Мы гордимся каждым проектом, который мы завершили."
        icon="/assets/it-ChooseUs/woman-holding-clipboard-her-coworkers.webp"
        title="Наши работы"
      />
      {items.map((item, index) => (
        <AlternateElement
          key={index}
          text={item.text}
          imageSrc={item.imageSrc}
          isTextOnLeft={item.isTextOnLeft}
          index={index}
        />
      ))}
    </div>
  )
}

export default Portfolio

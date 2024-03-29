'use client'

import AlternateElement from '@/components/AlternateElement'
import HeroPages4 from '@/components/HeroPages4'

const Portfolio = () => {
  const items = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vero, excepturi fugit quam est sit accusantium, beatae asperiores doloribus nobis maiores libero eum earum fuga esse nesciunt magni eveniet quidem.',
      imageSrc:
        '/assets/Portfolio/front-view-young-women-celebrating-together.jpg',
      isTextOnLeft: true,
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vero, excepturi fugit quam est sit accusantium, beatae asperiores doloribus nobis maiores libero eum earum fuga esse nesciunt magni eveniet quidem.',
      imageSrc: '/assets/Portfolio/colleagues-celebrating-success.jpg',
      isTextOnLeft: false,
    },
  ]
  return (
    <div className="overflow-x-hidden">
      <HeroPages4
        button="Перейти к работам"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            repellat delectus adipisci maxime ex consequuntur qui harum
            reiciendis quas distinctio. Quas aspernatur possimus dignissimos
            voluptates reiciendis facere quo in. Vel?"
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

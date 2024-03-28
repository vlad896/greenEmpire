'use client'

import AlternateElement from '@/components/AlternateElement'
import HeroPages3 from '@/components/HeroPages3'

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
      <HeroPages3 />
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

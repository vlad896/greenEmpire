import HeroPages4 from '@/components/HeroPages4'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeroPages4
        title={'f'}
        desc={'f'}
        button={'f'}
        icon={'/assets/analitic/standard-quality-control-concept-m.webp'}
      />
      {children}
    </div>
  )
}

export default layout

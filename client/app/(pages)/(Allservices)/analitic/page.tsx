'use client'
import CTA from '@/components/CTA'
import HeroPages4 from '@/components/HeroPages4'
import PreGallery from '@/components/PreGallery'

const Services = () => {
  return (
    <section>
      <HeroPages4
        button="Аналитика"
        desc="Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id."
        title="Аналитика"
      />
      <div>
        <PreGallery />
      </div>
      <CTA />
    </section>
  )
}

export default Services

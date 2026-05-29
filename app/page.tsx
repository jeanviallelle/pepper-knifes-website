import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Artisan from '@/components/Artisan'
import VideoStory from '@/components/VideoStory'
import Gallery from '@/components/Gallery'
import Collection from '@/components/Collection'
import Process from '@/components/Process'
import Materials from '@/components/Materials'
import Testimonial from '@/components/Testimonial'
import Commission from '@/components/Commission'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      {/* Hidden form for Netlify Forms detection at build time */}
      <form name="commission" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="knifeType" />
        <input type="text" name="use" />
        <input type="text" name="handle" />
        <textarea name="message" />
      </form>

      <Navigation />
      <Hero />
      <Manifesto />
      <Artisan />
      <VideoStory />
      <Gallery />
      <Collection />
      <Process />
      <Materials />
      <Testimonial />
      <Commission />
      <Footer />
    </main>
  )
}

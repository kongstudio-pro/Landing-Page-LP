
import {
  CallToAction,
  Templateshow,
  Footer,
  Guides,
  Hero,
  Pricing,
  Testimonial,
  Fiture
} from '../sections/index';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Fiture />
      <Templateshow />
      <Guides />
      <Pricing />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
}
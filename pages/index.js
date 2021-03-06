import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
// import SlideShow from '../components/SlideShow';

export default function Home() {
  const formRef = useRef();
  const homeRef = useRef();
  const featuresRef = useRef();
  const showcaseRef = useRef();
  const servicesRef = useRef();
  return (
    <div>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          Neoframes - The Architect Studio | Interior Design | Hyderabad |
          Vijayawada | Guntur
        </title>
        <meta
          name="title"
          content="Neoframes - The Architect Studio | Interior Design | Hyderabad | Vijayawada | Guntur"
        />
        <meta
          name="description"
          content="Neoframes is a professional interior design studio based in Hyderabad. We offer a full range of interior design services, including residential, commercial, and industrial design."
        />
        <meta
          name="keywords"
          content="neoframes, neo_frames, architect studio, free consult, home interior design, home interior, home interior colour, best home interior design, house interior design, house interior, modern house interior design, small house interior design, duplex house interior, living room interior design, best interior design, best interior design near me, best interior design in hyderabad, best interior design in vijayawada, best interior design in guntur, office interior design, office interior, small office interior design, modern office interior design, office room interior design, interior design company, interior design company in hyderabad, interior design company in vijayawada, interior design company in guntur, architects near me, architects in hyderabad, architects in vijayawada, architects in guntur, architect office design, best architects near me, best architects in hyderabad, best architects in vijayawada, best architects in guntur, best architects for house design, house planning, home design, best house planning, building planning, building design plan, 3D rendering, 3D architectural rendering, 3D house rendering, 3D interior rendering, commercial interior designers, commercial office rendering, architecture elevation design, false ceiling contractor, wood workers, modular kitchen design, luxury interior design"
        />
        <meta name="author" content="Neoframes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.neoframes.in/" />
        <meta
          property="og:title"
          content="Neoframes - The Architect Studio | Interior Design | Hyderabad | Vijayawada | Guntur"
        />
        <meta
          property="og:description"
          content="Neoframes is a professional interior design studio based in Hyderabad. We offer a full range of interior design services, including residential, commercial, and industrial design."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/neo-frames/image/upload/v1655177975/neoframes_dusqus.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.neoframes.in/" />
        <meta
          property="twitter:title"
          content="Neoframes - The Architect Studio | Interior Design | Hyderabad | Vijayawada | Guntur"
        />
        <meta
          property="twitter:description"
          content="Neoframes is a professional interior design studio based in Hyderabad. We offer a full range of interior design services, including residential, commercial, and industrial design."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/neo-frames/image/upload/v1655177975/neoframes_dusqus.png"
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <section
          ref={homeRef}
          className="relative mb-5 h-[70vh] w-full lg:mb-24 lg:h-screen"
        >
          <div className="absolute top-0 left-0 -z-10 h-4/5 w-full bg-black/60 bg-cover bg-right bg-no-repeat lg:h-screen" />
          <div className="absolute top-0 left-0 -z-20 h-4/5 w-full overflow-hidden bg-[url('https://res.cloudinary.com/neo-frames/image/upload/v1654117844/photo-1618221195710-dd6b41faaea6_1_ifaf2c.webp')] bg-cover bg-right bg-no-repeat lg:h-screen"></div>
          {/* <div className="absolute top-0 left-0 -z-20 h-3/5 w-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-right bg-no-repeat lg:h-screen"></div> */}

          <nav className="container flex items-center justify-between pt-8">
            <div className="text-2xl font-medium text-white">Neoframes</div>
            <div className="text-md text-gray-100">The Architect Studio</div>
          </nav>

          <div className="container mt-24 lg:mt-36 ">
            <h1
              className="inline-block rounded-sm bg-gray-800/50 p-5 text-2xl font-medium text-white backdrop-blur lg:bg-white/20 lg:py-10 lg:text-5xl"
              style={{
                textShadow: ' 0 0 50px hsla(0, 0%, 0%, .4)',
              }}
            >
              Trusted & Efficient Architects,
              <br />
              <span className="mt-2 inline-block text-white lg:mt-4">
                Building your Dream spaces.
              </span>
            </h1>

            <div className=" mt-8 lg:mt-20">
              <button
                onClick={() => {
                  formRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                className="max-w-lg items-stretch rounded-sm bg-orange-600  px-12 py-3 text-base font-semibold text-white lg:text-xl"
              >
                Book Free Consult
              </button>
            </div>
          </div>
        </section>

        <section ref={featuresRef} className="container mb-10">
          <h2 className="mb-10 text-center text-3xl">
            We are <span className="text-orange-600">different</span>
          </h2>
          <div className="grid gap-12 px-10 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
            <div>
              <Image
                src="/money-wallet.svg"
                height={60}
                width={60}
                alt="affordable"
              />
              <p className="mb-3 font-medium text-gray-900">
                Affordable Pricing
              </p>
              <p className="text-sm  text-gray-700">
                Build your dream projects without the burden on your pocket
              </p>
            </div>
            <div>
              <Image
                src="/badge.svg"
                height={60}
                width={60}
                alt="experienced"
              />
              <p className="mb-3 font-medium text-gray-900">
                Experienced Architects
              </p>
              <p className="text-sm text-gray-700">
                Architects from top notch institutions with 100+ projects
              </p>
            </div>
            <div>
              <Image
                src="/engineer.svg"
                height={60}
                width={60}
                alt="engineer"
              />
              <p className="mb-3 font-medium text-gray-900">
                Civil & Architectural Drawings
              </p>
              <p className="text-sm text-gray-700">
                Free unlimited concept plans and architectural consultation
              </p>
            </div>
            <div>
              <Image src="/time.svg" height={60} width={60} alt="on-time" />
              <p className="mb-3 font-medium text-gray-900">On-Time Delivery</p>
              <p className="text-sm text-gray-700">
                Guaranteed delivery of your project within the stipulated time.
              </p>
            </div>
            <div>
              <Image src="/design.svg" height={60} width={60} alt="design" />
              <p className="mb-3 font-medium text-gray-900">
                Professional Designs
              </p>
              <p className="text-sm text-gray-700">
                Pixel perfect designs with detailed drawings
              </p>
            </div>

            <div>
              <Image src="/building.svg" height={60} width={60} alt="3d" />
              <p className="mb-3 font-medium text-gray-900">3D Rendering</p>
              <p className="text-sm text-gray-700">
                Get instant 3D modelling and high quality photo-realistic
                renders
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* slideShow */}
      {/* <SlideShow items={imgArray} /> */}

      {/* gallery */}

      <section ref={showcaseRef} className="container mb-10">
        <h2 className="mb-10 text-center text-3xl">
          Our <span className="text-orange-600">Gallery</span>
        </h2>
        <div className="grid grid-rows-3 gap-4  md:grid-cols-2 lg:grid-cols-3 ">
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117527/gallery/1_uu14fi.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117526/gallery/2_g3qnvw.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117527/gallery/3_rpuy1r.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117526/gallery/4_owb9vf.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117527/gallery/5_qg0fx0.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117528/gallery/6_iccti2.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117531/gallery/7_bry1rc.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117528/gallery/8_x8ll7s.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117526/gallery/9_xdjqji.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117528/gallery/10_aqb22c.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117526/gallery/11_gbbu62.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/neo-frames/image/upload/v1654117528/gallery/12_jy96fv.jpg"
              layout="responsive"
              height={`100vh`}
              width={`100vw`}
              alt="gallery"
              lazyBoundary="750px"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="container my-20">
        <h2 className="mb-10 text-center text-3xl">
          Our <span className="text-orange-600">Services</span>
        </h2>
        <div className="grid gap-3  lg:px-40">
          <div className="items-center rounded-md border-2 border-dotted border-orange-600 md:flex md:odd:flex-row-reverse lg:flex  lg:odd:flex-row-reverse">
            <div className="flex-1">
              <img
                src="https://res.cloudinary.com/neo-frames/image/upload/v1654117529/services/s1_do3arh.jpg"
                alt="services"
                loading="lazy"
                className="h-auto max-w-full"
              />
            </div>

            <div className="flex-1">
              <h3 className=" px-4 py-4 text-base font-semibold lg:px-4">
                3D Interior designs
              </h3>

              <p className="px-4 pb-4 text-sm">
                Being one of the leading organizations, we provide 3D interior
                designing services as per our clients demands.
              </p>
            </div>
          </div>

          <div className="items-center rounded-md border-2 border-dotted border-orange-600 md:flex md:odd:flex-row-reverse lg:flex  lg:odd:flex-row-reverse">
            <div className="flex-1">
              <img
                src="https://res.cloudinary.com/neo-frames/image/upload/v1654117530/services/s2_ufabt6.jpg"
                alt="services"
                loading="lazy"
                className="h-auto max-w-full"
              />
            </div>

            <div className="flex-1">
              <h3 className=" px-4 py-4 text-base font-semibold lg:px-4">
                Commercial Interior Designers
              </h3>

              <p className="px-4 pb-4 text-sm">
                We have Commercial interior designers who are expert in
                decorating your space and customize them.
              </p>
            </div>
          </div>

          <div className="items-center rounded-md border-2 border-dotted border-orange-600 md:flex md:odd:flex-row-reverse lg:flex  lg:odd:flex-row-reverse">
            <div className="flex-1">
              <img
                src="https://res.cloudinary.com/neo-frames/image/upload/v1654117531/services/s3_btdu6n.jpg"
                alt="services"
                loading="lazy"
                className="h-auto max-w-full"
              />
            </div>

            <div className="flex-1">
              <h3 className=" px-4 py-4 text-base font-semibold lg:px-4">
                Elevation Architectural Designers
              </h3>
              <br />
              <p className="px-4 pb-4 text-sm">
                We have expert architectural designers to design the pattern you
                want so that you get what you want.
              </p>
            </div>
          </div>

          <div className="items-center rounded-md border-2 border-dotted border-orange-600 md:flex md:odd:flex-row-reverse lg:flex  lg:odd:flex-row-reverse">
            <div className="flex-1">
              <img
                src="https://res.cloudinary.com/neo-frames/image/upload/v1654117531/services/s4_pjqjct.jpg"
                alt="services"
                loading="lazy"
                className="h-auto max-w-full"
              />
            </div>

            <div className="flex-1">
              <h3 className=" px-4 py-4 text-base font-semibold lg:px-4">
                False Ceiling Contractors
              </h3>

              <p className="px-4 pb-4 text-sm">
                We are one of the best contractors engaged in creating beautiful
                and high quality false ceilings.
              </p>
            </div>
          </div>

          <div className="items-center rounded-md border-2 border-dotted border-orange-600 md:flex md:odd:flex-row-reverse lg:flex  lg:odd:flex-row-reverse">
            <div className="flex-1">
              <img
                src="https://res.cloudinary.com/neo-frames/image/upload/v1654117529/services/s5_wgovrm.jpg"
                alt="services"
                loading="lazy"
                className="h-auto max-w-full"
              />
            </div>

            <div className="flex-1">
              <h3 className=" px-4 py-4 text-base font-semibold lg:px-4">
                Interior Designers for Modular kitchens
              </h3>

              <p className="px-4 pb-4 text-sm">
                We are the best and most skilled service providers to decorate
                the interiors for modular kitchen.
              </p>
            </div>
          </div>

          <div className="items-center rounded-md border-2 border-dotted border-orange-600 md:flex md:odd:flex-row-reverse lg:flex  lg:odd:flex-row-reverse">
            <div className="flex-1">
              <img
                src="https://res.cloudinary.com/neo-frames/image/upload/v1654117530/services/s6_bmlves.jpg"
                alt="services"
                loading="lazy"
                className="h-auto max-w-full"
              />
            </div>

            <div className="flex-1">
              <h3 className=" px-4 py-4 text-base font-semibold lg:px-4">
                Wood Workers
              </h3>

              <p className="px-4 pb-4 text-sm">
                We have plenty of experienced wood workers that understand your
                requirements and make wooden furniture for you.
              </p>
            </div>
          </div>

          <div className="items-center rounded-md border-2 border-dotted border-orange-600 md:flex md:odd:flex-row-reverse lg:flex  lg:odd:flex-row-reverse">
            <div className="flex-1">
              <img
                src="https://res.cloudinary.com/neo-frames/image/upload/v1654117529/services/s7_v4fmxb.jpg"
                alt="services"
                loading="lazy"
                className="h-auto max-w-full"
              />
            </div>

            <div className="flex-1">
              <h3 className=" px-4 py-4 text-base font-semibold lg:px-4">
                Residence Interior Designers
              </h3>

              <p className="px-4 pb-4 text-sm">
                We are professional interior designers offering best designs for
                Residence at an affordable price.
              </p>
            </div>
          </div>

          <div className="items-center rounded-md border-2 border-dotted border-orange-600 md:flex md:odd:flex-row-reverse lg:flex  lg:odd:flex-row-reverse">
            <div className="flex-1">
              <img
                src="https://res.cloudinary.com/neo-frames/image/upload/v1654117529/services/s8_ajt9md.jpg"
                alt="services"
                loading="lazy"
                className="h-auto max-w-full"
              />
            </div>

            <div className="flex-1">
              <h3 className=" px-4 py-4 text-base font-semibold lg:px-4">
                Pop False Ceiling Contractor
              </h3>

              <p className="px-4 pb-4 text-sm">
                Get the contract details of the efficient contractors who are
                best in interior designing of pop false ceilings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* form */}

      <section ref={formRef} className="container my-20 py-4">
        <div className="px-5 lg:px-0">
          <div className="flex justify-center">
            <h1 className="text-4xl font-semibold">
              Bring your dream house to life!
            </h1>
          </div>
          <div className="flex justify-center">
            <h2 className=" my-6 text-xl font-medium">
              Book a consultation with our Professional Architects. It&apos;s
              <span className="text-orange-600"> completely free!</span>
            </h2>
          </div>
          <form
            action="https://formsubmit.co/neoframesarchitectstudio@gmail.com"
            method="POST"
          >
            <div className="flex flex-col items-center">
              <div className="">
                <label
                  htmlFor="phone"
                  className=" rounded-tl-sm rounded-bl-sm   py-5 text-center text-sm text-gray-700 "
                >
                  Mobile Number
                </label>
                <br />
                <input
                  type="text"
                  name="mobile"
                  maxLength={10}
                  minLength={10}
                  placeholder="Eg: 9876543210"
                  required
                  className="rounded-sm border-2 p-3 hover:ring-1 hover:ring-orange-600 focus:outline-none"
                />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_subject"
                  value="Consultation Request"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://neoframes.netlify.app"
                />
              </div>

              <button className="m-4 max-w-lg items-stretch rounded-sm bg-orange-600  px-12 py-3 text-xl font-semibold text-white">
                Book Free Consult
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* footer */}

      <footer className="bg-orange-100">
        <section className="justify-items-center-center container grid gap-7 pt-10 pb-14 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-10 lg:px-0">
            <p className="font-semi-bold mb-3">Site</p>
            <ul className="grid gap-3">
              <li className="text-sm font-light">
                <a
                  onClick={() => {
                    homeRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                >
                  Home
                </a>
              </li>
              <li className="text-sm font-light">
                <a
                  onClick={() => {
                    featuresRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                >
                  Features
                </a>
              </li>
              <li className="text-sm font-light">
                <a
                  onClick={() => {
                    showcaseRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                >
                  Showcase
                </a>
              </li>
              <li className="text-sm font-light">
                <a
                  onClick={() => {
                    servicesRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="px-10 lg:px-0">
            <p className="font-semi-bold mb-3">Company</p>
            <ul className="grid gap-3">
              <li className="text-sm font-light">
                <Link href="/about">About</Link>
              </li>

              <li className="text-sm font-light">
                <span className="mb-2 flex items-center">
                  <span className="font-medium">Find us at</span>
                  <Image
                    src="/location.svg"
                    height={20}
                    width={20}
                    alt="location"
                  />
                </span>
                Lodha meridinan block-b 1807, <br />
                KPHB Phase 5, <br />
                Hyderabad - 500082.
              </li>
            </ul>
          </div>
          <div className="px-10 lg:px-0">
            <p className="font-semi-bold mb-3">Contact Us</p>
            <ul className="grid gap-4">
              <li className="flex items-center gap-2 text-sm font-light">
                <Image
                  src="/whatsapp.svg"
                  height={20}
                  width={20}
                  alt="whatsapp"
                />
                <a href="tel:+91-7306666643">+91-7306666643</a>
              </li>
              <li className="flex items-center gap-2 text-sm font-light">
                <Image src="/email.svg" height={20} width={20} alt="email" />
                <a href="mailto:neoframesarchitectstudio@gmail.com">
                  neoframesarchitectstudio@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm font-light">
                <Image
                  src="/instagram.svg"
                  height={20}
                  width={20}
                  alt="instagram"
                />
                <a
                  href="https://www.instagram.com/neo_framess"
                  target="_blank"
                  rel="noreferrer"
                >
                  @neo_framess
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
}

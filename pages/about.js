import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Head>
        <title>
          About Us | Neoframes - The Architect Studio | Interior Design |
          Hyderabad | Vijayawada | Guntur
        </title>
        <meta
          name="description"
          content="Neoframes is a professional interior design studio based in Hyderabad. We offer a full range of interior design services, including residential, commercial and industrial design."
        />
        <meta
          name="keywords"
          content="neoframes, neo_frames, architect studio, free consult, home interior design, home interior, home interior colour, best home interior design, house interior design, house interior, modern house interior design, small house interior design, duplex house interior, living room interior design, best interior design, best interior design near me, best interior design in hyderabad, best interior design in vijayawada, best interior design in guntur, office interior design, office interior, small office interior design, modern office interior design, office room interior design, interior design company, interior design company in hyderabad, interior design company in vijayawada, interior design company in guntur, architects near me, architects in hyderabad, architects in vijayawada, architects in guntur, architect office design, best architects near me, best architects in hyderabad, best architects in vijayawada, best architects in guntur, best architects for house design, house planning, home design, best house planning, building planning, building design plan, 3D rendering, 3D architectural rendering, 3D house rendering, 3D interior rendering, commercial interior designers, commercial office rendering, architecture elevation design, false ceiling contractor, wood workers, modular kitchen design, luxury interior design"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Neoframes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <section className="relative mb-5  w-full lg:mb-24 ">
          <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-black/80 bg-cover bg-right bg-no-repeat lg:h-screen" />
          <div className="absolute top-0 left-0 -z-20 h-screen w-full overflow-hidden bg-[url('https://res.cloudinary.com/neo-frames/image/upload/v1654200591/charles-forerunner-3fPXt37X6UQ-unsplash_1_iwd4zp.jpg')] bg-cover bg-right bg-no-repeat lg:h-screen"></div>
          {/* <div className="absolute top-0 left-0 -z-20 h-3/5 w-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-right bg-no-repeat lg:h-screen"></div> */}

          <nav className="container flex items-center justify-between border-b-2 pt-8">
            <div className="text-2xl font-medium text-white">
              <Link href="/">Neoframes</Link>
            </div>
            <div className="text-md text-gray-300">The Architect Studio</div>
          </nav>
          <div className="container mt-24 lg:mt-36 ">
            <section className="container mx-auto flex flex-col items-center   px-4 pb-36 lg:px-0">
              <h1 className="mb-5 text-2xl text-orange-600 lg:text-4xl">
                About us
              </h1>
              <p className="text-base text-gray-300 lg:text-xl">
                We believe good design is produced from careful study and
                research, combined with technical knowledge and artistic
                judgment. It&apos;s sour aim to create spaces where people &
                activities thrive. Our team is capable in handling all the
                projects from the initial concept till the actual completion of
                the whole project.
              </p>
            </section>
          </div>
        </section>
      </main>

      <footer className="bg-orange-100">
        <section className="justify-items-center-center container grid gap-7 pt-10 pb-14 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-10 lg:px-0">
            <p className="font-semi-bold mb-3">Site</p>
            <ul className="grid gap-3">
              <li className="text-sm font-light">
                <Link href="/">Home</Link>
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

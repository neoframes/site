import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Neoframes - The Architect Studio | Interior Design | Architecture
        </title>
        <meta
          name="description"
          content="One stop solution for complete building services"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <section className="relative mb-5 h-[70vh] w-full lg:mb-24 lg:h-screen">
          <div className="absolute top-0 left-0 -z-10 h-4/5 w-full bg-black/60 bg-cover bg-right bg-no-repeat lg:h-screen" />
          <div className="absolute top-0 left-0 -z-20 h-4/5 w-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-right bg-no-repeat lg:h-screen"></div>
          {/* <div className="absolute top-0 left-0 -z-20 h-3/5 w-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-right bg-no-repeat lg:h-screen"></div> */}

          <nav className="container flex justify-between pt-8">
            <div className="text-2xl font-medium text-white">Neoframes</div>
            <div>
              <button className="text-md text-gray-100">Contact Us</button>
            </div>
          </nav>

          <div className="container mt-48 lg:mt-36">
            <h1
              className="inline-block rounded-sm bg-gray-800/50 p-5 text-3xl font-medium text-white backdrop-blur lg:bg-white/20 lg:py-10 lg:text-5xl"
              style={{
                textShadow: ' 0 0 50px hsla(0, 0%, 0%, .4)',
              }}
            >
              One stop solution for
              <br />
              <span className="mt-2 inline-block text-green-500 lg:mt-4">
                complete building services
              </span>
            </h1>
          </div>
        </section>

        <section className="container mb-10">
          <h2 className="mb-10 text-center text-3xl">
            We are <span className="text-orange-600">different</span>
          </h2>
          <div className="grid gap-12 px-10 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
            <div>
              <Image src="/cash.svg" height={60} width={60} alt="affordable" />
              <p className="mb-3 font-medium text-gray-900">
                Affordable Pricing
              </p>
              <p className="text-sm text-gray-700">
                Affordable pricing pricing photo pricing price{' '}
              </p>
            </div>
            <div>
              <Image src="/badge.svg" height={60} width={60} alt="affordable" />
              <p className="mb-3 font-medium text-gray-900">
                Experience Architects
              </p>
              <p className="text-sm text-gray-700">
                Affordable pricing pricing photo pricing price{' '}
              </p>
            </div>
            <div>
              <Image
                src="/engineer.svg"
                height={60}
                width={60}
                alt="affordable"
              />
              <p className="mb-3 font-medium text-gray-900">
                Civil & Architectural Drawings
              </p>
              <p className="text-sm text-gray-700">
                Affordable pricing pricing photo pricing price{' '}
              </p>
            </div>
            <div>
              <Image src="/time.svg" height={60} width={60} alt="affordable" />
              <p className="mb-3 font-medium text-gray-900">On-Time Delivery</p>
              <p className="text-sm text-gray-700">
                Affordable pricing pricing photo pricing price{' '}
              </p>
            </div>
            <div>
              <Image
                src="/design.svg"
                height={60}
                width={60}
                alt="affordable"
              />
              <p className="mb-3 font-medium text-gray-900">
                Professional designs
              </p>
              <p className="text-sm text-gray-700">
                Affordable pricing pricing photo pricing price{' '}
              </p>
            </div>

            <div>
              <Image src="/3d.svg" height={60} width={60} alt="affordable" />
              <p className="mb-3 font-medium text-gray-900">3D Rendering</p>
              <p className="text-sm text-gray-700">
                Affordable pricing pricing photo pricing price{' '}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

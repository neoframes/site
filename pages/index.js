import Head from 'next/head';

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
        <section className="relative mb-24 h-screen w-full">
          <div className="absolute top-0 left-0 -z-10 h-3/5 w-full bg-black bg-cover bg-right bg-no-repeat opacity-60 lg:h-screen" />
          <div className="absolute top-0 left-0 -z-20 h-3/5 w-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-right bg-no-repeat lg:h-screen"></div>

          <nav className="container flex justify-between pt-8">
            <div className="text-2xl font-medium text-white">Neoframes</div>
            <div>
              <button className="text-md text-gray-100">Contact Us</button>
            </div>
          </nav>

          <div className="container mt-28 lg:mt-36">
            <h1
              className="text-3xl font-medium text-white lg:text-5xl"
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

        <section>
          <h2 className="text-center text-2xl">Showcase</h2>
          <div></div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

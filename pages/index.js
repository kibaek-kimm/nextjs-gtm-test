import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test Nextjs + Gtm</title>
      </Head>

      <main>
        <a href="#" data-test="테스트버튼1">GTM data-attributes 테스트1</a>
        <a href="#" data-test="테스트버튼2">GTM data-attributes 테스트2</a>
      </main>
    </div>
  )
}

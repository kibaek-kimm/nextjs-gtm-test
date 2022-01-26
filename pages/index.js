import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Home() {
  const [asyncButton, setAsyncButton] = useState();
  const getAsyncButton = () => {
    fetch("/api/get-button", {
      method: "GEt"
    })
    .then(response => {
      if (response.status === 200) {
        setAsyncButton((
          <>
            <div style={{ marginBottom: "10px" }}>
              <a href="#" data-test="테스트버튼3">GTM data-attributes 테스트3</a>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <a href="#" data-test="테스트버튼4">GTM data-attributes 테스트4</a>
            </div>
          </>
        ))
      }
    })
    .catch(e => {
      console.log(e);
    }) 
  }

  useEffect(() => {
    getAsyncButton()
  },[]);
  return (
    <div className="container">
      <Head>
        <title>Test Nextjs + Gtm</title>
      </Head>

      <main>
        <div style={{ marginBottom: "10px" }}>
          <a href="#" data-test="테스트버튼1">GTM data-attributes 테스트1</a>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <a href="#" data-test="테스트버튼2">GTM data-attributes 테스트2</a>
        </div>
        {asyncButton}
      </main>
    </div>
  )
}

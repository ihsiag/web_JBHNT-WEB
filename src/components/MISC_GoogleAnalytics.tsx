//thanks to @Panda_Program
//link : https://panda-program.com/posts/nextjs-google-analytics

import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''

// IDが取得できない場合を想定する
const existsGaId = GA_ID !== ''

// PVを測定する
const pageview = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

// GAイベントを発火させる
const event = ({ action, category, label, value = '' }: Event) => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label ? JSON.stringify(label) : '',
    value,
  })
}

// _app.tsx で読み込む
const usePageView = () => {
  const router = useRouter()

  useEffect(() => {
    if (!existsGaId) {
      return
    }

    const handleRouteChange = (path: string) => {
      pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}

// _app.tsx で読み込む
const Misc_GoogleAnalytics = () => (
  <>
    {existsGaId && (
      <>
        <Script defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script
          id = "script_writeGtagToHead"
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());    
              gtag('config', '${GA_ID}');
            `,
          }}
          strategy="afterInteractive"
        />
      </>
    )}
  </>
)

// イベントを型で管理
type ContactEvent = {
  action: 'submit_form'
  category: 'contact'
}

type ClickEvent = {
  action: 'click'
  category: 'other'
}

type Event = (ContactEvent | ClickEvent) & {
  label?: Record<string, string | number | boolean>
  value?: string
}


export default Misc_GoogleAnalytics;
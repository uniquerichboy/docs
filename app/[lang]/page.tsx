import Link from 'next/link';

const content = {
  en: {
    title: 'Soxway',
    subtitle: 'High-performance residential, mobile, and datacenter proxies with a powerful API',
    docs: 'Documentation',
    api: 'API Reference',
    features: [
      { title: 'Geo Targeting', desc: 'Target by country, region, or city across 195+ countries' },
      { title: 'Rotation Control', desc: 'Sticky sessions or rotate on each request or interval' },
      { title: 'HTTP & SOCKS5', desc: 'Both protocols supported on every proxy' },
      { title: 'Pay As You Go', desc: 'Only pay for the traffic you use' },
      { title: 'IP Whitelist', desc: 'Restrict access to your trusted IPs' },
      { title: 'Domain Blocklist', desc: 'Block unwanted domains at proxy level' },
    ],
  },
  ru: {
    title: 'Soxway',
    subtitle: 'Высокопроизводительные резидентные, мобильные и дата-центр прокси с мощным API',
    docs: 'Документация',
    api: 'API Справочник',
    features: [
      { title: 'Гео-таргетинг', desc: 'Таргетинг по стране, региону или городу в 195+ странах' },
      { title: 'Управление ротацией', desc: 'Стики-сессии или ротация на каждый запрос' },
      { title: 'HTTP и SOCKS5', desc: 'Оба протокола на каждом прокси' },
      { title: 'Pay As You Go', desc: 'Платите только за использованный трафик' },
      { title: 'IP Whitelist', desc: 'Доступ только с доверенных IP' },
      { title: 'Блокировка доменов', desc: 'Блокируйте домены на уровне прокси' },
    ],
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = content[lang as keyof typeof content] || content.en;

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="mb-4 text-5xl font-bold">{t.title}</h1>
      <p className="mb-8 max-w-2xl text-lg text-fd-muted-foreground">
        {t.subtitle}
      </p>
      <div className="mb-16 flex gap-4">
        <Link
          href={`/${lang}/docs`}
          className="rounded-lg bg-fd-primary px-6 py-3 font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
        >
          {t.docs}
        </Link>
        <Link
          href={`/${lang}/docs/api-reference/auth/issue-token`}
          className="rounded-lg border border-fd-border px-6 py-3 font-medium transition-colors hover:bg-fd-accent"
        >
          {t.api}
        </Link>
      </div>
      <div className="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-fd-border p-6 text-left transition-colors hover:bg-fd-accent"
          >
            <h3 className="mb-2 font-semibold">{f.title}</h3>
            <p className="text-sm text-fd-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

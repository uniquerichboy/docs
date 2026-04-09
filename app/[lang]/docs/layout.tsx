import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default async function DocsLayoutComponent({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const tree = source.pageTree[lang] ?? source.pageTree.en;

  return (
    <DocsLayout
      tree={tree}
      nav={{
        title: <span className="font-bold text-lg">Soxway</span>,
        url: `/${lang}`,
      }}
      links={[
        {
          text: lang === 'ru' ? 'Русский / English' : 'English / Русский',
          url: lang === 'ru' ? '/en/docs' : '/ru/docs',
        },
        { text: 'Dashboard', url: 'https://my.soxway.io', external: true },
        { text: 'Telegram', url: 'https://t.me/soxway', external: true },
      ]}
    >
      {children}
    </DocsLayout>
  );
}

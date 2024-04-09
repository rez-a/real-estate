import '@/assets/globals.css';
import { yekan } from '@/assets/fonts';
import Layout from '@/components/layouts/Layout';
import SessionProviders from '@/providers/SessionProvider';

export const metadata = {
  title: 'خرید و فروش املاک',
  description: 'خرید و فروش املاک',
  icons: { icon: './favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={yekan.variable}>
      <body>
        <SessionProviders>
          <Layout>{children}</Layout>
        </SessionProviders>
      </body>
    </html>
  );
}

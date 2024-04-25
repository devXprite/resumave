import Header from '@/components/Header';

import './globals.scss';
import ReduxProvider from '@/store/ReduxProvider';

export const metadata = {
    metadataBase: new URL(process.env.BASE_URL),
    title: 'Free Resume Maker | Resumave',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <Header />
                    <div className="mx-auto  min-h-[calc(100vh-3rem)] max-w-screen-xl ">{children}</div>
                </ReduxProvider>
            </body>
        </html>
    );
}

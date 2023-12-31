import { Nunito } from 'next/font/google'
 
import './globals.css'
import Navbar from './Components/Navbar/Navbar';
import ClientOnly from './Components/ClientOnly';
import Modal from './Components/Modals/Modal';

export const metadata = {
  title: 'Docknow',
  description: 'Your place for shorterm boatslips',
}

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title={"Hello world"} isOpen/>
          <Navbar />
        </ClientOnly>
        
        {children}
      </body>
    </html>
  )
}

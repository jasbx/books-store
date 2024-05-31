
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#FFF6E9" }} >
        <header>
          <Navbar />
        </header>
        <ToastContainer theme='colored'
          position='top-center'/>

        {children}
      </body>
      <footer>
        <Footer></Footer>
      </footer>
    </html>
  );
}

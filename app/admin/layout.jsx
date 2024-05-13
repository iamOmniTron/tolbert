import { ToastContainer } from "react-toastify";
import "../globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Container from "./components/container";

export const metadata = {
  title: "Admin Panel | Toolbert Specialist Hospital",
  description: "Administrator panel for Toolbert Hospital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Container>
        {children}
        </Container>
        <ToastContainer/>
    </body>
    </html>
  );
}

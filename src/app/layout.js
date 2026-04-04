import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import './globals.css';

export const metadata = {
  title: 'Fresh Travel - Công Ty Du Lịch Uy Tín Hàng Đầu',
  description: 'Fresh Travel - Công ty du lịch uy tín hàng đầu chuyên tổ chức tour trong nước & quốc tế. Dịch vụ Visa, đặt vé máy bay, MICE, Team Building trọn gói.',
  keywords: 'fresh travel, du lịch, tour cao cấp, tour no shopping, tour thiết kế, visa, team building',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="ft-footer" id="main-footer">
      <div className="ft-footer__container">
        {/* Top section */}
        <div className="ft-footer__top">
          {/* Brand */}
          <div className="ft-footer__brand">
            <Link href="/" className="ft-footer__logo">
              <Image
                src="/images/logo-freshtravel.png"
                alt="Fresh Travel Logo"
                width={36}
                height={36}
                className="ft-footer__logo-img"
              />
              <span className="ft-footer__logo-fresh">Fresh</span>
              <span className="ft-footer__logo-travel">Travel</span>
            </Link>
            <p className="ft-footer__tagline">
              Chuyên gia du lịch hàng đầu Việt Nam. Đồng hành cùng bạn trên mọi hành trình khám phá thế giới.
            </p>
            {/* Social Icons */}
            <div className="ft-footer__social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="ft-footer__social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="ft-footer__social-link" aria-label="Youtube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ft-footer__social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="ft-footer__social-link" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="ft-footer__social-link" aria-label="Zalo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 14.163c-.1.3-.6.6-1.2.6-.5 0-1.5-.2-2.9-1.2-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.2.1l-.8 1c-.1.1-.2.2-.3.2-.1 0-.3-.1-.4-.1-1-.5-1.8-1.2-2.5-2-.7-.9-1.1-1.8-1.2-2-.1-.2 0-.3.1-.4l.7-.8c.1-.1.1-.2.1-.3s0-.2-.1-.3C9.4 8.3 8.9 7 8.7 6.6c-.2-.3-.4-.3-.5-.3h-.5c-.2 0-.4.1-.6.2-.8.7-1.2 1.6-1.2 2.5 0 .7.2 1.4.5 2.1.7 1.5 1.7 2.8 3 3.8 1.3 1 2.7 1.7 4.2 1.9.3 0 .5.1.8.1.9 0 1.7-.3 2.3-1 .4-.5.6-1 .6-1.2 0-.2-.1-.3-.2-.3z"/></svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="ft-footer__links-wrap">
            <div className="ft-footer__col">
              <h4 className="ft-footer__heading">Tour Nước Ngoài</h4>
              <ul className="ft-footer__links">
                <li><Link href="/tour-nuoc-ngoai">Hàn Quốc</Link></li>
                <li><Link href="/tour-nuoc-ngoai">Nhật Bản</Link></li>
                <li><Link href="/tour-nuoc-ngoai">Trung Quốc</Link></li>
                <li><Link href="/tour-nuoc-ngoai">Châu Âu</Link></li>
                <li><Link href="/tour-nuoc-ngoai">Đông Nam Á</Link></li>
              </ul>
            </div>

            <div className="ft-footer__col">
              <h4 className="ft-footer__heading">Tour Trong Nước</h4>
              <ul className="ft-footer__links">
                <li><Link href="/tour-trong-nuoc">Đà Nẵng</Link></li>
                <li><Link href="/tour-trong-nuoc">Phú Quốc</Link></li>
                <li><Link href="/tour-trong-nuoc">Đà Lạt</Link></li>
                <li><Link href="/tour-trong-nuoc">Nha Trang</Link></li>
                <li><Link href="/tour-trong-nuoc">Sa Pa</Link></li>
              </ul>
            </div>

            <div className="ft-footer__col">
              <h4 className="ft-footer__heading">Liên Kết</h4>
              <ul className="ft-footer__links">
                <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
                <li><Link href="/tin-tuc">Tin tức</Link></li>
                <li><Link href="/tour-khach-doan">Tour khách đoàn</Link></li>
                <li><Link href="/lien-he">Liên hệ</Link></li>
              </ul>
            </div>

            <div className="ft-footer__col">
              <h4 className="ft-footer__heading">Liên Hệ</h4>
              <ul className="ft-footer__contact">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  163A Nguyễn Văn Thủ, TP.HCM
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <a href="tel:19006361">1900 63 61 68</a>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <a href="mailto:marketing@freshtravel.vn">marketing@freshtravel.vn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-footer__bottom">
          <p>© 2026 Fresh Travel. All rights reserved.</p>
          <div className="ft-footer__bottom-links">
            <Link href="#">Điều khoản</Link>
            <span>•</span>
            <Link href="#">Chính sách bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

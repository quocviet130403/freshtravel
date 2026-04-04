'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'TRANG CHỦ', href: '/' },
  {
    label: 'TOUR NƯỚC NGOÀI', href: '/tour-nuoc-ngoai',
    children: [
      { label: 'Du Lịch Trung Quốc', href: '/tour-nuoc-ngoai' },
      { label: 'Du Lịch Hàn Quốc', href: '/tour-nuoc-ngoai' },
      { label: 'Du Lịch Nhật Bản', href: '/tour-nuoc-ngoai' },
      { label: 'Du Lịch Châu Âu', href: '/tour-nuoc-ngoai' },
      { label: 'Du Lịch Đông Nam Á', href: '/tour-nuoc-ngoai' },
    ],
  },
  { label: 'TOUR TRONG NƯỚC', href: '/tour-trong-nuoc' },
  {
    label: 'TOUR KHÁCH ĐOÀN', href: '/tour-khach-doan',
    children: [
      { label: 'Album Tour Khách Đoàn', href: '/tour-khach-doan' },
    ],
  },
  { label: 'GIỚI THIỆU', href: '/gioi-thieu' },
  {
    label: 'TIN TỨC', href: '/tin-tuc',
    children: [
      { label: 'Cẩm Nang Du Lịch', href: '/cam-nang-du-lich' },
      { label: 'Thông Tin Visa', href: '/thong-tin-visa' },
    ],
  },
  { label: 'LIÊN HỆ', href: '/lien-he' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`ft-header ${scrolled ? 'ft-header--scrolled' : ''}`} id="main-header">
      <div className="ft-header__container">
        {/* Logo */}
        <Link href="/" className="ft-header__logo">
          <Image
            src="/images/logo-freshtravel.png"
            alt="Fresh Travel Logo"
            width={42}
            height={42}
            className="ft-header__logo-img"
          />
          <span className="ft-header__logo-text">
            <span className="ft-header__logo-fresh">Fresh</span>
            <span className="ft-header__logo-travel">Travel</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="ft-header__nav" id="main-nav">
          <ul className="ft-header__menu">
            {navItems.map((item, i) => (
              <li
                key={i}
                className={`ft-header__item ${item.children ? 'ft-header__item--has-sub' : ''}`}
                onMouseEnter={() => item.children && setOpenDropdown(i)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href={item.href} className="ft-header__link">
                  {item.label}
                  {item.children && <span className="ft-header__arrow">▾</span>}
                </Link>
                {item.children && openDropdown === i && (
                  <ul className="ft-header__submenu">
                    {item.children.map((child, j) => (
                      <li key={j}>
                        <Link href={child.href} className="ft-header__sublink">{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Language + Mobile Toggle */}
        <div className="ft-header__actions">
          <div className="ft-header__lang">
            <span>🌐</span>
            <select defaultValue="vi" className="ft-header__lang-select">
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
          <button
            className="ft-header__burger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            id="menu-toggle"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="ft-header__mobile-nav">
          <ul className="ft-header__mobile-menu">
            {navItems.map((item, i) => (
              <li key={i} className="ft-header__mobile-item">
                <Link href={item.href} className="ft-header__mobile-link" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ft-header__mobile-sub">
                    {item.children.map((child, j) => (
                      <li key={j}>
                        <Link href={child.href} className="ft-header__mobile-sublink" onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

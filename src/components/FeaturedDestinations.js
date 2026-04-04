'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tabs = [
  { id: 'chau-a', label: 'CHÂU Á' },
  { id: 'chau-au', label: 'CHÂU ÂU' },
  { id: 'mien-bac', label: 'MIỀN BẮC' },
  { id: 'mien-trung', label: 'MIỀN TRUNG' },
  { id: 'mien-nam', label: 'MIỀN NAM' },
];

const destinationsByTab = {
  'chau-a': [
    { name: 'Trung Quốc', image: '/images/tour-china.png', href: '/tours/trung-quoc', span: true },
    { name: 'Nhật Bản', image: '/images/tour-japan.png', href: '/tours/nhat-ban' },
    { name: 'Hàn Quốc', image: '/images/tour-korea.png', href: '/tours/han-quoc' },
    { name: 'Thái Lan', image: '/images/dest-thailand.png', href: '/tours/thai-lan' },
    { name: 'Singapore', image: '/images/dest-singapore.png', href: '/tours/singapore' },
  ],
  'chau-au': [
    { name: 'Pháp', image: '/images/tour-europe.png', href: '/tours/phap', span: true },
    { name: 'Châu Úc', image: '/images/tour-australia.png', href: '/tours/chau-uc' },
    { name: 'Châu Mỹ', image: '/images/dest-america.png', href: '/tours/chau-my' },
    { name: 'Châu Phi', image: '/images/dest-africa.png', href: '/tours/chau-phi' },
    { name: 'Việt Nam', image: '/images/dest-vietnam.png', href: '/tours/viet-nam' },
  ],
  'mien-bac': [
    { name: 'Hạ Long', image: '/images/dest-ha-long.png', href: '/tours/ha-long', span: true },
    { name: 'Sa Pa', image: '/images/dest-sa-pa.png', href: '/tours/sa-pa' },
    { name: 'Hà Nội', image: '/images/tour-china.png', href: '/tours/ha-noi' },
    { name: 'Ninh Bình', image: '/images/dest-vietnam.png', href: '/tours/ninh-binh' },
    { name: 'Hà Giang', image: '/images/dest-sa-pa.png', href: '/tours/ha-giang' },
  ],
  'mien-trung': [
    { name: 'Hội An', image: '/images/dest-hoi-an.png', href: '/tours/hoi-an', span: true },
    { name: 'Đà Nẵng', image: '/images/dest-nha-trang.png', href: '/tours/da-nang' },
    { name: 'Huế', image: '/images/dest-vietnam.png', href: '/tours/hue' },
    { name: 'Nha Trang', image: '/images/dest-nha-trang.png', href: '/tours/nha-trang' },
    { name: 'Quy Nhơn', image: '/images/dest-phu-quoc.png', href: '/tours/quy-nhon' },
  ],
  'mien-nam': [
    { name: 'Phú Quốc', image: '/images/dest-phu-quoc.png', href: '/tours/phu-quoc', span: true },
    { name: 'Đà Lạt', image: '/images/dest-da-lat.png', href: '/tours/da-lat' },
    { name: 'TP. Hồ Chí Minh', image: '/images/dest-singapore.png', href: '/tours/ho-chi-minh' },
    { name: 'Cần Thơ', image: '/images/dest-ha-long.png', href: '/tours/can-tho' },
    { name: 'Vũng Tàu', image: '/images/dest-nha-trang.png', href: '/tours/vung-tau' },
  ],
};

export default function FeaturedDestinations() {
  const [activeTab, setActiveTab] = useState('chau-a');
  const destinations = destinationsByTab[activeTab];

  return (
    <section className="ft-destinations" id="featured-destinations">
      <div className="ft-destinations__container">
        <div className="ft-destinations__header">
          <h2 className="ft-destinations__title">ĐỊA ĐIỂM NỔI BẬT</h2>
          <div className="ft-destinations__divider"></div>
          <p className="ft-destinations__desc">
            Fresh Travel với mong muốn mang đến khách hàng những trải nghiệm tuyệt vời nhất
          </p>
        </div>

        {/* Tabs */}
        <div className="ft-destinations__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`ft-destinations__tab ${activeTab === tab.id ? 'ft-destinations__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="ft-destinations__grid" key={activeTab}>
          {destinations.map((dest, i) => (
            <Link
              key={i}
              href={dest.href}
              className={`ft-destinations__item ${dest.span ? 'ft-destinations__item--1' : ''}`}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes={dest.span ? '66vw' : '33vw'}
              />
              <div className="ft-destinations__overlay">
                <span className="ft-destinations__name">{dest.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

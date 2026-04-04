// Tour Detail Data for 3 categories
// Categories: tour-nuoc-ngoai, tour-trong-nuoc, tour-khach-doan

export const allTours = [
  // =============================================
  // TOUR NƯỚC NGOÀI
  // =============================================
  {
    id: 'nn-1',
    slug: 'han-quoc-seoul-nami-everland-5n4d',
    category: 'tour-nuoc-ngoai',
    title: 'Hàn Quốc Mùa Hoa Anh Đào: HCM - Seoul - Đảo Nami - Everland 5N4Đ',
    rating: 8.9,
    reviewCount: 120,
    image: '/images/tour-korea.png',
    images: ['/images/korea-palace.png', '/images/korea-nami.png', '/images/korea-everland.png', '/images/korea-myeongdong.png'],
    duration: '5 ngày 4 đêm',
    airline: 'VietJet Air',
    departureDates: ['02/04', '09/04', '16/04', '30/04', '14/05', '21/05'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Hàn Quốc - Seoul - Đảo Nami',
    price: '14.190.000đ',
    oldPrice: '14.990.000đ',
    promo: 'Đặt sớm: Giảm 800K + Miễn Phí đổi lịch',
    highlights: [
      'Chiêm ngưỡng cung điện Cảnh Phúc – biểu tượng kiến trúc cổ kính giữa lòng Seoul',
      'Làng cổ Bukchon Hanok đưa bạn trở về với vẻ đẹp yên bình Hàn xưa',
      'Ghé thăm hòn đảo Nami lãng mạn đầy chất thơ',
      'Trải nghiệm nhiều trò chơi hấp dẫn tại công viên Everland',
      'Lưu trú khách sạn 4 sao tiêu chuẩn sang trọng, tiện nghi',
    ],
    description: 'Xứ sở kim chi nổi tiếng qua các bộ phim đình đám, những món ăn đặc trưng hấp dẫn và được mệnh danh là một trong những thiên đường du lịch Châu Á. Du lịch Hàn Quốc mỗi mùa lại đem đến những trải nghiệm, cảm xúc khác nhau khiến đất nước xinh đẹp này luôn được lòng du khách tứ phương.',
    visitPoints: 'Cảnh Phúc Cung, Nhà xanh, Làng Bukchon Hanok, Lotte World',
    themes: 'Nghỉ lễ 30/4 & 1/5, Tour hè 2026, Văn hóa, Mua sắm',
    itinerary: [
      { day: 1, title: 'HCM - Seoul', details: [
        { time: 'Buổi tối', desc: 'Quý khách có mặt tại sân bay Tân Sơn Nhất. Đoàn làm thủ tục check-in chuyến bay đi Hàn Quốc. Nghỉ đêm trên máy bay.' }
      ]},
      { day: 2, title: 'Seoul - Đảo Nami - Tháp N Seoul', details: [
        { time: 'Buổi sáng', desc: 'Đoàn đáp sân bay Icheon. Xe đón đoàn đi ăn sáng sau đó bắt đầu di chuyến đến Đảo Nami – địa điểm quay bộ phim "Bản tình ca mùa đông" đình đám.' },
        { time: 'Buổi chiều', desc: 'Tham quan Tháp N Seoul, ngọn tháp cao 237m tọa lạc trên ngọn núi Namsan. Check in cầu khóa tình yêu nổi tiếng.' },
        { time: 'Buổi tối', desc: 'Ăn tối tại nhà hàng. Di chuyển đến khu phố đi bộ Myeongdong – thiên đường mua sắm của Seoul.' }
      ]},
      { day: 3, title: 'Seoul - Everland - Mặc Hanbok', details: [
        { time: 'Buổi sáng', desc: 'Trải nghiệm lớp học làm kim chi. Mặc đồ Hanbok chụp ảnh miễn phí.' },
        { time: 'Buổi chiều', desc: 'Thỏa sức vui chơi tại công viên Everland – top 10 công viên lớn nhất thế giới.' },
        { time: 'Buổi tối', desc: 'Đoàn dùng bữa tối. Tự do khám phá chợ đêm Dongdaemun.' }
      ]},
      { day: 4, title: 'Seoul City Tour', details: [
        { time: 'Buổi sáng', desc: 'Tham quan cửa hàng nhân sâm Chính Phủ và tinh dầu thông đỏ Hàn Quốc.' },
        { time: 'Buổi chiều', desc: 'Tham quan Cung điện Gyeongbokgung (Cảnh Phúc Cung), Bảo tàng Dân gian, Nhà Xanh. Thưởng ngoạn Rừng Seoul.' },
        { time: 'Buổi tối', desc: 'Dùng bữa tối. Tự do khám phá chợ đêm Namdaemun.' }
      ]},
      { day: 5, title: 'Seoul - HCM', details: [
        { time: 'Buổi sáng', desc: 'Trả phòng, tham quan Thư viện Starfield, Đền Bongeunsa.' },
        { time: 'Buổi chiều', desc: 'Mua sắm tại siêu thị Myungpum. Di chuyển ra sân bay, đáp chuyến bay về Sài Gòn. Kết thúc tour.' }
      ]}
    ],
    priceTable: [
      { date: '02/04/2026', season: 'Mùa Hoa Anh Đào', airline: 'VietJet Air', price: '17.990.000đ', month: 4 },
      { date: '09/04/2026', season: 'Mùa Hoa Anh Đào', airline: 'VietJet Air', price: '14.990.000đ', month: 4 },
      { date: '16/04/2026', season: '', airline: 'VietJet Air', price: '14.190.000đ', month: 4 },
      { date: '30/04/2026', season: 'Nghỉ Lễ 30/4', airline: 'VietJet Air', price: '19.990.000đ', month: 4 },
      { date: '14/05/2026', season: '', airline: 'VietJet Air', price: '14.990.000đ', month: 5 },
      { date: '21/05/2026', season: '', airline: 'VietJet Air', price: '15.190.000đ', month: 5 },
    ],
    includes: [
      'Vé máy bay khứ hồi HCM - Seoul - HCM (VietJet Air) với 7kg xách tay + 20kg ký gửi',
      'Visa nhập cảnh Hàn Quốc',
      'Khách sạn 4* tiêu chuẩn Hàn Quốc (2-3 người/phòng)',
      'Các bữa ăn chính trong chương trình',
      'Vé tham quan 1 lần các điểm trong chương trình',
      'Xe ôtô máy lạnh, đời mới suốt hành trình',
      'Bảo hiểm du lịch quốc tế',
      'Hướng dẫn viên Việt Nam và HDV địa phương',
    ],
    excludes: [
      'Chi phí cá nhân, hành lý quá cước, điện thoại, giặt ủi',
      'Tips cho tài xế và hướng dẫn viên: 35 USD/khách',
      'Phụ thu phòng đơn: 350 USD/tour',
      'Phí làm visa tái nhập Việt Nam (khách quốc tịch nước ngoài)',
    ],
    cancelPolicy: [
      'Hủy tour sau khi đăng ký: chi phí 85% tiền đặt cọc',
      'Hủy trước 10 ngày: chi phí 75% tổng giá tour',
      'Sau thời gian trên: chi phí 100% tổng giá trị tour',
    ],
    reviews: [
      { name: 'Chị Lan', date: '26/12/2025', score: 9.0, text: 'Rất thích chuyến đi này. Các cháu cùng trong đoàn rất vui vẻ. Hướng dẫn viên rất ngoan, lễ phép.' },
      { name: 'Bác Hải', date: '29/11/2025', score: 9.2, text: 'Tôi cảm thấy chuyến đi rất tuyệt vời. Công ty cho ở khách sạn rất sang trọng. Đồ ăn Hàn Quốc rất ngon.' },
      { name: 'Thùy Trâm', date: '28/10/2025', score: 9.0, text: 'Mình mua tour này tặng ba mẹ đi chơi, về nghe kể mà thấy vui lắm. Hướng dẫn viên chu đáo, nhiệt tình.' },
    ],
    qna: [
      { q: 'Tour này có bao gồm vé vào Everland không?', a: 'Dạ vé tham quan Everland đã được bao gồm trong giá tour theo chương trình.' },
      { q: 'Tháng 3 có những ngày nào? Hoa anh đào đã nở chưa?', a: 'Hiện tại lịch tháng 3 có ngày 11/3, 18/3 và 25/3. Hoa anh đào dự kiến nở vào cuối tháng 3.' },
    ],
  },

  {
    id: 'nn-2',
    slug: 'nhat-ban-osaka-kyoto-fuji-tokyo-6n5d',
    category: 'tour-nuoc-ngoai',
    title: 'Nhật Bản: Osaka - Kyoto - Nagoya - Fuji - Tokyo 6N5Đ',
    rating: 9.1,
    reviewCount: 85,
    image: '/images/tour-japan.png',
    images: ['/images/japan-fuji.png', '/images/japan-fushimi.png', '/images/japan-shibuya.png', '/images/tour-japan.png'],
    duration: '6 ngày 5 đêm',
    airline: 'Vietnam Airlines',
    departureDates: ['08/04', '22/04', '06/05', '20/05'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Osaka - Kyoto - Nagoya - Fuji - Tokyo',
    price: '29.990.000đ',
    oldPrice: '32.990.000đ',
    promo: 'Cung đường vàng mùa lá đỏ',
    highlights: [
      'Khám phá cung đường vàng Nhật Bản: Osaka – Kyoto – Nagoya – Fuji – Tokyo',
      'Ngắm núi Phú Sĩ hùng vĩ từ hồ Kawaguchi',
      'Tham quan đền Fushimi Inari với 10.000 cổng Torii',
      'Trải nghiệm văn hóa trà đạo và mặc Kimono truyền thống',
      'Bay Vietnam Airlines – hãng bay 4 sao',
    ],
    description: 'Nhật Bản – xứ sở hoa anh đào với nền văn hóa độc đáo, ẩm thực tinh tế và cảnh quan thiên nhiên ngoạn mục. Tour cung đường vàng đưa bạn khám phá từ cố đô Kyoto yên bình đến Tokyo sôi động.',
    visitPoints: 'Lâu đài Osaka, Đền Fushimi Inari, Núi Phú Sĩ, Tokyo Skytree',
    themes: 'Văn hóa, Khám phá, Ẩm thực, Thiên nhiên',
    itinerary: [
      { day: 1, title: 'HCM - Osaka', details: [
        { time: 'Buổi sáng', desc: 'Tập trung sân bay Tân Sơn Nhất, bay đến Osaka. Nhận phòng khách sạn, nghỉ ngơi.' }
      ]},
      { day: 2, title: 'Osaka - Kyoto', details: [
        { time: 'Buổi sáng', desc: 'Tham quan Lâu đài Osaka. Ghé thăm khu phố Shinsaibashi.' },
        { time: 'Buổi chiều', desc: 'Di chuyển đến Kyoto. Tham quan đền Kinkaku-ji (Chùa Vàng) và đền Fushimi Inari.' }
      ]},
      { day: 3, title: 'Kyoto - Nagoya', details: [
        { time: 'Buổi sáng', desc: 'Tham quan khu rừng tre Arashiyama. Trải nghiệm trà đạo truyền thống.' },
        { time: 'Buổi chiều', desc: 'Di chuyển đến Nagoya. Tham quan lâu đài Nagoya.' }
      ]},
      { day: 4, title: 'Nagoya - Fuji', details: [
        { time: 'Buổi sáng', desc: 'Di chuyển đến khu vực núi Phú Sĩ. Ngắm cảnh hồ Kawaguchi.' },
        { time: 'Buổi chiều', desc: 'Tham quan làng cổ Oshino Hakkai. Tắm onsen truyền thống.' }
      ]},
      { day: 5, title: 'Fuji - Tokyo', details: [
        { time: 'Buổi sáng', desc: 'Di chuyển đến Tokyo. Tham quan Tokyo Skytree, chùa Sensoji (Asakusa).' },
        { time: 'Buổi chiều', desc: 'Tự do mua sắm tại Shibuya và Akihabara.' }
      ]},
      { day: 6, title: 'Tokyo - HCM', details: [
        { time: 'Buổi sáng', desc: 'Tự do tham quan hoặc mua sắm. Di chuyển ra sân bay Narita, bay về HCM. Kết thúc tour.' }
      ]}
    ],
    priceTable: [
      { date: '08/04/2026', season: '', airline: 'Vietnam Airlines', price: '29.990.000đ', month: 4 },
      { date: '22/04/2026', season: '', airline: 'Vietnam Airlines', price: '29.990.000đ', month: 4 },
      { date: '06/05/2026', season: '', airline: 'Vietnam Airlines', price: '31.990.000đ', month: 5 },
      { date: '20/05/2026', season: '', airline: 'Vietnam Airlines', price: '29.990.000đ', month: 5 },
    ],
    includes: ['Vé máy bay khứ hồi Vietnam Airlines', 'Khách sạn 4* tiêu chuẩn', 'Các bữa ăn trong chương trình', 'Vé tham quan', 'Xe đưa đón suốt hành trình', 'Bảo hiểm du lịch', 'HDV tiếng Việt'],
    excludes: ['Chi phí cá nhân', 'Tips HDV: 40 USD/khách', 'Phụ thu phòng đơn: 400 USD'],
    cancelPolicy: ['Hủy sau khi đăng ký: 85% cọc', 'Hủy trước 10 ngày: 75% tổng giá', 'Sau đó: 100%'],
    reviews: [
      { name: 'Anh Minh', date: '15/01/2026', score: 9.5, text: 'Tour tuyệt vời, cung đường vàng rất đẹp. HDV nhiệt tình, am hiểu.' },
      { name: 'Chị Hương', date: '20/12/2025', score: 8.8, text: 'Đồ ăn ngon, khách sạn sạch sẽ. Hơi tiếc vì thời gian tự do ít.' },
    ],
    qna: [
      { q: 'Tour có đi qua ga Shibuya không?', a: 'Dạ có, ngày thứ 5 lịch trình sẽ ghé Shibuya để quý khách tham quan và mua sắm.' },
    ],
  },

  {
    id: 'nn-3',
    slug: 'trung-quoc-thuong-hai-hang-chau-5n4d',
    category: 'tour-nuoc-ngoai',
    title: 'Trung Quốc: Thượng Hải - Hàng Châu - Tô Châu - Ô Trấn 5N4Đ',
    rating: 8.6,
    reviewCount: 65,
    image: '/images/tour-china.png',
    images: ['/images/china-shanghai.png', '/images/china-wuzhen.png', '/images/tour-china.png', '/images/china-shanghai.png'],
    duration: '5 ngày 4 đêm',
    airline: 'China Eastern Airlines',
    departureDates: ['13/04', '27/04', '11/05'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Thượng Hải - Hàng Châu - Tô Châu',
    price: '16.990.000đ',
    oldPrice: '19.990.000đ',
    promo: 'Tặng Vé Cung Yến',
    highlights: [
      'Ngắm siêu đô thị Thượng Hải từ tháp truyền hình Đông Phương Minh Châu',
      'Khám phá cổ trấn Ô Trấn – Venice phương Đông',
      'Thưởng ngoạn Tây Hồ thơ mộng tại Hàng Châu',
      'Tham quan Vườn Dự Viên – kiệt tác vườn cảnh Trung Hoa',
      'Bay China Eastern Airlines – tiêu chuẩn quốc tế',
    ],
    description: 'Trung Quốc với nền văn minh ngàn năm, từ phố cổ truyền thống đến siêu đô thị hiện đại. Tour đưa bạn khám phá từ Thượng Hải náo nhiệt đến Hàng Châu thơ mộng.',
    visitPoints: 'Bến Thượng Hải, Tây Hồ, Ô Trấn, Vườn Dự Viên',
    themes: 'Văn hóa, Lịch sử, Khám phá, Ẩm thực',
    itinerary: [
      { day: 1, title: 'HCM - Thượng Hải', details: [{ time: 'Buổi chiều', desc: 'Bay đến Thượng Hải. Nhận phòng khách sạn.' }]},
      { day: 2, title: 'Thượng Hải - Ô Trấn', details: [
        { time: 'Buổi sáng', desc: 'Tham quan Bến Thượng Hải (The Bund), Phố đi bộ Nam Kinh.' },
        { time: 'Buổi chiều', desc: 'Di chuyển đến cổ trấn Ô Trấn – Venice phương Đông.' }
      ]},
      { day: 3, title: 'Hàng Châu', details: [
        { time: 'Buổi sáng', desc: 'Di chuyển đến Hàng Châu. Tham quan Tây Hồ thơ mộng.' },
        { time: 'Buổi chiều', desc: 'Tham quan Chùa Linh Ẩn, Phố cổ Hà Phang.' }
      ]},
      { day: 4, title: 'Tô Châu - Thượng Hải', details: [
        { time: 'Buổi sáng', desc: 'Tham quan Tô Châu – Venice phương Đông.' },
        { time: 'Buổi chiều', desc: 'Về Thượng Hải. Tham quan Vườn Dự Viên, khu Phố Đông hiện đại.' }
      ]},
      { day: 5, title: 'Thượng Hải - HCM', details: [{ time: 'Buổi sáng', desc: 'Tự do mua sắm. Bay về HCM. Kết thúc tour.' }]}
    ],
    priceTable: [
      { date: '13/04/2026', season: '', airline: 'China Eastern', price: '16.990.000đ', month: 4 },
      { date: '27/04/2026', season: 'Lễ 30/4', airline: 'China Eastern', price: '18.990.000đ', month: 4 },
      { date: '11/05/2026', season: '', airline: 'China Eastern', price: '16.990.000đ', month: 5 },
    ],
    includes: ['Vé máy bay khứ hồi', 'Khách sạn 4*', 'Bữa ăn theo chương trình', 'Vé tham quan', 'Xe đưa đón', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Tips: 30 USD/khách', 'Phụ thu phòng đơn: 300 USD'],
    cancelPolicy: ['Hủy sau đăng ký: 85% cọc', 'Hủy trước 10 ngày: 75%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Anh Tuấn', date: '10/01/2026', score: 8.5, text: 'Tour ổn, Ô Trấn rất đẹp. Thời gian tham quan Tây Hồ hơi ngắn.' },
    ],
    qna: [],
  },

  // =============================================
  // TOUR TRONG NƯỚC
  // =============================================
  {
    id: 'tn-1',
    slug: 'da-nang-hoi-an-ba-na-hills-4n3d',
    category: 'tour-trong-nuoc',
    title: 'Đà Nẵng - Hội An - Bà Nà Hills - Cù Lao Chàm 4N3Đ',
    rating: 9.2,
    reviewCount: 200,
    image: '/images/tour-danang.png',
    images: ['/images/danang-bridge.png', '/images/danang-hoian.png', '/images/tour-danang.png', '/images/danang-bridge.png'],
    duration: '4 ngày 3 đêm',
    airline: 'VietJet Air',
    departureDates: ['05/04', '12/04', '19/04', '26/04', '03/05', '10/05'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Đà Nẵng - Hội An - Bà Nà Hills',
    price: '5.990.000đ',
    oldPrice: '6.990.000đ',
    promo: 'Giảm 500K khi đặt trước 30 ngày',
    highlights: [
      'Check-in Cầu Vàng – biểu tượng du lịch Việt Nam tại Bà Nà Hills',
      'Dạo phố cổ Hội An lung linh đèn lồng về đêm',
      'Tắm biển Mỹ Khê – top 6 bãi biển đẹp nhất hành tinh',
      'Lặn ngắm san hô tại Cù Lao Chàm',
      'Thưởng thức ẩm thực miền Trung đặc sắc',
    ],
    description: 'Đà Nẵng – thành phố đáng sống nhất Việt Nam, nơi hội tụ biển xanh, cát trắng, núi rừng hùng vĩ và di sản văn hóa thế giới. Hành trình 4 ngày 3 đêm đưa bạn khám phá trọn vẹn miền Trung.',
    visitPoints: 'Bà Nà Hills, Cầu Vàng, Phố cổ Hội An, Cù Lao Chàm, Bãi biển Mỹ Khê',
    themes: 'Biển đảo, Văn hóa, Di sản, Ẩm thực',
    itinerary: [
      { day: 1, title: 'HCM - Đà Nẵng - Bà Nà Hills', details: [
        { time: 'Buổi sáng', desc: 'Bay đến Đà Nẵng. Đón tại sân bay, di chuyển lên Bà Nà Hills.' },
        { time: 'Buổi chiều', desc: 'Check-in Cầu Vàng, Vườn hoa Le Jardin D\'Amour, Làng Pháp. Vui chơi Fantasy Park.' }
      ]},
      { day: 2, title: 'Đà Nẵng - Hội An', details: [
        { time: 'Buổi sáng', desc: 'Tham quan Ngũ Hành Sơn, Chùa Linh Ứng.' },
        { time: 'Buổi chiều', desc: 'Khám phá phố cổ Hội An: Chùa Cầu, Nhà cổ Phùng Hưng, Hội quán Phước Kiến. Thả hoa đăng trên sông Hoài.' }
      ]},
      { day: 3, title: 'Cù Lao Chàm', details: [
        { time: 'Buổi sáng', desc: 'Đi cano ra Cù Lao Chàm. Lặn ngắm san hô, tắm biển.' },
        { time: 'Buổi chiều', desc: 'Tham quan làng chài, thưởng thức hải sản tươi sống.' }
      ]},
      { day: 4, title: 'Đà Nẵng - HCM', details: [
        { time: 'Buổi sáng', desc: 'Tắm biển Mỹ Khê. Mua đặc sản miền Trung. Bay về HCM.' }
      ]}
    ],
    priceTable: [
      { date: '05/04/2026', season: '', airline: 'VietJet Air', price: '5.990.000đ', month: 4 },
      { date: '12/04/2026', season: '', airline: 'VietJet Air', price: '5.990.000đ', month: 4 },
      { date: '26/04/2026', season: 'Lễ 30/4', airline: 'VietJet Air', price: '7.490.000đ', month: 4 },
      { date: '03/05/2026', season: '', airline: 'VietJet Air', price: '5.990.000đ', month: 5 },
    ],
    includes: ['Vé máy bay khứ hồi', 'Khách sạn 4* gần biển', 'Bữa ăn theo chương trình', 'Vé Bà Nà Hills + cáp treo', 'Cano ra Cù Lao Chàm', 'Xe đưa đón', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Đồ uống trong bữa ăn', 'Tips HDV'],
    cancelPolicy: ['Hủy trước 7 ngày: 50%', 'Hủy trước 3 ngày: 80%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Chị Mai', date: '05/02/2026', score: 9.5, text: 'Tour rất tuyệt! Cầu Vàng đẹp mê li, Hội An về đêm lung linh. Sẽ quay lại!' },
      { name: 'Anh Đức', date: '15/01/2026', score: 9.0, text: 'Lặn ngắm san hô ở Cù Lao Chàm quá đẹp. HDV vui tính, nhiệt tình.' },
    ],
    qna: [
      { q: 'Tour có đi Bà Nà Hills cả ngày không?', a: 'Dạ tour dành khoảng nửa ngày tại Bà Nà Hills, đủ để tham quan các điểm chính.' },
    ],
  },

  {
    id: 'tn-2',
    slug: 'phu-quoc-vinwonders-4n3d',
    category: 'tour-trong-nuoc',
    title: 'Phú Quốc - VinWonders - Grand World - Hòn Thơm 4N3Đ',
    rating: 9.0,
    reviewCount: 150,
    image: '/images/dest-phuquoc.png',
    images: ['/images/phuquoc-resort.png', '/images/dest-phuquoc.png', '/images/phuquoc-resort.png', '/images/dest-phuquoc.png'],
    duration: '4 ngày 3 đêm',
    airline: 'Bamboo Airways',
    departureDates: ['10/04', '17/04', '24/04', '08/05'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Phú Quốc',
    price: '6.490.000đ',
    oldPrice: '7.490.000đ',
    promo: 'Resort 5 sao + VinWonders',
    highlights: [
      'Nghỉ dưỡng resort 5 sao ven biển',
      'Vui chơi trọn ngày tại VinWonders Phú Quốc',
      'Khám phá Grand World – thành phố không ngủ',
      'Cáp treo vượt biển Hòn Thơm – dài nhất thế giới',
      'Lặn ngắm san hô tại Hòn Thơm Nature Park',
    ],
    description: 'Phú Quốc – đảo ngọc thiên đường với bãi biển cát trắng, nước biển trong xanh. Tận hưởng resort 5 sao, công viên giải trí VinWonders và cáp treo Hòn Thơm.',
    visitPoints: 'VinWonders, Grand World, Hòn Thơm, Dinh Cậu, Chợ đêm Phú Quốc',
    themes: 'Nghỉ dưỡng, Biển đảo, Vui chơi, Ẩm thực',
    itinerary: [
      { day: 1, title: 'HCM - Phú Quốc', details: [
        { time: 'Buổi sáng', desc: 'Bay đến Phú Quốc. Check-in resort 5 sao, tự do tắm biển.' },
        { time: 'Buổi tối', desc: 'Khám phá Grand World – thành phố không ngủ.' }
      ]},
      { day: 2, title: 'VinWonders Phú Quốc', details: [
        { time: 'Cả ngày', desc: 'Vui chơi trọn ngày tại VinWonders – công viên giải trí, vườn thú Safari, show nhạc nước.' }
      ]},
      { day: 3, title: 'Hòn Thơm Nature Park', details: [
        { time: 'Buổi sáng', desc: 'Đi cáp treo vượt biển đến Hòn Thơm. Lặn ngắm san hô, tắm biển.' },
        { time: 'Buổi chiều', desc: 'Vui chơi Aquatopia Water Park.' }
      ]},
      { day: 4, title: 'Phú Quốc - HCM', details: [
        { time: 'Buổi sáng', desc: 'Tham quan Dinh Cậu, mua đặc sản. Bay về HCM.' }
      ]}
    ],
    priceTable: [
      { date: '10/04/2026', season: '', airline: 'Bamboo Airways', price: '6.490.000đ', month: 4 },
      { date: '17/04/2026', season: '', airline: 'Bamboo Airways', price: '6.490.000đ', month: 4 },
      { date: '24/04/2026', season: 'Lễ 30/4', airline: 'Bamboo Airways', price: '8.490.000đ', month: 4 },
      { date: '08/05/2026', season: '', airline: 'Bamboo Airways', price: '6.990.000đ', month: 5 },
    ],
    includes: ['Vé máy bay khứ hồi', 'Resort 5 sao', 'Bữa ăn', 'Vé VinWonders + Cáp treo', 'Xe đưa đón', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tips HDV'],
    cancelPolicy: ['Hủy trước 7 ngày: 50%', 'Hủy trước 3 ngày: 80%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Chị Ngọc', date: '10/02/2026', score: 9.3, text: 'Resort quá đẹp! Cáp treo Hòn Thơm nhìn xuống biển xanh ngắt. Đáng tiền lắm!' },
    ],
    qna: [],
  },

  {
    id: 'tn-3',
    slug: 'da-lat-langbiang-3n2d',
    category: 'tour-trong-nuoc',
    title: 'Đà Lạt - LangBiang - Đồi Chè - Thung Lũng Tình Yêu 3N2Đ',
    rating: 8.8,
    reviewCount: 180,
    image: '/images/dest-dalat.png',
    images: ['/images/dalat-tea.png', '/images/dest-dalat.png', '/images/dalat-tea.png', '/images/dest-dalat.png'],
    duration: '3 ngày 2 đêm',
    airline: 'VietJet Air',
    departureDates: ['04/04', '11/04', '18/04', '25/04', '02/05'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Đà Lạt',
    price: '3.990.000đ',
    oldPrice: '4.990.000đ',
    promo: 'Nghỉ resort 4 sao view hồ',
    highlights: [
      'Chinh phục đỉnh LangBiang – nóc nhà Đà Lạt',
      'Check-in đồi chè Cầu Đất cực chill',
      'Ngắm hoa nở rộ tại Thung Lũng Tình Yêu',
      'Khám phá Dinh Bảo Đại, Thiền viện Trúc Lâm',
      'Thưởng thức cà phê chồn và đặc sản Đà Lạt',
    ],
    description: 'Đà Lạt – thành phố ngàn hoa, khí hậu mát mẻ quanh năm. Hành trình 3 ngày 2 đêm đưa bạn khám phá vẻ đẹp lãng mạn và thơ mộng của phố núi.',
    visitPoints: 'LangBiang, Đồi chè Cầu Đất, Thung Lũng Tình Yêu, Dinh Bảo Đại, Hồ Xuân Hương',
    themes: 'Thiên nhiên, Lãng mạn, Khám phá, Ẩm thực',
    itinerary: [
      { day: 1, title: 'HCM - Đà Lạt', details: [
        { time: 'Buổi sáng', desc: 'Bay đến Đà Lạt. Tham quan Thung Lũng Tình Yêu, Hồ Xuân Hương.' },
        { time: 'Buổi chiều', desc: 'Tham quan Thiền viện Trúc Lâm, Dinh Bảo Đại.' }
      ]},
      { day: 2, title: 'LangBiang - Đồi Chè', details: [
        { time: 'Buổi sáng', desc: 'Chinh phục đỉnh LangBiang. Ngắm toàn cảnh Đà Lạt.' },
        { time: 'Buổi chiều', desc: 'Check-in đồi chè Cầu Đất. Thưởng thức cà phê.' }
      ]},
      { day: 3, title: 'Đà Lạt - HCM', details: [
        { time: 'Buổi sáng', desc: 'Tham quan Crazy House, chợ Đà Lạt. Mua đặc sản. Bay về HCM.' }
      ]}
    ],
    priceTable: [
      { date: '04/04/2026', season: '', airline: 'VietJet Air', price: '3.990.000đ', month: 4 },
      { date: '11/04/2026', season: '', airline: 'VietJet Air', price: '3.990.000đ', month: 4 },
      { date: '25/04/2026', season: 'Lễ 30/4', airline: 'VietJet Air', price: '5.490.000đ', month: 4 },
    ],
    includes: ['Vé máy bay khứ hồi', 'Resort 4* view hồ', 'Bữa ăn', 'Vé tham quan', 'Xe đưa đón', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Đồ uống', 'Tips'],
    cancelPolicy: ['Hủy trước 5 ngày: 50%', 'Hủy trước 2 ngày: 80%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Bạn Linh', date: '20/01/2026', score: 9.0, text: 'Đà Lạt quá đẹp! Đồi chè chụp ảnh cực chill. Resort view hồ tuyệt vời.' },
    ],
    qna: [],
  },

  // =============================================
  // TOUR KHÁCH ĐOÀN
  // =============================================
  {
    id: 'td-1',
    slug: 'team-building-phan-thiet-mui-ne-3n2d',
    category: 'tour-khach-doan',
    title: 'Team Building Phan Thiết - Mũi Né - Resort 4* 3N2Đ',
    rating: 9.3,
    reviewCount: 95,
    image: '/images/dest-nhatrang.png',
    images: ['/images/dest-nhatrang.png', '/images/phuquoc-resort.png', '/images/danang-bridge.png', '/images/dest-nhatrang.png'],
    duration: '3 ngày 2 đêm',
    airline: 'Xe du lịch',
    departureDates: ['Theo yêu cầu'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Phan Thiết - Mũi Né',
    price: '3.490.000đ',
    oldPrice: '4.290.000đ',
    promo: 'Tổ chức Team Building chuyên nghiệp',
    highlights: [
      'Team Building chuyên nghiệp trên bãi biển',
      'Gala Dinner & giải thưởng cho đội chiến thắng',
      'Resort 4* ven biển đầy đủ tiện nghi',
      'Tham quan Đồi Cát Bay, Suối Tiên, Bàu Trắng',
      'MC dẫn chương trình chuyên nghiệp',
    ],
    description: 'Chương trình Team Building tại Phan Thiết – Mũi Né được thiết kế chuyên biệt cho các đoàn doanh nghiệp. Kết hợp vui chơi, gắn kết đội nhóm và nghỉ dưỡng.',
    visitPoints: 'Đồi Cát Bay, Suối Tiên, Bàu Trắng, Bãi biển Mũi Né',
    themes: 'Team Building, Nghỉ dưỡng, Biển, Doanh nghiệp',
    itinerary: [
      { day: 1, title: 'HCM - Phan Thiết', details: [
        { time: 'Buổi sáng', desc: 'Xe đón đoàn tại điểm hẹn. Di chuyển đến Phan Thiết.' },
        { time: 'Buổi chiều', desc: 'Check-in resort. Team Building trên bãi biển (các trò chơi đội nhóm).' },
        { time: 'Buổi tối', desc: 'Gala Dinner BBQ hải sản. Trao giải Team Building. Karaoke, lửa trại.' }
      ]},
      { day: 2, title: 'Mũi Né - Tham quan', details: [
        { time: 'Buổi sáng', desc: 'Tham quan Đồi Cát Bay – trượt cát. Suối Tiên.' },
        { time: 'Buổi chiều', desc: 'Thăm Bàu Trắng. Tự do nghỉ dưỡng, tắm biển.' }
      ]},
      { day: 3, title: 'Phan Thiết - HCM', details: [
        { time: 'Buổi sáng', desc: 'Tự do tắm biển, spa. Trả phòng. Di chuyển về HCM.' }
      ]}
    ],
    priceTable: [
      { date: 'Theo yêu cầu', season: 'Từ 20 khách', airline: 'Xe Du Lịch', price: '3.490.000đ', month: 0 },
    ],
    includes: ['Xe du lịch đời mới', 'Resort 4* ven biển', 'Bữa ăn + Gala Dinner', 'Tổ chức Team Building', 'MC chuyên nghiệp', 'Vé tham quan', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Đồ uống bàn tiệc', 'Spa'],
    cancelPolicy: ['Hủy trước 10 ngày: 30%', 'Hủy trước 5 ngày: 70%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Công ty ABC', date: '15/12/2025', score: 9.5, text: 'Team building tổ chức rất chuyên nghiệp. Nhân viên ai cũng vui. Resort đẹp, đồ ăn ngon.' },
    ],
    qna: [
      { q: 'Đoàn 50 người có giá riêng không?', a: 'Dạ đoàn từ 50 người sẽ được giảm thêm 10% và bổ sung thêm trò chơi team building.' },
    ],
  },

  {
    id: 'td-2',
    slug: 'doan-vung-tau-long-hai-2n1d',
    category: 'tour-khach-doan',
    title: 'Tour Đoàn: Vũng Tàu - Long Hải - Hồ Tràm - Resort 4* 2N1Đ',
    rating: 8.7,
    reviewCount: 120,
    image: '/images/dest-nhatrang.png',
    images: ['/images/dest-nhatrang.png', '/images/danang-hoian.png', '/images/phuquoc-resort.png', '/images/dest-nhatrang.png'],
    duration: '2 ngày 1 đêm',
    airline: 'Xe du lịch',
    departureDates: ['Theo yêu cầu'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Vũng Tàu - Long Hải',
    price: '1.990.000đ',
    oldPrice: '2.490.000đ',
    promo: 'Gần Sài Gòn – Tiện lợi cho đoàn lớn',
    highlights: [
      'Di chuyển gần, tiện lợi cho đoàn từ 30 khách',
      'Resort 4* View biển đẹp tại Long Hải',
      'Team Building / Gala Dinner theo yêu cầu',
      'Tham quan Bạch Dinh, Tượng Chúa Kitô',
      'Hải sản tươi sống Vũng Tàu',
    ],
    description: 'Tour đoàn Vũng Tàu – Long Hải gần Sài Gòn, phù hợp cho các công ty tổ chức du lịch ngắn ngày. Kết hợp nghỉ dưỡng và team building.',
    visitPoints: 'Bạch Dinh, Tượng Chúa, Bãi Sau, Long Hải',
    themes: 'Tour Đoàn, Biển, Nghỉ dưỡng, Team Building',
    itinerary: [
      { day: 1, title: 'HCM - Vũng Tàu - Long Hải', details: [
        { time: 'Buổi sáng', desc: 'Xe đón đoàn, di chuyển đến Vũng Tàu. Tham quan Bạch Dinh, Tượng Chúa Kitô.' },
        { time: 'Buổi chiều', desc: 'Check-in resort Long Hải. Tắm biển, team building.' },
        { time: 'Buổi tối', desc: 'Gala dinner hải sản. Karaoke, lửa trại bãi biển.' }
      ]},
      { day: 2, title: 'Long Hải - HCM', details: [
        { time: 'Buổi sáng', desc: 'Tự do tắm biển, spa. Trả phòng. Mua hải sản khô. Di chuyển về HCM.' }
      ]}
    ],
    priceTable: [
      { date: 'Theo yêu cầu', season: 'Từ 30 khách', airline: 'Xe Du Lịch', price: '1.990.000đ', month: 0 },
    ],
    includes: ['Xe du lịch', 'Resort 4*', 'Bữa ăn', 'Vé tham quan', 'Bảo hiểm', 'HDV'],
    excludes: ['Team building (theo yêu cầu, báo giá riêng)', 'Chi phí cá nhân', 'Spa'],
    cancelPolicy: ['Hủy trước 7 ngày: 30%', 'Hủy trước 3 ngày: 70%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Chị Phương - HR Cty XYZ', date: '20/11/2025', score: 8.5, text: 'Tour gần, tiện lợi, resort đẹp. Đoàn 60 người đi rất vui.' },
    ],
    qna: [],
  },

  {
    id: 'td-3',
    slug: 'doan-da-nang-4n3d',
    category: 'tour-khach-doan',
    title: 'Tour Đoàn: Đà Nẵng - Hội An - Huế - Bà Nà Hills 4N3Đ',
    rating: 9.4,
    reviewCount: 75,
    image: '/images/tour-danang.png',
    images: ['/images/danang-bridge.png', '/images/danang-hoian.png', '/images/tour-danang.png', '/images/danang-bridge.png'],
    duration: '4 ngày 3 đêm',
    airline: 'VietJet Air',
    departureDates: ['Theo yêu cầu'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Đà Nẵng - Hội An - Huế',
    price: '7.990.000đ',
    oldPrice: '8.990.000đ',
    promo: 'Gala Dinner miễn phí cho đoàn từ 40 khách',
    highlights: [
      'Khám phá 3 di sản thế giới: Hội An, Huế, Phong Nha',
      'Team Building bãi biển Đà Nẵng + Gala Dinner',
      'Check-in Cầu Vàng Bà Nà Hills',
      'Ẩm thực miền Trung phong phú',
      'Khách sạn 4-5 sao tùy chọn',
    ],
    description: 'Tour đoàn Đà Nẵng – Hội An – Huế kết hợp team building, phù hợp cho doanh nghiệp tổ chức du lịch hè, cuối năm.',
    visitPoints: 'Bà Nà Hills, Phố cổ Hội An, Đại Nội Huế, Chùa Linh Ứng',
    themes: 'Tour Đoàn, Di sản, Team Building, Biển',
    itinerary: [
      { day: 1, title: 'HCM - Đà Nẵng', details: [
        { time: 'Buổi sáng', desc: 'Bay đến Đà Nẵng. Check-in khách sạn.' },
        { time: 'Buổi chiều', desc: 'Team Building bãi biển Mỹ Khê.' },
        { time: 'Buổi tối', desc: 'Gala Dinner. Trao giải các đội.' }
      ]},
      { day: 2, title: 'Bà Nà Hills - Hội An', details: [
        { time: 'Buổi sáng', desc: 'Tham quan Bà Nà Hills, Cầu Vàng.' },
        { time: 'Buổi chiều', desc: 'Phố cổ Hội An. Thả hoa đăng.' }
      ]},
      { day: 3, title: 'Huế', details: [
        { time: 'Cả ngày', desc: 'Di chuyển ra Huế. Tham quan Đại Nội, Chùa Thiên Mụ, Lăng Khải Định. Thưởng thức ẩm thực Huế.' }
      ]},
      { day: 4, title: 'Đà Nẵng - HCM', details: [
        { time: 'Buổi sáng', desc: 'Tự do mua sắm. Bay về HCM. Kết thúc tour.' }
      ]}
    ],
    priceTable: [
      { date: 'Theo yêu cầu', season: 'Từ 30 khách', airline: 'VietJet Air', price: '7.990.000đ', month: 0 },
    ],
    includes: ['Vé máy bay khứ hồi', 'Khách sạn 4*', 'Bữa ăn + Gala', 'Team Building', 'Vé Bà Nà Hills', 'Xe đưa đón', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Đồ uống bàn tiệc', 'Nâng cấp KS 5*'],
    cancelPolicy: ['Hủy trước 15 ngày: 30%', 'Hủy trước 7 ngày: 70%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Anh Phong - CEO Cty MNO', date: '25/12/2025', score: 9.5, text: 'Tour đoàn tổ chức chuyên nghiệp, 80 nhân viên đều rất hài lòng.' },
    ],
    qna: [],
  },

  // =============================================
  // TOUR NƯỚC NGOÀI — Thêm 3 tour mới
  // =============================================
  {
    id: 'nn-4',
    slug: 'thai-lan-bangkok-pattaya-5n4d',
    category: 'tour-nuoc-ngoai',
    title: 'Thái Lan: Bangkok - Pattaya - Đảo Coral 5N4Đ',
    rating: 8.7,
    reviewCount: 95,
    image: '/images/tour-japan.png',
    images: ['/images/tour-japan.png', '/images/tour-korea.png', '/images/tour-china.png', '/images/tour-japan.png'],
    duration: '5 ngày 4 đêm',
    airline: 'VietJet Air',
    departureDates: ['10/05', '24/05', '07/06', '21/06'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Bangkok - Pattaya',
    price: '8.990.000đ',
    oldPrice: '10.990.000đ',
    promo: 'Buffet 86 tầng + Show Alcazar',
    highlights: [
      'Tham quan Hoàng Cung Grand Palace và Chùa Phật Ngọc',
      'Thưởng thức buffet tại tòa nhà Baiyoke Sky 86 tầng',
      'Tắm biển và lặn san hô tại Đảo Coral',
      'Xem show Alcazar nổi tiếng tại Pattaya',
      'Mua sắm chợ nổi Pattaya Floating Market',
    ],
    description: 'Thái Lan – xứ sở chùa vàng với ẩm thực đường phố nổi tiếng thế giới, những ngôi chùa lộng lẫy và bãi biển tuyệt đẹp.',
    visitPoints: 'Grand Palace, Chùa Phật Ngọc, Đảo Coral, Pattaya',
    themes: 'Văn hóa, Biển đảo, Ẩm thực, Mua sắm',
    itinerary: [
      { day: 1, title: 'HCM - Bangkok', details: [{ time: 'Buổi chiều', desc: 'Bay đến Bangkok. Nhận phòng khách sạn, tự do khám phá phố Khao San.' }]},
      { day: 2, title: 'Bangkok City Tour', details: [
        { time: 'Buổi sáng', desc: 'Tham quan Hoàng Cung Grand Palace, Chùa Phật Ngọc, Chùa Phật Nằm Wat Pho.' },
        { time: 'Buổi chiều', desc: 'Mua sắm MBK Center and Siam Paragon. Buffet tối tại Baiyoke Sky.' }
      ]},
      { day: 3, title: 'Bangkok - Pattaya', details: [
        { time: 'Buổi sáng', desc: 'Di chuyển đến Pattaya. Tham quan Nong Nooch Tropical Garden.' },
        { time: 'Buổi tối', desc: 'Xem show Alcazar nổi tiếng.' }
      ]},
      { day: 4, title: 'Đảo Coral', details: [
        { time: 'Cả ngày', desc: 'Đi speedboat ra Đảo Coral. Lặn san hô, dù kéo, banana boat. Tắm biển.' }
      ]},
      { day: 5, title: 'Pattaya - Bangkok - HCM', details: [{ time: 'Buổi sáng', desc: 'Chợ nổi Pattaya. Di chuyển về Bangkok, bay về HCM.' }]}
    ],
    priceTable: [
      { date: '10/05/2026', season: '', airline: 'VietJet Air', price: '8.990.000đ', month: 5 },
      { date: '24/05/2026', season: '', airline: 'VietJet Air', price: '8.990.000đ', month: 5 },
      { date: '07/06/2026', season: 'Hè', airline: 'VietJet Air', price: '9.990.000đ', month: 6 },
    ],
    includes: ['Vé máy bay khứ hồi', 'Khách sạn 4*', 'Bữa ăn', 'Vé tham quan', 'Speedboat đảo Coral', 'Xe đưa đón', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Tips: 25 USD/khách', 'Phụ thu phòng đơn'],
    cancelPolicy: ['Hủy trước 7 ngày: 50%', 'Hủy trước 3 ngày: 80%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Anh Khoa', date: '10/01/2026', score: 8.8, text: 'Tour Thái rất vui, đồ ăn ngon, show Alcazar ấn tượng!' },
    ],
    qna: [],
  },

  {
    id: 'nn-5',
    slug: 'chau-au-phap-thuy-si-y-10n9d',
    category: 'tour-nuoc-ngoai',
    title: 'Châu Âu: Pháp - Thụy Sĩ - Ý - Vatican 10N9Đ',
    rating: 9.4,
    reviewCount: 42,
    image: '/images/tour-europe.png',
    images: ['/images/tour-europe.png', '/images/tour-japan.png', '/images/tour-korea.png', '/images/tour-europe.png'],
    duration: '10 ngày 9 đêm',
    airline: 'Emirates',
    departureDates: ['15/06', '20/07', '10/08'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Paris - Interlaken - Rome',
    price: '59.990.000đ',
    oldPrice: '69.990.000đ',
    promo: 'Bay Emirates 5 sao + Khách sạn 4*',
    highlights: [
      'Chiêm ngưỡng tháp Eiffel và Khải Hoàn Môn tại Paris',
      'Ngắm dãy Alps hùng vĩ tại Interlaken, Thụy Sĩ',
      'Tham quan Đấu trường La Mã Colosseum tại Rome',
      'Viếng thăm Tòa thánh Vatican và Nhà thờ St. Peter',
      'Bay hãng Emirates 5 sao – dịch vụ đẳng cấp',
    ],
    description: 'Châu Âu mộng mơ với kiến trúc ngàn năm, thiên nhiên hùng vĩ và nền văn hóa phong phú. Hành trình 10 ngày qua 3 quốc gia đẹp nhất.',
    visitPoints: 'Tháp Eiffel, Interlaken, Colosseum, Vatican',
    themes: 'Văn hóa, Kiến trúc, Thiên nhiên, Lịch sử',
    itinerary: [
      { day: 1, title: 'HCM - Dubai - Paris', details: [{ time: 'Tối', desc: 'Bay Emirates transit qua Dubai đến Paris.' }]},
      { day: 2, title: 'Paris', details: [{ time: 'Cả ngày', desc: 'Tháp Eiffel, bảo tàng Louvre, Khải Hoàn Môn, đại lộ Champs-Élysées.' }]},
      { day: 3, title: 'Paris - Versailles', details: [{ time: 'Cả ngày', desc: 'Cung điện Versailles, du thuyền sông Seine.' }]},
      { day: 4, title: 'Paris - Thụy Sĩ', details: [{ time: 'Cả ngày', desc: 'TGV đến Thụy Sĩ. Tham quan Lucerne, cầu gỗ Chapel.' }]},
      { day: 5, title: 'Interlaken', details: [{ time: 'Cả ngày', desc: 'Lên đỉnh Jungfrau – Top of Europe. Ngắm Alps tuyết trắng.' }]},
      { day: 6, title: 'Thụy Sĩ - Milan', details: [{ time: 'Cả ngày', desc: 'Di chuyển đến Milan. Nhà thờ Duomo, Galleria Vittorio.' }]},
      { day: 7, title: 'Venice', details: [{ time: 'Cả ngày', desc: 'Quảng trường San Marco, đi thuyền Gondola, cầu Rialto.' }]},
      { day: 8, title: 'Florence', details: [{ time: 'Cả ngày', desc: 'Tham quan Florence – cái nôi Phục Hưng. Ponte Vecchio, Duomo.' }]},
      { day: 9, title: 'Rome - Vatican', details: [{ time: 'Cả ngày', desc: 'Đấu trường Colosseum, Đài phun nước Trevi, Vatican, Nhà thờ St. Peter.' }]},
      { day: 10, title: 'Rome - HCM', details: [{ time: 'Sáng', desc: 'Tự do mua sắm. Bay về HCM qua Dubai. Kết thúc tour.' }]}
    ],
    priceTable: [
      { date: '15/06/2026', season: 'Hè', airline: 'Emirates', price: '59.990.000đ', month: 6 },
      { date: '20/07/2026', season: 'Hè', airline: 'Emirates', price: '62.990.000đ', month: 7 },
      { date: '10/08/2026', season: 'Hè', airline: 'Emirates', price: '59.990.000đ', month: 8 },
    ],
    includes: ['Vé máy bay Emirates khứ hồi', 'Khách sạn 4*', 'Bữa ăn', 'Vé tham quan', 'Xe đưa đón', 'Visa Schengen', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Tips: 80 EUR/khách', 'Phụ thu phòng đơn: 600 USD'],
    cancelPolicy: ['Hủy trước 20 ngày: 50%', 'Hủy trước 10 ngày: 80%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Anh Việt', date: '01/12/2025', score: 9.6, text: 'Tour châu Âu quá đẹp! Đặc biệt đỉnh Jungfrau tuyệt vời. Đáng từng đồng.' },
    ],
    qna: [],
  },

  {
    id: 'nn-6',
    slug: 'singapore-malaysia-5n4d',
    category: 'tour-nuoc-ngoai',
    title: 'Singapore - Malaysia: Garden By The Bay - Genting 5N4Đ',
    rating: 8.9,
    reviewCount: 110,
    image: '/images/tour-korea.png',
    images: ['/images/tour-korea.png', '/images/tour-japan.png', '/images/tour-china.png', '/images/tour-korea.png'],
    duration: '5 ngày 4 đêm',
    airline: 'VietJet Air',
    departureDates: ['05/05', '19/05', '02/06', '16/06'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Singapore - Kuala Lumpur - Genting',
    price: '11.990.000đ',
    oldPrice: '13.990.000đ',
    promo: 'Combo 2 nước – Giá siêu tiết kiệm',
    highlights: [
      'Check-in Marina Bay Sands và Merlion Park tại Singapore',
      'Ngắm Garden By The Bay với Supertree Grove lung linh về đêm',
      'Lên cao nguyên Genting – Las Vegas của Châu Á',
      'Tham quan Tháp đôi Petronas tại Kuala Lumpur',
      'Mua sắm Orchard Road Singapore',
    ],
    description: 'Combo 2 quốc gia Đông Nam Á trong 1 hành trình – Singapore hiện đại và Malaysia đa sắc màu.',
    visitPoints: 'Marina Bay Sands, Garden By The Bay, Petronas, Genting',
    themes: 'Khám phá, Mua sắm, Giải trí, Ẩm thực',
    itinerary: [
      { day: 1, title: 'HCM - Singapore', details: [{ time: 'Chiều', desc: 'Bay đến Singapore. Check-in khách sạn. Khám phá Clark Quay.' }]},
      { day: 2, title: 'Singapore City Tour', details: [
        { time: 'Sáng', desc: 'Merlion Park, Marina Bay Sands, Chinatown.' },
        { time: 'Chiều', desc: 'Garden By The Bay, Cloud Forest, Flower Dome. Supertree Grove Light Show.' }
      ]},
      { day: 3, title: 'Singapore - Malaysia', details: [
        { time: 'Sáng', desc: 'Sentosa Island, Universal Studios (tùy chọn). Chiều di chuyển qua Malaysia.' }
      ]},
      { day: 4, title: 'Kuala Lumpur - Genting', details: [
        { time: 'Sáng', desc: 'Tháp đôi Petronas, Dataran Merdeka, KL Tower.' },
        { time: 'Chiều', desc: 'Lên cao nguyên Genting bằng cáp treo. Casino, giải trí.' }
      ]},
      { day: 5, title: 'KL - HCM', details: [{ time: 'Sáng', desc: 'Mua sắm Bukit Bintang. Bay về HCM.' }]}
    ],
    priceTable: [
      { date: '05/05/2026', season: '', airline: 'VietJet Air', price: '11.990.000đ', month: 5 },
      { date: '19/05/2026', season: '', airline: 'VietJet Air', price: '11.990.000đ', month: 5 },
      { date: '02/06/2026', season: 'Hè', airline: 'VietJet Air', price: '12.990.000đ', month: 6 },
    ],
    includes: ['Vé máy bay khứ hồi', 'Khách sạn 3-4*', 'Bữa ăn', 'Vé tham quan', 'Xe đưa đón', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Tips: 25 USD/khách', 'Vé Universal Studios'],
    cancelPolicy: ['Hủy trước 7 ngày: 50%', 'Hủy trước 3 ngày: 80%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Chị Trang', date: '05/01/2026', score: 9.0, text: 'Đi 2 nước 1 tour rất tiện. Garden By The Bay đẹp mê!' },
    ],
    qna: [],
  },

  // =============================================
  // TOUR KHÁCH ĐOÀN — Thêm 3 tour mới
  // =============================================
  {
    id: 'td-4',
    slug: 'doan-nha-trang-team-building-3n2d',
    category: 'tour-khach-doan',
    title: 'Tour Đoàn: Nha Trang - Vinpearl - Team Building 3N2Đ',
    rating: 9.1,
    reviewCount: 88,
    image: '/images/dest-nhatrang.png',
    images: ['/images/dest-nhatrang.png', '/images/phuquoc-resort.png', '/images/dest-nhatrang.png', '/images/danang-bridge.png'],
    duration: '3 ngày 2 đêm',
    airline: 'VietJet Air',
    departureDates: ['Theo yêu cầu'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Nha Trang',
    price: '4.990.000đ',
    oldPrice: '5.990.000đ',
    promo: 'Vinpearl trọn gói + Team Building bãi biển',
    highlights: [
      'Vui chơi trọn ngày tại Vinpearl Land Nha Trang',
      'Team Building chuyên nghiệp trên bãi biển',
      'Gala Dinner hải sản + ca nhạc sống',
      'Tắm bùn khoáng I-Resort',
      'Khách sạn 4 sao gần biển',
    ],
    description: 'Tour đoàn Nha Trang kết hợp vui chơi Vinpearl và team building bãi biển – lý tưởng cho doanh nghiệp tổ chức sự kiện.',
    visitPoints: 'Vinpearl Land, Bãi biển Trần Phú, I-Resort, Hòn Chồng',
    themes: 'Team Building, Biển, Vui chơi, Nghỉ dưỡng',
    itinerary: [
      { day: 1, title: 'HCM - Nha Trang', details: [
        { time: 'Sáng', desc: 'Bay đến Nha Trang. Check-in khách sạn 4 sao.' },
        { time: 'Chiều', desc: 'Team Building bãi biển với các trò chơi đội nhóm.' },
        { time: 'Tối', desc: 'Gala Dinner hải sản + trao giải team building.' }
      ]},
      { day: 2, title: 'Vinpearl Land', details: [
        { time: 'Cả ngày', desc: 'Cáp treo vượt biển ra Vinpearl. Công viên giải trí, thủy cung, công viên nước.' }
      ]},
      { day: 3, title: 'Nha Trang - HCM', details: [
        { time: 'Sáng', desc: 'Tắm bùn khoáng I-Resort. Mua đặc sản. Bay về HCM.' }
      ]}
    ],
    priceTable: [
      { date: 'Theo yêu cầu', season: 'Từ 25 khách', airline: 'VietJet Air', price: '4.990.000đ', month: 0 },
    ],
    includes: ['Vé máy bay khứ hồi', 'Khách sạn 4*', 'Bữa ăn + Gala', 'Team Building', 'Vé Vinpearl', 'Tắm bùn', 'Xe đưa đón', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Đồ uống bàn tiệc', 'Spa'],
    cancelPolicy: ['Hủy trước 10 ngày: 30%', 'Hủy trước 5 ngày: 70%', 'Sau đó: 100%'],
    reviews: [
      { name: 'HR Cty Tech ABC', date: '10/01/2026', score: 9.2, text: '60 nhân viên đi đều rất hài lòng. Team building chuyên nghiệp.' },
    ],
    qna: [],
  },

  {
    id: 'td-5',
    slug: 'doan-da-lat-teamwork-3n2d',
    category: 'tour-khach-doan',
    title: 'Tour Đoàn: Đà Lạt - Teamwork - BBQ Đồi Thông 3N2Đ',
    rating: 9.0,
    reviewCount: 72,
    image: '/images/dest-dalat.png',
    images: ['/images/dest-dalat.png', '/images/dalat-tea.png', '/images/dest-dalat.png', '/images/dalat-tea.png'],
    duration: '3 ngày 2 đêm',
    airline: 'VietJet Air',
    departureDates: ['Theo yêu cầu'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Đà Lạt',
    price: '3.290.000đ',
    oldPrice: '3.990.000đ',
    promo: 'BBQ đồi thông + Cồng chiêng Tây Nguyên',
    highlights: [
      'Team Building tại thung lũng xanh giữa đồi thông',
      'Tiệc BBQ ngoài trời dưới bầu trời sao Đà Lạt',
      'Chinh phục đỉnh LangBiang – nóc nhà Đà Lạt',
      'Check-in Đồi chè Cầu Đất cực chill',
      'Trải nghiệm đêm cồng chiêng với văn hóa Tây Nguyên',
    ],
    description: 'Đà Lạt với khí hậu mát mẻ, phong cảnh thơ mộng – điểm đến lý tưởng cho team building và nghỉ dưỡng đoàn.',
    visitPoints: 'LangBiang, Đồi Chè Cầu Đất, Thung Lũng Tình Yêu, Hồ Xuân Hương',
    themes: 'Team Building, Thiên nhiên, Nghỉ dưỡng, Văn hóa',
    itinerary: [
      { day: 1, title: 'HCM - Đà Lạt', details: [
        { time: 'Sáng', desc: 'Bay đến Đà Lạt. Tham quan Thung Lũng Tình Yêu.' },
        { time: 'Chiều', desc: 'Team Building tại đồi thông với trò chơi vận động.' },
        { time: 'Tối', desc: 'BBQ ngoài trời + đêm cồng chiêng Tây Nguyên.' }
      ]},
      { day: 2, title: 'LangBiang - Đồi Chè', details: [
        { time: 'Sáng', desc: 'Chinh phục đỉnh LangBiang, ngắm toàn cảnh Đà Lạt.' },
        { time: 'Chiều', desc: 'Check-in Đồi chè Cầu Đất. Thưởng thức cà phê.' }
      ]},
      { day: 3, title: 'Đà Lạt - HCM', details: [
        { time: 'Sáng', desc: 'Chợ Đà Lạt mua đặc sản. Bay về HCM.' }
      ]}
    ],
    priceTable: [
      { date: 'Theo yêu cầu', season: 'Từ 20 khách', airline: 'VietJet Air', price: '3.290.000đ', month: 0 },
    ],
    includes: ['Vé máy bay khứ hồi', 'Khách sạn 3-4*', 'Bữa ăn + BBQ', 'Team Building', 'Vé tham quan', 'Xe đưa đón', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Đồ uống', 'Cáp treo LangBiang (tùy chọn)'],
    cancelPolicy: ['Hủy trước 7 ngày: 30%', 'Hủy trước 3 ngày: 70%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Cty Marketing XYZ', date: '20/12/2025', score: 9.0, text: 'BBQ đồi thông quá tuyệt! Không khí mát mẻ, team rất vui.' },
    ],
    qna: [],
  },

  {
    id: 'td-6',
    slug: 'doan-phu-quoc-resort-4n3d',
    category: 'tour-khach-doan',
    title: 'Tour Đoàn: Phú Quốc - Resort 5* - Gala Dinner 4N3Đ',
    rating: 9.5,
    reviewCount: 55,
    image: '/images/dest-phuquoc.png',
    images: ['/images/dest-phuquoc.png', '/images/phuquoc-resort.png', '/images/dest-phuquoc.png', '/images/phuquoc-resort.png'],
    duration: '4 ngày 3 đêm',
    airline: 'Bamboo Airways',
    departureDates: ['Theo yêu cầu'],
    departureFrom: 'Hồ Chí Minh',
    route: 'Hồ Chí Minh - Phú Quốc',
    price: '8.490.000đ',
    oldPrice: '9.990.000đ',
    promo: 'Resort 5 sao + VinWonders trọn gói',
    highlights: [
      'Nghỉ dưỡng resort 5 sao ven biển đẳng cấp',
      'Team Building & Gala Dinner chuyên nghiệp',
      'Vui chơi trọn ngày VinWonders Phú Quốc',
      'Cáp treo Hòn Thơm vượt biển dài nhất thế giới',
      'Grand World – thành phố không ngủ về đêm',
    ],
    description: 'Phú Quốc – đảo ngọc thiên đường. Tour đoàn cao cấp kết hợp nghỉ dưỡng resort 5 sao và team building.',
    visitPoints: 'VinWonders, Grand World, Hòn Thơm, Dinh Cậu',
    themes: 'Tour Đoàn, Nghỉ dưỡng, Biển, Cao cấp',
    itinerary: [
      { day: 1, title: 'HCM - Phú Quốc', details: [
        { time: 'Sáng', desc: 'Bay đến Phú Quốc. Check-in resort 5 sao.' },
        { time: 'Chiều', desc: 'Tự do tắm biển, spa, nghỉ dưỡng.' },
        { time: 'Tối', desc: 'Khám phá Grand World – show nhạc nước.' }
      ]},
      { day: 2, title: 'VinWonders', details: [
        { time: 'Cả ngày', desc: 'Vui chơi trọn ngày VinWonders. Công viên giải trí, Safari, Thủy cung.' }
      ]},
      { day: 3, title: 'Hòn Thơm + Gala', details: [
        { time: 'Sáng', desc: 'Cáp treo Hòn Thơm. Tắm biển, lặn san hô.' },
        { time: 'Tối', desc: 'Gala Dinner – Tiệc BBQ hải sản + trao giải + ca nhạc sống.' }
      ]},
      { day: 4, title: 'Phú Quốc - HCM', details: [
        { time: 'Sáng', desc: 'Dinh Cậu, chợ Dương Đông mua đặc sản. Bay về HCM.' }
      ]}
    ],
    priceTable: [
      { date: 'Theo yêu cầu', season: 'Từ 20 khách', airline: 'Bamboo Airways', price: '8.490.000đ', month: 0 },
    ],
    includes: ['Vé máy bay khứ hồi', 'Resort 5*', 'Bữa ăn + Gala', 'Vé VinWonders + Cáp treo', 'Team Building', 'Xe đưa đón', 'Bảo hiểm', 'HDV'],
    excludes: ['Chi phí cá nhân', 'Đồ uống bàn tiệc', 'Spa', 'Nâng cấp villa'],
    cancelPolicy: ['Hủy trước 15 ngày: 30%', 'Hủy trước 7 ngày: 70%', 'Sau đó: 100%'],
    reviews: [
      { name: 'Ban GĐ Cty DEF', date: '15/01/2026', score: 9.7, text: 'Resort quá đẹp! Gala dinner tổ chức hoành tráng. 100 nhân viên đều khen.' },
    ],
    qna: [],
  },
];

// Helper functions
export function getToursByCategory(category) {
  return allTours.filter(t => t.category === category);
}

export function getTourBySlug(slug) {
  return allTours.find(t => t.slug === slug);
}

export function getSimilarTours(tour, limit = 4) {
  return allTours
    .filter(t => t.category === tour.category && t.id !== tour.id)
    .slice(0, limit);
}

export const categoryInfo = {
  'tour-nuoc-ngoai': {
    title: 'Tour Nước Ngoài',
    description: 'Khám phá thế giới cùng Fresh Travel – Hàn Quốc, Nhật Bản, Trung Quốc và nhiều điểm đến hấp dẫn khác.',
  },
  'tour-trong-nuoc': {
    title: 'Tour Trong Nước',
    description: 'Trải nghiệm vẻ đẹp Việt Nam từ Bắc vào Nam – Đà Nẵng, Phú Quốc, Đà Lạt và nhiều điểm đến tuyệt vời.',
  },
  'tour-khach-doan': {
    title: 'Tour Khách Đoàn',
    description: 'Giải pháp du lịch chuyên biệt cho doanh nghiệp – Team Building, Gala Dinner, nghỉ dưỡng đoàn.',
  },
};

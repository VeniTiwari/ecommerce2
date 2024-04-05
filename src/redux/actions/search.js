const productData = [
  {
    id: 1,
    title: "PowerBook Pro X",
    price: 55999,
    description:
      "Thin, lightweight, and powerful laptop for professionals and creatives.",
    category: "laptops",
    image: "https://m.media-amazon.com/images/I/512+bHqbM2L._SX300_SY300_.jpg",
    rating: {
      rate: 4.7,
      count: 92,
    },
  },
  {
    id: 2,
    title: "Corsair Vengeance RGB 32GB DDR4 RAM",
    price: 4229,
    description:
      "Enhance your PC's performance and aesthetics with this RGB RAM module.",
    category: "ram",
    image: "https://m.media-amazon.com/images/I/71e6YWJio-L._SX355_.jpg",
    rating: {
      rate: 4.8,
      count: 65,
    },
  },
  {
    id: 3,
    title: "Epson EcoTank All-in-One Printer",
    price: 10999.99,
    description:
      "Efficient and eco-friendly printer with refillable ink tanks for hassle-free printing.",
    category: "printer",
    image:
      "https://mediaserver.goepson.com/ImConvServlet/imconv/3679c7960a7a7a1feea5c47e1ee23470f69c52b0/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=L3250-%281%29",
    rating: {
      rate: 4.5,
      count: 78,
    },
  },
  {
    id: 4,
    title: "CyberGamer Xtreme Gaming PC",
    price: 74999,
    description:
      "Ultimate gaming experience with top-tier components and customizable RGB lighting.",
    category: "PC",
    image: "https://m.media-amazon.com/images/I/71DvG2FjM+L._AC_SY450_.jpg",
    rating: {
      rate: 4.9,
      count: 110,
    },
  },
  {
    id: 5,
    title: "Intel Core i7 10th Gen Processor",
    price: 35949.99,
    description:
      "High-performance processor with hyper-threading for smooth multitasking.",
    category: "processor",
    image:
      "https://m.media-amazon.com/images/I/417O6DtsKJL._SX300_SY300_QL70_FMwebp_.jpg",
    rating: {
      rate: 4.6,
      count: 42,
    },
  },
  {
    id: 6,
    title: "Dell Inspiron 2-in-1 Laptop",
    price: 89959.99,
    description:
      "Versatile 2-in-1 laptop with touch-screen capability for work and play.",
    category: "laptops",
    image:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7430-2in1-intel/media-gallery/notebook-inspiron-14-7430-silver-fpr-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=632&qlt=100,1&resMode=sharp2&size=632,402&chrss=full",
    rating: {
      rate: 4.4,
      count: 60,
    },
  },
  {
    id: 7,
    title: "G.Skill Trident Z RGB 16GB DDR4 RAM",
    price: 8489.99,
    description:
      "High-speed RAM with customizable RGB lighting for a stunning gaming setup.",
    category: "ram",
    image:
      "https://m.media-amazon.com/images/I/41W2Vvt5MoL._SY300_SX300_QL70_FMwebp_.jpg",
    rating: {
      rate: 4.7,
      count: 50,
    },
  },
  {
    id: 8,
    title: "Canon PIXMA Wireless Photo Printer",
    price: 14559.99,
    description:
      "Print beautiful photos and documents wirelessly with this compact photo printer.",
    category: "printer",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTG5jOOgWY952b4Xk_7aTrWO7LwHyl6ggTzFFAN8lITcYd1sK-o7IxYumMETvP53c2HYFIZgmh-OyYEHmP80DE768uTK9ZJEPaGxrnqIplB_kmoo0DX1SPWqA",
    rating: {
      rate: 4.3,
      count: 68,
    },
  },
  {
    id: 9,
    title: "Alienware Aurora R10 Gaming PC",
    price: 275599.99,
    description:
      "Immersive gaming experience with powerful graphics and advanced cooling system.",
    category: "PC",
    image:
      "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r10/general/desktop_aw_aurora_r10_mlk_mod_hero_gy.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=470&qlt=100,1&resMode=sharp2&size=470,402&chrss=full",
    rating: {
      rate: 4.9,
      count: 95,
    },
  },
  {
    id: 10,
    title: "AMD Ryzen 9 5900X Processor",
    price: 44699.99,
    description:
      "Highly efficient 12-core processor for gaming and content creation.",
    category: "processor",
    image:
      "https://m.media-amazon.com/images/I/41rLUI4FOAL._SY300_SX300_QL70_FMwebp_.jpg",
    rating: {
      rate: 4.8,
      count: 55,
    },
  },
  {
    id: 11,
    title: "HP Spectre x360 Laptop",
    price: 52999.99,
    description:
      "Premium convertible laptop with a sleek design and powerful performance.",
    category: "laptops",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTdoTgTvnHYtsSl0YMkuipbzfz0Nk63BLEsXtwg_tFOrDn4tO-xfKSYP0v0lEe2Mcllz1ZdNyt9vuKTGjpXRkXXSh4mFZGWPD_35lPV39TFa6w3nLsldPlNsg",
    rating: {
      rate: 4.6,
      count: 72,
    },
  },
  {
    id: 12,
    title: "Corsair Vengeance LPX 64GB DDR4 RAM",
    price: 7699.99,
    description:
      "High-capacity RAM module for extreme multitasking and gaming.",
    category: "ram",
    image:
      "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Memory/CMK64GX4M2E3200C16/Gallery/VENG_LPX_BLK_01.webp?width=1080&quality=85&auto=webp&format=pjpg",
    rating: {
      rate: 4.7,
      count: 38,
    },
  },
  {
    id: 13,
    title: "Brother Compact Monochrome Laser Printer",
    price: 12589.99,
    description:
      "Fast and reliable monochrome laser printer for home and office use.",
    category: "printer",
    image: "https://m.media-amazon.com/images/I/41Ta1g+MuAL._SY300_SX300_.jpg",
    rating: {
      rate: 4.4,
      count: 80,
    },
  },
  {
    id: 14,
    title: "CyberPowerPC Gamer Xtreme VR Gaming PC",
    price: 94999.99,
    description:
      "VR-ready gaming PC with powerful graphics for an immersive gaming experience.",
    category: "PC",
    image:
      "https://m.media-amazon.com/images/I/71DvG2FjM+L._AC_SY300_SX300_.jpg",
    rating: {
      rate: 4.8,
      count: 105,
    },
  },
  {
    id: 15,
    title: "Intel Core i9 11th Gen Processor",
    price: 58999.99,
    description:
      "Top-of-the-line processor for extreme performance and advanced computing tasks.",
    category: "processor",
    image:
      "https://m.media-amazon.com/images/I/41X1tjC36zL._SX300_SY300_QL70_FMwebp_.jpg",
    rating: {
      rate: 4.9,
      count: 48,
    },
  },
  {
    id: 16,
    title: "Asus ROG Strix Scar 17 Gaming Laptop",
    price: 176699.99,
    description:
      "High-refresh-rate gaming laptop with powerful graphics and RGB keyboard.",
    category: "laptops",
    image:
      "https://m.media-amazon.com/images/I/41muonAntTL._SX300_SY300_QL70_FMwebp_.jpg",
    rating: {
      rate: 4.7,
      count: 90,
    },
  },
  {
    id: 17,
    title: "Kingston HyperX Fury 32GB DDR4 RAM",
    price: 11999.99,
    description:
      "Reliable and high-performance RAM for gaming and content creation.",
    category: "ram",
    image:
      "https://m.media-amazon.com/images/I/31ekf9gmCsL._SX300_SY300_QL70_FMwebp_.jpg",
    rating: {
      rate: 4.6,
      count: 58,
    },
  },
  {
    id: 18,
    title: "Epson WorkForce Pro Wireless All-in-One Printer",
    price: 14999.99,
    description:
      "Professional-grade all-in-one printer with fast printing and scanning capabilities.",
    category: "printer",
    image:
      "https://mediaserver.goepson.com/ImConvServlet/imconv/3756d73e192f74a231a15da3b3c3e18bc54b54f1/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=WF-C5790_01-1",
    rating: {
      rate: 4.5,
      count: 75,
    },
  },
  {
    id: 19,
    title: "MSI Infinite X Plus Gaming PC",
    price: 91999.99,
    description:
      "Compact gaming PC with customizable RGB lighting and powerful components.",
    category: "PC",
    image:
      "https://m.media-amazon.com/images/I/51wc8KU7WdL._SX300_SY300_QL70_FMwebp_.jpg",
    rating: {
      rate: 4.8,
      count: 115,
    },
  },
  {
    id: 20,
    title: "AMD Ryzen 7 5800X Processor",
    price: 29958.99,
    description:
      "High-performance processor with 8 cores for gaming and multitasking.",
    category: "processor",
    image: "https://m.media-amazon.com/images/I/41t0HDY4O+L._SX300_SY300_.jpg",
    rating: {
      rate: 4.7,
      count: 50,
    },
  },
];
export const searchAction = (keyword) => (dispatch) => {
  dispatch({
    type: "SEARCH",
    payload: productData.filter(
      (dt) =>
        dt.title.includes(keyword) ||
        dt.description.includes(keyword) ||
        dt.category.includes(keyword)
    ),
  });
};

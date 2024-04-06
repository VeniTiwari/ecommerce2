import React from 'react';
import { Link } from 'react-router-dom';

// function CategoriesPage() {
//   return (
//     <div className="categories-page">
//       <h1>Categories</h1>
//       <ul>
//         <li>
//           <Link to="/category/1">Drawing Tools</Link>
//         </li>
//         <li>
//           <Link to="/category/2">Painting Tools</Link>
//         </li>
//         <li>
//           <Link to="/category/3">Sculpting Tools</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default CategoriesPage;













// function CategoriesPage () {
//   const categories = [
//     { name: 'Printer', image: 'router.jpg', link: 'C:\Users\\91700\Downloads\router.jpg' },
//     { name: 'Copiers', image: 'clothing.jpg', link: '/clothing' },
//     { name: 'VGA Cards', image: 'books.jpg', link: '/books' },
//     { name: 'Processors', image: 'home_garden.jpg', link: '/home-garden' },
//     { name: 'Memory', image: 'home_garden.jpg' },
//     { name: 'Motherboard', image: '/images/motherboard.jpg' },
//     { name: 'Switches', image: 'home_garden.jpg', link: '/home-garden' },
//     { name: 'Routers', image: 'home_garden.jpg', link: '/home-garden' },
//     { name: 'Desktops', image: 'home_garden.jpg', link: '/home-garden' },
//     { name: 'Laptops', image: 'home_garden.jpg', link: '/home-garden' }
//     // Add more categories as needed
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-semibold mb-4 text-center"> Categories</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {categories.map(category => (
//           <a key={category.name} href={category.link} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg">
//             <img src={category.image} alt={category.name} className="w-full h-32 object-cover" />
//             <div className="p-4">
//               <p className="text-lg font-semibold">{category.name}</p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoriesPage;















function CategoriesPage() {
  const categories = [
    { name: 'Printer', image: '/src/components/images/printer.jpg' },
    { name: 'Copiers', image: '/src/components/images/copier.jpg' },
    { name: 'VGA Cards', image: '/src/components/images/vga.jpg' },
    { name: 'Processors', image: '/src/components/images/processor.jpg' },
    { name: 'Memory', image: '/src/components/images/memory.jpg' },
    { name: 'Motherboard', image: '/src/components/images/motherboard.jpg' },
    { name: 'Switches', image: '/src/components/images/switch.jpg' },
    { name: 'Routers', image: '/src/components/images/router.jpg' },
    { name: 'Desktops', image: '/src/components/images/desktop.jpg' },
    { name: 'Laptops', image: '/src/components/images/laptop.jpg' }
    // Add more categories as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map(category => (
          <div key={category.name} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
            <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-lg font-semibold">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;



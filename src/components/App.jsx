import { Routes, Route, NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import Home from '../pages/Home';
import About  from '../pages/About';
import Products from '../pages/Products';
import NotFound from '../pages/NotFound';
import ProductDetails from '../pages/ProductDetails';
import { Mission } from './Mission/Mission';
import { Team } from './Team/Team';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
import ImageGallery from './Gallery/Gallery'; 

// export const App = () => {
//   return (
//       {/* <nav>
//         <StyledLink to="/" end>
//           Home
//         </StyledLink>
//         <StyledLink to="about">About</StyledLink>
//         <StyledLink to="products">Products</StyledLink>
//       </nav>
//       <Routes>
//         <Route path="/about" element={<About />} />
//           <Route path="mission" element={<Mission />}>
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:productId" element={<ProductDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes> */}

//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />}>
//             <Route path="mission" element={<Mission />} />
//             <Route path="team" element={<Team />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//           <Route path="products" element={<Products />} />
//           <Route path="products/:productId" element={<ProductDetails />} />
//         </Route>
//       </Routes>

//   );
// };

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route path="about" element={<About />}>
//           <Route path="mission" element={<Mission />} />
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="products" element={<Products />} />
//         <Route path="products/:productId" element={<ProductDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// };

// **************Відстеження змін
// const App = () => {
//   const [user, setUser] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const username = searchParams.get('username');

//   useEffect(() => {
//     // Тут виконуємо асинхронну операцію,
//     // наприклад HTTP-запит за інформацією про користувача
//     if (username === '') return;

//     async function fetchUser() {
//       const user = await FakeAPI.getUser(username);
//       setUser(user);
//     }

//     fetchUser();
//   }, [username]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     setSearchParams({ username: form.elements.username.value });
//     form.reset();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" />
//         <button type="submit">Search</button>
//       </form>
//       {user && <UserInfo user={user} />}
//     </>
//   );
// };

// ******************* Хук useLocation  *************
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Analytics from 'path/to/analytics-service';

// const App = () => {
//   const location = useLocation();

//   useEffect(() => {
//     Analytics.send(location);
//   }, [location]);

//   return <div>...</div>;
// };


// ЗАНЯТТЯ З РЕПЕТОЮ


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />}>
          <Route path="inList" element={<div>Підсписок</div>}/>
          <Route path="gallery" element={<ImageGallery/>}/>
        </Route>
      </Route>
    </Routes>
  );
};
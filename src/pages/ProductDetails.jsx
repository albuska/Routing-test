import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation(); 
  const backLinkLocationRef = useRef(location.state?.from ?? "/products"); 
  const { productId } = useParams();
   return (
     <div>
       <h3> {productId}</h3>
       <ul>
         <li>
           <Link to="inList">Підсписок</Link>
         </li>
         <li>
           <Link to="gallery">Галерея</Link>
         </li>
       </ul>
       <Outlet/>
     </div>
   );
};


// const ProductDetails = () => {
//   const location = useLocation();
//   console.log(location.state); // { from: "/dashboard?name=hoodie" }

  // return <Link to={location.state?.from ?? "/products"}>Back to products</Link>;
  // return <Link to={backLinkLocationRef.current}>Back to products</Link>;
// };


// const ProductDetails = () => {
//   const location = useLocation();
//   console.log(location.state);

//   // /products -> products/h-1
//   // { from: { pathname: "/products", search: "" } }

//   // /products?name=hoodie -> products/h-1
//   // { from: { pathname: "/products", search: "?name=hoodie" } }

//   return <Link to={location.state.from}>Back to products</Link>;
// };


// const ProductDetails = () => {
//   const location = useLocation();
//   const backLinkHref = location.state?.from ?? '/products';

//   return <Link to={backLinkHref}>Back to products</Link>;
// };

export default ProductDetails; 
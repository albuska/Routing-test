import { useSearchParams, useLocation } from 'react-router-dom';

const Products = () => {
    const location = useLocation();
  // Якщо потрібно зробити http запит, робимо тут useEffect

  //  useEffect(() => {
  //    // https...
  //  });
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';
  const color = searchParams.get('color');
  const maxPrice = searchParams.get('maxPrice');

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ name: evt.target.value });
  };

  return (
    //  <Link key={item.id} state={{from: location}} to={`${item}`} >
    // те, що має бути в цій картці
    // </Link >
    <div>
      <input type="text" value={name} onChange={updateQueryString} />
      <button>Click me</button>
      <p>Name: {name}</p>
      <p>Color: {color}</p>
      <p>Maximum price: {maxPrice}</p>
    </div>
  );
};

export default Products;
// *****************Зміна рядка запиту

// import { useSearchParams } from 'react-router-dom';

// export const Products = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const name = searchParams.get('name');

//   return (
//     <div>
//       <h1>Products</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={e => setSearchParams({ name: e.target.value })}
//       />
//     </div>
//   );
// };

// const Products = () => {


//   return (
//     <Link to="/product/h-1" state={{ from: location }}>
//       Navigate to product h-1
//     </Link>
//   );
// };

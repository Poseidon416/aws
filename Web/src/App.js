import { useEffect, useState } from 'react';

export default function Restaurant() {
  console.log('Restaurant component');
  useEffect(() => {
     fetch('https://6lw52i992c.execute-api.us-west-2.amazonaws.com/prod/menu')
       .then(async response => setMenu(await response.json()))
       .catch(error => console.log(error));
  }, []);

  const [menu, setMenu] = useState([
    { id: 0, name: 'Pizza', price: 10, category: 'Main' },
    { id: 1, name: 'Salad', price: 5, category: 'Appetizer' },
    { id: 2, name: 'Soda', price: 2, category: 'Beverage' }
  ]);
  return (
    <>
      <h1>Restaurant</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {menu.map(mi => <MenuItem item={mi} />)}
        </tbody>
      </table>
    </>
  );
}

function MenuItem({ item }) {
  return (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>${item.price}.00</td>
      <td>{item.category}</td>
    </tr>
  );
}
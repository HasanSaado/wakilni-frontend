// Libraries
import React, { useContext, useState, useEffect } from 'react';
import { isEmpty } from 'lodash';

// Hooks
import { useAppDispatch, useAppSelector } from 'stores/hooks';

// Components
import Header from 'components/Header';
import AddProductModal from 'components/AddProductModal';
import Row from 'components/Row';
import { Table, Form } from 'react-bootstrap';

// Actions
import { fetchProducts, searchProduct } from 'stores/product/ProductActions';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  count: number;
}

export default function ProductsPage() {

  // Constants
  const dispatch = useAppDispatch();
  const { products, productResults } = useAppSelector((state) => state.productReducer);

  // State
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await dispatch(fetchProducts());
  }

  const handleSearchProduct = async (value: string) => {
    if (!isEmpty(value)) {
      await dispatch(searchProduct({
        search: value
      }));
    }
  }

  return (
    <div>
      <Header />
      <div className="mt-5 container">
        <Form.Control
          placeholder="Name"
          aria-label="Name"
          aria-describedby="basic-addon1"
          className="mb-3"
          value={searchValue}
          onChange={(e) => {
            handleSearchProduct(e.target.value)
            setSearchValue(e.target.value)
          }}
        />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Type Name</th>
              <th>Count</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {!isEmpty(products) && isEmpty(searchValue) && products?.map((product: Product) => (
              <Row key={product?.id} product={product} refetchProducts={getProducts} />
            ))}
            {!isEmpty(productResults) && !isEmpty(searchValue) && productResults?.map((product: Product) => (
              <Row key={product?.id} product={product} refetchProducts={getProducts} />
            ))}
          </tbody>
        </Table>
        <AddProductModal />
      </div>
    </div>
  );
}

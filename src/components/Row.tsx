// Libraries
import React, { useState } from 'react';
import { config } from '../constants';
import { Link } from 'react-router-dom';

// Components
import { Collapse } from 'react-bootstrap';

// Hooks
import { useAppDispatch, useAppSelector } from 'stores/hooks';
import { deleteProduct } from 'stores/product/ProductActions';
import { fetchItems } from 'stores/item/ItemActions';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  count: number;
}

interface Props {
  product: Product;
  refetchProducts: () => void;
}

interface Item {
  id: number;
  serialNumber: string;
  sold: boolean;
}

export default function Row({ product, refetchProducts }: Props) {

  // Constants
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.itemReducer);

  // State
  const [open, setOpen] = useState(false);

  const handleDeleteProduct = async () => {
    await dispatch(deleteProduct(product?.id))
      .then(() => {
        refetchProducts();
      });
  }

  const handleFetchItems = async () => {
    await dispatch(fetchItems(product?.id));
  }

  return (
    <>
      <tr>
        <td
          onClick={() => {
            setOpen(!open)
            handleFetchItems()
          }}
          aria-controls={`row-${product?.id}`}
          aria-expanded={open}
          className="pointer"
        >
          {product?.id}
        </td>
        <td>
          <Link to={`/items/${product?.id}`}>
            {product?.name}
          </Link>
        </td>
        <td>
          {product?.count}
        </td>
        <td>
          <img height={100} width={100} src={`${config.url.PUBLIC_URL}/${product?.image}`} />
        </td>
        <td>
          <i
            className="fa fa-trash mx-4 text-danger"
            aria-hidden="true"
            onClick={() => handleDeleteProduct()}
          ></i>
        </td>
      </tr>
      <Collapse in={open}>
        <td colSpan={6} id={`row-${product?.id}`} className="w-100">
          {
            items?.map((item: Item) => (
              <ul>
                <li>{item?.serialNumber}</li>
              </ul>
            ))
          }
        </td>
      </Collapse>
    </>
  )
}

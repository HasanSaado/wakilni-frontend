// Libraries
import React, { useEffect } from 'react';

// Hooks
import { useAppDispatch, useAppSelector } from 'stores/hooks';
import { useParams } from 'react-router-dom';

// Components
import Header from 'components/Header';
import AddItemsModal from 'components/AddItemsModal';
import { Table, Form } from 'react-bootstrap';

// Actions
import { fetchItems, updateItem } from 'stores/item/ItemActions';
import { isEmpty } from 'lodash';

interface Item {
  id: number;
  serialNumber: string;
  sold: boolean;
}

export default function ItemsPage() {

  // Constants
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { items } = useAppSelector((state) => state.itemReducer);

  useEffect(() => {
    getItems();
  }, [productId]);

  const getItems = async () => {
    await dispatch(fetchItems(productId));
  }

  const handleSellItem = async (id: any, sold: any) => {
    await dispatch(updateItem({
      item_id: id,
      sold: sold
    }))
    .then(() => {
      getItems();
    });
  }

  return (
    <div>
      <Header />
      <div className="mt-5 container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Serial Number</th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            {!isEmpty(items) && items?.map((item: Item) => (
              <tr>
                <td>
                  {item?.id}
                </td>
                <td>
                  {item?.serialNumber}
                </td>
                <td>
                  <Form.Check
                    type='checkbox'
                    id={`${item.id}`}
                    checked={item.sold ? true : false}
                    onChange={() => handleSellItem(item?.id, !item.sold)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <AddItemsModal
          productId={productId as string}
          refetchItems={getItems}
        />
      </div>
    </div>
  );
}

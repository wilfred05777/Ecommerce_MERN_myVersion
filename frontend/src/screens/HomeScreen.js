import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch(); /// using hooks

  // step2: useSelector to grab the list of Products from the state
  const productList = useSelector((state) => state.productList);

  // step3: pull out
  const { loading, error, products } = productList;

  // step1: fire the lists through action
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // const products = [];

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading </h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {/* step4: display the output */}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              {/* <h3>{product.name}</h3> */}
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;

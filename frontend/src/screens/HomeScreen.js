import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";

import { listProducts } from "../actions/productActions";
import ProductCarousel from "../components/ProductCarousel";
import { Link } from "react-router-dom";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch(); /// using hooks

  // step2: useSelector to grab the list of Products from the state
  const productList = useSelector((state) => state.productList);

  // step3: pull out
  const { loading, error, products, pages, page } = productList;

  // step1: fire the lists through action
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  // const products = [];

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}

      <h1>Latest Products</h1>
      {loading ? (
        // <h2>Loading </h2>
        <Loader />
      ) : error ? (
        // <h3>{error}</h3>
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {/* step4: display the output */}
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                {/* <h3>{product.name}</h3> */}
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;

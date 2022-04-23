import React, { useState } from "react";
import {
  Form,
  Button,
  FormControl,
  InputGroup,
  Container,
} from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    // <InputGroup className="mb-3 mr-sm-2 ml-sm-5">
    //   <FormControl
    //     placeholder="Recipient's username"
    //     aria-label="Recipient's username"
    //     aria-describedby="basic-addon2"
    //   />
    //   <Button variant="outline-secondary" id="button-addon2">
    //     Button
    //   </Button>
    // </InputGroup>
    <Container>
      <InputGroup onSubmit={submitHandler} inline="true">
        <Form.Control
          xs={6}
          md={4}
          lg={2}
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>

        <Button type="submit" variant="outline-success " className="p-2">
          Search
        </Button>
      </InputGroup>
    </Container>
  );
};

export default SearchBox;

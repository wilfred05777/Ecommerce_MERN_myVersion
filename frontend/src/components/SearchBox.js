import React, { useState } from "react";
import {
  Form,
  Button,
  FormControl,
  InputGroup,
  Container,
  FormGroup,
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
    // <InputGroup style={{ width: "40%" }}>
    //   <FormControl
    //     placeholder="Recipient's username"
    //     aria-label="Recipient's username"
    //     aria-describedby="basic-addon2"
    //   />
    //   <Button variant="outline-secondary" id="button-addon2">
    //     Button
    //   </Button>
    // </InputGroup>

    <Form style={{ display: "flex" }} onSubmit={submitHandler} inline="true">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
      ></Form.Control>
      <Button type="submit" variant="outline-success " className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;

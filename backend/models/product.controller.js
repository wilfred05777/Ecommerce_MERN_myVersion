import Product_model from "./productModel";
import vm from "vm-response";

exports.create_product = (req, res, next) => {
  let product_body = req.body;
  const new_product = new Product_model(product_body);

  new_product
    .save()
    .then((saved) => {
      if (!saved) {
        return res
          .status(400)
          .json(
            vm.ApiResponse(false, 400, "Unable to save poduct please try again")
          );
      }
      if (saved) {
        return res
          .status(201)
          .json(
            vm.ApiResponse(true, 201, "Product Created Successfully", saved)
          );
      }
    })
    .catch((error) => {
      return res
        .status(500)
        .json(
          vm.ApiResponse(false, 500, "Hoops an error occure", undefined, error)
        );
    });
};

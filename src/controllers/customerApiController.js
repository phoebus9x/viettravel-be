const Customer = require("../models/customer");
const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrCustomerService,
  putUpdateCustomerService,
  deleteCustomerService,
  deleteArrCustomerService,
  getCustomersService,
} = require("../services/customerService");

module.exports = {
  getCustomersApi: async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let name = req.query.name;

    let results = null;
    if (limit && page) {
      results = await getCustomersService(limit, page, name, req.query);
    } else results = await getCustomersService();

    return res.status(200).json({
      errorCode: 0,
      data: results,
    });
  },

  postCustomersApi: async (req, res) => {
    let { name, email, address, phone, description } = req.body;

    let imageUrl = "";
    // image: file
    if (!req.files || Object.keys(req.files).length === 0) {
      //do nothing
      console.log("no upload");
    } else {
      console.log("upload photo");
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
    }
    console.log("check image: ", imageUrl);

    let customerData = {
      name,
      email,
      address,
      phone,
      description,
      image: imageUrl,
    };

    let customer = await createCustomerService(customerData);
    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },

  postArrCustomersApi: async (req, res) => {
    console.log("check data: ", req.body.customers);
    let customers = await createArrCustomerService(req.body.customers);
    return res.status(200).json({
      EC: 0,
      data: customers,
    });
  },

  putCustomerApi: async (req, res) => {
    let { id, name, email, address, phone, description } = req.body;
    let customer = await putUpdateCustomerService(
      id,
      name,
      email,
      address,
      phone,
      description
    );
    return res.status(200).json({
      errorCode: 0,
      data: customer,
    });
  },

  deleteCustomerApi: async (req, res) => {
    let idCustomer = req.body.id;
    let result = await deleteCustomerService(idCustomer);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },

  deleteCustomersApi: async (req, res) => {
    let idCustomers = req.body.customers;
    let result = await deleteArrCustomerService(idCustomers);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};

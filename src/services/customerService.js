const Customer = require("../models/customer");
const aqp = require("api-query-params");

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      email: customerData.email,
      address: customerData.address,
      phone: customerData.phone,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createArrCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    console.log("result: ", result);
    return result;
  } catch (error) {
    console.log("error: ", error);
  }
};

const putUpdateCustomerService = async (
  id,
  name,
  email,
  address,
  phone,
  description
) => {
  try {
    let customer = await Customer.updateOne(
      { _id: id },
      {
        name: name,
        email: email,
        address: address,
        phone: phone,
        description: description,
      }
    );
    return customer;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

const getCustomersService = async (limit, page, name, queryString) => {
  try {
    let customers = null;
    if ((limit, page)) {
      let offset = (page - 1) * limit;
      const { filter } = aqp(queryString);
      delete filter.page;
      console.log("check filter: ", filter);
      customers = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else customers = await Customer.find({});

    return customers;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

const deleteCustomerService = async (idCustomer) => {
  try {
    let customer = await Customer.deleteById({
      _id: idCustomer,
    });
    return customer;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

const deleteArrCustomerService = async (ids) => {
  try {
    let customer = await Customer.delete({ _id: { $in: ids } });
    return customer;
  } catch (error) {
    console.log("check error:", error);
    return null;
  }
};

module.exports = {
  getCustomersService,
  createCustomerService,
  createArrCustomerService,
  putUpdateCustomerService,
  deleteCustomerService,
  deleteArrCustomerService,
};

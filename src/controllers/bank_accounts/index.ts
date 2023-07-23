import { Response, Request } from "express"
import { AccountType, Customer } from "../../types/types"
import AccountTypeModel from "../../models/accountTypeModel"
import CustomerModel from "../../models/customerModel"

// _id of new account type created
let newAccountTypeId: any;

/**
 * Post data to Monogo 
 * Add an Account Type
 */
const addAccountType = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as AccountType;
  
      const accountType: AccountType = new AccountTypeModel({
        accountTypes: body.accountTypes,
      });
  
      const newAccount: AccountType = await accountType.save();
    
      const allAccounts: AccountType[] = await AccountTypeModel.find();
      
      newAccountTypeId = await newAccount._id;

      res
        .status(201)
        .json({ message: "New Account Type Added", acountType: newAccount, accountTypes: allAccounts })
    } catch (error) {
      throw error
    }
  }
     
  /**
 * Post data to Monogo 
 * Add a Customer
 */

const addCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Customer

    const newAccount = await AccountTypeModel.find({});
    const newAccountId = newAccount[0].toObject()._id;

    console.log(newAccountId)

    const customer: Customer = new CustomerModel({ 
      firstName: body.firstName,
      middleInitial: body.middleInitial,
      lastName: body.lastName,
      suffix: body.suffix,
      birthDate: body.birthDate,
      socialSecurity: body.socialSecurity,
      maidenNameOfMother: body.maidenNameOfMother,
      occupation: body.occupation,
      citizenship: body.citizenship,
      email: body.email,
      personalPhone: body.personalPhone,
      workPhone: body.workPhone,
      phoneExtension: body.phoneExtension,
      address: body.address,
      addressAdditional: body.addressAdditional,
      city: body.city,
      state: body.state,
      zipcode: body.zipcode,
      addressMailing: body.addressMailing,
      addressAdditionalMailing: body.addressAdditionalMailing,
      cityMailing:  body.cityMailing,
      stateMailing:  body.stateMailing,
      zipcodeMailing:  body.zipcodeMailing,
      accountTypes: newAccountId,
    })

    console.log(" ---- " + customer.accountTypes)

    const newCustomer: Customer = await customer.save()
    const allCustomers: Customer[] = await CustomerModel.find()

    res
      .status(201)
      .json({ message: "New Customer Added", customer: newCustomer, customers: allCustomers })
  } catch (error) {
    throw error
  }
} 

  export {addAccountType, addCustomer};
      


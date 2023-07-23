"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomer = exports.addAccountType = void 0;
const accountTypeModel_1 = __importDefault(require("../../models/accountTypeModel"));
const customerModel_1 = __importDefault(require("../../models/customerModel"));
// _id of new account type created
let newAccountTypeId;
/**
 * Post data to Monogo
 * Add an Account Type
 */
const addAccountType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const accountType = new accountTypeModel_1.default({
            accountTypes: body.accountTypes,
        });
        const newAccount = yield accountType.save();
        const allAccounts = yield accountTypeModel_1.default.find();
        newAccountTypeId = yield newAccount._id;
        res
            .status(201)
            .json({ message: "New Account Type Added", acountType: newAccount, accountTypes: allAccounts });
    }
    catch (error) {
        throw error;
    }
});
exports.addAccountType = addAccountType;
/**
* Post data to Monogo
* Add a Customer
*/
const addCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const newAccount = yield accountTypeModel_1.default.find({});
        const newAccountId = newAccount[0].toObject()._id;
        console.log(newAccountId);
        const customer = new customerModel_1.default({
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
            cityMailing: body.cityMailing,
            stateMailing: body.stateMailing,
            zipcodeMailing: body.zipcodeMailing,
            accountTypes: newAccountId,
        });
        console.log(" ---- " + customer.accountTypes);
        const newCustomer = yield customer.save();
        const allCustomers = yield customerModel_1.default.find();
        res
            .status(201)
            .json({ message: "New Customer Added", customer: newCustomer, customers: allCustomers });
    }
    catch (error) {
        throw error;
    }
});
exports.addCustomer = addCustomer;

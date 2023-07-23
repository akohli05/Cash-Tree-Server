import { Customer } from "../types/types"
import  { model, Schema } from "mongoose"

const customerSchema: Schema = new Schema<Customer>(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleInitial: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: true,
    },
    suffix: {
      type: String,
      required: false,
    },
    birthDate: {
      type: String,
      required: true,
    },
    socialSecurity: {
      type: String,
      required: true,
    },
    maidenNameOfMother: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    citizenship: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    personalPhone: {
      type: String,
      required: false,
    },
    workPhone: {
      type: String,
      required: false,
    },
    phoneExtension: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    addressAdditional: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: false,
    },
    addressMailing: {
      type: String,
      required: true,
    },
    addressAdditionalMailing: {
      type: String,
      required: false,
    },
    cityMailing: {
      type: String,
      required: true,
    },
    stateMailing: {
      type: String,
      required: true,
    },
    zipcodeMailing: {
      type: String,
      required: true,
    },
    accountTypes: {
      type: Schema.Types.ObjectId,
      ref: 'AccountTypeModel'
  }
  },
)

export default model<Customer>("CustomerModel", customerSchema);



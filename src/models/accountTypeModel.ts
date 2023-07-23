import { AccountType } from "../types/types"
import  { model, Schema } from "mongoose"

const accountTypeSchema: Schema = new Schema<AccountType>({
    accountTypes: {
      type: [String],
      required: true,
    },
})


export default model<AccountType>("AccountTypeModel", accountTypeSchema);



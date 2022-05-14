import { Schema } from "mongoose";

import * as Types from "@types";

const UserSchema = new Schema<Types.User>({
  /** User's first name */
  first_name: {
    type: String,
    required: true,
  },

  /** User's last name */
  last_name: {
    type: String,
    required: false,
  },

  /** User's username */
  username: {
    type: String,
    required: true,
    unique: true,
  },

  /** User's password */
  password: {
    type: String,
    required: true,
  },
});

export default UserSchema;

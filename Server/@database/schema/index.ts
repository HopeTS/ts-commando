import { model } from "mongoose";

import { UserSchema } from "./auth";

export const User = model("User", UserSchema);

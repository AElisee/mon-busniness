"use server";
import { revalidatePath } from "next/cache.js";
import { connectToDb } from "./dbConnection.js";
import { User } from "./user.model.js";
import bcrypt from "bcrypt";

export const register = async (prevState, formData) => {
  const { name, username, email, phone, password, address, image } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "Cet utilisateur existe déjà !" };
    }
    // bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    //---

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      //   image,
    });

    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "L'inscription n'a pas réussi !" };
  }
};

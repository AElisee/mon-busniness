import mongoose from "mongoose";

const CompagnySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      town: {
        type: String,
        required: true,
      },
      position: {
        type: String,
      },
    },
    phone: {
      type: String,
      required: true,
    },
    socialLinks: {
      facebook: {
        type: String,
      },
      instagram: {
        type: String,
      },
      tiktok: {
        type: String,
      },
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Compagny =
  mongoose.models?.Compagny || mongoose.model("Compagny", CompagnySchema);


module.exports = mongoose => {
const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        username: String,
        pass: String,
        Reenterpassword: String,
        entermobileno:String,
        enteremailid:String,
        isloggedin: Boolean
      },
      { timestamps: true }
    )
  );

  return Tutorial;
};

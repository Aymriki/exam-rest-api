import mongoose from "mongoose";

const ProgramSchema = new mongoose.Schema(
    {
            code: { type: String, required: true, unique: true},
            fullName: { type: String, required: true},
            years: {type: Number, required: true},
            Specialization: []
    },
    { timestamps: true}
)

const Program = mongoose.model('Program', ProgramSchema)
export default Program
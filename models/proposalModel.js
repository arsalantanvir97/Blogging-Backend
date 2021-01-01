import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const proposalSchema = mongoose.Schema(
  {
    tag: {
      type: String,
    },
    coverLetter: {
      type: String,
    },
    questionAnswers: {
      questions: { type: String },
    },
    hourlyChargeRate: {
      currencyCode: { type: String },
      amount: { type: Number },
    },
    fixedChargeAmount: {
      currencyCode: { type: String },
      amount: { type: Number },
    },

    screeningQuestions: {
      questionAnswers: {
        type: Array,
        question: { type: String },
        answer: { type: String },
      },
    },
  },
  {
    timestamps: true,
  }
)
const Proposal = mongoose.model('Proposal', proposalSchema)

export default Proposal

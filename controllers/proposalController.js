import asyncHandler from 'express-async-handler'
import Proposal from '../models/proposalModel.js'
const getProposals = asyncHandler(async (req, res) => {
  const proposals = await Proposal.find({})
  if (proposals) {
    res.json(proposals)
    console.log('proposal', proposals)
  } else {
    res.status(404)
    throw new Error('Proposals not found')
  }
})

const updateProposal = asyncHandler(async (req, res) => {
  const { coverLetter } = req.body
  const proposal = new Proposal({
    coverLetter,
  })

  const upproposal = await proposal.save()

  res.status(201).json(upproposal)
})
export { getProposals, updateProposal }

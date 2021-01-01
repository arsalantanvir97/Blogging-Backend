import express from 'express'
const router = express.Router()
import {
  getProposals,
  updateProposal,
} from '../controllers/proposalController.js'

router.get('/', getProposals)
router.post('/update', updateProposal)

export default router

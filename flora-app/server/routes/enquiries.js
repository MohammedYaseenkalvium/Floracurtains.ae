import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

// ── Validation rules ──────────────────────────────────────────────────────────
const enquiryValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('service').trim().notEmpty().withMessage('Service is required'),
  body('message').trim().optional(),
]

// ── POST /api/enquiries ───────────────────────────────────────────────────────
router.post('/', enquiryValidation, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, phone, service, message } = req.body

  try {
    const enquiry = await prisma.enquiry.create({
      data: { name, phone, service, message: message || '' },
    })
    res.status(201).json({ success: true, enquiry })
  } catch (error) {
    console.error('Failed to save enquiry:', error)
    res.status(500).json({ error: 'Failed to save enquiry' })
  }
})

// ── GET /api/enquiries  (admin use) ───────────────────────────────────────────
router.get('/', async (_req, res) => {
  try {
    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
    })
    res.json(enquiries)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch enquiries' })
  }
})

export default router



// User service
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../utils/data/user.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        res.status(200).json(data)
    } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

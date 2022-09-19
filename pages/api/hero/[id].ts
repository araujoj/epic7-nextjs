import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

const BASE_URL = 'https://api.epicsevendb.com'

const instance = axios.create({ baseURL: BASE_URL })

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query as { id: string } // Array.isArray(req.query.id) ? req.query.id[0] : req.query
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const request = await instance.get(`${BASE_URL}/hero/${id}`)
                res.status(200).json(request.data)
            } catch (error: any) {
                if (axios.isAxiosError(error)) {
                    console.log(error.code, error.message)
                    res.send(error.response)
                } else {
                    console.log(error)
                    res.status(error.code || 500).json({ error })
                }
            }
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break
    }
}
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = 'https://api.epicsevendb.com'

const instance = axios.create({ baseURL: BASE_URL })

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const request = await instance.get(`${BASE_URL}/hero`)
                res.status(200).json(request.data)
            } catch (error: any) {
                if (axios.isAxiosError(error)) {
                    console.log(error.code, error.message)
                    res.send(error.response)
                } else {
                    console.log(error);
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
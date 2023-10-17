// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync } from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const { id } = req.query  as { id: string}
        const content = readFileSync(`./content/${id}.md`, "utf8")
        res.status(200).json({ content })
    } catch(err) {
        res.status(404).send('not found')
    }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { readdirSync } from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const filesName = readdirSync("./content").map(name=> `${name.replace(/^(.*?)\.[^.]+$/, '$1')}`)
        res.status(200).json(filesName)
    } catch(err) {
        res.status(404).send([]);
    }
}

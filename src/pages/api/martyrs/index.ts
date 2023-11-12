import { DATA_SOURCE } from "@/lib/constant";
import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = readFileSync(DATA_SOURCE.Martyrs, 'utf-8')
        res.status(200).send({
            data,
            source: 'https://datawrapper.dwcdn.net/SAgXc/2/'
        })
    } catch(err) {
        res.status(500).send('server side error')
    }
}


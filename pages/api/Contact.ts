
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const messageSchema = z.object({
    email: z.string().email('Invalid email address.'),
    name: z.string().min(1, 'Name is required.'),
    message: z.string().min(1, 'Message is required.')
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const parsedBody = messageSchema.parse(req.body)

            const newMessage = {
                email: parsedBody.email,
                name: parsedBody.name,
                message: parsedBody.message
            }


            res.status(201).json({ message: 'Successfully stored message!', newMessage })
        } catch (e) {
            if (e instanceof z.ZodError) {
                res.status(422).json({ message: 'Invalid input.', errors: e.errors })
            } else {
                res.status(500).json({ message: 'Internal server error.' })
            }
        }

    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} not allowed.`)
    }
}

export default handler
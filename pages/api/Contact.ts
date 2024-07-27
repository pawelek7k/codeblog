import { Db, MongoClient, ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';


const messageSchema = z.object({
    email: z.string().email('Invalid email address.'),
    name: z.string().min(1, 'Name is required.'),
    message: z.string().min(1, 'Message is required.')
});

interface Message {
    email: string;
    name: string;
    message: string;
    _id?: ObjectId;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const parsedBody = messageSchema.parse(req.body);

            const newMessage: Message = {
                email: parsedBody.email,
                name: parsedBody.name,
                message: parsedBody.message
            };

            const client = await MongoClient.connect(process.env.MONGODB_URI || '');

            const db: Db = client.db();

            const result = await db.collection('messages').insertOne(newMessage);
            newMessage._id = result.insertedId;

            await client.close();

            res.status(201).json({ message: 'Message successfully saved!', newMessage });
        } catch (e) {
            if (e instanceof z.ZodError) {
                res.status(422).json({ message: 'Invalid input.', errors: e.errors });
            } else {
                console.error(e);
                res.status(500).json({ message: 'Internal server error.' });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} not allowed.`);
    }
};

export default handler;

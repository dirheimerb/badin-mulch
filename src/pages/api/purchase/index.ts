import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';



export default async function purchaseHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;
  const {
    buyerEmail,
    buyerName,
    buyerPhone,
    city,
    delivery,
    quantity,
    state,
    street,
    zip,
  } = req.body;

  const order = {
    buyerEmail,
    buyerName,
    buyerPhone,
    buyerCity: city,
    delivery,
    quantity,
    buyerState: state,
    buyerStreet: street,
    buyerZip: zip,
  };

  switch (method) {
    case 'POST':
      try {
        const purchase = await createOrder(
          order.buyerEmail,
          order.buyerName,
          order.buyerPhone,
          order.buyerCity,
          order.delivery,
          order.quantity,
          order.buyerState,
          order.buyerStreet,
          order.buyerZip,
        );

        res.status(200).json(purchase);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function createOrder(
  buyerEmail: string,
  buyerName: string,
  buyerPhone: string,
  buyerCity: string,
  delivery: string,
  quantity: number,
  buyerState: string,
  buyerStreet: string,
  buyerZip: string,
) {
  const purchase = await prisma.purchase.create({
    data: {
      buyerEmail: buyerEmail,
      buyerName: buyerName,
      buyerPhone: buyerPhone,
      buyerCity: buyerCity,
      delivery: delivery,
      quantity: quantity,
      buyerState: buyerState,
      buyerStreet: buyerStreet,
      buyerZip: buyerZip,
    },
  });
  return purchase;
}

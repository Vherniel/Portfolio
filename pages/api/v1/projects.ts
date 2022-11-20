// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([
        {
            id: "kwadvisors",
            name: "Keller Williams Advisors",
            role: "Lead Designer & Developer",
            image: "/kwadvisors.png",
            href: "https://kwadvisorsca.com/",
        },
        {
            id: "caconc",
            name: "California Concierge",
            role: "Lead Designer & Developer",
            image: "/caconc.png",
            href: "https://www.californiaconcierge.com/",
        },
        {
            id: "craveventures",
            name: "Crave Ventures",
            role: "Lead Designer & Developer",
            image: "/craveventures.png",
            href: "https://www.craveventures.co/",
        },
        {
            id: "fcc",
            name: "freeCodeCamp.org",
            role: "Claimed a Certificate",
            image: "/frecodecamp.png",
            href: "https://www.freecodecamp.org/certification/vherniel/responsive-web-design",
        },
    ]);
}

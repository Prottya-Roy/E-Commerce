import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColor = async (id: string): Promise<Color> => {
    const res = await fetch(`${URL}/${id}`
        , {
            cache: 'no-store'
        });

    if (!res.ok) {
        throw new Error('Failed to fetch Color');
    }

    return res.json();
}

export default getColor;
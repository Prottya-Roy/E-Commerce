import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSize = async (id: string): Promise<Size> => {
    const res = await fetch(`${URL}/${id}`
        , {
            cache: 'no-store'
        });

    if (!res.ok) {
        throw new Error('Failed to fetch Size');
    }

    return res.json();
}

export default getSize;
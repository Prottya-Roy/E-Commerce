import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors  = async (): Promise<Color[]> => {
    const res = await fetch(URL,{
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch Colors');
    }
    
    return res.json();
}

export default getColors;
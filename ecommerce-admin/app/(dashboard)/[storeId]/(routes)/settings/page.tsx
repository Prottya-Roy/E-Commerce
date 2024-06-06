import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface SettingPageProps {
    params: {
        storeId: string;
    }
};



const SettingPage: React.FC<SettingPageProps> = async ({
    params
}) => {
    const {userId} = auth();

    if(!userId){
        redirect("/sign-in");
    }

    const store = await prismadb.store.findFirst({
        where:{
            id: params.storeId,
            userId
        }
    });

    if(!store){
        redirect("/");
    }


    return (
        <div>
            <h1>
                Settings page
            </h1>
        </div>
    );
}

export default SettingPage;
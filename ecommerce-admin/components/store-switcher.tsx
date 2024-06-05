import { useStoreModal } from "@/hooks/use-store-modal";
import { Popover, PopoverTrigger } from "./ui/popover";
import { PrismaClient } from "@prisma/client";
import { useParams, useRouter} from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronsUpDown, Command, Store as StoreIcon} from "lucide-react";
import { cn } from "@/lib/utils";
import { CommandEmpty, CommandList } from "cmdk";
import { CommandInput } from "./ui/command";

const prisma = new PrismaClient();

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;

type Store = PrismaClient['store']['findMany'][0];


interface StoreSwitcherProps extends PopoverTriggerProps{
    items: Store[];
};

export default function StoreSwitcher({
    className,
    items = []
}: StoreSwitcherProps) {
    const storeModal = useStoreModal();
    const params = useParams();
    const router= useRouter();

    const formattedItems = items.map((item) => ({
        label: item.name,
        value: item.id
    }));

    const currentStore = formattedItems.find((item) => item.value === params.storeId);

    const [open, setOpen] = useState(false);

    const onStoreSelect = (store: {value: string, label: string}) => {
        setOpen(false);
        router.push(`/${store.value}`);
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button 
                 variant="outline"
                 size="sm"
                 role="combobox"
                 aria-expanded={open}
                 aria-label="Select a Store"
                 className={cn("w-[200px] justify-between", className)}
                >
                    <StoreIcon className="mr-2 h-4 w-4" />
                    Current Store
                    <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50"/>
                </Button>
            </PopoverTrigger>
            <PopoverTrigger>
                <Command>
                    <CommandList>
                        <CommandInput placeholder="Search Store..." />
                        <CommandEmpty>No Store Found</CommandEmpty>
                    </CommandList>
                </Command>
            </PopoverTrigger>
        </Popover>
    );
};
"use client";
import * as z from "zod";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
});

export const StoreModal = () => {
    const storeModal = useStoreModal();

    const [loading, setloading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setloading(true);
            
            const response = await axios.post('/api/stores', values);

            toast.success("Store Created Successfully");
            console.log(response.data);
        } catch (error) {
            console.log(error);
            toast.error("Store Creation Unsuccessful");
        }finally{
            setloading(false);
        }
    }

    return (
        <Modal
            title="Create Store"
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <div>
                                        <FormControl>
                                            <input disabled={loading} placeholder="E-Commerce" {...field} />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="pt-6 space-x-2 flex items-center justify-end left">
                            <Button
                                disabled={loading}
                                variant="outline"
                                onClick={storeModal.onClose}>
                                Cancel
                            </Button>
                            <Button
                                disabled={loading}
                                type="submit">Submit</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </Modal>
    );
}
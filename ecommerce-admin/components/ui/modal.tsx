"use client";

import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    useEffect(() => {
        // Ensuring that the modal state changes are handled on client-side
        if (!isOpen) {
            onClose();
        }
    }, [isOpen, onClose]);

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}

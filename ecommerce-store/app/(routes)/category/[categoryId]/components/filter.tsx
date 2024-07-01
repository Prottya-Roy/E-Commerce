"use client";

import { Color, Size } from "@/types";

interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}
const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {
    return (
        <h1>Filter</h1>
    );
};
export default Filter;
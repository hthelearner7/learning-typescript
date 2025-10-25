import axios from "axios";
import { z } from "zod";
const url = "https://www.course-api.com/react-tours-project";

export const tourSchema = z.object({
    id: z.string(),
    price: z.string(),
    image: z.string(),
    info: z.string(),
    name: z.string(),
});

export type Tour = z.infer<typeof tourSchema>;

export const fetchTours = async (): Promise<Tour[]> => {
    const response = await axios.get<Tour[]>(url);
    // console.log(response.data);

    const result = tourSchema.array().safeParse(response.data);
    // console.log(result);

    if (!result.success) {
        console.log(result.error.message);
        throw new Error(`Failed to parse tours`);
    }

    return result.data;
};

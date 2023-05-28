import { createClient } from "@sanity/client"; 
import imageUrlBuilder from "@sanity/image-url"; 

export const sanityClient = createClient({
    projectId: "8zbza731", 
    dataset: "production", 
    useCdn: true, 
    apiVersion: '2023-04-16', 
}); 
export default sanityClient; 

const builder = imageUrlBuilder(sanityClient); 
export function urlFor(source) { return builder.image(source); } 
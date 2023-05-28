export default 
{
    name: "restaurant", 
    title: "Restaurant", 
    type: "document",
    fields: 
    [
        {
            name: "name", 
            type: "string", 
            title: "Restaurant name", 
            validation: (Rule) => Rule.required(), 
        }, 
        {
            name: "short_desc", 
            type: "string", 
            title: "Short description", 
            validation: (Rule) => Rule.max(200), 
        }, 
        {
            name: "image", 
            type: "image", 
            title: "Image of the Restaurant", 
        }, 
        {
            name: "lat", 
            type: "number", 
            title: "Latitude of the Restaurant", 
            validation: (Rule) => Rule.min(-90).max(90), 
        }, 
        {
            name: "long", 
            type: "number", 
            title: "Longitude of the Restaurant", 
            validation: (Rule) => Rule.min(-180).max(180), 
        }, 
        {
            name: "address", 
            type: "string", 
            title: "Restaurant address", 
            validation: (Rule) => Rule.required(), 
        }, 
        {
            name: "rating", 
            type: "number", 
            title: "Enter a Rating from (1-5 Stars)", 
            validation: (Rule) => 
            Rule.required() 
                .min(1) 
                .max(5) 
                .error("Please enter a Value between 1 and 5"), 
        }, 
        {
            name: "type", 
            type: "reference", 
            validation: (Rule) => Rule.required(), 
            title: "Category", 
            to: [{ type: "category" }], 
        }, 
        {
            name: "dishes", 
            type: "array", 
            title: "Dishes", 
            of: [{ type: "reference", to: [{ type: "dish" }] }], 
        }, 
    ], 
}; 
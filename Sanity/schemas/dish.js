export default 
{
    name: "dish", 
    title: "Dish", 
    type: "document", 
    fields: 
    [
        {
            name: "name", 
            type: "string", 
            title: "Name of Dish", 
            validation: (Rule) => Rule.required(), 
        }, 
        {
            name: "short_desc", 
            type: "string", 
            title: "Short description", 
            validation: (Rule) => Rule.max(200), 
        }, 
        {
            name: "price", 
            type: "number", 
            title: "Price of the Dish in MYR", 
        }, 
        {
            name: "image", 
            type: "image", 
            title: "Image of the Dish", 
        }, 
    ], 
}; 
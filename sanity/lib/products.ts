export const products = {
    name: "products",
    type: "document",
    title: "Products",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "category",
        title: "Category",
        type: "string",
      },
      {
        name: "price",
        title: "Price",
        type: "string",
      },
      {
        name: "gender",
        title: "Gender",
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: "details",
        title: "Product Details",
        type: "string",
      },
      {
        title: 'Care',
        name: 'care',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: "image",
        title: "Product Image",
        type: "image",
      },
    ],
  };
  
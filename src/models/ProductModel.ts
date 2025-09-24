class ProductModel {
    categories: string[]
    image: string
    title: string
    desc: string
    link: string
    id: number

    constructor(id: number, categories: string[], image: string, title: string, desc: string, link: string) {
        this.id = id;
        this.categories = categories;
        this.image = image;
        this.title = title;
        this.desc = desc;
        this.link = link;
    }
}

export default ProductModel;
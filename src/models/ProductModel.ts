class ProductModel {
    categories: string[]
    image: string
    title: string
    review: number
    desc: string
    link: string
    id: number

    constructor(id: number, categories: string[], image: string, title: string, review: number, desc: string, link: string) {
        this.id = id;
        this.categories = categories;
        this.image = image;
        this.title = title;
        this.review = review;
        this.desc = desc;
        this.link = link;
    }
}

export default ProductModel;
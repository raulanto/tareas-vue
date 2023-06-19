
interface Productos{
    id?:number,
    title?:string,
    price?:number,
    description?:string,
    category?:{
        id?:number,
        name?:string,
        img?:string
    },
    image?:Array<string>
}

export default Productos

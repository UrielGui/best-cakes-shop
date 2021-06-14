export default function price(props) {
    const { product } = props;
    let p = product.price;
    p = p.toString().replace(/\D/g, '');
    p = p.toString().replace(/(\d{1})(\d{1,2})$/, "$1,$2");
    p = p.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    p = p.toString().replace(/^(\d)/g, "R$ $1");
    return p;
};
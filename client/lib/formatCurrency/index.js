export default (number) => `$${number.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}`;

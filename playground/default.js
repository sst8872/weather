const transaction = (type, { label, stock } = {}) => {
    console.log(type, label, stock);
};

transaction('order');

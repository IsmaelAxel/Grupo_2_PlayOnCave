// Synchronous validation
export const validate = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required Title';
    }
    if (!values.category) {
        errors.category = 'Required Category';
    }
    if (!values.price) {
        errors.price = 'Required Price';
    }  
    return errors;
};

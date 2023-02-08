export const conf = {
    production: process.env.NODE_ENV === 'development' ? false : true,
    app: {
        name: process.env.NEXT_PUBLIC_APP_NAME?.toString() || '',
    },
    api: {
        url: process.env.NEXT_PUBLIC_API_URL?.toString().toLowerCase() || '',
    },
};

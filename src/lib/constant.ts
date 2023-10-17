export const API_ENDPOINTS = {
    TableOfContent: `${process.env.NEXT_PUBLIC_HOST_NAME}/api/table_of_content`,
    Content: `${process.env.NEXT_PUBLIC_HOST_NAME}/api/content`
}

export const ROUTES = {
    Home: '/',
    Videos: '/videos',
    Resources: '/Resources',
    Content: '/content/' // dynamic route
}

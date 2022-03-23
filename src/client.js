import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "9gzz7muj",
    dataset: "production",
    apiVersion: '2021-08-31', // use a UTC date string
    useCdn: false
})
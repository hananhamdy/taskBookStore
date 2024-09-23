const url = 'https://openlibrary.org'

export const APIConfig = {
    booksListInquiry: {url: (type: any) => `${url}/subjects/${type}.json`},
    singleBookInquiry: {url: (id: any) => `${url}/works/${id}.json`},
    singleAuthorInquiry: {url: (id: any) => `${url}/authors/${id}.json`},
}
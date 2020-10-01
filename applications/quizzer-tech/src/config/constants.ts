
export const API_URL =
    process.env.NODE_ENV === "development" ? "http://quizzertech.com/wp-json/application-api/v1"
        : process.env.NODE_ENV === "test" ? "http://quizzertech.com/wp-json/application-api/v1"
            : process.env.NODE_ENV === "production" ? "http://quizzertech.com/wp-json/application-api/v1" : ''



// regex
export const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const REGEX_DATE = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
export const REGEX_ALPHANUMERIC = /[^a-z0-9 ]/gi
export const REGEX_NUMERIC = /[^0-9]/g
export const REGEX_NUMERIC_COMMA = /[^0-9,]/g
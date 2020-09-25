
export const API_URL =
    process.env.NODE_ENV === "development" ? "http://quizzertech.com/wp-json/application-api/v1"
        : process.env.NODE_ENV === "test" ? "http://quizzertech.com/wp-json/application-api/v1"
            : process.env.NODE_ENV === "production" ? "http://quizzertech.com/wp-json/application-api/v1" : ''
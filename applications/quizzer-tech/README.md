# Quizzer Tech application

Hello, everyone! 

Here you can have access to the Quizzer Tech front end code with Ionic. Quizzer Tech is a fun way to learn Tech Questions for interview. 

Hope you all have fun accessing http://quizzertech.com/

# Files Structure

more to come on this!

# Publishing the Ionic site to a Wordpress Site.

1. Add a style.css file with the content bellow (the theme name property should be the same name of the theme folder):
```sh
/*
Theme Name: quizzertech
*/
```
2. Change the index.html file to index.php

3. Add the entry to the package json

```sh
  "homepage": "/wp-content/themes/quizzertech",
```

4. Build the app 
```sh
npm run build
```
5. Upload the theme to the theme folder of your site
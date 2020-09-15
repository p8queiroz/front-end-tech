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
Theme Name: quizertechversao2
*/
```
2. Change the index.html file to index.php

3. Add to all static file the wordpress prefix:

```sh
<?php echo get_bloginfo('template_directory'); ?
```

4. In the inline javascript file, also change the "static/js" path to:
```sh
    <input id="sitename" type="hidden" value="<?php echo get_bloginfo('template_directory'); ?>">
```
```sh
+ document.getElementById("sitename").value + "/static/js/" +
```
## Manabit
This is a final project for HarvardX CS50's Web Programming with Python and JavaScript. Manabit is a Quiz app. This Web App has made for learners who bring a lot of energy and enthusiasm to acquire new knowledge and skills. Users are able to create their quizzes, take them, view scores, and check all of their results. Manabit is named after "Manabi/学び" which means learning in Japanese and "bit" which is the most basic unit of information in computing.

### Distinctiveness and Complexity
  - `Ajax` is used for exchanging data with a web server.
  - `django-crispy-forms` controls the rendering behavior of Django forms.
  - `UserCreationForm` is used for registering a new user.
  - This is a Quiz app.
  - As things have mentioned above, this app is sufficiently distinct from the other projects in CS50W. 
  - This app utilizes Django on the back-end and JavaScript on the front-end.
  - This app is mobile-responsive.

### Files
This project contains two apps(`members` and `quiz`) and a `static` directory:
* `quiz_proj`
  * `quiz_proj` - the actual python package for this project.
    * `settings.py` - settings and configuration for this project.
    * `urls.py` - the URL declarations for this project.
  * `members` - the user authentication app
    * `templates/registration` - contains login and register templates.
      * `login.html` - a template for login form.
      * `register.html` - a template for register form.
    * `urls.py` - contains a path to register
    * `views.py` - contains login and register views.
  * `quiz` - the main app for this project.
    * `templates/quiz` - contains all templates of the quiz app.
      * `base.html` - all other templates extend this base template.
      * `main.html` - a template that shows all quizzes.
      * `question.html` - a template that shows  questions of the quiz which the user has selected.
      * `result.html` - a template that shows the user results.
    * `admin.py` - imports and registers models.
    * `forms.py` - defines `QuizForm` class with Quiz model and `QuestionForm` class with Question model.
    * `models.py` - defines four models. `Topic`(category of quiz), `Quiz`()
    * `urls.py`
    * `views.py`
  * `static/quiz`
    * `css`
      * `style.css`
    * `img`
      * `bubbles.jpg`
      * `favicon.ico`
    * `js`
      * `functions.js`
      * `main.js`
      * `question.js`
  * `Procfile`
  * `requirements.txt` - python packages that need to be installed to run this app.


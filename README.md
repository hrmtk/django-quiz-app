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
This project contains 2 apps(`members` and `quiz`) and a `static` directory:
* `quiz_proj`
  * `quiz_proj` - the actual python package for this project.
    * `settings.py` - settings and configuration for this project.
    * `urls.py` - the URL declarations for this project.
  * `members`
    * `templates/registration`
      * `login.html`
      * `register.html`
    * `urls.py`
    * `views.py`
  * `quiz` -
    * `templates/quiz`
      * `base.html`
      * `main.html`
      * `question.html`
      * `result.html`
    * `admin.py`
    * `forms.py`
    * `models.py`
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
  * `requirements.txt`


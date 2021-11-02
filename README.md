## Manabit
This is a final project for HarvardX CS50's Web Programming with Python and JavaScript. Manabit is a Quiz app. This Web App has been built for learners who bring a lot of energy and enthusiasm to acquire new knowledge and skills. Users are able to create their quizzes, take them, view the score, and check all of their results. Manabit is named after "Manabi/学び" which means learning in Japanese and "bit" which is the most basic unit of information in computing.

### Examples of use
<p align="center">
  <img src="./quiz.gif" alt="Quiz app" />
</p>

* [Video Demo](https://youtu.be/AYnMPwP31v8)
* 🔥[Live Demo](https://hrmtk-manabit.herokuapp.com)🔥 - The app has been deployed to Heroku.

### Distinctiveness and Complexity
  - `Ajax` is used for exchanging data with a web server.
  - `django-crispy-forms` controls the rendering behavior of Django forms.
  - `UserCreationForm` is used for registering a new user.
  - This is a Quiz app.
  - As things have been mentioned above, this app is sufficiently distinct from the other projects in CS50W. 
  - This app utilizes Django on the back-end and JavaScript on the front-end.
  - This app is mobile-responsive.

### Files and Directories
This project contains two apps(`members` and `quiz`) and a `static` directory:
* `quiz_proj`
  * `quiz_proj` - the actual python package for the project.
    * `settings.py` - settings and configuration for the project.
    * `urls.py` - the URL declarations for the project.
  * `members` - the user authentication app
    * `templates/registration` - contains login and register templates.
      * `login.html` - a template for login form.
      * `register.html` - a template for register form.
    * `urls.py` - defines a path to register
    * `views.py` - defines login and register views.
  * `quiz` - the main app for the project.
    * `templates/quiz` - contains all templates of the quiz app.
      * `base.html` - all other templates extend this base template.
      * `main.html` - a template that shows all quizzes.
      * `question.html` - a template that shows  questions of the quiz which the user has selected.
      * `result.html` - a template that shows the user results.
    * `admin.py` - imports and registers models.
    * `forms.py` - defines `QuizForm` class with Quiz model and `QuestionForm` class with Question model.
    * `models.py` - defines four models. `Topic`(category of quiz), `Quiz`()
    * `urls.py` - defines paths for the quiz app.
    * `views.py` - defines views for the quiz app.
  * `static/quiz` - contains the stylesheet, images, and JavaScript files.
    * `css`
      * `style.css` - the stylesheet.
    * `img`
      * `bubbles.jpg` - the image of background.
      * `favicon.ico` - a favicon for the web page.
    * `js`
      * `functions.js` - handles alert messages.
      * `main.js` - handles creating a quiz and adding questions.
      * `question.js` - handles showing questions, timer, sending answer, and showing score.
  * `Procfile` - is used for deploying to Heroku. The file specifies the commands that are executed by the app on startup.
  * `requirements.txt` - python packages that need to be installed to run this app.

### Running the app
1. Clone this repository or download the code ZIP file.
2. Create virtual environment.
```
python3 -m venv venv
source venv/bin/activate
```
3. Download all packages from requirements.txt.
```
pip install -r requirements.txt
```
4. Make migrations
```
python manage.py makemigrations
python manage.py migrate
```
5. Create a superuser
```
python manage.py createsuperuser
```
6. Run the django server to start the app.
```
python manage.py runserver
```

### API
`GET /<int:pk>/detail`  
Sending a GET request to /<int:pk>/detail will return (in JSON form) a list of all questions in that quiz, in random order. Representing one question:
```
{
  'time': 2,
  'questions': 
  {
    [
      {
        'Alert the remainder when 15 is divided by 9.': 
          [
            'alert(15 / 9)', 
            'Alert[15 / 9]', 
            'alert[14/ 55]', 
            'alert(23 / 0)'
          ]
      },
          ...
    ]
  }
}
```

`POST /add/`  
The user who has created the quiz can send a POST to the /add/ route to add questions.
```
$.ajax({
  type: 'POST',
  url: '/add/',
  data: {
    'csrfmiddlewaretoken': csrftoken,
    'pk': 1,
    'question_text': 'Alert the remainder when 15 is divided by 9.',
    'correct_num': 1,
    'option_one': 'alert(15 / 9)',
    'option_two': 'Alert[15 / 9]',
    'option_three': 'alert[14/ 55]',
    'option_four': 'alert(23 / 0)'
  },
  success: function(response) {
    // Do something
  },
  error: function(error) {
    // Do something
  }
})

```

`POST /create/`  
The logged-in user can send a POST to the /create/route to create a new quiz.
```
$.ajax({
  type: 'POST',
  url: '/create/',
  data: {
    'csrfmiddlewaretoken': csrftoken,
    'quiz_title': 'JavaScript',
    'topic': 'Computer Science',
    'time': 2
  },
  success: function(response) {
    // Do something
  },
  error: function(error) {
    // Do something
  }
})

```

`POST /<int:pk>/save/`  
The user can send a POST to the /<int:pk>/save/ route to send the answer and show the score.

```
$.ajax({
    type: 'POST',
    url: `${url}save/`,
    data: {
      'csrfmiddlewaretoken': csrftoken,
      'Alert the remainder when 15 is divided by 9.': 'alert(15 / 9)',
    },
    success: function(response) {
      // Show the score
    },
    error: function(error) {
      // Do something
    }
  })
```

### Inspiration
* [HarvardX CS50's Web Programming with Python and JavaScript](https://cs50.harvard.edu/web/2020/)
* [How to create a Quiz app in Django with Javascript by Pyplane on YouTube](https://youtu.be/vXXfXRf2S4M)
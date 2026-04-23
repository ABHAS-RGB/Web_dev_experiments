from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/resources')
def resources():
    return render_template('resource.html')

@app.route('/glossary')
def glossary():
    return render_template('glossary.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    email = request.form['email']
    subject = request.form['subject']
    message = request.form['message']

    conn = sqlite3.connect('contacts.db')
    c = conn.cursor()
    c.execute("CREATE TABLE IF NOT EXISTS messages (name TEXT, email TEXT, subject TEXT, message TEXT)")
    c.execute("INSERT INTO messages VALUES (?, ?, ?, ?)", (name, email, subject, message))
    conn.commit()
    conn.close()

    return "Message saved successfully!"

if __name__ == '__main__':
    app.run(debug=True)
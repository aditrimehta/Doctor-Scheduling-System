import mysql.connector

mydb= mysql.connector.connect(
    host="localhost",
    user="root",
    password="mysql",
    database= "mydatabase"
)
def excutequery(mydb, query):
    cursor=mydb.cursor()
    cursor.execute(query)
    mydb.commit()
    print("Query Successful")
    
def signup(mydb,name,email,password):
    cursor=mydb.cursor()
    query="INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
    info= (name,email,password)
    cursor.execute(query,info)
    mydb.commit()
    print("inserted")

def login(mydb,email,password):
    cursor=mydb.cursor()
    query="SELECT password FROM users WHERE email =%s"
    cursor.execute(query,(email,))
    result= cursor.fetchone()
    if result:
        realpassword=result[0]
        if realpassword==password:
            print("login success")
        else:
            print("login unsuccessful")
    else:
        print("username not found. please sign up")

def deleteuser(mydb,email):
    cursor=mydb.cursor()
    query="DELETE FROM users WHERE email = %s"
    cursor.execute(query,(email,))
    mydb.commit()
    print("deleted")

cursor= mydb.cursor()
#cursor.execute("CREATE DATABASE mydatabase")

#query="CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))"
#query="ALTER TABLE customers ADD COLUMN name VARCHAR(255) AFTER id"
#query="ALTER TABLE customers RENAME COLUMN username TO email"
#query="ALTER TABLE customers RENAME TO users"
#excutequery(mydb,query)

#signup(mydb,"aditri","aditrixmehta","adi")
#login(mydb,"aditrixmehta","adi")
#deleteuser(mydb,"aditrixmehta")
# cursor.execute("SELECT * FROM users")

# rows = cursor.fetchall()
# for row in rows:
#     print(row)  
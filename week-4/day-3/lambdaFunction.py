import mysql.connector
import os
import json

db_config = {
    'host': os.environ['DB_HOST'],
    'port': os.environ['DB_PORT'],
    'user': os.environ['DB_USER'],
    'password': os.environ['DB_PASSWORD'],
    'database': os.environ['DB_NAME']
}


from urllib.parse import parse_qs

def lambda_handler(event, context):
    
    # Gets the entire request and puts it in JSON format
    body = json.loads(json.dumps(event))
    
    # Gets specifically the form data from the request and stores it as a dictionary in python
    data = { k: v
        for k, item in parse_qs(body["body"]).items()
        for v in item
    }
    
    # Example data value {'title': 'In Fear and Faith', 'length': '3:15', 'genre': 'Post-Hardcore', 'artist': 'Circa Survive', 'album': 'Juturna'}
    title = data["title"]
    length = data["length"]
    genre = data["genre"]
    artist = data["artist"]
    album = data["album"]

    # You can check the value of this variable by navigating to the monitoring tab in the Lambda console and clicking CloudWatch Logs
    print(data)
    
    # Connect to the MySQL Database
    connection = mysql.connector.connect(**db_config)
    cursor = connection.cursor()
    
    # Execute a create table function to make the table in case it doesn't exist
    cursor.execute(
        "create table if not exists music(id int primary key auto_increment, title varchar(50), length varchar(50), genre varchar(50), artist varchar(50), album varchar(50))"
    )
    
    # Inserts data into RDS database
    query = "insert into music (title, length, genre, artist, album) values (%s, %s, %s, %s, %s)"
    cursor.execute(query, (title, length, genre, artist, album))
    
    # Commit the transaction and close the connection
    connection.commit()
    cursor.close()
    connection.close()
    
    return {
        'statusCode': 200,
        'body': json.dumps(data)
    }
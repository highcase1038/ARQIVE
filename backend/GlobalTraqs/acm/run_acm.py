import psycopg2
from random import randrange
import configparser
import os

CHECKED_FILE = "checked_ids.txt"

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

config_path = os.path.join(BASE_DIR, "settings.ini")

config = configparser.ConfigParser()
config.sections()
config.read(config_path)
dbHost = config['settings']['HOST']
dbDatabase = config['settings']['NAME']
dbUser = config['settings']['USER']
dbPassword = config['settings']['PASSWORD']

conn = None
def get_posts(checked_ids):
    try:
        conn = psycopg2.connect(
            host=dbHost,
            database=dbDatabase,
            user=dbUser,
            password=dbPassword,
        )
        id_cur = conn.cursor()
        id_cur.execute('SELECT id FROM pins_pin;')
        ids = [r[0] for r in id_cur.fetchall()]
        id_cur.close()
        posts_to_mod = {}
        for id in ids:
            if str(id) not in checked_ids:
                post_cur = conn.cursor()
                post_cur.execute('SELECT description FROM pins_pin WHERE id =' + str(id) + ';')
                post = post_cur.fetchone()[0]
                posts_to_mod[id] = post
                post_cur.close()
                with open(CHECKED_FILE, "a+") as f:
                    f.write(str(id) + "\n")
                
        return posts_to_mod
        # first = ids[0]
        # last = ids[len(ids) - 1]

        # for x in range(5):
        #     randid = randrange(first, last)
        #     try:
        #         cur.execute('INSERT INTO pins_flagstory VALUES (' + str(randid) + ', true, 4, \'acm random test, post id:' + str(randid) + '\', 1, ' + str(randid) + ');')
        #         conn.commit()
        #     except (Exception, psycopg2.IntegrityError) as error:
        #         print(error)
        #         continue
        

    except (Exception, psycopg2.DatabaseError) as error:
            print(error)
    finally:
        if conn is not None:
            conn.close()
            
def get_saved_posts():
	if not os.path.isfile(CHECKED_FILE):
		checked_ids = []
	else:
		with open(CHECKED_FILE, "r") as f:
			checked_ids = f.read()
			checked_ids = checked_ids.split("\n")
			#comments_replied_to = filter(none, comments_replied_to)
			
	return checked_ids

def mod_posts(posts):
    try:
        conn = psycopg2.connect(
            host=dbHost,
            database=dbDatabase,
            user=dbUser,
            password=dbPassword,
        )
        cur = conn.cursor()
        for id in posts:
            rand = randrange(0, 5)
            if(rand == 4):  
                try:
                    cur.execute('INSERT INTO pins_flagstory VALUES (' + str(id) + ', true, 4, \'acm random test, post id:' + str(id) + '\', 1, ' + str(id) + ');')
                    conn.commit()
                except (Exception, psycopg2.IntegrityError) as error:
                    print(error)
                    continue
    except (Exception, psycopg2.IntegrityError) as error:
        print(error)
    finally:
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()

#start execution
checked_ids = get_saved_posts()
posts_to_mod = get_posts(checked_ids)
mod_posts(posts_to_mod)

from flask import Flask, request, jsonify
import twitter
from flask_cors import CORS

api = twitter.Api(consumer_key='zUo8rwmHaLMnNq180LiHzqSqJ',
                consumer_secret='hzAvOtElVxBqWeyS1sbm2PuwAi4Hm85FuG0JpRMZARlu618pKv',
                access_token_key='1503644835852525570-68S98C1LLUKMLMqy6mKuvqgIbNpzoC',
                access_token_secret='uAwJrzC9eP1tjIXBHtktCzoTjCg7ozJDJ2LLOEs0YEOYb')

app = Flask(__name__)
CORS(app)

@app.route('/search', methods=['POST'])
def search():
    search_term = request.json['search_term']
    tweets = api.GetSearch(search_term)
    return jsonify(tweets)



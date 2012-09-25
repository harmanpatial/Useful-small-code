#!/usr/bin/python

import os, sys
from bs4 import BeautifulSoup

def main(argv):

	f = open(argv[0])
	content = f.read()

	html_content = BeautifulSoup(content);

	tpr = html_content.find("div", class_="Normal")

	if not tpr.iframe is None:
		waste = tpr.iframe.extract()

	if not tpr.tmp is None:
		tpr.tmp.unwrap()

	for a in tpr.find_all('a'):
		str_red = a.string
		tpr.a.replace_with(str_red)

	#tp = tpr.stripped_strings
	#print "tpr :: " + str(tpr)

	article_content = ""
	for div in tpr.find_all('p'):
		article_content = article_content + str(div)

	#if article_content is "":
	#	for div in tpr.find_all('br'):
	#		article_content = article_content + str(div)

	if article_content is "":
		article_content = repr(tpr)
		print "type of tpr = " + str(type(tpr))
		print "tpr = " + str(tpr.string)
		max = len(article_content)
		article_content = article_content[20:max]
		max = len(article_content)
		article_content = article_content[0:max-6]
	print "Article Content = " + article_content
	#print "Article Content = " + repr(tp)

# Call the Main Function
if __name__ == "__main__":
    main(sys.argv[1:])

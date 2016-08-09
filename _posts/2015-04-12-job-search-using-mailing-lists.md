---
layout: post
title: Job Searching with Mailing Lists
categories: life-hacks
tags: job-search mailing-lists emacs offlineimap rss2email gnus dovecot
excerpt: Several years ago, I discovered an interesting way to search for a job that I would want using mailing lists.
author: Nick Peihl
---

# Setting the stage
Several years ago I got into the habit of reading mailing lists of open source software packages I often used. I found interesting projects, ideas and hacks while reading the mailing lists. Here is a short list of several software package mailing lists of which I read.

- emacs
- django
- org-mode
- offlineimap
- rss2email
- gnus
- qgis
- openlayers

At the time I was also fascinated with the idea of reading mailing lists, RSS and email offline, hence why [offlineimap](http://offlineimap.org/), [rss2email](https://github.com/turbodog/rss2email) and [gnus](http://gnus.org/) were topics of interest. I had a pretty elaborate setup where I would use offlineimap to download and sync everything from my GMail account every 15 minutes. Offlneimap would recognize new emails, convert them into Maildir format and save them to my computer. This required leaving my laptop on 24/7 anpaying a little extra on our utility bill. I installed a local email server called [Dovecot](http://dovecot.org/) that served messages to Gnus where I could read my emails offline. As I read, deleted or starred the emails in Gnus, Dovecot would mark them similarly on my local machine and offlineimap would sync with GMail.

The impending death of Google Reader led me to [rss2email](https://github.com/turbodog/rss2email), a program first developed by the late Aaron Swartz while in his mid-teens with continued development by the open source community . The program would poll RSS feeds, also convert the articles into [Maildir](https://en.wikipedia.org/wiki/Maildir) format and save them to my computer. I imported my RSS feeds list into rss2email's config file and also set it up to run every 15 minutes. Offlineimap would also sync these RSS articles back to GMail. Now, I could use Gnus to read my RSS feeds, too.

I had initially set up Gnus to to use NNTP with [Gmane.org](http://gmane.org/) which hosts most of my mailing lists. But I didn't like waiting for Gnus to download the messages. Instead I subscribed to the mailing lists and set up automatic email filters in GMail to direct mailing list emails to dedicated folders. Then offlineimap would download and sync those folders as well. And I could read them instantly using Dovecot and Gnus.

However, I still found myself going back to GMane.org to search the mailing list archives. I decided to download the mailing list archives to my computer, too. GMane has an option for [exporting archives into mbox formats](http://gmane.org/export.php) so I wrote a bash script to download the mbox files 100 messages at a time while pausing for a few minutes between to be nice to GMane's servers. This process took several days since some of my mailing list archives are enormous. I found a script called [mb2md](http://batleth.sapienti-sat.org/projects/mb2md/) which I used to convert the mbox files to Maildir. I decided not to burden myself with uploading all the archives to GMail, so I configured offlineimap to ignore them. Instead I backed them up on a local USB drive.

# Job Seeking
Around the same time as I set this up, I also started looking for a new job. I had eight years invested into my current employer and I was feeling stuck. So I went through the typical routine of browsing job listing websites. But I didn't like the results I was getting, so I decided to take an unorthodox path. My field is Geographic Information Systems (GIS) and several of my mailing lists were geared towards open source GIS software (QGIS, PostGIS, GeoDjango, etc). I figured that people sending emails to the mailing list might have employers who were hiring. So I wrote some more Python code to parse the email addresses from the Maildir messages and list distinct domains (everything after the @ symbol). I ignored the free email providers like gmail.com, hotmail.com, etc and listed company domains. The email domains are typically the same as company websites, websites that often had an Employment page. I spent several hours manually checking and bookmarking websites. I found several places that were hiring and sent out resumes to a bunch.

But, in the end, doing all of that wasn't what got me a new job. My wife found an open position while browsing job listing websites and suggested I apply. That's how I came to be where I am now and I'm quite happy with it.

# Epilogue
My hope by writing this is that someone somewhere may find it interesting or useful. I actually haven't used the offline mail system for a while now. I'm back to checking email and mailing lists on GMail and reading RSS on [Newsblur.com](https://newsblur.com/).  But I don't regret the time I spent setting up the offline system because it was fun and interesting.

If anyone is interested in more details, feel free to contact me.

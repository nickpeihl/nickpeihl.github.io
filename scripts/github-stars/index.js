var GitHubApi = require('github')
var testAuth = require('./testAuth.json')
var path = require('path')
var fs = require('fs')
var leftpad = require('left-pad')

var github = new GitHubApi({
  debug: true,
  protocol: 'https',
  host: 'api.github.com',
  pathPrefix: '',
  headers: {
    'user-agent': 'Peihl-Gets-Stars',
    'Accept': 'application/vnd.github.v3.star+json'
  },
  Promise: require('bluebird'),
  followRedirects: false,
  timeout: 5000
})

github.authenticate({
  type: 'oauth',
  token: testAuth.token
})

var starredRepos = []

var template = star => `---
layout: post
title: Why I starred ${star.repo.full_name}
categories: Why-I-Starred
tags: github
stardate: ${star.starred_at}
gh_id: ${star.repo.id}
author: Nick Peihl
---

[${star.repo.full_name}](${star.repo.html_url})

**WRITE CONTENT**

*"Why I starred" is a series of articles describing projects I star on GitHub and why I found them interesting. My hope is that you'll find them interesting as well.*

`

var req = github.activity.getStarredRepos({ per_page: 100}, getRepos)
function getRepos(err, res) {
  if (err) throw err

  starredRepos = starredRepos.concat(res)

  if (github.hasNextPage(res)) {
    github.getNextPage(res, getRepos)
  } else {
    outputStarredRepos()
  }
}

function outputStarredRepos() {
  starredRepos.reverse()
  starredRepos.forEach(createDraft)
  console.log('starred repos: ' + starredRepos.length)
}

function createDraft(star, index) {
  var padIndex = leftpad(index, 4, 0)
  var filename = padIndex + '-' + star.repo.full_name.replace('/', '-') + '.md'
  var filepath = path.join('../../_drafts', filename)
  fs.writeFileSync(filepath, template(star))
}

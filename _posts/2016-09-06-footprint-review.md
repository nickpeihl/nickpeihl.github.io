---
layout: post
title: Crowdsourcing Building Footprints in San Juan County
category: mapping
tags: crowdsourcing gis webmaps
author: Nick Peihl
excerpt: Footprint Review was developed by the GIS team at San Juan County WA to encourage the public to help review County map data.
thumbnail: /assets/footprint-review-v2.png

---

In 2015, San Juan County, WA used Eagleview's [ChangeFinder](http://www.eagleview.com/Products/ImageSolutionsAnalytics/PictometryAnalyticsDeployment.aspx#ChangeFinder) service to compare 2008 and 2013 aerial imagery to analyze and highlight new and modified construction and demolitions. As a result, the County Assessor was able to identify millions of dollars in additional property assessments. Additionally, the GIS department received a shapefile of new building footprints.

ChangeFinder uses proprietary software algorithms to automatically detect and outline buildings from aerial imagery. The detected building outlines (footprints) are saved in a shapefile with attributes explaining whether the building is new, modified or demolished. The GIS department at San Juan County took ownership of the new building footprints shapefile.

Historically, the County GIS department created and updated their own building footprints shapefile by manually tracing imagery or drawing from permit application plans. Unfortunately, this dataset was not well maintained due to staff cutbacks in 2009. Receiving the ChangeFinder building footprints shapefile was very exciting for the GIS team.

The ChangeFinder building footprints were very good, but not always better than the older dataset. County GIS Coordinator, Nick Peihl, decided footprints from the two datasets would be best determined one-by-one. The better of the two footprints would make it into the final dataset. In total, there were 18,000 footprints that needed manual review. Peihl developed an ad-hoc web application where he could review randomly selected footprints and click a button to select the better option. Votes for each footprint are tallied in a database which can later be used to determine which footprint makes it into the final dataset.

![Screenshot of the first version of Footprint Review](/assets/footprint-review-v1.png)

Peihl shared the application with Sutherland and Information Services Manager, Tony Harrell. It was suggested that the application could be shared with the public to crowdsource the review process. In order to encourage users to review, Footprint Review was redesigned with a game aspect where reviewers would be rewarded with unlockable "achievements" based on how many reviews they made. Footprint Review was announced and made available to the public on May 27, 2016. Since its public release over 11,000 footprints have been reviewed. The GIS team is extremely grateful to all reviewers and feedback from the community has been very positive. Peihl expects to compile and release the final dataset on the San Juan County website in Winter 2016.

![Screenshot of final Footprint Review application](/assets/footprint-review-v2.png)

![Screenshot of achievements in Footprint Review](/assets/footprint-review-achievements.png)

You may still contribute to Footprint Review at <http://sjcgis.org/footprint-review>. More information and the source code for the web application is available at <http://github.com/sjcgis/footprint-review>.

*A version of this article was first published in [issue 42](http://www.waurisa.org/thesummit/TheSummit_Issue42.pdf) of the Washington State Chapter of The Urban and Regional Information Systems Association's (WAURISA) ["The Summit" newsletter](http://www.waurisa.org/thesummit/index.html) in Summer 2016.*

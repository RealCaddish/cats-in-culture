# cats-in-culture

***What?***

I’m creating a map that traces the history of domestic cats over time. By looking at the earliest examples of cats living alongside humans in Cyprus during the Neolithic Period, to their introduction to the Americas, I hope to paint a cultural portrait of the domestication process as well as the cultural affinities and attitudes towards cats over time. By tracing the domestic cat through Cyprus, Egypt, Kazakhstan, and Eurasia, I hope to create an interesting story map that showcases various points in history and how they intersect with attitudes towards cats. I’m planning to utilize a UI slider that can be moved forward and backward to trace these periods over time as well as points on a map that show various archaeological sites where cats are found or created via artwork. 

***Where?*** 

My project will span the globe. Starting in Cyprus during the Neolithic Period, I plan to show how cats became domesticated over time and explain to the user their significance in various cultures as well as how these cultural attitudes changed over time due to the course of history. As the user clicks forward, a new time period will be explained as well as a pan of the map to the general location being mapped. 

***When?***


The map spans general ‘periods of interest’ when major historical events took place that influenced the movement of the domestic cat into expanding territory out of the ancient Near East. From the Neolithic Period to the Egyptian Old, Middle, and New Kingdoms, as well as the Hellenistic, Roman, Islamic, Dark Ages, Middle Ages, and the Columbian Exchange in the pre-modern period, the user will gain a general understanding of these various points in history by means of the domestic cat. 



***Data Description***
     In understanding where and how cats were domesticated, a storyline was developed using data that was largely made from personal research. The data was organized into two primary csv spreadsheets. The first included the fields, ‘Slide number,’ ‘Slide Title’, ‘Description’, ‘CenterLat,’ ‘CenterLong,’ and zoom ‘Scale.’ This first csv spreadsheet (A) forms the slide content pertaining to the narrative of the cat domestication process. The second csv spreadsheet (B) describes the individual archaeological sites that will be displayed as points on the map. Fields for CSV B include ‘Site Name,’ ‘Latitude,’ ‘Longitude,’ ‘ModalTitle,’ ‘Description,’ ‘Image File Path,’ ‘Date,’ and ‘ID.’ CSV B is straightforward. We have an archaeological site name, lat and long points for the location, a title for the Modal window, content that describes the significance of the site and/or why it is important for cat studies, and image file path that links to an image of the site to be displayed within the modal, a date of the archaeological site (approximated), and an ID field that will be used to link them to corresponding slides from CSV A. 
     
     
   It should be noted that there is an incredible amount of data about the cat’s domestication process. It will be important that users be notified about this at the beginning via a greeting splashscreen and should express that the examples showcased are the most prominent examples used to create a narrative. Obviously, with the shear amount of data, there will always be caveats, exceptions, and ample material that could always run counter to what is being presented. The domestic cat (Felis catus) has seen at least 5 millennia of evolutionary development largely artificial by human influence. To trace this history, a linear time map of development would be an excellent means to describe this transformation, but users should know that the tapestry of events is long, complex, and this project does not represent an all-encompassing history of the domestic cat. 

***Map Objectives*** 
The primary goal of this project is to lend users an informative, enjoyable, and impressionable experience that describes broad brushstrokes of history and culture through the eyes of a domestic cat. By centering around the object of a cat, users should be able to see how cultural attitudes change through time and space. I want users to be able to have a newfound appreciation for archaeology that is often ‘lost in the sauce’ because much of the data is restrained to dusty bookshelves with poor-quality, black and white photography including information that is often too technical and underappreciated by society at large. I believe archaeology has become less-approachable, enjoyable, and informative to the public because of the archaic nature in which the data is stored and kept exclusive. 
 
 Although I would like for people to gain a newfound respect for our felid friends, I’d like for users to also find a newfound appreciation for the rich artistic and cultural history that surrounds them. The cat is a prime specimen for examining cultural attitudes, traditions, and their interchange over time. I admit it might be a tad comical to create a map so involved with cats (who actually doesn’t like cats?), but I think it will provide the backdrop for the larger idea of granting a user a window into a different time and space in the world which is exciting, stimulating, and an all-around enjoyable learning experience. 
One other general ui objective that should be stressed is that the map should remain simple to use and understand. Not only should the user interface be aesthetically pleasing/appropriate, buttons and the time ui slider should be very straightforward and easy to comprehend. I want the user to have fun with the experience which requires the map ‘flying’ to the next location and the basemap being something stylistically historic and almost rustic to give a sense of depth and adventure. 


***User Needs***

The original persona used to identify the likely user for the cat map was outlined in Module 6 and will be re-expressed below: 
A typical user will most likely be an average member of the public. The user will likely span any age, gender affiliation, and race.
Jenna is an avid cat fan who always seeks to learn more about cats. Lately, she’s been interested in learning more about how her cats made it into her home so easily. She’d like to learn more about the cat domestication process but doesn’t want to spend countless hours and rabbit holes on Wikipedia. Fortunately, a cat map exists that she can use to learn linearly and geographically about how cats made it from ferocious wild animals into trusted household pets.
For this cat map to be successful, Jenna needs to understand all the user elements intuitively and without ‘pause for concern.’ This ui is not built for a professional with lots of bells and whistles, nor much d3 animation for that matter. Rather, this is a story map that should be enjoyable for everyone of all ages. 

***Data Sources*** 
Data used to build CSV A and CSV B come from a myriad of websites, articles, and links I’ll provide below. The primary books for research on the topic of cat domestication include:

1.	Sarah Brown. The Cat: a Natural and Cultural History (Princeton, NJ: Princeton University Press, 2020), 14 – 35. 
2.	L.A. Vocelle. Revered and Reviled: A Complete History of the Domestic Cat (United States: Great Cat Publications, 2016), 8 – 78. 
3.	Jean-Denis Vigne et al. “Early Taming of the Cat in Cyprus” Science 304 (May 2004): 259.
4.	J.D. Vigne et al. “Earliest ‘Domestic’ Cats in China Identified as Leopard Cat (Prionailurus bengalensis) (Published online: PLoS One, 2016), 1-11. 
5.	Haruda, A., Ventresca Miller, A.R., Paijmans, J.L.A. et al. “The Earliest Domestic Cat on the Silk Road” (Sci Rep 10, 11241 (2020). https://doi.org/10.1038/s41598-020-67798-6

***Updated Feedback***
Since my last discussion with Boyd, some modifications have been addressed concerning the user popup. As a user mouses over a site, a popup with an image and description was the initial idea. Instead, it would be wiser to be able and click an archaeological site wherein a modal appears at about a quarter of the page. This modal will have the same pertinent information as the popup but will require less formatting and an easier user experience. This is especially the case for users on mobile devices that will not have the mouseover ability as those on a PC. 

Additionally, I’d like to add slight-transparent polygons that cover various areas pertaining to elements of the cat map (i.e. a polygon that covers areas of Felus catus’ wild progenitor’s natural habitat, the Fertile Crescent, Greco-Roman Empires, Islamic Golden Age, etc). These polygons will appear/disappear on user click through the slideshow as the map is changed relative to where the user is situated in it. 

**New Content** 

***Thematic Representation***

The cat map falls under the category of a dot distribution map.  The map is not displaying intensities, densities, quantifiable distortions (i.e. cartogram). Quite simply, the map is largely aesthetic, and the dot distribution is made of archaeological sites dispersed throughout North Africa, Cyprus, Eurasia, and the Americas and Australia. 

***User Interface***
The user interface is comprised of a few elements. First and foremost, the map needs to be displayed at a full-extent of the browser because the user needs to be immersed in the experience. Once the user opens the cat map, I would like a splash screen to greet the visitor to briefly explain the project, express the caveats of cat history, and invite the user on a wild feline ride through time and space. After the user clicks off the splash screen, the user will be flown to the first location (Cyprus). There, a description box will be displayed on the lower righthand side of the map with a Title, subtitle (i.e. date range), and the description content explaining the Neolithic Period and humanity’s first evidence of cats living alongside humans in the archaeological record. The user will be able to scroll through this box and read this content. Occasionally, an image will be centered within the paragraph text to lend more depth and enjoyable content. 
     
  Two circular image buttons will be centered at the bottom of the map. These images will be a cat walking forward and one walking backward pertaining to the direction the user is moving through the map. As the user clicks one or the other, the map will automatically fly to the next location with an updated description box with fresh content. 
 
 On the map itself, users will see either a polygon or a point location depending on where the user lands. To go back to the example of Cyprus, two sites will be displayed that the user can click or touch with a mobile device. Once clicked, a modal will appear at either one quarter of the page (for a PC screen) or ¾ the screen on a mobile device. I want margins to appear thick for both screen sizes because the user should not feel like they’ve been taken off of the map. The polygons should be simple and straightforward – not requiring a legend. For one at a time, a polygon will express an intuitive link to the description box content. For example, when describing the Egyptian Empire in the New Kingdom, a light, slightly opaque red, purple, or some color polygon should draw around the entire perimeter of the Empire’s territorial state. These polygons will add a nice aesthetic touch while providing historical context to the user about what the is being described. 

The map will also have a title with two opposite images on either side of it in the top left. 


***Technology Stack*** 
Programming Languages: HTML5, CSS, Javascript
Javascript Libraries: Leaflet, Bootstrap 5, Omnivore or PapaParse, jQuery if things get hairy and I need something quick and intuitive 
Data formats: CSVs (A and B), GeoJson, TopoJson
Data processing: QGIS (convert csv to GeoJson), MapShaper for TopoJson creation for territorial polygons
Other: MapBox for basemap creation (as well as area polygons too, Boyd?)
Hosting platform: my GitHub portfolio page 



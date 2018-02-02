# MVP
Create a working website for **Thank Heaven** Children's Boutique. Following a UX Design teams mock-up, create a page with necessary routes using React and Webpack. Render products, brands, featured products and featured brands, images and brand stories. Display reviews and contact information with contact form. Use the Instagram API, and google maps API for store location and directions. Complete all components using bootstrap and CSS.

# POST-MVP

-Use factual data from client to seed in database.   
-Website Analytics.  
-Preview Product/Brand before posting in Admin Page.  
-E-commerce     

# App Components
## Header
Links to Facebook and Instagram and routes to each page.
## Footer
Links to Facebook and Instagram. Contact and Store information.
## Homepage
Header and Footer displayed here. Also, logo, welcome message, boutique information, carousel for new arrivals, images of featured products and featured brands, links to products and brand page, images from Instagram feed.
## Products Page
Header and Footer displayed here. Images and text of featured product items, it's corresponding brand, and a brief description. Images from Instagram feed.
## Brands Page
Header and Footer displayed here. Images and text of brands, where the brand is made, story behind the brand, a quote behind why the owner chose the brand and link to other products from that brand.
## Reviews Page
Reviews from Facebook
## Contact Page
A fixed image of store location on google maps, a link to directions to **Thank Heaven** using google maps, contact information, store hours and a contact form.

# Functional Components
|Component|Priority|EST time|Time Invested|Actual Time|
|---------|:------:|-------:|:-----------:|:---------:|
|Database | H   |2hrs    |  2hrs    |   2hrs.     |
|Header/Footer| H | 2hrs   |         |   N/A     |
|Homepage |  H  |   6hrs|  4hrs  |   N/A        |
|Products Page|  H  |   5hrs|     2.5hrs| N/A      |
|Brands Page|   H   |   5hrs|  2.5hrs| N/A    |
|Reviews    |   H   |   5hrs|         |    N/A    |
|Contact    |   H    |   5hrs|  4hrs. |  N/A  |
|Bootstrap| H       | 5hrs|    |        | N/A     |
|Instagram| H       |   3hrs|       |      N/A   |
|Google Maps API|H| 6hrs   | 1hr  |  N/A    |
|Forms      |   H       | 10hrs|    4hrs   |   N/A   |
|Admin Page|    H    |16hrs  |  6hrs |    N/A     |
|CSS         |  H |12hrs |      |     N/A    |
|Webpacks       |   H       | 1hr   |  1hr  | N/A    |
|Axios API Call |  H   | 3hrs   | 3hrs |  
|Auth       | H  | 1hr  |  1hr  |  N/A    |



# Helper Functions
|Function|Description|
|-------:|:---------:|
|COMING  | SOON|


# Images
### Wireframes:
![alt text](http://res.cloudinary.com/jkarlin929/image/upload/v1517495773/THWireframes_jshjld.jpg "Wireframes")
### Component Hierarchy:
![alt text](http://res.cloudinary.com/jkarlin929/image/upload/v1517495768/THTree_ctmn6k.jpg "Hierarchy")
### Admin Page/CRUD:
![alt text](http://res.cloudinary.com/jkarlin929/image/upload/v1517495751/THAdmin_yd4nfg.jpg "Admin Page/CRUD Functionailty")
### Database:
![alt text](http://res.cloudinary.com/jkarlin929/image/upload/v1517495757/THDB_anehmc.jpg "Database")
### Time Priority Matrix:
![alt text](http://res.cloudinary.com/jkarlin929/image/upload/v1517495763/THTimeMatrix_v4is4p.jpg "Time Matrix")

# Issues and Resolutions
To submit contact form, using webpack and react, nodemailer is not compatable because it uses templates in express. Need to build on front-end only.

Webpacks comes along with many issues, including uploading local images to display. This particular problem took 2.5 hours to solve, and uses url-loader and file-loader, to deal with small and large files respectively. The solution found was located here and was very thorough and helpful: https://medium.com/a-beginners-guide-for-webpack-2/handling-images-e1a2a2c28f8d

Another issue related to webpacks was being unable to refresh and load the correct page or directly access a url that wasn't the root level. The solutions floating around the internet seemingly did not help, and dealt mostly with solving it on the webpack side, which included using a npm package called webpack-dev-server and perhaps many other related middleware. After 3.5 hours, the solution, or workaround rather, was to change the express backend to directly serve the files needed to each individual link.

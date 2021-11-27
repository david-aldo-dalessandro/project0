/* David D'Alessandro
* 11/26/21 
* JS file to contain variables and functions to export the images for the locations
*/

const locs = [
    {name: "South Ocean City, Maryland", image: "./resources/locPics/ritasSOC.jpg", image2: "./resources/locPics/ritasSOCFLIP.jpg", index: 0, flip: 'no'},
    {name: "Rehoboth Beach, Delaware", image: "./resources/locPics/ritasDE.jpg",  image2: "./resources/locPics/ritasDEFLIP.jpg", index: 2, flip: 'no'},
    {name: "North Ocean City, Maryland", image: "./resources/locPics/ritasNOC.jpg",  image2: "./resources/locPics/ritasNOCFLIP.jpg", index: 1, flip: 'no'}
    
]

const map =[
    {name: "Map", imageDef: "./resources/locPics/mapBlank.PNG", image: "./resources/locPics/mapBlank.PNG", image2: "./resources/locPics/mapPin1.PNG", image3: "./resources/locPics/mapPin2.PNG", image4: "./resources/locPics/mapPin3.PNG",index: 0},

]
export { locs, map } ;
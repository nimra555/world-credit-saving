# world-credit-saving

First of all create the HTML and CSS for your slider. Use one single div that contains everything else. In your slider case, the container div should contain two major divs, one for the slider images and another containing control buttons, that is, the arrows.

In the container of slider images, put multiple images.

Use CSS a class such as 'active' on the first image only. Now write CSS to hide all images except the one having the 'active' class. Also use CSS to place the navigator arrows where you want them to be.

Now open the page in the browser and see if it is okay. When its okay move forward to JS

Add click events to your arrow buttons (not considering autoplay at this moment)

Following is the logic for NEXT button

CurrentActiveImageIndex = Get the index of the image with the class active
TotalNumberOfImages = Count total number of images in the slider
NextActiveImageIndex = CurrentActiveImageIndex + 1
IF NextActiveImageIndex == TotalNumberOfImages
THEN NextActiveImageIndex = 0
Remove the class active from all images
Add the class active to the image at NextActiveImageIndex
Logic for the PREVIOUS button would just the opposite, following are the changed lines only

NextActiveImageIndex = CurrentActiveImageIndex - 1
IF NextActiveImageIndex < 0
THEN NextActiveImageIndex = TotalNumberOfImages - 1

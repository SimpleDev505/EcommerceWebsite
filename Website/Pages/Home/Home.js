var MainImage = document.getElementById("MainSolid");
var MainImage_Collection = ["/Website/Images/MainDisplay/Main1_1.png",
   "/Website/Images/MainDisplay/Main2_1.png",
   "/Website/Images/MainDisplay/Main3_1.png"
]
var MainImage_Collection_Size = ["600px",
   "600px",
   "600px"
]
var MainImage_Collection_PositionX = ["right",
   "left",
   "right"
]
var MainImage_index = 0;
function updateMainImage(){
   // MainImage.style = MainImage_Style;
   MainImage.animate([{opacity:0
                     }
                     ,{opacity:1
                     }]
                     ,1000);
   MainImage.style.background = "url("+MainImage_Collection[MainImage_index]+") no-repeat "+MainImage_Collection_PositionX[MainImage_index];
   MainImage.style.backgroundSize = MainImage_Collection_Size[MainImage_index];
   MainImage_index = (MainImage_index +1) % MainImage_Collection.length;
   console.warn(MainImage_index);
}
setInterval(updateMainImage,3000);
// .style.background = "url('/Website/Images/MainDisplay/Main1_1.png') no-repeat";
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
const TitleText = document.getElementById("TitleText");
const TitleText_PositionX = ["left","right","left"];
var TitleText_Collection = ["Unbeatable Deals, Just for You! Shop Now and Save Big!",
                            "Innovative Essentials: Redefine Your Everyday with Our Bestsellers!",
                            "Unlock Exclusive Benefits: Members-Only Rewards Await!"
                           ]
var Middle_Section = document.getElementById("Middle");
var Middle_Section_Color = ["#f5d55a","#78D3FD","#C4B3F2"];
var MainImage_index = 0;


function updateMainImage(){
   // MainImage.style = MainImage_Style;
   MainImage.animate([{opacity:0
                     }
                     ,{opacity:1
                     }]
                     ,1000);
   TitleText.innerHTML = ""+TitleText_Collection[MainImage_index] ;
   TitleText.parentElement.style.float = TitleText_PositionX[MainImage_index];

   Middle_Section.style.backgroundColor = Middle_Section_Color[MainImage_index];
   MainImage.style.background = "url("+MainImage_Collection[MainImage_index]+") no-repeat "+MainImage_Collection_PositionX[MainImage_index];
   MainImage.style.backgroundSize = MainImage_Collection_Size[MainImage_index];
   MainImage_index = (MainImage_index +1) % MainImage_Collection.length;
   console.warn(MainImage_index);
}
setInterval(updateMainImage,3000);



// .style.background = "url('/Website/Images/MainDisplay/Main1_1.png') no-repeat";
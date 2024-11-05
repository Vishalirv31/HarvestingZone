function search() {
    var searchInput = document.getElementById('search').value.toLowerCase().trim();
    
    var pages = {
        'vegetables': 'vegtable.html',
        'tomato':'tomato.html',
        'carrot':'carrot.html',
        'potato':'potato.html',
        'onion':'onion.html',
        'small onion':'smallonion.html',
        'vandakai':'ladiesfinger.html',
        'katharikai':'brinjal.html',
        'avarakai': 'boardbeans.html',
        'beetroot':'beetroot.html',
        'fruits': 'fruits.html',
        'papaya':'papaya.html',
        'mathulai':'pomegranate',
        'banana':'banana.html',
        'koyyapalam':'Guava.html',
        'sapota':'sapota.html',
        'sitapalam':'Custardapple.html',
        'nellikai':'Gooseberry.html',
        'mango':'mango.html',
        'palapalam':'Jackfruit.html',
        'leafy plants': 'leafyplants.html',
        'siru keerai':'siru.html',
        'ponakani keerai':'ponnanganni.html',
        'manathakali keerai':'manathakkali.html',
        'pasala keerai':'pasala.html',
        'arai keerai':'arai.html',
        'agathi keerai':'agati.html',
        'vendhaya keerai':'vendhaya.html',
        'murugai keerai':'murungai.html',
        'vallarai keerai':'vallarai.html',
        'flowers': 'flowers.html',
        'malli poo':'jasmine.html',
        'kolikondai poo':'red.html',
        'rose':'paneer.html',
        'vada malli':'vadamalli.html',
        'sendu malli':'marigold.html',
        'pichi poo':'pichi.html',
        'shewanthi':'shewanti.html',
        'arali poo':'arali.html',
        'kanagamaram':'kanagamaram.html',
        'nuts': 'nuts.html',
        'munthiri':'cashewnut.html',
        'badam':'almonds.html',
        'walnut':'walnut.html',
        'pista':'pista.html',
        'verkadalai':'peanuts',
        'pala kotai':'brazilnuts.html',
        'athi palam':'dryfigs.html',
        'dry grapes':'drygrapes.html',
        'elakkai':'cardamom.html',
        'seeds': 'seeds.html',
        'basil seed':'basil.html',
        'pumpkin seed':'pumpkin.html',
        'flax seed':'flax.html',
        'chia seed':'chia.html',
        'soyabean seed':'soya.html',
        'quinoa seed':'quinoa.html',
        'wheat':'wheat.html',
        'sunflower seed':'sunflower.html',
        'vandhayam seed':'fenugreek.html'
    };

    if (pages[searchInput]) {
        window.location.href = pages[searchInput];
    } else {
        alert("Not found");
    }
}







// function performSearch() {

// const searchInput = document.getElementById("search");

//     const search = searchInput.value.toLowerCase().trim();

//     switch (search) {
//         case "vegetables":
//         window.location.href = "vegtable.html";
//         break;
//             case "tomato":
//             window.location.href = "tomato.html";
//             break;
//             case "carrot":
//                 window.location.href = "carrot.html";
//                 break;
//             case "potato":
//                 window.location.href = "potato.html";
//                 break;
//             case "onion":
//                 window.location.href = "onion.html";
//                 break;
//             case "small onion":
//                 window.location.href = "smallonion.html";
//                 break;
//             case "ladies finger":
//                 window.location.href = "ladiesfinger.html";
//                 break;       
//             case "brinjal":
//             window.location.href = "brinjal.html";
//             break;
//             case "board bean":
//             window.location.href = "boardbeans.html";
//             break;
//             case "beetroot":
//             window.location.href = "beetroot.html";
//             break;
//         case "fruits":
//         window.location.href = "fruits.html";
//         break;
//             case "papaya":
//             window.location.href = "papaya.html";
//             break;
//             case "pomegranate":
//                 window.location.href = "pomegranate.html";
//                 break;
//             case "banana":
//                 window.location.href = "banana.html";
//                 break;
//             case "guava":
//                 window.location.href = "Guava.html";
//                 break;
//             case "sapota":
//                 window.location.href = "sapota.html";
//                 break;
//             case "custardapple":
//                 window.location.href = "Custardapple.html";
//                 break;       
//             case "gooseberry":
//             window.location.href = "Gooseberry.html";
//             break;
//             case "mango":
//             window.location.href = "mango.html";
//             break;
//             case "jackfruit":
//             window.location.href = "Jackfruit.html";
//             break;
//         case "leafyplant":
//         window.location.href = "leafyplants.html";
//         break;
//             case "siru keerai":
//             window.location.href = "siru.html";
//             break;
//             case "ponnangani keerai":
//                 window.location.href = "ponnanganni.html";
//                 break;
//             case "manathakali keerai":
//                 window.location.href = "manathakkali.html";
//                 break;
//             case "pasala keerai":
//                 window.location.href = "pasala.html";
//                 break;
//             case "arai keerai":
//                 window.location.href = "arai.html";
//                 break;
//             case "agati keerai":
//                 window.location.href = "agati.html";
//                 break;       
//             case "vendhaya keerai":
//                 window.location.href = "vendhaya.html";
//                 break;
//             case "murungai keerai":
//                 window.location.href = "murungai.html";
//                 break;
//             case "vallarai keerai":
//                 window.location.href = "vallarai.html";
//                 break;
//         case "nuts":
//         window.location.href = "nuts.html";
//         break;
//                 case "cashewnut":
//                 window.location.href = "cashewnut.html";
//                 break;
//                 case "almonds":
//                     window.location.href = "almonds.html";
//                     break;
//                 case "walnut":
//                     window.location.href = "walnut.html";
//                     break;
//                 case "pista":
//                     window.location.href = "pista.html";
//                     break;
//                 case "peanut":
//                     window.location.href = "peanuts.html";
//                     break;
//                 case "brazilnuts":
//                     window.location.href = "brazilnuts.html";
//                     break;       
//                 case "dry fig":
//                     window.location.href = "dryfigs.html";
//                     break;
//                 case "dry grapes":
//                     window.location.href = "drygrapes.html";
//                     break;
//                 case "cardamom":
//                      window.location.href = "cardamom.html";
//                      break;
//         case "seeds":
//         window.location.href = "seeds.html";
//         break;
//                     case "basil seeds":
//                     window.location.href = "basil.html";
//                     break;
//                     case "pumpkin seeds":
//                         window.location.href = "pumpkin.html";
//                         break;
//                     case "flax seeds":
//                         window.location.href = "flex.html";
//                         break;
//                     case "chia seeds":
//                         window.location.href = "chia.html";
//                         break;
//                     case "soya bean seeds":
//                         window.location.href = "soya.html";
//                         break;
//                     case "quinoa seeds":
//                         window.location.href = "quinoa.html";
//                         break;       
//                     case "wheat seeds":
//                     window.location.href = "wheat.html";
//                     break;
//                     case "sunflower seeds":
//                     window.location.href = "sunflower.html";
//                     break;
//                     case "fenugreek seeds":
//                     window.location.href = "fenugreek.html";
//                     break;
            
//         default:
//             alert("No matching category found.");
//     }
// }

// searchInput.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {

//         event.preventDefault();
//         performSearch();
//     }
// });





// document.addEventListener("DOMContentLoaded", () => {
//     const searchBox = document.getElementById("search");

//     searchBox.addEventListener("keydown", (event) => {
//         if (event.key === "Enter") {
//             const query = searchBox.value.toLowerCase();
            
//             // Define the mapping of search terms to section IDs
//             const sections = {
//                 "vegetables": "vegetables",
//                 "fruits": "fruits",
//                 "leafy plants": "leafy-plants",
//                 "flowers": "flowers",
//                 "nuts": "nuts",
//                 "seeds": "seeds"
//             };

//             // Check if query matches any of the keys in `sections`
//             const sectionId = sections[query];
//             if (sectionId) {
//                 window.location.hash = `#${sectionId}`;
//             } else {
//                 alert("Section not found. Please try another search term.");
//             }
//         }
//     });
// });

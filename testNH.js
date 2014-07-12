
var NH = [ "Division", "Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Specie" ];

var testNodes = { 
"val":"Division",
"nodes": [ {
  "val": "Animalia", "link": "http:kingxxx", "note": "king foo note",
  "nodes": [ { 
    "val": "Chordata", "link": "http:phyl xxx", "note": "phyl note",
    "nodes": [ { 
      "val": "Aves",
      "nodes": [ {
        "val": "Columbiformes", "link":"http://en.wikipedia.org/wiki/Columbiformes",
        "nodes": [ {
          "val": "Columbidae",
          "nodes": [ {
            "val": "Columbia livia", "note":"Rock Dove"
            } ]
          } ]
        }, { 
        "val": "Passeriformes", "note":"perching/songbirds", "link":"http://en.wikipedia.org/wiki/Passeriformes",
        "nodes": [ {
          "val": "Turdidae",
          "nodes": [ {
            "val": "Turdios migratrius", "note":"American Robin"
            } ]
          }, {
          "val": "Icteridae", "note":"new world, colorful",
          "nodes": [ {
            "val": "Quiscalus quiscala", "note":"Common Grackle"
            }, {
            "val": "Agelaius phoeniceus", "note":"Red-Winged Blackbird"
            } ]
          }, {
          "val": "xx",
          "nodes": [ {
            "val": "xx yy", "note":"zz"
            } ]
          } ]
        }, { 
        "val": "Fringilidae"
        } ]
      }, { 
      "val": "Mammalia"
      }, { 
      "val": "Amphibia"
      } ]
    }, { 
    "val": "Arthropoda", "link": "http:phyl xxx", "note": "phyl foo note",
    "nodes": [ { 
      "val": "xxx"
      } ]
    }, { 
    "val": "Annalida", "link": "http:phyl xxx", "note": "phyl foo note",
    "nodes": [ { 
      "val": "xeee"
      } ]
    }
  ]
}, {
  "val":"Uncategorized",
  "nodes": [
      { "val": "common red ladybug" },
      { "val": "black ladybug w/ white spots" },
      { "val": "small green (immature?) grasshopper" },
      { "val": "very small green fly http://en.wikipedia.org/wiki/Dolichopodidae" },
      { "val": "small brown/black slug" },
      { "val": "common big black ant" },
      { "val": "lichen on tree" },
      { "val": "turkey tail fungus http://en.wikipedia.org/wiki/Trametes_versicolor" },
      { "val": "brown ground fungus" },
      { "val": "big purple mushroom" },
      { "val": "little long-stemmed brown mushroom" },
      { "val": "fern" },
      { "val": "forsythia" }
    ]
} ]
};

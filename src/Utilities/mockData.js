export const mockData = { 
    houses: [
        {  
         url:"https://www.anapioficeandfire.com/api/houses/81",
         name:"House Corbray of Heart's Home",
         region:"",
         coatOfArms:"Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)",
         words:"",
         titles:[  
            "Lord of Heart's Home",
            "King of the Fingers (historical)"
         ],
         seats:[  
            "Heart's Home"
         ],
         currentLord:"https://www.anapioficeandfire.com/api/characters/681",
         heir:"https://www.anapioficeandfire.com/api/characters/677",
         overlord:"https://www.anapioficeandfire.com/api/houses/7",
         founded:"",
         founder:"https://www.anapioficeandfire.com/api/characters/256",
         diedOut:"",
         ancestralWeapons:[  
            "Lady Forlorn"
         ],
         cadetBranches:[  

         ],
         swornMembers:[  
            "https://www.anapioficeandfire.com/api/characters/255",
            "https://www.anapioficeandfire.com/api/characters/256",
            "https://www.anapioficeandfire.com/api/characters/447",
            "https://www.anapioficeandfire.com/api/characters/654",
            "https://www.anapioficeandfire.com/api/characters/677",
            "https://www.anapioficeandfire.com/api/characters/681",
            "https://www.anapioficeandfire.com/api/characters/871",
            "https://www.anapioficeandfire.com/api/characters/1182"
         ]
        }
    ]
}

export const mockAction1 = {
    type: 'STORE_HOUSES',
    houses: mockData.houses
}

export const mockAction2 = {
    type: 'STORE_MEMBERS',
    members: mockData.swornMembers
}
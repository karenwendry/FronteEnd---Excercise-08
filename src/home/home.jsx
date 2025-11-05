// src/home/Home.jsx
import React, { useState } from "react";
import Search from "./Search"; 

const Home = () => {
  // Data semua pet
  const allPets = [
    // Common
    {
      name: "Golden Lab",
      rarity: "Common",
      skill: "Digging Friend: ~10% chance to dig up random seed shop seed every minute.",
      evolution: ['Puppy', 'Labrador', 'Golden Guardian'],
      type: "Earth",
      effect: "Finds rare seeds"
    },
    {
      name: "Bee",
      rarity: "Common",
      skill: "Every ~25s, flies to a nearby fruit and pollinates it, applying the pollinated mutation.",
      evolution: ['Larva', 'Worker Bee', 'Queen Bee'],
      type: "Insect",
      effect: "Boosts fruit mutations"
    },
    {
      name: "Bunny",
      rarity: "Common",
      skill: "Carrot Chomper: every 40s, eats a carrot at a 1.5x value bonus.",
      evolution: ['Baby Bunny', 'Hopper', 'Mega Bunny'],
      type: "Grass",
      effect: "Increases carrot value"
    },
    {
      name: "Crab",
      rarity: "Common",
      skill: "Pinch Pocket: occasionally goes to another player and pinches them and grants the owner a small amount of sheckles.",
      evolution: ['Crabby', 'Pincher', 'Treasure Crab'],
      type: "Water",
      effect: "Steals sheckles"
    },
    {
      name: "Seagull",
      rarity: "Common",
      skill: "When the player gets a lucky harvest: there is a 4% chance to get an extra seed.",
      evolution: ['Chick', 'Gull', 'Sky Master'],
      type: "Air",
      effect: "Bonus seed on lucky harvest"
    },
    // Rare
    {
      name: "Orange Tabby",
      rarity: "Rare",
      skill: "Every 90 seconds, naps for 15 seconds and causes new fruit within 15 studs to grow 1.5x larger.",
      evolution: ['Kitten', 'Tabby', 'Sunset Cat'],
      type: "Fire",
      effect: "Grows fruits bigger"
    },
    {
      name: "Sea Turtle",
      rarity: "Rare",
      skill: "Every ~11 minutes, shares its wisdom with a random pet, granting 1k bonus XP!",
      evolution: ['Hatchling', 'Turtle', 'Wise Shell'],
      type: "Water",
      effect: "Grants XP & wet mutation"
    },
    {
      name: "Rooster",
      rarity: "Rare",
      skill: "Increases egg hatch speed by ~20%.",
      evolution: ['Chick', 'Rooster', 'Dawn Caller'],
      type: "Air",
      effect: "Faster egg hatching"
    },
    {
      name: "Seal",
      rarity: "Rare",
      skill: "Seal the Deal: when selling pets, has a (0.22 * weight + 2.5)% chance to get the pet back as its egg equivalent!",
      evolution: ['Pup', 'Seal', 'Deal Maker'],
      type: "Water",
      effect: "Chance to get pet egg back"
    },
    {
      name: "Orangutan",
      rarity: "Rare",
      skill: "Helping Hands: when crafting, each material has a chance for it not to be consumed.",
      evolution: ['Baby Ape', 'Orangutan', 'Master Crafter'],
      type: "Earth",
      effect: "Saves crafting materials"
    },
    // Mythic
    {
      name: "Butterfly",
      rarity: "Mythic",
      skill: "Rainbow Flutter: every ~30m, flies to a nearby fruit with 5+ mutations, removes 5 mutations from it and turns it rainbow!",
      evolution: ['Caterpillar', 'Chrysalis', 'Rainbow Wings'],
      type: "Air",
      effect: "Turns fruit rainbow"
    },
    {
      name: "Mimic Octopus",
      rarity: "Mythic",
      skill: "Mimicry: every ~20m mimics and copies an ability from another pet and performs its ability.",
      evolution: ['Tiny Octo', 'Mimic', 'Master of Disguise'],
      type: "Water",
      effect: "Copies other pet skills"
    },
    {
      name: "Barn Owl",
      rarity: "Mythic",
      skill: "Wise Shopper: pets bought from shops directly have a chance to get an extra base weight.",
      evolution: ['Owlet', 'Owl', 'Wisdom Keeper'],
      type: "Air",
      effect: "Extra base weight on purchase"
    },
    {
      name: "Chimpanzee",
      rarity: "Mythic",
      skill: "Every 5m, grabs a random crop from the player's garden and goes to the sell stall and sells it for them.",
      evolution: ['Baby Chimp', 'Chimp', 'Sales Monkey'],
      type: "Earth",
      effect: "Auto-sells crops"
    },
    {
      name: "Red Fox",
      rarity: "Mythic",
      skill: "Scoundrel: attempts to steal (duplicate) a seed from another user's plot every ~6m.",
      evolution: ['Kit', 'Fox', 'Master Thief'],
      type: "Fire",
      effect: "Steals seeds from others"
    },
    // Transcendent
    {
      name: "Kitsune",
      rarity: "Transcendent",
      skill: "Nine-Tail Myth: sometimes goes to another player's fruit, mutates it with chakra or fox fire chakra and duplicates then hands it to the player.",
      evolution: ['Fox Kit', 'Nine-Tailed', 'Divine Kitsune'],
      type: "Spirit",
      effect: "Mutates & duplicates fruit"
    },
    {
      name: "Reaper",
      rarity: "Transcendent",
      skill: "Every 22:00-12:00, sacrifices 4 random fruits in the player's garden to apply a medium passive boost or medium XP boost to a random pet in the player's garden.",
      evolution: ['Scythe', 'Reaper', 'Time Lord'],
      type: "Dark",
      effect: "Sacrifices fruit for boosts"
    },
    {
      name: "Black Cat",
      rarity: "Transcendent",
      skill: "Occasionally goes to a witch's cauldron cosmetic and naps near for a duration. New fruit within radius have bonus size.",
      evolution: ['Kitten', 'Cat', 'Witch Familiar'],
      type: "Magic",
      effect: "Bonus size for nearby fruit"
    },
    {
      name: "Raccoon",
      rarity: "Transcendent",
      skill: "Rascal: occasionally steals fruit from other players' plots and hands it to you.",
      evolution: ['Rascal', 'Bandit', 'Master Thief'],
      type: "Shadow",
      effect: "Steals fruit from others"
    },
    {
      name: "Space Squirrel",
      rarity: "Transcendent",
      skill: "A Space Odd-Nut-Sy: every ~17m, ~15% chance to mutate a nearby fruit, applying the void-touched mutation.",
      evolution: ['Nut', 'Squirrel', 'Cosmic Nut'],
      type: "Void",
      effect: "Applies void mutation"
    }
  ];

  // State untuk search query
  const [query, setQuery] = useState("");

  // Filter pet berdasarkan query
  const filteredPets = allPets.filter(pet =>
    pet.name.toLowerCase().includes(query.toLowerCase()) ||
    pet.type.toLowerCase().includes(query.toLowerCase()) ||
    pet.rarity.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-8 py-10">

      <div className="p-6 mt-10">
        <h2 className="text-2xl font-bold mb-4">All Pets Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPets.map((pet, index) => {
            let cardClass = "bg-gray-100 border-gray-300";
            let badgeClass = "bg-gray-500";
            let borderClass = "border-gray-500";

            switch (pet.rarity) {
              case 'Common':
                cardClass = "bg-gradient-to-br from-green-50 to-emerald-100 border-green-300";
                badgeClass = "bg-green-500";
                borderClass = "border-green-500";
                break;
              case 'Rare':
                cardClass = "bg-gradient-to-br from-blue-50 to-sky-100 border-blue-300";
                badgeClass = "bg-blue-500";
                borderClass = "border-blue-500";
                break;
              case 'Mythic':
                cardClass = "bg-gradient-to-br from-purple-50 to-violet-100 border-purple-300";
                badgeClass = "bg-purple-500";
                borderClass = "border-purple-500";
                break;
              case 'Transcendent':
                cardClass = "bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-300";
                badgeClass = "bg-amber-500";
                borderClass = "border-amber-500";
                break;
              default:
                break;
            }

            const [hovered, setHovered] = useState(false);

            return (
              <div
                key={index}
                className={`w-64 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 ${cardClass} ${borderClass} text-center relative flex flex-col items-center gap-3`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ transform: hovered ? 'translateY(-4px)' : 'translateY(0)' }}
              >
                <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold text-white ${badgeClass} z-10`}>
                  {pet.rarity}
                </div>

                <div className="absolute top-2 right-2 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>

                
                <h3 className="text-lg font-bold text-gray-800 mt-2">{pet.name}</h3>

             
                <div className="w-36 h-36 bg-white rounded-lg flex items-center justify-center text-4xl shadow-sm">
                  🐾
                </div>

                
                <div className="text-sm text-gray-600 text-center">
                  {pet.skill}
                </div>

                {/* Info Boxes (Evolution, Type, Effect) */}
                <div className="w-full space-y-2 mt-2 text-left text-sm text-gray-700">
                  <div>
                    <strong className="text-blue-700 font-bold">EVOLUTION →</strong> <span>{pet.evolution.join(' → ')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>
                      <span className="font-semibold">Type:</span> {pet.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    <span className="text-emerald-600 font-semibold">
                      Effect: {pet.effect}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
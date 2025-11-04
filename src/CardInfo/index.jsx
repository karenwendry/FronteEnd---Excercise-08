// src/etc/CardInfo/index.jsx

import { PawPrint } from 'lucide-react'; // ✅ Import ikon lucide-react

const PetCard = ({ name, rarity, skill, evolution, type, effect }) => {
  // Tentukan warna berdasarkan rarity
  const getStyle = (rarity) => {
    switch (rarity) {
      case 'Common':
        return {
          background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
          border: '#81c784',
          badgeBg: '#4CAF50'
        };
      case 'Rare':
        return {
          background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
          border: '#64b5f6',
          badgeBg: '#2196F3'
        };
      case 'Mythic':
        return {
          background: 'linear-gradient(135deg, #ede7f6, #d1c4e9)',
          border: '#9575cd',
          badgeBg: '#9C27B0'
        };
      case 'Transcendent':
        return {
          background: 'linear-gradient(135deg, #fff8e1, #ffe082)',
          border: '#ffb74d',
          badgeBg: '#FF9800'
        };
      default:
        return {
          background: '#f5f5f5',
          border: '#bdbdbd',
          badgeBg: '#757575'
        };
    }
  };

  const style = getStyle(rarity);

  return (
    <div
      style={{
        width: '250px',
        borderRadius: '16px',
        padding: '16px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)', // Shadow lebih halus
        border: `1px solid ${style.border}`,
        textAlign: 'center',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        background: style.background,
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        position: 'relative', // Penting untuk posisi absolute
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* Rarity Badge - Pojok Kiri Atas */}
      <div
        style={{
          position: 'absolute',
          top: '8px',
          left: '8px',
          display: 'inline-block',
          padding: '4px 8px', // Lebih kecil
          borderRadius: '12px', // Lebih bulat
          fontSize: '10px', // Lebih kecil
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: style.badgeBg,
          zIndex: 10,
        }}
      >
        {rarity}
      </div>

      {/* Logo - Pojok Kanan Atas (HANYA IKON PAWPRINT) */}
      <div
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <PawPrint size={20} color="#333" /> {/* ✅ Hanya ikon, ukuran kecil */}
      </div>

      {/* Nama Pet - Di Atas Foto */}
      <h3 style={{
        margin: '0 0 8px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
      }}>
        {name}
      </h3>

      {/* Placeholder Gambar */}
      <div
        style={{
          width: '150px',
          height: '150px',
          background: 'white',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        🐾
      </div>

      {/* Skill - Di Bawah Foto, Tengah, Tanpa Tulisan "Skill:" */}
      <div
        style={{
          width: '100%',
          textAlign: 'center', // Tengah
          fontSize: '14px',
          lineHeight: '1.5',
          marginTop: '12px',
          color: '#555',
        }}
      >
        {skill}
      </div>

      {/* Info Boxes (Evolution, Type, Effect) - Tetap Seperti Sebelumnya */}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginTop: '12px',
      }}>
        <div style={{
          textAlign: 'left',
          fontSize: '13px',
          color: '#555',
        }}>
          <strong style={{ color: '#1565c0', fontWeight: 'bold' }}>EVOLUTION →</strong> <span>{evolution.join(' → ')}</span>
        </div>
        <div style={{
          textAlign: 'left',
          fontSize: '13px',
          color: '#555',
        }}>
          <strong style={{ color: '#6a1b9a', fontWeight: 'bold' }}>TYPE →</strong> <span>{type}</span>
        </div>
        <div style={{
          textAlign: 'left',
          fontSize: '13px',
          color: '#555',
        }}>
          <strong style={{ color: '#f57c00', fontWeight: 'bold' }}>EFFECT →</strong> <span>{effect}</span>
        </div>
      </div>
    </div>
  );
};

// Ekspor semua kategori sebagai objek
export const CardInfo = {
  Common: () => (
    <>
      <PetCard
        name="Golden Lab"
        rarity="Common"
        skill="Digging Friend: ~10% chance to dig up random seed shop seed every minute."
        evolution={['Puppy', 'Labrador', 'Golden Guardian']}
        type="Earth"
        effect="Finds rare seeds"
      />
      <PetCard
        name="Bee"
        rarity="Common"
        skill="Every ~25s, flies to a nearby fruit and pollinates it, applying the pollinated mutation."
        evolution={['Larva', 'Worker Bee', 'Queen Bee']}
        type="Insect"
        effect="Boosts fruit mutations"
      />
      <PetCard
        name="Bunny"
        rarity="Common"
        skill="Carrot Chomper: every 40s, eats a carrot at a 1.5x value bonus."
        evolution={['Baby Bunny', 'Hopper', 'Mega Bunny']}
        type="Grass"
        effect="Increases carrot value"
      />
      <PetCard
        name="Crab"
        rarity="Common"
        skill="Pinch Pocket: occasionally goes to another player and pinches them and grants the owner a small amount of sheckles."
        evolution={['Crabby', 'Pincher', 'Treasure Crab']}
        type="Water"
        effect="Steals sheckles"
      />
      <PetCard
        name="Seagull"
        rarity="Common"
        skill="When the player gets a lucky harvest: there is a 4% chance to get an extra seed."
        evolution={['Chick', 'Gull', 'Sky Master']}
        type="Air"
        effect="Bonus seed on lucky harvest"
      />
    </>
  ),

  Rare: () => (
    <>
      <PetCard
        name="Orange Tabby"
        rarity="Rare"
        skill="Every 90 seconds, naps for 15 seconds and causes new fruit within 15 studs to grow 1.5x larger."
        evolution={['Kitten', 'Tabby', 'Sunset Cat']}
        type="Fire"
        effect="Grows fruits bigger"
      />
      <PetCard
        name="Sea Turtle"
        rarity="Rare"
        skill="Every ~11 minutes, shares its wisdom with a random pet, granting 1k bonus XP! Every 150 seconds, splashes water at a nearby fruit and it has some chance to get wet mutation!"
        evolution={['Hatchling', 'Turtle', 'Wise Shell']}
        type="Water"
        effect="Grants XP & wet mutation"
      />
      <PetCard
        name="Rooster"
        rarity="Rare"
        skill="Increases egg hatch speed by ~20%."
        evolution={['Chick', 'Rooster', 'Dawn Caller']}
        type="Air"
        effect="Faster egg hatching"
      />
      <PetCard
        name="Seal"
        rarity="Rare"
        skill="Seal the Deal: when selling pets, has a (0.22 * weight + 2.5)% chance to get the pet back as its egg equivalent! This bonus is capped at 5% per pet sold."
        evolution={['Pup', 'Seal', 'Deal Maker']}
        type="Water"
        effect="Chance to get pet egg back"
      />
      <PetCard
        name="Orangutan"
        rarity="Rare"
        skill="Helping Hands: when crafting, each material has a chance for it not to be consumed."
        evolution={['Baby Ape', 'Orangutan', 'Master Crafter']}
        type="Earth"
        effect="Saves crafting materials"
      />
    </>
  ),

  Mythic: () => (
    <>
      <PetCard
        name="Butterfly"
        rarity="Mythic"
        skill="Rainbow Flutter: every ~30m, flies to a nearby fruit with 5+ mutations, removes 5 mutations from it and turns it rainbow!"
        evolution={['Caterpillar', 'Chrysalis', 'Rainbow Wings']}
        type="Air"
        effect="Turns fruit rainbow"
      />
      <PetCard
        name="Mimic Octopus"
        rarity="Mythic"
        skill="Mimicry: every ~20m mimics and copies an ability from another pet and performs its ability."
        evolution={['Tiny Octo', 'Mimic', 'Master of Disguise']}
        type="Water"
        effect="Copies other pet skills"
      />
      <PetCard
        name="Barn Owl"
        rarity="Mythic"
        skill="Wise Shopper: pets bought from shops directly have a chance to get an extra base weight."
        evolution={['Owlet', 'Owl', 'Wisdom Keeper']}
        type="Air"
        effect="Extra base weight on purchase"
      />
      <PetCard
        name="Chimpanzee"
        rarity="Mythic"
        skill="Every 5m, grabs a random crop from the player's garden and goes to the sell stall and sells it for them. There is a 2.38% chance the crop does not get collected."
        evolution={['Baby Chimp', 'Chimp', 'Sales Monkey']}
        type="Earth"
        effect="Auto-sells crops"
      />
      <PetCard
        name="Red Fox"
        rarity="Mythic"
        skill="Scoundrel: attempts to steal (duplicate) a seed from another user's plot every ~6m. If it successfully steals a seed, it will try to steal another one."
        evolution={['Kit', 'Fox', 'Master Thief']}
        type="Fire"
        effect="Steals seeds from others"
      />
    </>
  ),

  Transcendent: () => (
    <>
      <PetCard
        name="Kitsune"
        rarity="Transcendent"
        skill="Nine-Tail Myth: sometimes goes to another player's fruit, mutates it with chakra or fox fire chakra and duplicates then hands it to the player."
        evolution={['Fox Kit', 'Nine-Tailed', 'Divine Kitsune']}
        type="Spirit"
        effect="Mutates & duplicates fruit"
      />
      <PetCard
        name="Reaper"
        rarity="Transcendent"
        skill="Every 22:00-12:00, sacrifices 4 random fruits in the player's garden to apply a medium passive boost or medium XP boost to a random pet in the player's garden."
        evolution={['Scythe', 'Reaper', 'Time Lord']}
        type="Dark"
        effect="Sacrifices fruit for boosts"
      />
      <PetCard
        name="Black Cat"
        rarity="Transcendent"
        skill="Occasionally goes to a witch's cauldron cosmetic and naps near for a duration. New fruit within radius have bonus size."
        evolution={['Kitten', 'Cat', 'Witch Familiar']}
        type="Magic"
        effect="Bonus size for nearby fruit"
      />
      <PetCard
        name="Raccoon"
        rarity="Transcendent"
        skill="Rascal: occasionally steals fruit from other players' plots and hands it to you."
        evolution={['Rascal', 'Bandit', 'Master Thief']}
        type="Shadow"
        effect="Steals fruit from others"
      />
      <PetCard
        name="Space Squirrel"
        rarity="Transcendent"
        skill="A Space Odd-Nut-Sy: every ~17m, ~15% chance to mutate a nearby fruit, applying the void-touched mutation."
        evolution={['Nut', 'Squirrel', 'Cosmic Nut']}
        type="Void"
        effect="Applies void mutation"
      />
    </>
  ),
};

// Ekspor fungsi untuk menampilkan SEMUA PET
export const AllPets = () => (
  <>
    <CardInfo.Common />
    <CardInfo.Rare />
    <CardInfo.Mythic />
    <CardInfo.Transcendent />
  </>
);

export default CardInfo;
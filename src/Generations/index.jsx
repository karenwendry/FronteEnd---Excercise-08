// // src/Generations/index.jsx
// import React from 'react';
// import { CardInfo } from '../CardInfo/index.jsx';

// const Generations = ({ selectedGen }) => {
//   const renderGeneration = () => {
//     switch (selectedGen) {
//       case 'Generasi 1':
//         return <CardInfo.Common />;
//       case 'Generasi 2':
//         return <CardInfo.Rare />;
//       case 'Generasi 3':
//         return <CardInfo.Mythic />;
//       case 'Generasi 4':
//         return <CardInfo.Transcendent />;
//       case 'All':
//         return <CardInfo.AllPets />;
//       default:
//         return (
//           <div style={{ textAlign: 'center', padding: '40px' }}>
//             <h2>Silakan pilih Generasi</h2>
//           </div>
//         );
//     }
//   };

//   return (
//     <div style={{
//       padding: '20px',
//       display: 'flex',
//       flexWrap: 'wrap',
//       gap: '20px',
//       justifyContent: 'center',
//     }}>
//       {renderGeneration()}
//     </div>
//   );
// };

// export default Generations;
// src/App.jsx
import { AllPets } from './CardInfo/index.jsx';

export default function App() {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f5f9f7',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    }}>


      {/* Navbar / Dropdown Generasi (Contoh Code Base) */}
      <div style={{
        marginBottom: '20px',
        position: 'relative',
      }}>


          <div style={{
            padding: '6px 12px',
            background: '#4caf50',
            color: 'white',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
          }}>
            All
          </div>
        </div>
      

      {/* Main Content - Tampilkan SEMUA PET */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <AllPets />
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '40px',
        padding: '16px',
        backgroundColor: '#2e7d32',
        color: 'white',
        textAlign: 'center',
        fontSize: '12px',
      }}>
        
      </footer>
    </div>
  );
}
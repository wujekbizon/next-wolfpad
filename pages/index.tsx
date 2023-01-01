import Link from 'next/link';

const HomePage = () => {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <div style={{ color: 'white' }}>
        <h1>Home Page</h1>
      </div>
      <button
        style={{
          padding: '5px 15px',
          fontSize: '18px',
          backgroundColor: 'rgba(67, 30, 63, 1)',
          color: 'white',
        }}
      >
        <Link href="wolfpad">Wolfpad</Link>
      </button>
    </main>
  );
};
export default HomePage;

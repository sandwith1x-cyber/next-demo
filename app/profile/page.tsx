export default function ProfilePage() {
  // ข้อมูลโปรไฟล์ 2 คน
  const profiles = [
    {
      id: 1,
      name: 'Tontrakun Sutthikoed',
      role: 'Frontend Developer',
      bio: '66121591',
      avatar: 'https://i0.wp.com/www.animefeminist.com/wp-content/uploads/2017/07/elite-header.jpg?w=572&ssl=1', // รูปตัวอย่าง
    },
    {
      id: 2,
      name: 'narasak thongphijit',
      role: 'Backend Developer',
      bio: '66123365',
      avatar: 'https://f.ptcdn.info/871/053/000/owz140jtwnIgUCRr6to-o.jpg',
    },
  ];

  return (
    <section style={{ padding: 20 }}>
      <h1>Profile Page</h1>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          marginTop: 20,
        }}
      >
        {profiles.map((profile) => (
          <div
            key={profile.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 16,
              width: 280,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={profile.avatar}
              alt={`${profile.name} avatar`}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h2 style={{ marginTop: 12 }}>{profile.name}</h2>
            <h4 style={{ color: '#666', marginTop: 4 }}>{profile.role}</h4>
            <p style={{ marginTop: 8 }}>{profile.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

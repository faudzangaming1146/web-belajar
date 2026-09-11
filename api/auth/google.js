export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  // Proteksi Khusus Guru
  if (email !== process.env.ALLOWED_TEACHER_EMAIL) {
    return res.status(403).json({ 
      success: false, 
      message: 'Akses Ditolak! Email Anda tidak terdaftar sebagai Guru.' 
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Login Guru Berhasil!',
    user: { email: email, role: 'guru' }
  });
}

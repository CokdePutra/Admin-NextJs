import { useState, useEffect } from "react";

interface User {
  id_user: number;
  email: string;
  password: string;
  nama: string;
  nim: string;
  no_telp: string;
  golongan_darah: string;
  tanggal_lahir: string;
  alamat: string;
  level_user: string;
}

interface ModalTambahUserProps {
  show: boolean;
  onClose: () => void;
  onAddUser: (email: string, password: string, name: string, nim: string, no_telp: string, golongan_darah: string, tanggal_lahir: string, alamat: string, level_user: string) => void;
  onEditUser: (id: number, email: string, password: string, name: string, nim: string, no_telp: string, golongan_darah: string, tanggal_lahir: string, alamat: string, level_user: string) => void;
  user: User | null;
}

const ModalTambahUser: React.FC<ModalTambahUserProps> = ({ show, onClose, onAddUser, onEditUser, user }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userNim, setUserNim] = useState("");
  const [userNoTelp, setUserNoTelp] = useState("");
  const [userGolonganDarah, setUserGolonganDarah] = useState("");
  const [userTanggalLahir, setUserTanggalLahir] = useState("");
  const [userAlamat, setUserAlamat] = useState("");
  const [userLevel, setUserLevel] = useState("");

  const resetForm = () => {
    setUserEmail("");
    setUserPassword("");
    setUserName("");
    setUserNim("");
    setUserNoTelp("");
    setUserGolonganDarah("");
    setUserTanggalLahir("");
    setUserAlamat("");
    setUserLevel("");
  };

  useEffect(() => {
    if (user) {
      setUserEmail(user.email || "");
      setUserPassword(user.password || "");
      setUserName(user.nama || "");
      setUserNim(user.nim || "");
      setUserNoTelp(user.no_telp || "");
      setUserGolonganDarah(user.golongan_darah || "");

      if (user.tanggal_lahir) {
        const formattedDate = new Date(user.tanggal_lahir).toISOString().split("T")[0];
        setUserTanggalLahir(formattedDate);
      } else {
        setUserTanggalLahir("");
      }

      setUserAlamat(user.alamat || "");
      setUserLevel(user.level_user || "");
    } else {
      resetForm();
    }
  }, [user, show]);

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSaveUser = async () => {
    if (!userEmail || !userName || !userNim || !userNoTelp || !userGolonganDarah || !userTanggalLahir || !userAlamat || !userLevel) {
      alert("Semua field kecuali password wajib diisi!");
      return;
    }

    if (user && user.id_user) {
      // Update user
      onEditUser(
        user.id_user,
        userEmail,
        userPassword,
        userName,
        userNim,
        userNoTelp,
        userGolonganDarah,
        userTanggalLahir,
        userAlamat,
        userLevel
      );
      alert("User berhasil diperbarui!");
    } else {
      // Add new user
      onAddUser(
        userEmail,
        userPassword,
        userName,
        userNim,
        userNoTelp,
        userGolonganDarah,
        userTanggalLahir,
        userAlamat,
        userLevel
      );
      alert("User berhasil ditambahkan!");
    }

    resetForm();
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-999 w-full m-auto">
      <div className="bg-white p-6 rounded-lg w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4">{user ? "Edit User" : "Tambah User"}</h2>
        <input
          type="text"
          placeholder="Email"
          required
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="password"
          placeholder="Password (jangan diisi jika tidak ingin diubah)"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Nama"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="NIM"
          value={userNim}
          onChange={(e) => setUserNim(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="No. Telp"
          value={userNoTelp}
          onChange={(e) => setUserNoTelp(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Golongan Darah"
          value={userGolonganDarah}
          onChange={(e) => setUserGolonganDarah(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="date"
          placeholder="Tanggal Lahir"
          value={userTanggalLahir}
          onChange={(e) => setUserTanggalLahir(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <textarea
          placeholder="Alamat"
          value={userAlamat}
          onChange={(e) => setUserAlamat(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <select
          required
          value={userLevel}
          onChange={(e) => setUserLevel(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        >
          <option value="">Pilih Role</option>
          <option value="admin">Admin</option>
          <option value="mahasiswa">Mahasiswa</option>
          <option value="dosen">Dosen</option>
        </select>
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveUser}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {user ? "Update User" : "Add User"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTambahUser;
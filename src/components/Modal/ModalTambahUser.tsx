import { useState, useEffect } from "react";

interface ModalTambahUserProps {
  show: boolean;
  onClose: () => void;
  onAddUser: (name: string, nim: string, no_telp: string, golongan_darah: string, tanggal_lahir: string, alamat: string) => void;
  user?: {
    nama?: string;
    nim?: string;
    no_telp?: string;
    golongan_darah?: string;
    tanggal_lahir?: string;
    alamat?: string;
  };
}

const ModalTambahUser: React.FC<ModalTambahUserProps> = ({ show, onClose, onAddUser, user }) => {
  const [userName, setUserName] = useState("");
  const [userNim, setUserNim] = useState("");
  const [userNoTelp, setUserNoTelp] = useState("");
  const [userGolonganDarah, setUserGolonganDarah] = useState("");
  const [userTanggalLahir, setUserTanggalLahir] = useState("");
  const [userAlamat, setUserAlamat] = useState("");

  useEffect(() => {
    if (user) {
      setUserName(user.nama || "");
      setUserNim(user.nim || "");
      setUserNoTelp(user.no_telp || "");
      setUserGolonganDarah(user.golongan_darah || "");
      setUserTanggalLahir(user.tanggal_lahir || "");
      setUserAlamat(user.alamat || "");
    }
  }, [user]);

  const handleAddUser = () => {
    onAddUser(userName, userNim, userNoTelp, userGolonganDarah, userTanggalLahir, userAlamat);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{user ? "Edit User" : "Tambah User"}</h2>
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
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAddUser}
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

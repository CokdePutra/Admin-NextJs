"use client";

import ButtonDefault from "../Buttons/ButtonDefault";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id_user: number;
  nama: string;
  nim: string;
  no_telp: string;
  golongan_darah: string;
  tanggal_lahir: string;
  alamat: string;
}

interface TableUsersProps {
  onEditUser: (user: User) => void;
  onDeleteUser: (id: number) => void;
}

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true
});

const TableUsers: React.FC<TableUsersProps> = ({ onEditUser, onDeleteUser }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get("/users");
        setUsers(data);
      } catch (error) {
        setError('Failed to fetch users');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!users.length) return <div>No users found</div>;

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                Nama
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                NIM
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                No. Telp
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                Tanggal Lahir
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                Golongan Darah
              </th>
              <th className="px-4 py-4 text-right font-medium text-dark dark:text-white xl:pr-7.5">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id_user}>
                <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${
                  index === users.length - 1 ? "border-b-0" : "border-b"
                }`}>
                  <h5 className="text-dark dark:text-white">{user.nama}</h5>
                  <p className="mt-[3px] text-body-sm font-medium">{user.alamat}</p>
                </td>
                <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                  index === users.length - 1 ? "border-b-0" : "border-b"
                }`}>
                  <p className="text-dark dark:text-white">{user.nim}</p>
                </td>
                <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                  index === users.length - 1 ? "border-b-0" : "border-b"
                }`}>
                  <p className="text-dark dark:text-white">{user.no_telp}</p>
                </td>
                <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                  index === users.length - 1 ? "border-b-0" : "border-b"
                }`}>
                  <p className="text-dark dark:text-white">{new Date(user.tanggal_lahir).toLocaleDateString()}</p>
                </td>
                <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                  index === users.length - 1 ? "border-b-0" : "border-b"
                }`}>
                  <p className="inline-flex rounded-full px-3.5 py-1 text-body-sm font-medium bg-[#219653]/[0.08] text-[#219653]">
                    {user.golongan_darah}
                  </p>
                </td>
                <td className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${
                  index === users.length - 1 ? "border-b-0" : "border-b"
                }`}>
                  <div className="flex items-center justify-end space-x-3.5">
                    <ButtonDefault
                      label="Edit"
                      customClasses="bg-primary text-white rounded-[5px] px-10 mx-3 py-3.5 lg:px-8 xl:px-10"
                      onClick={() => onEditUser(user)}
                    />
                    <ButtonDefault
                      label="Delete"
                      customClasses="bg-red text-white rounded-[5px] px-10 mx-3 py-3.5 lg:px-8 xl:px-10"
                      onClick={() => onDeleteUser(user.id_user)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableUsers;


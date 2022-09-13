import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { User } from '../types/user';

const defaultValues: {
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: User['id']) => void;
} = {
  users: [],
  addUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
};

export const UserContext = createContext(defaultValues);

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      first_name: 'Ahmad',
      last_name: 'Raza',
      email: 'ahmdrzalifa@gmail.com',
      role: 'admin',
      status: 'active',
    },
    {
      id: '2',
      first_name: 'Ali',
      last_name: 'Raza',
      email: 'ali.raza@gmail.com',
      role: 'accountant',
      status: 'inactive',
    },
  ]);

  const addUser = (user: Omit<User, 'id'>) => {
    setUsers((oldUsers) => [
      ...oldUsers,
      { ...user, id: uuidv4(), email: user.email.toLowerCase() },
    ]);
  };

  const updateUser = (updatedUser: User) => {
    const tempUsers = [...users];
    const updatedUserIndex = tempUsers.findIndex(
      (user) => user.id === updatedUser.id,
    );
    tempUsers[updatedUserIndex] = {
      ...updatedUser,
      email: updatedUser.email.toLowerCase(),
    };
    setUsers([...tempUsers]);
  };

  const deleteUser = (userId: User['id']) => {
    const tempUsers = [...users];
    const toDeleteUser = tempUsers.findIndex((user) => user.id === userId);
    tempUsers.splice(toDeleteUser, 1);
    setUsers([...tempUsers]);
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

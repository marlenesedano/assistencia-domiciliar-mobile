import { createContext, useState, useContext } from "react";

const ProfileContext = createContext({});

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({});

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  const { profile, setProfile } = context;
  return { profile, setProfile };
}

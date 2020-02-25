import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import Constants from 'expo-constants';

import { firebaseConfig } from '../config.js';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const CurrentSessionContext = React.createContext([null]);

export const CurrentSessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /* ========== LOGIN ========== */

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: Constants.manifest.extra.androidClientId,
        iosClientId: Constants.manifest.extra.iosClientId,
        scopes: ['profile', 'email']
      });
      if (result.type === 'success') {
        return result.user;
      } else {
        console.log('Cancelled');
      }
    } catch (e) {
      console.log('Error', e);
    }
  };

  const checkIfLoggedIn = async () => {
    const loggedUser = await signInWithGoogleAsync();
    if (loggedUser) {
      return setUser(loggedUser);
    } else {
      return null;
    }
  };

  /* ========== useEffects ========== */

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <CurrentSessionContext.Provider
      value={{
        user
      }}
    >
      {children}
    </CurrentSessionContext.Provider>
  );
};

# criar com expo 
npx create-expo expo-app <br/>
npx expo start

# asyncStore(cache)
npx expo install @react-native-async-storage/async-storage

# axios
npm install axios --save

# navigation
npx expo install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npx expo install @react-navigation/native-stack

# firebase
npx expo install firebase

# cria APK
npm install -g eas-cli
npx eas login
npx eas build --platform android

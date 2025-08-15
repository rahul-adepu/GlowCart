GlowCart — React Native App
===========================

This is a React Native 0.81 app built with the community CLI. It includes login, register, home, product detail, and profile flows styled to a Figma design. Icons are provided via `react-native-vector-icons`.

Prerequisites
-------------
- Node.js 18+
- Java 17 (for Android builds)
- Xcode 15+ with Command Line Tools (for iOS)
- Android Studio (latest) with SDK 36 and an emulator or a physical device

Install
-------
```bash
git clone `https://github.com/rahul-adepu/GlowCart.git`
cd GlowCart
npm install
```

Android setup and run
---------------------
The app uses `react-native-vector-icons`. Fonts are auto-linked, and the Gradle hook is already configured in `android/app/build.gradle`.

```bash

npx react-native run android
```

If you see missing icon glyphs, clear and rebuild:
```bash
cd android && ./gradlew clean && cd ..
adb uninstall com.glowcart || true
npm run android
```





Directory structure
-------------------
- `src/navigation/AppNavigator.jsx` — App navigation stack
- `src/screens/` — Screens: `OnboardingScreen`, `LoginScreen`, `RegisterScreen`, `HomeScreen`, `ProductDetailScreen`, `ProfileScreen`
- `src/theme/colors.js` — Base color tokens

Notes
-----
- Login credentials for quick testing:
  - Email: `olivia@gmail.com`
  - Password: `Glow@123`

Troubleshooting
---------------
- Metro stuck or red screen errors:
  ```bash
  npm start -- --reset-cache
  ```
- Android Gradle cache issues:
  ```bash
  cd android && ./gradlew clean && cd .. && npm run android


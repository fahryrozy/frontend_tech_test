# Prodigy - Front End - Assesment Test

## Introduction
This application shows demonstration of mini-instagram art gallery. This application demonstrate the use of redux, API management, unit testing, data cache management, and clean code architecture.

## Feature
The app is created for all people, with features that are easy to understand and friendly as well. So here are the features of our apps :
- Home gallery art
- Save art
- Search art

## Instalation Guide
Install react native CLI in your windows/mac, see the react-native-CLI instalation guide [here](https://reactnative.dev/docs/environment-setup)

```
$ git clone https://github.com/fahryrozy/frontend_tech_test
$ cd frontend_tech_test
$ npm install

```

## Run Your Project

### Step 1: Start Metro
```
$ npx react-native start
```

### Step 2: Start your application
Android

```
$ npx react-native run-android
```

IOS

```
$ npx react-native run-ios
```

### NOTE
Incase there is problem with your metro-server due to the Obfuscation.
Do steps below : 
```
$ cd .\node_modules\react-native-obfuscating-transformer\
$ nano .\node_modules\react-native-obfuscating-transformer\package.json
$ modify javascript-obfuscator to the latest version (^4.0.0) 
$ reinstall the node modules
```